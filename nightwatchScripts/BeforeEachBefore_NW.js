// To run nighwatch scripts go to termainal and type 'npm test' ( 'test' should be configured in package.json as 'nightwatch')

module.exports = {
  before : function(browser) {
    console.log('before blcok');
  },

  after : function(browser) {
    console.log('after block');
  },

  beforeEach : function(browser) {
    console.log('beforeEach block');
  },

  afterEach : function(browser) {
    console.log('afterEach block');

  },

  'step one' : function (browser) {
    browser
     // ...
  },

  'step two' : function (browser) {
    browser
    // ...
      .end();
  }
};