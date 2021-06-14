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
exports.InlineResponse2005 = void 0;
class InlineResponse2005 {
    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}
exports.InlineResponse2005 = InlineResponse2005;
InlineResponse2005.discriminator = undefined;
InlineResponse2005.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "statusFrom",
        "baseName": "status_from",
        "type": "string"
    },
    {
        "name": "statusTo",
        "baseName": "status_to",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "at",
        "baseName": "at",
        "type": "Date"
    }
];