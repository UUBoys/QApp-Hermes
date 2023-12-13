// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts,import_extension=none"
// @generated from file proto/com/qapp/hermes/hermes.proto (package com.qapp.hermes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateEventTicketsRequest, CreateEventTicketsResponse, CreditsOperationResponse, CreditStatusResponse, GetAllTIcketsRequest, GetAllTicketsResponse, GetCreditsRequest, GetEventAvailableTicketsRequest, GetEventAvailableTicketsResponse, GetUserTicketsRequest, GetUserTicketsResponse, PurchaseRequest, PurchaseTicketResponse, RemoveEventTicketsRequest, RemoveEventTicketsResponse, TopupCreditsRequest } from "./hermes_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service com.qapp.hermes.CreditService
 */
export const CreditService = {
  typeName: "com.qapp.hermes.CreditService",
  methods: {
    /**
     * @generated from rpc com.qapp.hermes.CreditService.TopupCredits
     */
    topupCredits: {
      name: "TopupCredits",
      I: TopupCreditsRequest,
      O: CreditsOperationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.GetCredits
     */
    getCredits: {
      name: "GetCredits",
      I: GetCreditsRequest,
      O: CreditStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.Purchase
     */
    purchase: {
      name: "Purchase",
      I: PurchaseRequest,
      O: PurchaseTicketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.CreateEventTickets
     */
    createEventTickets: {
      name: "CreateEventTickets",
      I: CreateEventTicketsRequest,
      O: CreateEventTicketsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.GetEventAvailableTickets
     */
    getEventAvailableTickets: {
      name: "GetEventAvailableTickets",
      I: GetEventAvailableTicketsRequest,
      O: GetEventAvailableTicketsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.GetAllTickets
     */
    getAllTickets: {
      name: "GetAllTickets",
      I: GetAllTIcketsRequest,
      O: GetAllTicketsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.GetUserTickets
     */
    getUserTickets: {
      name: "GetUserTickets",
      I: GetUserTicketsRequest,
      O: GetUserTicketsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.hermes.CreditService.RemoveEventTickets
     */
    removeEventTickets: {
      name: "RemoveEventTickets",
      I: RemoveEventTicketsRequest,
      O: RemoveEventTicketsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

