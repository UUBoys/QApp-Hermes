// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file proto/com/qapp/hermes/hermes.proto (package com.qapp.hermes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message com.qapp.hermes.RemoveEventTicketsRequest
 */
export class RemoveEventTicketsRequest extends Message<RemoveEventTicketsRequest> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  constructor(data?: PartialMessage<RemoveEventTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.RemoveEventTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveEventTicketsRequest {
    return new RemoveEventTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveEventTicketsRequest {
    return new RemoveEventTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveEventTicketsRequest {
    return new RemoveEventTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveEventTicketsRequest | PlainMessage<RemoveEventTicketsRequest> | undefined, b: RemoveEventTicketsRequest | PlainMessage<RemoveEventTicketsRequest> | undefined): boolean {
    return proto3.util.equals(RemoveEventTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.RemoveEventTicketsResponse
 */
export class RemoveEventTicketsResponse extends Message<RemoveEventTicketsResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<RemoveEventTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.RemoveEventTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveEventTicketsResponse {
    return new RemoveEventTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveEventTicketsResponse {
    return new RemoveEventTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveEventTicketsResponse {
    return new RemoveEventTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveEventTicketsResponse | PlainMessage<RemoveEventTicketsResponse> | undefined, b: RemoveEventTicketsResponse | PlainMessage<RemoveEventTicketsResponse> | undefined): boolean {
    return proto3.util.equals(RemoveEventTicketsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetEventAvailableTicketsResponse
 */
export class GetEventAvailableTicketsResponse extends Message<GetEventAvailableTicketsResponse> {
  /**
   * @generated from field: repeated com.qapp.hermes.EventAvailableTickets tickets = 1;
   */
  tickets: EventAvailableTickets[] = [];

  constructor(data?: PartialMessage<GetEventAvailableTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetEventAvailableTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tickets", kind: "message", T: EventAvailableTickets, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventAvailableTicketsResponse | PlainMessage<GetEventAvailableTicketsResponse> | undefined, b: GetEventAvailableTicketsResponse | PlainMessage<GetEventAvailableTicketsResponse> | undefined): boolean {
    return proto3.util.equals(GetEventAvailableTicketsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetAllTIcketsRequest
 */
export class GetAllTIcketsRequest extends Message<GetAllTIcketsRequest> {
  constructor(data?: PartialMessage<GetAllTIcketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetAllTIcketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAllTIcketsRequest {
    return new GetAllTIcketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAllTIcketsRequest {
    return new GetAllTIcketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAllTIcketsRequest {
    return new GetAllTIcketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAllTIcketsRequest | PlainMessage<GetAllTIcketsRequest> | undefined, b: GetAllTIcketsRequest | PlainMessage<GetAllTIcketsRequest> | undefined): boolean {
    return proto3.util.equals(GetAllTIcketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetAllTicketsResponse
 */
export class GetAllTicketsResponse extends Message<GetAllTicketsResponse> {
  /**
   * @generated from field: repeated com.qapp.hermes.EventAvailableTickets tickets = 1;
   */
  tickets: EventAvailableTickets[] = [];

  constructor(data?: PartialMessage<GetAllTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetAllTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tickets", kind: "message", T: EventAvailableTickets, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAllTicketsResponse {
    return new GetAllTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAllTicketsResponse {
    return new GetAllTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAllTicketsResponse {
    return new GetAllTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAllTicketsResponse | PlainMessage<GetAllTicketsResponse> | undefined, b: GetAllTicketsResponse | PlainMessage<GetAllTicketsResponse> | undefined): boolean {
    return proto3.util.equals(GetAllTicketsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetUserTicketsRequest
 */
export class GetUserTicketsRequest extends Message<GetUserTicketsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  constructor(data?: PartialMessage<GetUserTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetUserTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserTicketsRequest {
    return new GetUserTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserTicketsRequest {
    return new GetUserTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserTicketsRequest {
    return new GetUserTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserTicketsRequest | PlainMessage<GetUserTicketsRequest> | undefined, b: GetUserTicketsRequest | PlainMessage<GetUserTicketsRequest> | undefined): boolean {
    return proto3.util.equals(GetUserTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetUserTicketsResponse
 */
export class GetUserTicketsResponse extends Message<GetUserTicketsResponse> {
  /**
   * @generated from field: repeated com.qapp.hermes.UserTicket tickets = 1;
   */
  tickets: UserTicket[] = [];

  constructor(data?: PartialMessage<GetUserTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetUserTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tickets", kind: "message", T: UserTicket, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserTicketsResponse {
    return new GetUserTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserTicketsResponse {
    return new GetUserTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserTicketsResponse {
    return new GetUserTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserTicketsResponse | PlainMessage<GetUserTicketsResponse> | undefined, b: GetUserTicketsResponse | PlainMessage<GetUserTicketsResponse> | undefined): boolean {
    return proto3.util.equals(GetUserTicketsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetEventAvailableTicketsRequest
 */
export class GetEventAvailableTicketsRequest extends Message<GetEventAvailableTicketsRequest> {
  /**
   * @generated from field: string event_id = 2;
   */
  eventId = "";

  constructor(data?: PartialMessage<GetEventAvailableTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetEventAvailableTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventAvailableTicketsRequest | PlainMessage<GetEventAvailableTicketsRequest> | undefined, b: GetEventAvailableTicketsRequest | PlainMessage<GetEventAvailableTicketsRequest> | undefined): boolean {
    return proto3.util.equals(GetEventAvailableTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.EventAvailableTickets
 */
export class EventAvailableTickets extends Message<EventAvailableTickets> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string event_id = 2;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_name = 3;
   */
  ticketName = "";

  /**
   * @generated from field: float price = 4;
   */
  price = 0;

  /**
   * @generated from field: int32 quantity = 5;
   */
  quantity = 0;

  constructor(data?: PartialMessage<EventAvailableTickets>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.EventAvailableTickets";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ticket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromJsonString(jsonString, options);
  }

  static equals(a: EventAvailableTickets | PlainMessage<EventAvailableTickets> | undefined, b: EventAvailableTickets | PlainMessage<EventAvailableTickets> | undefined): boolean {
    return proto3.util.equals(EventAvailableTickets, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.UserTicket
 */
export class UserTicket extends Message<UserTicket> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string ticket_id = 2;
   */
  ticketId = "";

  /**
   * @generated from field: string event_id = 3;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_name = 4;
   */
  ticketName = "";

  /**
   * @generated from field: float price = 5;
   */
  price = 0;

  /**
   * @generated from field: int32 bought_quantity = 6;
   */
  boughtQuantity = 0;

  constructor(data?: PartialMessage<UserTicket>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.UserTicket";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ticket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "bought_quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserTicket {
    return new UserTicket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserTicket {
    return new UserTicket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserTicket {
    return new UserTicket().fromJsonString(jsonString, options);
  }

  static equals(a: UserTicket | PlainMessage<UserTicket> | undefined, b: UserTicket | PlainMessage<UserTicket> | undefined): boolean {
    return proto3.util.equals(UserTicket, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.TopupCreditsRequest
 */
export class TopupCreditsRequest extends Message<TopupCreditsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: int32 amount = 2;
   */
  amount = 0;

  constructor(data?: PartialMessage<TopupCreditsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.TopupCreditsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TopupCreditsRequest | PlainMessage<TopupCreditsRequest> | undefined, b: TopupCreditsRequest | PlainMessage<TopupCreditsRequest> | undefined): boolean {
    return proto3.util.equals(TopupCreditsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreditsOperationResponse
 */
export class CreditsOperationResponse extends Message<CreditsOperationResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: int32 old_balance = 2;
   */
  oldBalance = 0;

  /**
   * @generated from field: int32 new_balance = 3;
   */
  newBalance = 0;

  constructor(data?: PartialMessage<CreditsOperationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreditsOperationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "old_balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "new_balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreditsOperationResponse | PlainMessage<CreditsOperationResponse> | undefined, b: CreditsOperationResponse | PlainMessage<CreditsOperationResponse> | undefined): boolean {
    return proto3.util.equals(CreditsOperationResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.PurchaseTicketResponse
 */
export class PurchaseTicketResponse extends Message<PurchaseTicketResponse> {
  /**
   * @generated from field: com.qapp.hermes.CreditsOperationResponse creditOperation = 1;
   */
  creditOperation?: CreditsOperationResponse;

  /**
   * @generated from field: com.qapp.hermes.EventAvailableTickets Ticket = 2;
   */
  Ticket?: EventAvailableTickets;

  constructor(data?: PartialMessage<PurchaseTicketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.PurchaseTicketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creditOperation", kind: "message", T: CreditsOperationResponse },
    { no: 2, name: "Ticket", kind: "message", T: EventAvailableTickets },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PurchaseTicketResponse | PlainMessage<PurchaseTicketResponse> | undefined, b: PurchaseTicketResponse | PlainMessage<PurchaseTicketResponse> | undefined): boolean {
    return proto3.util.equals(PurchaseTicketResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetCreditsRequest
 */
export class GetCreditsRequest extends Message<GetCreditsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  constructor(data?: PartialMessage<GetCreditsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetCreditsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCreditsRequest | PlainMessage<GetCreditsRequest> | undefined, b: GetCreditsRequest | PlainMessage<GetCreditsRequest> | undefined): boolean {
    return proto3.util.equals(GetCreditsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreditStatusResponse
 */
export class CreditStatusResponse extends Message<CreditStatusResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: int32 balance = 2;
   */
  balance = 0;

  constructor(data?: PartialMessage<CreditStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreditStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreditStatusResponse | PlainMessage<CreditStatusResponse> | undefined, b: CreditStatusResponse | PlainMessage<CreditStatusResponse> | undefined): boolean {
    return proto3.util.equals(CreditStatusResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.PurchaseRequest
 */
export class PurchaseRequest extends Message<PurchaseRequest> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * @generated from field: string ticket_id = 3;
   */
  ticketId = "";

  constructor(data?: PartialMessage<PurchaseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.PurchaseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ticket_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PurchaseRequest | PlainMessage<PurchaseRequest> | undefined, b: PurchaseRequest | PlainMessage<PurchaseRequest> | undefined): boolean {
    return proto3.util.equals(PurchaseRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreateEventTicketsRequest
 */
export class CreateEventTicketsRequest extends Message<CreateEventTicketsRequest> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_name = 2;
   */
  ticketName = "";

  /**
   * @generated from field: float price = 3;
   */
  price = 0;

  /**
   * @generated from field: int32 quantity = 4;
   */
  quantity = 0;

  constructor(data?: PartialMessage<CreateEventTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreateEventTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEventTicketsRequest | PlainMessage<CreateEventTicketsRequest> | undefined, b: CreateEventTicketsRequest | PlainMessage<CreateEventTicketsRequest> | undefined): boolean {
    return proto3.util.equals(CreateEventTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreateEventTicketsResponse
 */
export class CreateEventTicketsResponse extends Message<CreateEventTicketsResponse> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_id = 2;
   */
  ticketId = "";

  constructor(data?: PartialMessage<CreateEventTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreateEventTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEventTicketsResponse | PlainMessage<CreateEventTicketsResponse> | undefined, b: CreateEventTicketsResponse | PlainMessage<CreateEventTicketsResponse> | undefined): boolean {
    return proto3.util.equals(CreateEventTicketsResponse, a, b);
  }
}

