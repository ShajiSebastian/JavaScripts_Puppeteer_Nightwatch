jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
const inputValue=process.argv[4]  // enter input with run command eg: inputAsArgument.ts 12
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.emulate(iPhonex);
  console.log('Value got as argument:',inputValue)
  await browser.close();
})
