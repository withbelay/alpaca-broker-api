"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountsApi"), exports);
const accountsApi_1 = require("./accountsApi");
__exportStar(require("./assetsApi"), exports);
const assetsApi_1 = require("./assetsApi");
__exportStar(require("./calendarApi"), exports);
const calendarApi_1 = require("./calendarApi");
__exportStar(require("./clockApi"), exports);
const clockApi_1 = require("./clockApi");
__exportStar(require("./documentsApi"), exports);
const documentsApi_1 = require("./documentsApi");
__exportStar(require("./eventsApi"), exports);
const eventsApi_1 = require("./eventsApi");
__exportStar(require("./fundingApi"), exports);
const fundingApi_1 = require("./fundingApi");
__exportStar(require("./journalsApi"), exports);
const journalsApi_1 = require("./journalsApi");
__exportStar(require("./oAuthApi"), exports);
const oAuthApi_1 = require("./oAuthApi");
__exportStar(require("./tradingApi"), exports);
const tradingApi_1 = require("./tradingApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountsApi_1.AccountsApi, assetsApi_1.AssetsApi, calendarApi_1.CalendarApi, clockApi_1.ClockApi, documentsApi_1.DocumentsApi, eventsApi_1.EventsApi, fundingApi_1.FundingApi, journalsApi_1.JournalsApi, oAuthApi_1.OAuthApi, tradingApi_1.TradingApi];
