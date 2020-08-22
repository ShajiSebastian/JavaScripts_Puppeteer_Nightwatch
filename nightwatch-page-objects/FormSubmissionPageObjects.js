module.exports = {
    url : 'https://www.google.com/advanced_search?',

    elements:  {
       
         mainQueryInputSelector: 'input[name="as_q"]',
         languageDropdownOpenerSelector: '#lr_button',
         languageDropdownValueSelector: '.goog-menuitem[value="lang_it"]',
         lastUpdateDropdownOpenerSelector: '#as_qdr_button',
         lastUpdateDropdownValueSelector: '.goog-menuitem[value="m"]',
         submitButtonSelector: '.jfk-button[type="submit"]',
    },

    commands: [{

        setQuery(value){
            return this
                .setValue('@mainQueryInputSelector',value)
        },

        selectFilter(selector, value){
            const page = this;
            page
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
            return this;
        },

        search(){
            return this
                .click('@submitButtonSelector');
        }

    }]
}