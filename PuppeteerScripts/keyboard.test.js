/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('keyboard', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://trix-editor.org/')
  await page.focus('trix-editor')
  await page.keyboard.type('Just adding a title')
  await page.screenshot({ path: 'keyboard.png' })
  await browser.close()
})
