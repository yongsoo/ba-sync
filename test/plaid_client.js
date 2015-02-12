
var PlaidClient = require(__dirname+'/../src/plaid_client')
var config = require(__dirname+'/../src/config')
var assert = require('assert')

describe('Plaid Client', function() {

  var plaidClient;

  beforeEach(function() {
    plaidClient = new PlaidClient({
      baUsername: config.get('BA_ONLINE_USERNAME'),
      baPassword: config.get('BA_ONLINE_PASSWORD'),
      baMfa: config.get('BA_ONLINE_MFA'),
      plaidUrl: config.get('PLAID_URL'),
      plaidClientId: config.get('PLAID_CLIENT_ID'),
      plaidSecret: config.get('PLAID_SECRET')
    })
  });

  it.skip('should authenticate with B of A using valid username and password, MFA info, and access token', function(done) {
    plaidClient.authenticate()
      .then(function(response) {
        done();
      })
  })

  it('should get list of transactions', function(done) {
    plaidClient.getPayments()
      .then(function(transactions) {
        assert.strictEqual(transactions instanceof Array, true)
        done();
      })
  })
})