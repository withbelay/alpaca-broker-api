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
exports.InlineResponse2006 = void 0;
class InlineResponse2006 {
    static getAttributeTypeMap() {
        return InlineResponse2006.attributeTypeMap;
    }
}
exports.InlineResponse2006 = InlineResponse2006;
InlineResponse2006.discriminator = undefined;
InlineResponse2006.attributeTypeMap = [
    {
        "name": "eventId",
        "baseName": "event_id",
        "type": "number"
    },
    {
        "name": "at",
        "baseName": "at",
        "type": "Date"
    },
    {
        "name": "journalId",
        "baseName": "journal_id",
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
    }
];