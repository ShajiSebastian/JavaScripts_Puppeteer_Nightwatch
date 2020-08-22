jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Frame example 1', async () => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage()
  await page.emulate(iPhonex);
  await page.goto('https://www.manoramaonline.com/home.html');
  
  console.log('No. of frames: ',page.frames().length)
  expect(page.frames().length).toBeGreaterThan(1);

  const frameOne = page.frames()[1];

  const [frame1, frame2] = page.frames();

  const context1 = await frame1.executionContext();
  const context2 = await frame2.executionContext();
  expect(context1).toBeTruthy();
  expect(context2).toBeTruthy();
  expect(context1 !== context2).toBeTruthy();
  expect(context1.frame()).toBe(frame1);
  expect(context2.frame()).toBe(frame2);

  await Promise.all([
    context1.evaluate(() => window.a = 1),
    context2.evaluate(() => window.a = 2)
  ]);

  const [a1, a2] = await Promise.all([
    context1.evaluate(() => window.a),
    context2.evaluate(() => window.a)
  ]);
  expect(a1).toBe(1);
  expect(a2).toBe(2);
  
  await browser.close();
})

it('getting text from an iframe element', async () => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage()
  await page.goto('https://www.manoramaonline.com/home.html');

  await page.waitForSelector('iframe', {timeout:5000});
  for(let frame of await page.$$('iframe')){
  let Reimu = await frame.contentFrame();
  console.log('Frame names:', Reimu.name());
  }

  await browser.close();
})
