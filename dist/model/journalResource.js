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
exports.JournalResource = void 0;
class JournalResource {
    static getAttributeTypeMap() {
        return JournalResource.attributeTypeMap;
    }
}
exports.JournalResource = JournalResource;
JournalResource.discriminator = "entry_type";
JournalResource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "entry_type",
        "baseName": "entry_type",
        "type": "string"
    },
    {
        "name": "from_account",
        "baseName": "from_account",
        "type": "string"
    },
    {
        "name": "to_account",
        "baseName": "to_account",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "settle_date",
        "baseName": "settle_date",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "JournalResource.StatusEnum"
    },
    {
        "name": "net_amount",
        "baseName": "net_amount",
        "type": "string"
    },
    {
        "name": "transmitter_name",
        "baseName": "transmitter_name",
        "type": "string"
    },
    {
        "name": "transmitter_account_number",
        "baseName": "transmitter_account_number",
        "type": "string"
    },
    {
        "name": "transmitter_address",
        "baseName": "transmitter_address",
        "type": "string"
    },
    {
        "name": "transmitter_financial_institution",
        "baseName": "transmitter_financial_institution",
        "type": "string"
    },
    {
        "name": "transmitter_timestamp",
        "baseName": "transmitter_timestamp",
        "type": "Date"
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string"
    },
    {
        "name": "qty",
        "baseName": "qty",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    }
];
(function (JournalResource) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["Executed"] = 'executed'] = "Executed";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Rejected"] = 'rejected'] = "Rejected";
    })(StatusEnum = JournalResource.StatusEnum || (JournalResource.StatusEnum = {}));
})(JournalResource = exports.JournalResource || (exports.JournalResource = {}));
