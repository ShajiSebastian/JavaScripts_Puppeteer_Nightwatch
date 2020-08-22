jest.setTimeout(50000);
const chai = require('chai')
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


//it('IS page new offer page design test', async () => {

describe('Verify Login',function(){

    beforeAll(function(){
        console.log('before block');
    });

    afterAll(function(){
        console.log('after block');
    });

    beforeEach(function(){
        console.log('beforeEach block');
    });

    afterEach(function(){
        console.log('afterEach block');
    });

    it('Male1 login',function(){
        console.log('Test 1 executed mochaSample.test.js script using Jest');
    })

    it('Male2 login',function(){
        console.log('Test 2 executed mochaSample.test.js script using Jest');
    })

    it('Female login',function(){
        console.log('Test 3 executed mochaSample.test.js script using Jest');
    })

    it.skip('Gunda login',function(){
        console.log('Test 4 executed mochaSample.test.js script using Jest');
    })

})