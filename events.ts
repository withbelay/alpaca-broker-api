import EventSource from 'eventsource';
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
        this.authToken = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
        this.basePath = basePath;
    }

    subscribe(stream: string, cb?: (data: any) => void) {
        const es = new EventSource(this.basePath + stream, {headers: {authorization: this.authToken}});
        es.onmessage = (message) => {
            try {
                const data = JSON.parse(message.data);
                this.emit(stream, data);
            } catch (error) {
                this.emit("error", error);
            }
        };
        es.onerror = (error) => {
            this.emit("error", error);
        };
        if (cb) {
            this.on(stream, cb);
        }
        this.streams[stream] = es;
    }
}
