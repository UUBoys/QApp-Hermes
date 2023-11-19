import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";
import { CreditService } from "./defs/proto/com/qapp/hermes/hermes_connect";
import { prisma } from "@src/db/client";
import logger from "@src/log/logger";

enum CreditOrigin {
    TOPUP = "TOPUP",
    PURCHASE = "PURCHASE",
    REFUND = "REFUND",
    ADMIN = "ADMIN",
}

export default (router: ConnectRouter) => {
    router.service(CreditService, {
        async topupCredits(request) {
            const { amount, userId } = request;

            if(amount <= 0) {
                throw new ConnectError("Amount must be positive", Code.InvalidArgument);
            }

            const old_amount = await prisma.credits.findFirst({
                where: {
                    userId,
                },
                select: {
                    amount: true,
                },
            });

            const updatedCredits = await prisma.credits.upsert({
                where: {
                    userId,
                },
                update: {
                    amount: {
                        increment: amount,
                    },
                },
                create: {
                    userId,
                    amount: amount,
                },
            }).catch((err) => {
                logger.error(err);
                throw new ConnectError("Failed to update credits", Code.Internal);
            });

            await prisma.creditHistory.create({
                data: {
                    changedAmount: `+${amount}`,
                    userId: userId,
                    origin: CreditOrigin.TOPUP
                },
            });

            return {
                userId,
                oldBalance: old_amount?.amount || 0,
                newBalance: updatedCredits.amount,
            }
        },
        async getCredits(request) {
            const { userId } = request;

            const credits = await prisma.credits.findFirst({
                where: {
                    userId,
                },
                select: {
                    amount: true,
                },
            }).catch((err) => {
                if(err.code === "P2025") {
                    return {
                        userId,
                        amount: 0,
                    }
                }

                logger.error(err);
                throw new ConnectError("Failed to get credits", Code.Internal);
            });

            return {
                userId,
                amount: credits?.amount || 0,
            }
        },
        async purchase(request) {
            const { amount, userId } = request;

            const old = await prisma.credits.findFirst({
                where: {
                    userId,
                },
                select: {
                    amount: true,
                },
            }).catch((err) => {
                logger.error(err);
                throw new ConnectError("Failed to get credits", Code.Internal);
            });

            if(!old) {
                throw new ConnectError("User does not exist", Code.Internal);
            }

            if(old.amount < amount) {
                throw new ConnectError("Insufficient credits", Code.FailedPrecondition);
            }

            const updated = await prisma.credits.update({
                where: {
                    userId
                },
                data: {
                    amount: {
                        decrement: amount
                    }
                },
                select: {
                    amount: true
                }
            }).catch(err => {
                logger.error(err);
                throw new ConnectError("Failed to update credits", Code.Internal);
            })

            await prisma.creditHistory.create({
                data: {
                  userId,
                  changedAmount: `-${amount}`,
                  origin: CreditOrigin.PURCHASE
                }
            })

            return {
                userId,
                oldBalance: old.amount,
                newBalance: updated.amount,
            }
        },
    });
}