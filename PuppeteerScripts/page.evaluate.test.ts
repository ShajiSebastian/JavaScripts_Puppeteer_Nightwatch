jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Page.evaluate script', async () => {


  const browser = await puppeteer.launch();
  const page = await browser.newPage()
 // await page.emulate(iPhonex);

 /*
  
  //using querySelector and innerText
  const result = await page.evaluate(() => {
    let Value1 = document.querySelector('#rso > div.HD8Pae.mnr-c.xpd.O9g5cc.uUPGi > div > div.Nxb87 > div.LMMXP').innerText; 
    let Value2 = document.querySelector('#rso > div.HD8Pae.mnr-c.xpd.O9g5cc.uUPGi > div > div.Nxb87 > div.yPYH8b > a > g-tray-header-action').innerText; 
    console.log('Flash News1: ', Value1);
    console.log('Flash News1: ', Value2);
    return{Value1, Value2};
  });
    console.log('result: ', result);

    */

  

  /*

  //using querySelectorAll
  let activityNO = await page.evaluate(() => {
    return document.querySelectorAll('.uitk-card-link').length;
  })
  console.log('Activity number is:', activityNO);

  //passing avalue to a parameter variable
  const multiplyResult = await page.evaluate((x) => {
    return Promise.resolve(8 * x);
  }, 10);
  console.log('Result is: ', multiplyResult); // prints "80"

  //direct evaluation
  console.log(await page.evaluate('1 + 2')); // prints "3"

  //passing value to a variable
  const x = 10;
  console.log(await page.evaluate(`1 + ${x}`)); // prints "11"

 
  const address = await page.evaluate(() => {
    return {
      Name: 'Shaji sebastian',
      Address: 'Kochupurayil House, Kizhakkambalam P.O',
      Age: 34
    };
  }
  );
  console.log('Address:', address);

  await page.goto("https://checklyhq.com/");
	const srcValue = await page.evaluate((sel) => {
		return document.querySelector(sel).getAttribute('src').replace('/', '');
	}, '.hero-image'); //getting the src attribute value for the class hero-image. Just selct the image in chrome devtool. A class will be shown. just get the src value of it
	
  console.log('srcValue value is:',srcValue)
  
  const srcValue2 = await page.evaluate(() => {
		return document.querySelector('.hero-image').getAttribute('src').replace('/', '');
	}); //getting the src attribute value for the class hero-image. Just selct the image in chrome devtool. A class will be shown. just get the src value of it
	
	console.log('srcValue value is 2:',srcValue2)
	
*/





await page.goto('https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgO4At3oqe4FwAIB&sid=335e440ffa5acdb493b01364767c4b7e&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgO4At3oqe4FwAIB%3Bsid%3D335e440ffa5acdb493b01364767c4b7e%3Bsb_price_type%3Dtotal%26%3B&ss=hhh&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=hhh&search_pageview_id=c1713f8bc9b50032')
           
await page.waitForSelector('#hotellist_inner')
var product = await page.$$('sr_item_content sr_item_content_slider_wrapper');

await page.waitFor(10000); //hard wait
await product[2].click()

await page.screenshot({
    path: 'screenshot1'
})
const hotels = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('span.sr-hotel__name'))
    return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
})
console.log(hotels)
await browser.close()
console.log('See screenshot: ' + screenshot1)

} 
);
