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
exports.AccountExtended = void 0;
class AccountExtended {
    static getAttributeTypeMap() {
        return AccountExtended.attributeTypeMap;
    }
}
exports.AccountExtended = AccountExtended;
AccountExtended.discriminator = undefined;
AccountExtended.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "AccountStatus"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "lastEquity",
        "baseName": "last_equity",
        "type": "string"
    },
    {
        "name": "kycResults",
        "baseName": "kyc_results",
        "type": "KycResult"
    },
    {
        "name": "contact",
        "baseName": "contact",
        "type": "Contact"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "Identity"
    },
    {
        "name": "disclosures",
        "baseName": "disclosures",
        "type": "Disclosures"
    },
    {
        "name": "agreements",
        "baseName": "agreements",
        "type": "Array<object>"
    },
    {
        "name": "documents",
        "baseName": "documents",
        "type": "Array<ApplicationDocument>"
    },
    {
        "name": "trustedContact",
        "baseName": "trusted_contact",
        "type": "TrustedContact"
    }
];