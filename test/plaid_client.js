
var PlaidClient = require(__dirname + '/../src/plaid_client')
var config = require(__dirname + '/../src/config')
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

  it('should authenticate with B of A using valid username and password', function(done) {
    plaidClient.authLogin()
      .then(function(response) {
        assert.strictEqual(response.status, 201);
        done();
      })
  })
})