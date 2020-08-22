jest.setTimeout(30000);
const puppeteer = require('puppeteer');


it('page.evaluate example 1', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage()
    await page.goto('https://www.google.com');

    expect(await page.evaluate(() => document.querySelector('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').name)).toBe('q');
    

    const result = await page.evaluate(() => document.querySelector('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').name);
    expect(result).toBe('q');

    await browser.close();
   }
   )

it('page.evaluate example 2', async() => {
  const page = await browser.newPage()
    const result = await page.evaluate(() => 7 * 3);
    expect(result).toBe(21);

    await browser.close();
  });

it('page.evaluate example 3', async() => {
  const page = await browser.newPage()
    const result = await page.evaluate('7 * 3');
    expect(result).toBe(21);
  });

it('should accept a string', async() => {
  const page = await browser.newPage()
    const result = await page.evaluate('1 + 2');
    expect(result).toBe(3);
  });

it('should transfer arrays', async() => {
  const page = await browser.newPage()
    const result = await page.evaluate(a => a, [1, 2, 3]);
    expect(result).toEqual([1,2,3]);
  });