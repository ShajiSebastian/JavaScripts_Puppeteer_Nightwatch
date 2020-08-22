jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Returns some value', async () => {


  const browser = await puppeteer.launch();
  const page = await browser.newPage()
 // await page.emulate(iPhonex);

  //Simply returns a value
  let name = await page.evaluate(()  => {
    return 'Shaji';
  });
  console.log('Name value is: ', name);

} 
);
