jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

//https://chercher.tech/puppeteer/select-dropdown-puppeteer


it('textbox input', async() => {
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#select-menu')

    //to get dropdown texts
    const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option', options => { return options.map(option => option.innerText ) })
    console.log('Dropdown values:',selectOptions)

    //to select dropdown value
    await page.click('.bd-example > select.custom-select.custom-select-lg.mb-3'); 
    await page.select('.bd-example > select.custom-select.custom-select-lg.mb-3','1'); // selecting based on value
    await page.waitFor(3000);

    await page.goto('https://chercher.tech/practice/dropdowns');

    //to select by typing
    await page.type("select#first", "Google") // selectin based on actual text

    //to select multiple value
    await page.select("select#second", 'pizza', 'donut', 'bonda') // selecting based on values
    await page.waitFor(30000)
   

    //to get the selected value
    var selectedVal = await page.$eval("select#first", selectedValue=> selectedValue.value)
    await console.log('Selected value',selectedVal)

    //A Specific value selected from the dropdown or not
    var selected = await page.evaluate(() => {
    return document.querySelector(`select [value="Microsoft"]`).selected = true
    });
    await console.log('Is it selected', selected)


    //to get the selected value from dropdown
    var selectedValue = await page.evaluate(() => {
    return $(`select#first`)[0].value
    });
    await console.log("Selected Value"+ selectedValue)

    //to check whether the particular value is selected or not
    var selectedOrNot = await page.evaluate(() => {
    return $(`select [value='Microsoft']`)[0].selected
    });
    await console.log("Is it selected Or Not "+ selectedOrNot)

    //to get total number of texts present in a dropdown
    var dropdowns = await page.$$("select")
    console.log('Number of dropdown values',await dropdowns.length)

    //to get all options from dropdown
    var dropdowns = await page.$$eval("select#first option", all => all.map(a => a.textContent))
    console.log('List of all dropdown values', dropdowns)

    //to check whether a particular option is present or not
    var dropdowns = await page.$$eval("select#first option", all => all.map(a => a.textContent))
    if(dropdowns.indexOf("Yahoo") != -1){ //Javascript returns 1 if a value is present in an array otherwise -1
       console.log("Yes, Yahoo is still alive")
    }
  }
    )
 