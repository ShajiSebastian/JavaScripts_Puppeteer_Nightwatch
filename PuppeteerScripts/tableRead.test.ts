jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


//read a table
it('Read data from Table', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.emulate(iPhonex);

  await page.goto('https://scrapethissite.com/pages/forms/');
  await page.waitFor(2000); 

  const teams = await page.evaluate(()=>{
    const grabFromRow=(row, classname) => row.querySelector(`td.${classname}`).innerText.trim();
    const teamRowSelector='tr.team';
    //const grabFromRow=(row,classname) => row.querySelector('td.${classname}').innerText.trim();
    //const grabFromRow=(row,classname) => row.querySelector('td.${classname}').innerText.trim();
    const data=[]; // to store data in an array of objects
    const teamRows=document.querySelectorAll(teamRowSelector); //get all rows. team is the class name of row

    for (const tr of teamRows){
    data.push({
      Name: grabFromRow(tr,'name'),
      Year: grabFromRow(tr,'year'),
      Wins: grabFromRow(tr,'wins'),
      Losses: grabFromRow(tr,'losses')
  })
  }
  return data;

  })

  console.log(JSON.stringify(teams,null,2));
  browser.close();

  }
);