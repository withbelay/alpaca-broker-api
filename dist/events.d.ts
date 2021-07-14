/// <reference types="node" />
import EventSource from 'eventsource';
import { EventEmitter } from 'stream';
export declare const AlpacaEventStreams: {
    [name: string]: string;
};
export declare class AlpacaEvents extends EventEmitter {
    authToken: string;
    basePath: string;
    streams: {
        [name: string]: EventSource;
    };
    constructor({ apiKey, apiSecret, basePath }: {
        apiKey: string;
        apiSecret: string;
        basePath: string;
    });
    subscribe(stream: string): void;
}
