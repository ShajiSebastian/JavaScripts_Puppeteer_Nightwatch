jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Launch Goolge', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
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

jest.setTimeout(60000)
const puppeteer = require('puppeteer')
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

//let page


beforeAll(async () => {
  const browser = await puppeteer.launch()
  //page = await browser.newPage()
  //await page.emulate(iPhonex);
 // await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8' })
  await page.setViewport({ width: 1280, height: 800 })
})


it('Playing video from a list', async () => {

  try{
  console.log('inside first test')
  await page.goto('https://soundcloud.com/')
  await page.hover('.playableTile__artwork')  
  await page.screenshot({ path: '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/Mousehover.png' })
  //await page.click('.playableTile__artwork')

  //selecting a particular image from a arry list of images
  const example = await page.$$('.playableTile__artwork');
  await example[7].click();
  await page.waitFor(3000)
  await page.click('#content > div > div.l-listen-hero > div > div.fullHero__foreground.fullListenHero__foreground > div.fullHero__title > div > div > div.soundTitle__playButton.soundTitle__playButtonHero > a')
  await page.waitFor(7000)
  await browser.close()
  }
  catch(err){
    console.log('error is:',err)
  }
})

/*
it('shows the privacy modal', async () => {
      console.log('inside second test')
      await page.goto('https://www.etsy.com/c/art-and-collectibles/collectibles/figurines?ref=catnav-66', { waitUntil: 'networkidle2' })
      await page.waitForSelector('[data-gdpr-single-choice-accept]')
      await page.click('[data-gdpr-single-choice-accept]')
    }, 20000)
  /*
it('selects a product', async () => {
      console.log('inside third test')
      await page.waitForSelector('.placeholder-content')
      const products = await page.$$('.placeholder-content')
      await products[5].click()
      console.log('clicked 5th product')
      await page.waitFor(50000)
    }, 50000)
  })
})

*/



  


