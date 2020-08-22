module.exports = {
    '@tags': ['google'],

    'Google advanced search' (browser) {
        
        const mainQuery = 'Elon musk';

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]'
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`
        

        browser
            .url('https://www.google.com/advanced_search?')
            .setValue(mainQueryInputSelector,mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+musk','we can give any comment here')
            .saveScreenshot('tests_output/google1.png')

            browser.expect.element(resultsPageQuerySelector).to.be.visible;
            browser.saveScreenshot('tests_output/google2.png')
    }
}