//we can write a script as multiple steps

module.exports = {
    'Step1: My second Nightwatch test case'(browser){
        browser
        .url('https://www.ecosia.org')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]');
    },
  
    'Step two: click submit'(browser) {
      browser
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    }
  };