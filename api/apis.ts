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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, AssetsApi, CalendarApi, ClockApi, DocumentsApi, EventsApi, FundingApi, JournalsApi, OAuthApi, TradingApi];
