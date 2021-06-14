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
/// <reference types="node" />
import http from 'http';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum ClockApiApiKeys {
}
export declare class ClockApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        BasicAuth: HttpBasicAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ClockApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    /**
     *
     * @summary Query market clock
     */
    clockGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2003;
    }>;
}