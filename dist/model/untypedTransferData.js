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
exports.UntypedTransferData = void 0;
class UntypedTransferData {
    static getAttributeTypeMap() {
        return UntypedTransferData.attributeTypeMap;
    }
}
exports.UntypedTransferData = UntypedTransferData;
UntypedTransferData.discriminator = undefined;
UntypedTransferData.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "direction",
        "baseName": "direction",
        "type": "UntypedTransferData.DirectionEnum"
    }
];
(function (UntypedTransferData) {
    let DirectionEnum;
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Incoming"] = 'INCOMING'] = "Incoming";
        DirectionEnum[DirectionEnum["Outgoing"] = 'OUTGOING'] = "Outgoing";
    })(DirectionEnum = UntypedTransferData.DirectionEnum || (UntypedTransferData.DirectionEnum = {}));
})(UntypedTransferData = exports.UntypedTransferData || (exports.UntypedTransferData = {}));