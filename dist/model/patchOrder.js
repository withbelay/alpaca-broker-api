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
exports.PatchOrder = void 0;
class PatchOrder {
    static getAttributeTypeMap() {
        return PatchOrder.attributeTypeMap;
    }
}
exports.PatchOrder = PatchOrder;
PatchOrder.discriminator = undefined;
PatchOrder.attributeTypeMap = [
    {
        "name": "qty",
        "baseName": "qty",
        "type": "string"
    },
    {
        "name": "time_in_force",
        "baseName": "time_in_force",
        "type": "PatchOrder.TimeInForceEnum"
    },
    {
        "name": "limit_price",
        "baseName": "limit_price",
        "type": "string"
    },
    {
        "name": "stop_price",
        "baseName": "stop_price",
        "type": "string"
    },
    {
        "name": "trail",
        "baseName": "trail",
        "type": "string"
    },
    {
        "name": "client_order_id",
        "baseName": "client_order_id",
        "type": "string"
    },
    {
        "name": "created_at",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updated_at",
        "baseName": "updated_at",
        "type": "Date"
    }
];
(function (PatchOrder) {
    let TimeInForceEnum;
    (function (TimeInForceEnum) {
        TimeInForceEnum[TimeInForceEnum["Day"] = 'day'] = "Day";
        TimeInForceEnum[TimeInForceEnum["Gtc"] = 'gtc'] = "Gtc";
        TimeInForceEnum[TimeInForceEnum["Opg"] = 'opg'] = "Opg";
        TimeInForceEnum[TimeInForceEnum["Cls"] = 'cls'] = "Cls";
        TimeInForceEnum[TimeInForceEnum["Ioc"] = 'ioc'] = "Ioc";
        TimeInForceEnum[TimeInForceEnum["Fok"] = 'fok'] = "Fok";
    })(TimeInForceEnum = PatchOrder.TimeInForceEnum || (PatchOrder.TimeInForceEnum = {}));
})(PatchOrder = exports.PatchOrder || (exports.PatchOrder = {}));
