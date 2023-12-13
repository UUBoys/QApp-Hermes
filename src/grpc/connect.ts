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

      const updatedCredits = await prisma.credits
        .upsert({
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
        })
        .catch((err) => {
          logger.error(err);
          throw new ConnectError("Failed to update credits", Code.Internal);
        });

      await prisma.creditHistory.create({
        data: {
          changedAmount: `+${amount}`,
          userId: userId,
          origin: CreditOrigin.TOPUP,
        },
      });

      return {
        userId,
        oldBalance: old_amount?.amount || 0,
        newBalance: updatedCredits.amount,
      };
    },
    async getCredits(request) {
      const { userId } = request;

      const credits = await prisma.credits
        .findUniqueOrThrow({
          where: {
            userId,
          },
          select: {
            amount: true,
          },
        })
        .catch((err) => {
          if (err.code === "P2025") {
            return {
              userId,
              amount: 0,
            };
          }

          logger.error(err);
          throw new ConnectError("Failed to get credits", Code.Internal);
        });

      return {
        userId,
        balance: credits.amount ?? 0,
      };
    },
    async purchase(request) {
      const { eventId, ticketId, userId } = request;

      const ticketToPurchase = await prisma.availableTickets.findFirst({
        where: {
          id: ticketId,
          eventId,
        },
      });

      if (!ticketToPurchase) {
        throw new ConnectError("Ticket not found", Code.NotFound);
      }

      const old = await prisma.credits
        .findFirst({
          where: {
            userId,
          },
          select: {
            amount: true,
          },
        })
        .catch((err) => {
          logger.error(err);
          throw new ConnectError("Failed to get credits", Code.Internal);
        });

      if (!old) {
        throw new ConnectError("User does not exist", Code.Internal);
      }

      if (old.amount < ticketToPurchase.cost) {
        throw new ConnectError("Insufficient credits", Code.FailedPrecondition);
      }

      const updated = await prisma.credits
        .update({
          where: {
            userId,
          },
          data: {
            amount: {
              decrement: ticketToPurchase.cost,
            },
          },
          select: {
            amount: true,
          },
        })
        .catch((err) => {
          logger.error(err);
          throw new ConnectError("Failed to update credits", Code.Internal);
        });

      await prisma.creditHistory.create({
        data: {
          userId,
          changedAmount: `-${ticketToPurchase.cost}`,
          origin: CreditOrigin.PURCHASE,
        },
      });

      const upserted = await prisma.purchasedTickets.upsert({
        where: {
          userId_eventId: {
            userId,
            eventId,
          },
        },
        update: {
          quantity: {
            increment: 1,
          },
        },
        create: {
          eventId,
          userId,
          quantity: 1,
          ticketId,
        },
      });

      return {
        creditOperation: {
          userId,
          oldBalance: old.amount,
          newBalance: updated.amount,
        },
        Ticket: {
          id: ticketToPurchase.id,
          eventId: ticketToPurchase.eventId,
          ticketName: ticketToPurchase.name,
          price: ticketToPurchase.cost,
          quantity: upserted.quantity,
        },
      };
    },
    async getEventAvailableTickets({ eventId }) {
      const eventAvailableTickets = await prisma.availableTickets.findMany({
        where: {
          eventId,
        },
      });

      if (!eventAvailableTickets) {
        throw new ConnectError(
          "EventAvailableTickets not found",
          Code.NotFound
        );
      }

      return {
        tickets: eventAvailableTickets.map((ticket) => ({
          id: ticket.id,
          eventId: ticket.eventId,
          ticketName: ticket.name,
          price: ticket.cost,
          quantity: ticket.quantity,
        })),
      };
    },
    async getAllTickets() {
      const tickets = await prisma.availableTickets.findMany();
      
      return {
        tickets: tickets.map((ticket) => ({
          id: ticket.id,
          eventId: ticket.eventId,
          ticketName: ticket.name,
          price: ticket.cost,
          quantity: ticket.quantity,
        })),
      };
    },
    async getUserTickets({ userId }) {
      const userTickets = await prisma.purchasedTickets.findMany({
        where: {
          userId,
        },
        select: {
          ticketId: true,
          userId: true,
          eventId: true,
          quantity: true,
          ticket: {
            select: {
              name: true,
              cost: true,
              id: true,
            },
          },
        }
      });

      if (!userTickets) {
        throw new ConnectError("UserTickets not found", Code.NotFound);
      }

      return {
        tickets: userTickets.map((ticket) => ({
          userId: ticket.userId,
          eventId: ticket.eventId,
          ticketId: ticket.ticket.id,
          ticketName: ticket.ticket.name,
          price: ticket.ticket.cost,
          boughtQuantity: ticket.quantity,
        })),
      };
    },
    async createEventTickets({ eventId, ticketName, price, quantity }) {
      const createdTickets = await prisma.availableTickets.create({
        data: {
          eventId,
          name: ticketName,
          cost: price,
          quantity,
        },
      });

      return {
        eventId: createdTickets.eventId,
        ticketId: createdTickets.id,
      };
    },
    async removeEventTickets({ eventId }) {
      await prisma.availableTickets.deleteMany({
        where: {
          eventId,
        },
      });

      return {
        success: true,
      };
    }
  });
};
