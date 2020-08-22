jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

//saving a file
it('Save data to a File', async () => {
const fs =require('fs');
fs.writeFile(
  '/Users/a-4600/PuppeteerLearning/puppeteerMyScripts/Reports/Shaji2.txt',
  JSON.stringify('Shaji',null,2),
  (err) => err ? console.error ('Data not written!',err): console.log('Data written')
)
});