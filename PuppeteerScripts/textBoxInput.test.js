jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('textbox input', async() => {
    const browser = await puppeteer.launch();
    //entering values using selector and type method
    await page.waitForSelector('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input');
    await page.type('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input', 'Without KB,', {delay: 50});
    //await page.type("[name='q']", "chercher tech")

    //entering values using selector and keyboard method
    await page.focus('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input')
    await page.keyboard.type('With KB');
    await page.keyboard.press('Enter', { delay: 300 });
})

