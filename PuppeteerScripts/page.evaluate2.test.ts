jest.setTimeout(30000);
const puppeteer = require('puppeteer');
/*
it('page.evaluate example 1', async () => {
    const browser = await puppeteer.launch({});

    // const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/");
    const urls = await page.evaluate(() => {
        const results = [];
        let items = document.querySelectorAll('a.storylink');
        items.forEach((item) => {
                results.push({
                    url:  item.getAttribute('href'),
                    text: item.innerText,
                })
            } 
        //console.log('results :',results)
            )
        return results 
            
        })
        
       // console.log(JSON.stringify(urls,null,2));

     }
    )
*/

it('page.evaluate example 2', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders({Referer: 'https://sparktoro.com/'}) 
    await page.goto('https://sparktoro.com/trending');
    //await page.waitForNavigation();
    await page.waitForSelector('div.title > a');
  
    const stories = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('div.title > a'))
   return links.map(link => link.href).slice(0, 10)
    })
  
    console.log('stories',stories);
    await browser.close();
    }
  )


it('page.evaluate example 3', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.goto('https://developers.google.com/web/');
  await page.type('div.devsite-searchbox > input', 'Headless Chrome', {delay: 250});

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '.gsc-results .gsc-thumbnail-inside a.gs-title';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);
  console.log(links.join('\n'));

  await browser.close();
   
  }
  )

//Below code is from https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
it('page.evaluate example 4: Selecting usre id and email from search list.', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    const userToSearch = 'john';
    const searchUrl = `https://github.com/search?q=${userToSearch}&type=Users&utf8=%E2%9C%93`;
    await page.goto(searchUrl);
    await page.waitFor(2*1000); 
    // const LIST_USERNAME_SELECTOR = '#user_search_results > div.user-list > div:nth-child(1) > div.d-flex > div > a';
    const LIST_USERNAME_SELECTOR = '#user_search_results > div.user-list > div:nth-child(INDEX) > div.d-flex > div > a';
    // const LIST_EMAIL_SELECTOR = '#user_search_results > div.user-list > div:nth-child(2) > div.d-flex > div > ul > li:nth-child(2) > a';
    const LIST_EMAIL_SELECTOR = '#user_search_results > div.user-list > div:nth-child(INDEX) > div.d-flex > div > ul > li:nth-child(2) > a';
    const LENGTH_SELECTOR_CLASS = 'user-list-item';
    



    async function getNumPages(page) {
        const NUM_USER_SELECTOR = '#js-pjax-container > div.container > div > div.column.three-fourths.codesearch-results.pr-6 > div.d-flex.flex-justify-between.border-bottom.pb-3 > h3';
          
        let inner = await page.evaluate((sel) => {
        let html = document.querySelector(sel).innerHTML;
              
        // format is: "69,803 users"
        return html.replace(',', '').replace('users', '').trim();
            }, NUM_USER_SELECTOR);
          
        let numUsers = parseInt(inner);
          
        console.log('numUsers: ', numUsers);
          
            /*
            * GitHub shows 10 resuls per page, so
            */
        let numPages = Math.ceil(numUsers / 10);
        return numPages;
          }





    let numPages = await getNumPages(page);

    console.log('Numpages: ', numPages);

for (let h = 1; h <= numPages; h++) {

	let pageUrl = searchUrl + '&p=' + h;

	await page.goto(pageUrl);
    let listLength = await page.evaluate((sel) => {
        return document.getElementsByClassName(sel).length;
      }, LENGTH_SELECTOR_CLASS);
    console.log('Number of users:',listLength)

    for (let i = 1; i <= listLength; i++) {
        // change the index to the next child
        let usernameSelector = LIST_USERNAME_SELECTOR.replace("INDEX", i);
        let emailSelector = LIST_EMAIL_SELECTOR.replace("INDEX", i);
    
        let username = await page.evaluate((sel) => {
            return document.querySelector(sel).getAttribute('href').replace('/', '');
          }, usernameSelector);
    
        let email = await page.evaluate((sel) => {
            let element = document.querySelector(sel);
            return element? element.innerHTML: null;
          }, emailSelector);
    
        // not all users have emails visible
        if (!email){
            console.log('No email');
          continue;
        }
    
        console.log(username, ' -> ', email);
        }}


        browser.close();
    }
)
  

