jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('Checking alert', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulate(iPhonex);
  await page.goto('https://www.google.com/', {waitUntil: 'load'})
  page.on('console', msg => {
    console.log(msg.text());
});
await browser.close()
});
