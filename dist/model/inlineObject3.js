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
exports.InlineObject3 = void 0;
class InlineObject3 {
    static getAttributeTypeMap() {
        return InlineObject3.attributeTypeMap;
    }
}
exports.InlineObject3 = InlineObject3;
InlineObject3.discriminator = undefined;
InlineObject3.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "clientSecret",
        "baseName": "client_secret",
        "type": "string"
    },
    {
        "name": "redirectUri",
        "baseName": "redirect_uri",
        "type": "string"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    }
];
