jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('textbox input', async() => 

    {
    //radio button options
    const radios = await page.$$eval('input[name="exampleRadios"]', inputs => { return inputs.map(input => input.value) })
    console.log('Radio button values:', radios)

    //clicking on readio button
    await page.click('#exampleRadios2')

    })