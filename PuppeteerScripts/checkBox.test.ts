jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('textbox input', async() => 

    {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html')
    //check box selected or not
    const checkboxStatus = await page.$eval('#cond1', input => { return input.checked })
    console.log('Default Checkbox status:', checkboxStatus)

    //clicking on check box
    await page.click('#cond1');
    const checkboxStatus2 = await page.$eval('#cond1', input => { return input.checked })
    console.log('Status after selecting Checkbox:', checkboxStatus2)
    })
  