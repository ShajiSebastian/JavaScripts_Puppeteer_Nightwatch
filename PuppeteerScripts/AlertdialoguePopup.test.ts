
jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

  describe('Page.Events.Dialog', function() {

    it('Dialogue', async() => {
      const browser = await puppeteer.launch({});
      const page = await browser.newPage()
      page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.defaultValue()).toBe('');
        expect(dialog.message()).toBe('Alert from page evalute fn');
        console.log('dialog message is: ',dialog.message());
        await page.waitFor(2000); 
        dialog.accept();
        browser.close();
      });
      await page.evaluate(() => alert('Alert from page evalute fn'));
      });

    it('should allow accepting prompts', async() => {
      const browser = await puppeteer.launch({});
      const page = await browser.newPage()
      page.on('dialog', async dialog2 => {
        expect(dialog2.type()).toBe('prompt');
        expect(dialog2.defaultValue()).toBe('yes.');
        expect(dialog2.message()).toBe('Are your learning puppeteer?');
        console.log('dialog message is: ',dialog2.message());
        await page.waitFor(2000); 
        dialog2.accept('answer!');
        browser.close();
      });
      const result = await page.evaluate(() => prompt('Are your learning puppeteer?', 'yes.'));
      expect(result).toBe('answer!');
      });


    it('should dismiss the prompt', async() => {
      const browser = await puppeteer.launch({});
      const page = await browser.newPage()
      page.on('dialog', async dialog => {
        console.log('dialog message is: ',dialog.message());
        await page.waitFor(2000); 
        dialog.dismiss();
        browser.close();
      });
      const result = await page.evaluate(() => prompt('Are your learning puppeteer?'));
      expect(result).toBe(null);
      });

  });
