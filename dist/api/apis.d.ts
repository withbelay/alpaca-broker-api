/// <reference types="node" />
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './assetsApi';
import { AssetsApi } from './assetsApi';
export * from './calendarApi';
import { CalendarApi } from './calendarApi';
export * from './clockApi';
import { ClockApi } from './clockApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './fundingApi';
import { FundingApi } from './fundingApi';
export * from './journalsApi';
import { JournalsApi } from './journalsApi';
export * from './oAuthApi';
import { OAuthApi } from './oAuthApi';
export * from './tradingApi';
import { TradingApi } from './tradingApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof AccountsApi | typeof AssetsApi | typeof CalendarApi | typeof ClockApi | typeof DocumentsApi | typeof EventsApi | typeof FundingApi | typeof JournalsApi | typeof OAuthApi | typeof TradingApi)[];
