/**
 * @name Walmart shopping cart
 *
 * @desc Looks for a Nintendo's Mario Odyssey and adds it to the shopping cart.
 */

const screenshot = 'shopping_walmart.png'
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('walmart', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  })