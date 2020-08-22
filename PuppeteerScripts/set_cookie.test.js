/**
 * @name set cookie
 *
 * @desc  Sets the "login_email" property in a Paypal cookie so the login screen is pre-filled with an email address.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#cookies}
 */

const cookie = {
  name: 'login_email',
  value: 'set_by_cookie@domain.com',
  domain: '.paypal.com',
  url: 'https://www.paypal.com/',
  path: '/',
  httpOnly: true,
  secure: true
}

jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('set cookie', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setCookie(cookie)
  await page.goto('https://www.paypal.com/signin')
  await page.screenshot({ path: 'paypal_login.png' })
  await browser.close()
})
