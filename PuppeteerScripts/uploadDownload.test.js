/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

it('Dowload and Upload File', async () => {

	const browser = await puppeteer.launch({});
	const page = await browser.newPage();
	//await page.setViewport({ width: 1200, height: 800 });

  await page.goto("https://checklyhq.com/");
  console.log('Browser invoked');
	const imageHref = await page.evaluate((sel) => {
		return document.querySelector(sel).getAttribute('src').replace('/', '');
	}, '.hero-image');

	const viewSource = await page.goto("https://checklyhq.com/images/" + imageHref);
	const buffer = await viewSource.buffer()
	await writeFileAsync(path.join(__dirname, "checkly.png"), buffer)
	console.log("The file was saved!")

	await readFileAsync(path.join(__dirname, 'checkly.png'))
	console.log("The file was read!")
	browser.close()
})

