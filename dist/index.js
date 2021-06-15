"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaApi = exports.AlpacaEnvironments = void 0;
const api = __importStar(require("./api"));
// export all APIs and models so they can be used individually if desired
__exportStar(require("./api"), exports);
exports.AlpacaEnvironments = {
    sandbox: 'https://broker-api.sandbox.alpaca.markets/v1',
    production: 'https://broker-api.alpaca.markets/v1',
};
class AlpacaApi {
    constructor({ apiKey, apiSecret, basePath }) {
        this.accounts = new api.AccountsApi(apiKey, apiSecret, basePath);
        this.assets = new api.AssetsApi(apiKey, apiSecret, basePath);
        this.calendar = new api.CalendarApi(apiKey, apiSecret, basePath);
        this.clock = new api.ClockApi(apiKey, apiSecret, basePath);
        this.documents = new api.DocumentsApi(apiKey, apiSecret, basePath);
        this.events = new api.EventsApi(apiKey, apiSecret, basePath);
        this.funding = new api.FundingApi(apiKey, apiSecret, basePath);
        this.journals = new api.JournalsApi(apiKey, apiSecret, basePath);
        this.oauth = new api.OAuthApi(apiKey, apiSecret, basePath);
        this.trading = new api.TradingApi(apiKey, apiSecret, basePath);
    }
}
exports.AlpacaApi = AlpacaApi;
