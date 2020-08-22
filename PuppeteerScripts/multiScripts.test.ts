
beforeAll(async () => {
  console.log('BeforeAll script')
  jest.setTimeout(50000);
  const puppeteer = require('puppeteer');
  const devices = require("puppeteer/DeviceDescriptors");
  const iPhonex = devices['iPhone X'];
  browser = await puppeteer.launch()
  let page = await browser.newPage()
  await page.emulate(iPhonex);
  }
)
describe('Suite: Alibaba Search', () => {

  it('Test1: has search input', async () => {
    console.log('First script')
   }, 10000
  )

  test('Test2: shows search results after search input', async () => {
    console.log('Second script')
   }
  )

afterAll(async () => {
    console.log('All scripts execution over')
    await browser.close()
   }
  )
 }
)