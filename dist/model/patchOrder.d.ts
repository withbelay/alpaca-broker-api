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
export declare class PatchOrder {
    'qty'?: string;
    'timeInForce'?: PatchOrder.TimeInForceEnum;
    'limitPrice'?: string;
    'stopPrice'?: string;
    'trail'?: string;
    'clientOrderId'?: string;
    'createdAt': Date;
    'updatedAt': Date;
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
export declare namespace PatchOrder {
    enum TimeInForceEnum {
        Day,
        Gtc,
        Opg,
        Cls,
        Ioc,
        Fok
    }
}
