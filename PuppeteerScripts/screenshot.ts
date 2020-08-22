jest.setTimeout(40000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  await page.emulate(iPhonex);

  await page.goto('https://www.google.com/');

  await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/googleScreenShot.png' ,fullPage: true});

  const options = {
    path: 'clipped_stocktickers.png',
    fullPage: false,
    clip: {
        x: 0,
        y: 240,
        width: 1000,
        height: 100
    }
}
await page.screenshot(options)

  
  await page.pdf({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/api.pdf', format: 'A4' })

  browser.close();
  } 
);