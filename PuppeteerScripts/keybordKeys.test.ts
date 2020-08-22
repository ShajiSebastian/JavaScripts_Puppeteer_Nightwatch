jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

//https://github.com/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js (list of keys)
 
it('Launch Goolge', async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage()
    await page.emulate(iPhonex);

    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Enter', { delay: 300 });
    
    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++){
    await page.keyboard.press('ArrowLeft');}
    await page.keyboard.up('Shift');
    
    await page.keyboard.press('Backspace');
    // Result text will end up saying 'Hello!'

    //An example of pressing A
    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Shift');

    await page.focus('textarea');
    await page.keyboard.sendCharacter('嗨');

    await page.type('textarea', '👹 Tokyo street Japan 🇯🇵'); //typing emoji
    expect(await page.$eval('textarea', textarea => textarea.value)).toBe('👹 Tokyo street Japan 🇯🇵');

    
    
    //keyboard.sendCharacter()
    expect(await page.evaluate(() => document.querySelector('textarea').value)).toBe('Hello World!');
    browser.close();
  } 
);