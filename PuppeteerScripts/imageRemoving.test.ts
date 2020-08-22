jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

//saving a file
it('Removing images from while page loading', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort();
        
    else
      request.continue();
  });
  await page.goto('https://news.google.com/news/');
  await page.screenshot({path: 'withioutmage.png', fullPage: true});

  await browser.close();
});