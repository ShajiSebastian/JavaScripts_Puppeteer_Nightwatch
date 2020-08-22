/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

const puppeteer = require('puppeteer')
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Alibaba Search', () => {
  test('has search input', async () => {
    await page.goto('https://www.alibaba.com');
  })

  test('shows search results after search input', async () => {
    // await page.goto('https://www.alibaba.com', { waitUntil: 'networkidle0' })
    await page.type('input.ui-searchbar-keyword', 'lucky cat')
    await page.click('input.ui-searchbar-submit')
    await page.waitForSelector('[data-content="abox-ProductNormalList"]')
    const firstProduct = await page.$('.item-content')
    expect(firstProduct).toBeFalsy();
    assert.ok(firstProduct)
  })

  afterAll(async () => {
    await browser.close()
  })
})
