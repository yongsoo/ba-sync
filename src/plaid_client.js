
var Promise = require('bluebird')
var http = require('superagent')

var PlaidClient = function(options) {
  this.baUsername = options.baUsername;
  this.baPassword = options.baPassword;
  this.baMfa = options.baMfa;
  this.plaidUrl = options.plaidUrl;
  this.plaidClientId = options.plaidClientId;
  this.plaidSecret = options.plaidSecret;
}

PlaidClient.prototype.authLogin = function() {
  var _this = this;

  return new Promise(function(resolve, reject) {
    http
      .post(_this.plaidUrl + '/connect')
      .send({
        client_id: _this.plaidClientId,
        secret: _this.plaidSecret,
        username: _this.baUsername,
        password: _this.baPassword,
        type: 'bofa'
      })
      .end(function(error, response) {
        if (error) {
          return reject(error);
        }
        resolve(response.body.access_token);
      });
  });
}

PlaidClient.prototype.authMfa = function(accessToken) {
  var _this = this;

  return new Promise(function(resolve, reject) {

    http
      .post(_this.plaidUrl + '/connect/step')
      .send({
        client_id: _this.plaidClientId,
        secret: _this.plaidSecret,
        mfa: _this.baMfa,
        access_token: accessToken
      })
      .end(function(error, response) {
        if (error) {
          return reject(error);
        }
        resolve(response.body);
      })
  });
}

PlaidClient.prototype.authenticate = function() {
  var _this = this;

  return _this.authLogin()
    .then(function(accessToken) {
      return _this.authMfa(accessToken);
    });
}

PlaidClient.prototype.getPayments = function() {
  var _this = this;

  return new Promise(function(resolve, reject) {
    http
      .post(_this.plaidUrl + '/connect')
      .send({
        client_id: _this.plaidClientId,
        secret: _this.plaidSecret,
        username: _this.baUsername,
        password: _this.baPassword,
        type: 'bofa'
      })
      .end(function(error, response) {
        if (error) {
          return reject(error);
        }
        resolve(response.body.transactions);
      });
  });
}

module.exports = PlaidClient;