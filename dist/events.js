"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaEvents = exports.AlpacaEventStreams = void 0;
const eventsource_1 = __importDefault(require("eventsource"));
const stream_1 = require("stream");
exports.AlpacaEventStreams = {
    ACCOUNT_STATUS: '/events/accounts/status',
    TRADES: '/events/trades',
    JOURNAL_STATUS: '/events/journals/status',
    TRANSFER_STATUS: '/events/transfers/status',
    NTA: '/events/nta',
};
class AlpacaEvents extends stream_1.EventEmitter {
    constructor({ apiKey, apiSecret, basePath }) {
        super();
        this.streams = {};
        this.authToken = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
        this.basePath = basePath;
    }
    subscribe(stream) {
        const es = new eventsource_1.default(this.basePath + stream, { headers: { authorization: this.authToken } });
        es.onmessage = (message) => {
            this.emit(stream, message);
        };
        es.onerror = (error) => {
            this.emit("error", error);
        };
        this.streams[stream] = es;
    }
}
exports.AlpacaEvents = AlpacaEvents;
