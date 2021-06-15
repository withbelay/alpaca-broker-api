# @investingwolf/alpaca-broker-api

[![Version](https://img.shields.io/npm/v/@investingwolf/alpaca-broker-api)](https://www.npmjs.com/package/@investingwolf/alpaca-broker-api)

Node.js client for the Alpaca Broker API generated from the specs provided [here](https://github.com/alpacahq/bkdocs)

## Installation

```sh
npm install @investingwolf/alpaca-broker-api
```

## Usage

```js
const {AlpacaApi, AlpacaEnvironments} = require('@investingwolf/alpaca-broker-api');

const alpaca = new AlpacaApi({
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    basePath: AlpacaEnvironments.sandbox, // or production
});
```

Coming soon
