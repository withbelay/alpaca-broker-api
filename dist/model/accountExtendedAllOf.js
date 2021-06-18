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
exports.AccountExtendedAllOf = void 0;
class AccountExtendedAllOf {
    static getAttributeTypeMap() {
        return AccountExtendedAllOf.attributeTypeMap;
    }
}
exports.AccountExtendedAllOf = AccountExtendedAllOf;
AccountExtendedAllOf.discriminator = undefined;
AccountExtendedAllOf.attributeTypeMap = [
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
        "type": "Array<Agreement>"
    },
    {
        "name": "documents",
        "baseName": "documents",
        "type": "Array<ApplicationDocument>"
    },
    {
        "name": "trusted_contact",
        "baseName": "trusted_contact",
        "type": "TrustedContact"
    }
];
