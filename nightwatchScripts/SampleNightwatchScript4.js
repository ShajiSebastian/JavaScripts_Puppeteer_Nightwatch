describe('Written inside describe', function() {

// how many time to retry a failed testcase inside this test suite
this.retries(3);

// how many times to retry the current test suite in case of an assertion failure or error
this.suiteRetries(2);

//'@disabled': true, // This will prevent the test module from running.

// Set this to false if you'd like the browser window to be kept open in case of a failure or error (useful for debugging)
// this.endSessionOnFail = true

// Set this to false if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error
// this.skipTestcasesOnFail = true

// Set this to true if you'd like this test suite to be skipped by the test runner
// this.disabled = false

// Control the assertion and element commands timeout until when an element should be located or assertion passed
// this.timeout(1000)

// Controll the polling interval between re-tries for assertions or element commands
// this.retryInterval(100);


  test('test1: describe -> test sample', function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  });

  test('test2: describe -> test sample', function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  });

});