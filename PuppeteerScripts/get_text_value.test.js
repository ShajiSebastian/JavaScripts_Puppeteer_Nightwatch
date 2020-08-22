/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.$eval method
 *
 */
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('get Text value', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com/news')
  const name = await page.$eval('.hnname > a', el => el.innerText)
  console.log(name)
  await browser.close()
})
