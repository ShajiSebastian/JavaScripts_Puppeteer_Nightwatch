jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.emulate(iPhonex);
  await page.setContent('<div>B</div><br/><div>B</div>');
  const elements = await page.$$('div');
  expect(elements.length).toBe(2);
  const promises = elements.map(element => page.evaluate(e => e.textContent, element));
  expect(await Promise.all(promises)).toEqual(['A', 'B']);

  await browser.close();
})
