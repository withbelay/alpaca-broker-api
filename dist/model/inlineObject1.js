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
exports.InlineObject1 = void 0;
class InlineObject1 {
    static getAttributeTypeMap() {
        return InlineObject1.attributeTypeMap;
    }
}
exports.InlineObject1 = InlineObject1;
InlineObject1.discriminator = undefined;
InlineObject1.attributeTypeMap = [
    {
        "name": "entryType",
        "baseName": "entry_type",
        "type": "InlineObject1.EntryTypeEnum"
    },
    {
        "name": "fromAccount",
        "baseName": "from_account",
        "type": "string"
    },
    {
        "name": "toAccount",
        "baseName": "to_account",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
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
    }
];
(function (InlineObject1) {
    let EntryTypeEnum;
    (function (EntryTypeEnum) {
        EntryTypeEnum[EntryTypeEnum["Jnlc"] = 'JNLC'] = "Jnlc";
        EntryTypeEnum[EntryTypeEnum["Jnls"] = 'JNLS'] = "Jnls";
    })(EntryTypeEnum = InlineObject1.EntryTypeEnum || (InlineObject1.EntryTypeEnum = {}));
})(InlineObject1 = exports.InlineObject1 || (exports.InlineObject1 = {}));
