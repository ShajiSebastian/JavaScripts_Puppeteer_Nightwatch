/**
 * @name Staples shopping cart
 *
 * @desc Goes to the face paint category and adds to the shopping cart.
 */
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

try{
it('IS page new offer page design test', async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.staples.com/Painting-Supplies/cat_CL140420/bww15', { waitUntil: 'networkidle2' })
    await page.click('button.add-to-cart-btn.addToCart')
    await page.waitForSelector('h4.cart-items-header')
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  })
} catch (err) {
  console.error(err)
}
