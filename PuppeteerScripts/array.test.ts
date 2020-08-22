jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

it('array', async()=>{

   
            const browser = await puppeteer.launch();
            const page = await browser.newPage()
            
            await page.goto('https://www.amazon.com/')
            
            await page.setViewport({ width: 1680, height: 834 })
            
            await page.waitForSelector('#nav-search #twotabsearchtextbox')
            await page.type('#nav-search #twotabsearchtextbox','mobiles')
            await page.waitFor(2000); //hard wait
            await page.click('#nav-search-submit-text')
            await page.waitFor(8000); //hard wait
            let urls = await page.evaluate(() => {
                let results = [];
                let brands = document.querySelectorAll('ul.a-unordered-list a-nostyle a-vertical a-spacing-medium > li');
                brands.forEach((brand) => {
                    let name = item.querySelector('span > a >div >span').innerText
                    //let price = item.querySelector('span.pdpPrice').innerText
                    //let discount = item.querySelector('div.listingDiscnt').innerText
                    results.push({
                        prod_name:  name
                       // prod_price: price,
                        //prod_discount: di scount
                    });
                   
                });
                
                return results;
                console.log('results:',results)
                console.log('urls:',urls)
            })
           
            browser.close();
            //return resolve(urls);
        } )
    

