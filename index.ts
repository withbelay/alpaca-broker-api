
import * as api from './api';

// export all APIs and models so they can be used individually if desired
export * from './api'

interface AlpacaEnvironment {
    [env: string]: string
}

export const AlpacaEnvironments: {[env: string]: string} = {
    sandbox: 'https://broker-api.sandbox.alpaca.markets/v1',
    production: 'https://broker-api.alpaca.markets/v1',
};

export class AlpacaApi {
    accounts: api.AccountsApi
    assets: api.AssetsApi
    calendar: api.CalendarApi
    clock: api.ClockApi
    documents: api.DocumentsApi
    events: api.EventsApi
    funding: api.FundingApi
    journals: api.JournalsApi
    oauth: api.OAuthApi
    trading: api.TradingApi

    constructor ({apiKey, apiSecret, basePath}: {apiKey: string, apiSecret: string, basePath: string}) {
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
