jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
const testData = require('../../testData')
 
it('Retrieving Test Data', async () => {
  const browser = await puppeteer.launch();
  await page.emulate(iPhonex);
  await page.goto(testData.baseurl);
  console.log('Name retrieved from test data file is:'+testData.name)
})
