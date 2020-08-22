jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  await page.emulate(iPhonex);

  try {
  await page.goto('https://www.google.com/');
  await page.waitForSelector('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input');
  await page.type('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input', 'Without KB,', {delay: 50});
  await page.focus('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input', 'Without KB,')
  await page.keyboard.type('With KB');
  await page.waitFor(1000); 
  await page.keyboard.press('Enter', { delay: 300 });
  await page.waitFor(10000); 

  const title = await page.title();
  console.log('Page title is: ', title);
  await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/googleScreenShot.png' });
  //await page.mouse.click(132, 103, { button: 'left' })
  await page.pdf({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/api.pdf', format: 'A4' })

  }
  catch (err) {
  console.log('Exception: Error message shown is ',err.message);
  }
  browser.close();
  } 
);



/*
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge2', async () => {
  try {
      const browser = await puppeteer.launch()
      await page.emulate(iPhonex);
      await page.goto('https://booking.com')
      await page.waitFor(5000); 
      await page.type('#input_destination', 'Berlin')
      await page.waitFor(1000); 
      await page.keyboard.press('Tab', { delay: 300 });
      await page.keyboard.press('Tab', { delay: 300 });
      await page.keyboard.press('Tab', { delay: 300 });
      await page.keyboard.press('Enter', { delay: 300 });
      //await page.keyboard.down("Tab");
      await page.waitFor(1000); 
      await page.click('#submit_search')
      await page.waitFor(4000); 
      /*
      console.log('checking for result');
      await page.waitForSelector('#sr')
      console.log('found ressult');
      await page.waitFor(20000); 
      
      //await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/ListingPage.png' })
      await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/ListingPage.png' })
      console.log('screenshot taken');
      const hotels = await page.$$eval('span.sr-hotel__name', anchors => {
        return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
      })
      console.log(hotels)
      await page.waitFor(5000); 
      await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/FirstTenProducts.png' })
      
      await browser.close()
      console.log('See screenshot')
      
    }
   catch (err) {
    console.error(err)
    }
    }
  )


  //To Get text from all the matching elements in Puppeteer
  //You can get the text from all the elements using $$eval function present in the Puppeteer. To get texts from all the elements, you need to make sure you have the correct locator which matches all the elements that you want to match.

Once We use the $$eval function then it will give us all the matches then we need to extract text from individual elements using textContent. This will return an array of items, here the items are nothing but text.

const puppeteer = require('puppeteer');
async function run(){
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://chercher.tech/');
    var linkTexts = await page.$$eval(".plan-features a",
                elements=> elements.map(item=>item.textContent))
// prints a array of text
    await console.log(linkTexts)
}
async function waitforBalance(){
  return document.getElementById('#div').innerText='PASS'
}
run()  
await page.waitFor(waitforBalance)

*/