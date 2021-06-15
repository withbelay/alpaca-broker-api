import * as api from './api';
export * from './api';
export declare const AlpacaEnvironments: {
    [env: string]: string;
};
export declare class AlpacaApi {
    accounts: api.AccountsApi;
    assets: api.AssetsApi;
    calendar: api.CalendarApi;
    clock: api.ClockApi;
    documents: api.DocumentsApi;
    events: api.EventsApi;
    funding: api.FundingApi;
    journals: api.JournalsApi;
    oauth: api.OAuthApi;
    trading: api.TradingApi;
    constructor({ apiKey, apiSecret, basePath }: {
        apiKey: string;
        apiSecret: string;
        basePath: string;
    });
}
