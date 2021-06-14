/**
 * Alpaca Broker API
 * Open brokerage accounts, enable commission-free trading, and manage the ongoing user experience with Alpaca Broker API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export declare class OrderObject {
    'id'?: string;
    'clientOrderId'?: string;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'submittedAt'?: Date;
    'filledAt'?: Date | null;
    'expiredAt'?: Date | null;
    'canceledAt'?: Date | null;
    'failedAt'?: Date | null;
    'replacedAt'?: Date | null;
    'replacedBy'?: string | null;
    'replaces'?: string | null;
    'assetId'?: string;
    'symbol'?: string;
    'assetClass'?: string;
    'notional'?: string | null;
    'qty'?: string | null;
    'filledQty'?: string;
    'filledAvgPrice'?: string | null;
    'orderClass'?: OrderObject.OrderClassEnum;
    'orderType'?: OrderObject.OrderTypeEnum;
    'type'?: OrderObject.TypeEnum;
    'side'?: OrderObject.SideEnum;
    'timeInForce'?: OrderObject.TimeInForceEnum;
    'limitPrice'?: string | null;
    'stopPrice'?: string | null;
    'status'?: OrderObject.StatusEnum;
    'extendedHours'?: boolean;
    'legs'?: Array<OrderObject> | null;
    'trailPrice'?: string | null;
    'trailPercent'?: string | null;
    'hwm'?: string | null;
    'commission'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderObject {
    enum OrderClassEnum {
        Simple,
        Bracket,
        Oco,
        Oto
    }
    enum OrderTypeEnum {
        Market,
        Limit,
        Stop,
        StopLimit,
        TrailingStop
    }
    enum TypeEnum {
        Market,
        Limit,
        Stop,
        StopLimit,
        TrailingStop
    }
    enum SideEnum {
        Buy,
        Sell
    }
    enum TimeInForceEnum {
        Day,
        Gtc,
        Opg,
        Cls,
        Ioc,
        Fok
    }
    enum StatusEnum {
        New,
        PartiallyFilled,
        Filled,
        DoneForDay,
        Canceled,
        Expired,
        Replaced,
        PendingCancel,
        PendingReplace,
        Accepted,
        PendingNew,
        AcceptedForBidding,
        Stopped,
        Rejected,
        Suspended,
        Calculated
    }
}