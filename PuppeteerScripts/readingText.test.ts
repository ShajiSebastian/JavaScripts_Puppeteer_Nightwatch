
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('textbox input', async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
  
    await page.emulate(iPhonex);
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')
   
  
    //reading a text ( We can read dropdown text also)
    const innerText = await page.$eval('#checkboxes-and-radios > span', el => el.innerText); // var innerText, el.textContent, el.href
    console.log('inner text is: ',innerText)

    //waiting till a text appears in a page. There are two ways. 1. use Xpath with function text() 2. use function
    //Using Xpath page.waitForXPath(`//h3[contains(text(),'Highlights')]`)
    //using function 
    // await page.waitForFunction(() => document.querySelectorAll('.uitk-card-link').length > 40, {polling: 'mutation'}, {waitUntil: 'load'});
    // await page.waitForFunction(() => document.querySelector('.uitk-card-link').innerText.includes('shaji'),{},)
    // await page.waitFor(()=>document.querySelector('selector')) // selector exist
    // await page.waitFor(()=>!document.querySelector('selector')) // selector does not exist


    //reading attribute value
    //var link = await page.$eval(".gb_d[data-pid='23']", element=> element.getAttribute("data-pid")) / data-pid should present in the dev tool
    //await console.log(link)


    //reading a text present in a text field
    
    await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
    await page.type('#search_form_input_homepage', 'Puppeteer')
    const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
    console.log('text present:', searchValue)

    //appending another text after reading a text
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')
    const text = await page.$eval('#checkboxes-and-radios > span', (el, suffix) => el.textContent + suffix, ' world!');
    //expect(text).toBe('Checkboxes and radios world!');

    let error = null;
    await page.$eval('#checkboxes-and-radios > span', el => el.idd).catch(el => error = el);
    console.log('error text is: ',error)
    //expect(error.message).toContain('failed to find element matching selector "section"');

    const element = await page.$('#checkboxes-and-radios > span');
    expect(element).toBeTruthy(); //Use .toBeTruthy when you don't care what a value is and you want to ensure a value is true in a boolean context
    expect(element).toBe(null);

})
