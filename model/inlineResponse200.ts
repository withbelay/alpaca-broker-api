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

import { RequestFile } from './models';
import { AccountStatus } from './accountStatus';

export class InlineResponse200 {
    'id'?: string;
    'accountNumber'?: string;
    'status'?: AccountStatus;
    'currency'?: string;
    'buyingPower'?: string;
    'regtBuyingPower'?: string;
    'daytradingBuyingPower'?: string;
    'cash'?: string;
    'cashWithdrawable'?: string;
    'cashTransferable'?: string;
    'pendingTransferOut'?: string;
    'portfolioValue'?: string;
    'patternDayTrader'?: boolean;
    'tradingBlocked'?: boolean;
    'transfersBlocked'?: boolean;
    'accountBlocked'?: boolean;
    'createdAt'?: string;
    'tradeSuspendedByUser'?: boolean;
    'multiplier'?: string;
    'shortingEnabled'?: boolean;
    'equity'?: string;
    'lastEquity'?: string;
    'longMarketValue'?: string;
    'shortMarketValue'?: string;
    'initialMargin'?: string;
    'maintenanceMargin'?: string;
    'lastMaintenanceMargin'?: string;
    'sma'?: string;
    'daytradeCount'?: number;
    'previousClose'?: string;
    'lastLongMarketValue'?: string;
    'lastShortMarketValue'?: string;
    'lastCash'?: string;
    'lastInitialMargin'?: string;
    'lastRegtBuyingPower'?: string;
    'lastDaytradingBuyingPower'?: string;
    'lastBuyingPower'?: string;
    'lastDaytradeCount'?: number;
    'clearingBroker'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "buyingPower",
            "baseName": "buying_power",
            "type": "string"
        },
        {
            "name": "regtBuyingPower",
            "baseName": "regt_buying_power",
            "type": "string"
        },
        {
            "name": "daytradingBuyingPower",
            "baseName": "daytrading_buying_power",
            "type": "string"
        },
        {
            "name": "cash",
            "baseName": "cash",
            "type": "string"
        },
        {
            "name": "cashWithdrawable",
            "baseName": "cash_withdrawable",
            "type": "string"
        },
        {
            "name": "cashTransferable",
            "baseName": "cash_transferable",
            "type": "string"
        },
        {
            "name": "pendingTransferOut",
            "baseName": "pending_transfer_out",
            "type": "string"
        },
        {
            "name": "portfolioValue",
            "baseName": "portfolio_value",
            "type": "string"
        },
        {
            "name": "patternDayTrader",
            "baseName": "pattern_day_trader",
            "type": "boolean"
        },
        {
            "name": "tradingBlocked",
            "baseName": "trading_blocked",
            "type": "boolean"
        },
        {
            "name": "transfersBlocked",
            "baseName": "transfers_blocked",
            "type": "boolean"
        },
        {
            "name": "accountBlocked",
            "baseName": "account_blocked",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "tradeSuspendedByUser",
            "baseName": "trade_suspended_by_user",
            "type": "boolean"
        },
        {
            "name": "multiplier",
            "baseName": "multiplier",
            "type": "string"
        },
        {
            "name": "shortingEnabled",
            "baseName": "shorting_enabled",
            "type": "boolean"
        },
        {
            "name": "equity",
            "baseName": "equity",
            "type": "string"
        },
        {
            "name": "lastEquity",
            "baseName": "last_equity",
            "type": "string"
        },
        {
            "name": "longMarketValue",
            "baseName": "long_market_value",
            "type": "string"
        },
        {
            "name": "shortMarketValue",
            "baseName": "short_market_value",
            "type": "string"
        },
        {
            "name": "initialMargin",
            "baseName": "initial_margin",
            "type": "string"
        },
        {
            "name": "maintenanceMargin",
            "baseName": "maintenance_margin",
            "type": "string"
        },
        {
            "name": "lastMaintenanceMargin",
            "baseName": "last_maintenance_margin",
            "type": "string"
        },
        {
            "name": "sma",
            "baseName": "sma",
            "type": "string"
        },
        {
            "name": "daytradeCount",
            "baseName": "daytrade_count",
            "type": "number"
        },
        {
            "name": "previousClose",
            "baseName": "previous_close",
            "type": "string"
        },
        {
            "name": "lastLongMarketValue",
            "baseName": "last_long_market_value",
            "type": "string"
        },
        {
            "name": "lastShortMarketValue",
            "baseName": "last_short_market_value",
            "type": "string"
        },
        {
            "name": "lastCash",
            "baseName": "last_cash",
            "type": "string"
        },
        {
            "name": "lastInitialMargin",
            "baseName": "last_initial_margin",
            "type": "string"
        },
        {
            "name": "lastRegtBuyingPower",
            "baseName": "last_regt_buying_power",
            "type": "string"
        },
        {
            "name": "lastDaytradingBuyingPower",
            "baseName": "last_daytrading_buying_power",
            "type": "string"
        },
        {
            "name": "lastBuyingPower",
            "baseName": "last_buying_power",
            "type": "string"
        },
        {
            "name": "lastDaytradeCount",
            "baseName": "last_daytrade_count",
            "type": "number"
        },
        {
            "name": "clearingBroker",
            "baseName": "clearing_broker",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }
}

