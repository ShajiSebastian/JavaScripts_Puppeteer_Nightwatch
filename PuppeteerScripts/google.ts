jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  await page.emulate(iPhonex);
  await page.goto('https://www.google.com');

  //await page.type("[name='q']", "using name")

  const searchBox = await page.$("[name='q']");
  await searchBox.type('cookies');
  //await searchBox.click();
  //await searchBox.click({clickCount:2}) //double click

  const inputElement = await page.$('input[type=submit][value="Google Search"]',);
  await inputElement.click();
  
  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.once('load', () => console.log('Cookies loaded!')),
  ]);
  await browser.close();
})
