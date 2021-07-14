import EventSource from 'eventsource'
import { EventEmitter } from 'stream';

export const AlpacaEventStreams: {
    [name: string]: string
} = {
    ACCOUNT_STATUS: '/events/accounts/status',
    TRADES: '/events/trades',
    JOURNAL_STATUS: '/events/journals/status',
    TRANSFER_STATUS: '/events/transfers/status',
    NTA: '/events/nta',
};

export class AlpacaEvents extends EventEmitter {
    authToken: string
    basePath: string
    streams: {[name: string]: EventSource} = {}

    constructor ({apiKey, apiSecret, basePath}: {apiKey: string, apiSecret: string, basePath: string}) {
        super();
        this.authToken = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")
        this.basePath = basePath;
    }

    subscribe(stream: string) {
        const es = new EventSource(this.basePath + stream, {headers: {authorization: this.authToken}});
        es.onmessage = (message) => {
            this.emit(stream, message);
        }
        es.onerror = (error) => {
            this.emit("error", error)
        }
        this.streams[stream] = es
    }
}
