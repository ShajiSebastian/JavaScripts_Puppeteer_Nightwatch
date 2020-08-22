//We can use xpth or css or both in scripts. By default it is css
//To always use xpath by default set the property "use_xpath": true in your Configuration.

module.exports = {
  demoTest: function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .click("//tr[@data-recorded]/span[text()='Search Text']")
      .useCss() // we're back to CSS now
      .setValue('input[type=text]', 'nightwatch')
  }
};



/* Another way to use Xpath

module.exports = {
  demoTest: function (browser) {
    browser
      .click({
        selector: '//tr[@data-recordid]/span[text()='Search Text']',
        locateStrategy: 'xpath'
      })
      .setValue('input[type=text]', 'nightwatch');
  }
};

*/