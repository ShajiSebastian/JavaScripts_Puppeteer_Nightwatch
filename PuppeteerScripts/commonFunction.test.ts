jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
const helper = require('../helpers/helper')
 
it('Passing parameter to common function', async () => {
  const browser = await puppeteer.launch();
  await page.emulate(iPhonex);
  await helper.method1(page,'abcd','Christo');
 
})
