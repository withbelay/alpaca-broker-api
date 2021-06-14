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
exports.ACHRelationshipData = void 0;
class ACHRelationshipData {
    static getAttributeTypeMap() {
        return ACHRelationshipData.attributeTypeMap;
    }
}
exports.ACHRelationshipData = ACHRelationshipData;
ACHRelationshipData.discriminator = undefined;
ACHRelationshipData.attributeTypeMap = [
    {
        "name": "accountOwnerName",
        "baseName": "account_owner_name",
        "type": "string"
    },
    {
        "name": "bankAccountType",
        "baseName": "bank_account_type",
        "type": "ACHRelationshipData.BankAccountTypeEnum"
    },
    {
        "name": "bankAccountNumber",
        "baseName": "bank_account_number",
        "type": "string"
    },
    {
        "name": "bankRoutingNumber",
        "baseName": "bank_routing_number",
        "type": "string"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    }
];
(function (ACHRelationshipData) {
    let BankAccountTypeEnum;
    (function (BankAccountTypeEnum) {
        BankAccountTypeEnum[BankAccountTypeEnum["Checking"] = 'CHECKING'] = "Checking";
        BankAccountTypeEnum[BankAccountTypeEnum["Savings"] = 'SAVINGS'] = "Savings";
    })(BankAccountTypeEnum = ACHRelationshipData.BankAccountTypeEnum || (ACHRelationshipData.BankAccountTypeEnum = {}));
})(ACHRelationshipData = exports.ACHRelationshipData || (exports.ACHRelationshipData = {}));
