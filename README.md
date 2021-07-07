# @investingwolf/alpaca-broker-api

[![Version](https://img.shields.io/npm/v/@investingwolf/alpaca-broker-api)](https://www.npmjs.com/package/@investingwolf/alpaca-broker-api)

Node.js client for the Alpaca Broker API generated from the specs provided [here](https://github.com/investingwolf/bkdocs).

## Installation

Install via NPM:

```sh
npm install @investingwolf/alpaca-broker-api
```

## Usage

### Configuration

You will need an Alpaca API key and API secret. You can then create an Alpaca client as follows:

```js
const {
  AlpacaApi,
  AlpacaEnvironments,
} = require("@investingwolf/alpaca-broker-api");

const alpaca = new AlpacaApi({
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
  basePath: AlpacaEnvironments.sandbox, // or AlpacaEnvironments.production
});
```

### Making API Calls

Here is an example API call:

```js
const { body: account } = await alpaca.accounts.accountsPost({
  contact: {
    email_address: "cool_alpaca@example.com",
    phone_number: "555-666-7788",
    // ...
  },
  // ...
});
```

All methods accept an optional `options` object as the last parameter, which can be used to set additional headers:

```js
const { body: account } = await alpaca.accounts.accountsPost(
  {
    // ...
  },
  {
    headers: { "x-some-header": "some-value" },
  }
);
```

### Error Handling

API errors are instances of the `HttpError` class (which can be imported). Errors have both `response` and `statusCode` properties.

### Accounts API

See [Alpaca accounts documentation](https://alpaca.markets/docs/broker/api-references/accounts/accounts/) for descriptions of each endpoint.

```js
// accountsAccountIdDocumentsUploadPost(String, DocumentUpload, Options?)
alpaca.accounts.accountsAccountIdDocumentsUploadPost(accountId, documentUpload);

// accountsActivitiesActivityTypeGet(String, String?, String?, String?, String?, String?, Number?, String?, Options?)
alpaca.accounts.accountsActivitiesActivityTypeGet(
  activityType,
  date,
  until,
  after,
  direction,
  accountId,
  pageSize,
  pageToken
);

// accountsActivitiesGet(String?, String?, String?, String?, String?, Number?, String?, Options?)
alpaca.accounts.accountsActivitiesGet(
  date,
  until,
  after,
  direction,
  accountId,
  pageSize,
  pageToken
);

// accountsGet(String?, Options?)
alpaca.accounts.accountsGet(query);

// accountsPost(AccountCreationObject, Options?)
alpaca.accounts.accountsPost(accountCreationObject);

// deleteAccount(String, Options?)
alpaca.accounts.deleteAccount(accountId);

// deleteAchRelationship(String, String, Options?)
alpaca.accounts.deleteAchRelationship(accountId, achRelationshipId);

// deleteRecipientBank(String, String, Options?)
alpaca.accounts.deleteRecipientBank(accountId, bankId);

// deleteTransfer(String, String, Options?)
alpaca.accounts.deleteTransfer(accountId, transferId);

// eventsAccountsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.accounts.eventsAccountsStatusGet(since, until, sinceId, untilId);

// getAccount(String, Options?)
alpaca.accounts.getAccount(accountId);

// getAchRelationships(String, String? Options?)
alpaca.accounts.getAchRelationships(accountId, statuses);

// getRecipientBanks(String, String?, String?, Options?)
alpaca.accounts.getRecipientBanks(accountId, status, bankName);

// getTradingAccount(String, Options?)
alpaca.accounts.getTradingAccount(accountId);

// getTransfers(String, String?, Number?, Number? Options?)
alpaca.accounts.getTransfers(accountId, direction, limit, offset);

// patchAccount(String, AccountUpdate, Options?)
alpaca.accounts.patchAccount(accountId, accountUpdate);

// postAchRelationships(String, AchRelationshipData, Options?)
alpaca.accounts.postAchRelationships(accountId, achRelationshipData);

// postRecipientBanks(String, BankData, Options?)
alpaca.accounts.postRecipientBanks(accountId, bankData);

// postTransfers(String, TransferData, Options?)
alpaca.accounts.postTransfers(accountId, transferData);
```

### Assets API

See [Alpaca assets documentation](https://alpaca.markets/docs/broker/api-references/assets/) for descriptions of each endpoint.

```js
// assetsAssetIdGet(String, Options?)
alpaca.assets.assetsAssetIdGet(assetId);

// assetsSymbolGet(String, Options?)
alpaca.assets.assetsSymbolGet(symbol);

// getAssets(Options?)
alpaca.assets.getAssets();
```

### Calendar API

See [Alpaca calendar documentation](https://alpaca.markets/docs/broker/api-references/calendar/) for descriptions of each endpoint.

```js
// calendarGet(String?, String?, Options?)
alpaca.calendar.calendarGet(start, end);
```

### Clock API

See [Alpaca clock documentation](https://alpaca.markets/docs/broker/api-references/clock/) for descriptions of each endpoint.

```js
// clockGet(Options?)
alpaca.clock.clockGet();
```

### Documents API

See [Alpaca documents documentation](https://alpaca.markets/docs/broker/api-references/documents/) for descriptions of each endpoint.

```js
// accountsAccountIdDocumentsDocumentIdDownloadGet(String, String, Options?)
alpaca.documents.accountsAccountIdDocumentsDocumentIdDownloadGet(
  accountId,
  documentId
);

// accountsAccountIdDocumentsGet(String, String?, String?, Options?)
alpaca.documents.accountsAccountIdDocumentsGet(accountId, startDate, endDate);

// documentsDocumentIdGet(String, Options?)
alpaca.documents.documentsDocumentIdGet(documentId);
```

### Events API

See [Alpaca events documentation](https://alpaca.markets/docs/broker/api-references/events/) for descriptions of each endpoint.

```js
// eventsAccountsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.events.eventsAccountsStatusGet(since, until, sinceId, untilId);

// eventsJournalsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.events.eventsJournalsStatusGet(since, until, sinceId, untilId);
```

### Funding API

See [Alpaca funding documentation](https://alpaca.markets/docs/broker/api-references/funding/ach/) for descriptions of each endpoint.

```js
// deleteAchRelationship(String, String, Options?)
alpaca.funding.deleteAchRelationship(accountId, achRelationshipId);

// deleteRecipientBank(String, String, Options?)
alpaca.funding.deleteRecipientBank(accountId, bankId);

// deleteTransfer(String, String, Options?)
alpaca.funding.deleteTransfer(accountId, transferId);

// getAchRelationships(String, String? Options?)
alpaca.funding.getAchRelationships(accountId, statuses);

// getRecipientBanks(String, String?, String?, Options?)
alpaca.funding.getRecipientBanks(accountId, status, bankName);

// getTransfers(String, String?, Number?, Number? Options?)
alpaca.funding.getTransfers(accountId, direction, limit, offset);

// postAchRelationships(String, AchRelationshipData, Options?)
alpaca.funding.postAchRelationships(accountId, achRelationshipData);

// postRecipientBanks(String, BankData, Options?)
alpaca.funding.postRecipientBanks(accountId, bankData);

// postTransfers(String, TransferData, Options?)
alpaca.funding.postTransfers(accountId, transferData);
```

### Journals API

See [Alpaca journals documentation](https://alpaca.markets/docs/broker/api-references/journals/) for descriptions of each endpoint.

```js
// deleteJournal(String, Options?)
alpaca.journals.deleteJournal(journalId);

// eventsJournalsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.journals.eventsJournalsStatusGet(since, until, sinceId, untilId);

// getJournals(String?, String?, String?, String?, String?, String?, Options?)
alpaca.journals.getJournals(
  after,
  before,
  status,
  entryType,
  toAccount,
  fromAccount
);

// postJournals(JournalData, Options?)
alpaca.journals.postJournals(journalData);

// postJournalsBatch(BatchJournalRequest, Options?)
alpaca.journals.postJournalsBatch(batchJournalRequest);
```

### OAuth API

See [Alpaca OAuth documentation](https://alpaca.markets/docs/broker/api-references/oauth/) for descriptions of each endpoint.

```js
// oauthAuthorizePost(OAuthAuthorizeObject, Options?)
alpaca.oauth.oauthAuthorizePost(oauthAuthorizeObject);

// oauthClientsClientIdGet(String, String?, String?, String?, Options?)
alpaca.oauth.oauthClientsClientIdGet(
  clientId,
  responseType,
  redirectUri,
  scope
);

// oauthTokenPost(OAuthTokenObject, Options?)
alpaca.oauth.oauthTokenPost(oauthTokenObject);
```

### Trading API

See [Alpaca trading documentation](https://alpaca.markets/docs/broker/api-references/trading/orders/) for descriptions of each endpoint.

```js
// deleteOrder(String, String, Options?)
alpaca.trading.deleteOrder(accountId, orderId);

// deleteOrders(String, Options?)
alpaca.trading.deleteOrders(accountId);

// getOrder(String, String, Options?)
alpaca.trading.getOrder(accountId, orderId);

// getOrders(String, String?, Number?, Date?, Date?, String?, Boolean?, String?, Options?)
alpaca.trading.getOrders(
  accountId,
  status,
  limit,
  after,
  until,
  direction,
  nested,
  symbols
);

// getPositions(String, Options?)
alpaca.trading.getPositions(accountId);

// patchOrder(String, String, PatchOrder, Options?)
alpaca.trading.patchOrder(accountId, orderId, patchOrder);

// postOrders(String, CreateOrder, Options?)
alpaca.trading.postOrders(accountId, createOrder);
```
