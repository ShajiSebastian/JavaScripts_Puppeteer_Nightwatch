module.exports = {
    '@tags': ['googlePOM'],

    'Google advanced search' (browser) {

        const page = browser.page.FormSubmissionPageObjects();
        const mainQuery = 'Elon musk';
        
        page
            .navigate()
            .setQuery(mainQuery) // passing query to common function present in Objets file
            .click('@languageDropdownOpenerSelector') // reusing the object present in Object file
            .click(`.goog-menuitem[value="lang_it"]`) // reusing the object present in Object file
            .selectFilter('@lastUpdateDropdownOpenerSelector','m')  // passing query to common function present in Objets file
            .search()  // passing query to common function present in Objets file
            .assert.urlContains('as_q=Elon+musk','we can give any comment here')
            .saveScreenshot('tests_output/google1.png')

            browser.expect.element('#searchform input[name="q"][value="Elon musk"]').to.be.visible;
            browser.saveScreenshot('tests_output/google2.png')
    }
}