"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderTakeProfit = void 0;
class CreateOrderTakeProfit {
    static getAttributeTypeMap() {
        return CreateOrderTakeProfit.attributeTypeMap;
    }
}
exports.CreateOrderTakeProfit = CreateOrderTakeProfit;
CreateOrderTakeProfit.discriminator = undefined;
CreateOrderTakeProfit.attributeTypeMap = [
    {
        "name": "limitPrice",
        "baseName": "limit_price",
        "type": "string"
    }
];
