/**
 * @name Duck Duck Go search
 */



jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('duck duck go', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
  await page.type('#search_form_input_homepage', 'Puppeteer')
  const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
  console.log(searchValue)
  await browser.close()
})
