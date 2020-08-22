jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('textbox input', async() => {

    //selecting a particular image from a arry list of images
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('https://www.amazon.com/')
    const example = await page.$$('#gw-card-layout')
    await example[0].click();
    await browser.close()

    
    }
  )