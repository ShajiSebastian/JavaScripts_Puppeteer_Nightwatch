jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('Variable with set of values', async () => {
  const colleges = [
    { name: 'Shaji', age: '34'},
    { name: 'Christo', age: '7'},
  ]
  console.log(colleges)
}
);