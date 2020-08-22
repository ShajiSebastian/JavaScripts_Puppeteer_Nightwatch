jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('Common page elements text box,radio button, check box, dropdown etc', async () => {
    const browser = await puppeteer.launch();
    await page.emulate(iPhonex);
    await page.goto('https://www.google.com/');
    page.waitForNavigation()
    await page.setViewport({ width: 1674, height: 835 })

    const url =  await page.url()
    console.log('url is: ', url);
    
    const title = await page.title();
    console.log('Page title is: ', title);
})
