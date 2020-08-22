jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('usage expect Keyword', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    //const browser = await puppeteer.launch({devtools: true});
    await page.emulate(iPhonex);

    const quantity = 'Shaji'
    expect(quantity).toBe('Shaji')
    expect.anything('Execution over')

    await page.goto('https://www.google.com/');
    await page.waitFor(10000); //hard wait
    const title = await page.title();
    expect(title).toBe('Google')

    let text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain('google')
    console.log('text is:', text)

    browser.close();
   }
  )

   
it('condition check', async () => {
    let i=1
    const visible = i < 10; //if condition satisfies the value of visible will be true
    expect(true).toBe(visible);
})
