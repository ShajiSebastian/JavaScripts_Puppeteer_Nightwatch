
/**
 * @name Download file / upload file
 * @desc Find an image by class selector, downloads the image, saves it to disk and read it again. Use this together with a .fileUpload() method.
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

it('Download and Upload a File', async () => {
	const browser = await puppeteer.launch({});
	const page = await browser.newPage()
	const viewSource = await page.goto('https://checklyhq.com/images/images/dashboard-screen@2x.b0dcdbb8.png');
	const buffer = await viewSource.buffer()
	
	await writeFileAsync(path.join('/Users/a-4600/Desktop/Shaji/Learning/JavaScriptMyScripts3/Files/', "checkly.png"), buffer)
	console.log("The file was saved!")

	await readFileAsync(path.join('/Users/a-4600/Desktop/Shaji/Learning/JavaScriptMyScripts3/Files/', 'checkly.png'))
	console.log("The file was read!")
	
	browser.close()
	}
)