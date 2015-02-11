# ba-sync
ALPHA SOFTWARE

Bank of America bridge that syncs payments from a gateway to Bank of America and vice versa.

## Installation

````
npm install -g ba-sync
````

Alternatively, you can build from source:
````
git clone https://github.com/yongsoo/ba-sync
cd ba-sync
npm install
````

## Usage
Ba-sync monitors and syncs payments from both a USD gateway and from Bank of America using the Plaid API. You must have an account at Bank of America, Plaid and a Ripple gateway for handling USD.

## Dependencies
- Git
- Node.js

## Configuration

Copy config-example.json and paste it into a new file called config.json.

The following environment variables must be set to run Ba Sync:

BANK_OF_AMERICA:
- BA_ONLINE_USERNAME
- BA_ONLINE_PASSWORD
- BA_ONLINE_MFA

PLAID:
- PLAID_URL
- PLAID_CLIENT_ID
- PLAID_SECRET

USD_GATEWAY:
- USD_GATEWAY_URL
- USD_GATEWAY_USERNAME
- USD_GATEWAY_PASSWORD
- USD_GATEWAY_HOT_WALLET
- USD_GATEWAY_COLD_WALLET