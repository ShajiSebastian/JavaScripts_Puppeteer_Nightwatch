jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.emulate(iPhonex);

  // Using ‘page.mouse’ to trace a 100x100 square.
  await page.mouse.move(0, 0);
  await page.mouse.down();
  await page.mouse.move(0, 100);
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 0);
  await page.mouse.move(0, 0);
  await page.mouse.up();

  await page.mouse.click(132, 103, { button: 'left' }) //default button is left

  //mouseover 
  await page.goto('https://soundcloud.com/')
  await page.hover('.playableTile__artwork')  
  await page.click('.playableTile__artwork')

  browser.close();
  } 
);


function dimensions() {
  const rect = document.querySelector('textarea').getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height
  };
}
it('should select the text with mouse', async() => {
  await page.focus('textarea');
  const text = 'This is the text that we are going to try to select. Let\'s see how it goes.';
  await page.keyboard.type(text);
  // Firefox needs an extra frame here after typing or it will fail to set the scrollTop
  await page.evaluate(() => new Promise(requestAnimationFrame));
  await page.evaluate(() => document.querySelector('textarea').scrollTop = 0);
  const {x, y} = await page.evaluate(dimensions);
  await page.mouse.move(x + 2,y + 2);
  await page.mouse.down();
  await page.mouse.move(100,100);
  await page.mouse.up();
  expect(await page.evaluate(() => {
    const textarea = document.querySelector('textarea');
    return textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
  })).toBe(text);
});