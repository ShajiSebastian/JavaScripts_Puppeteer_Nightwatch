jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];


it('Sum of two numbers', async() => {
    
    let a=10
    let b=20
    let c='Christo'
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('The sum function accepts only numbers')
        }
        let     sum= a + b
        console.log('sum is :',sum)
        console.log('type of c is:',typeof c)
    }
)


it('Sum of two numbers by getting input as parameter', () => {
    let a,b

    function sum(a,b){
        return a + b
    }
        const result = sum(2,3)
        console.log('sum is :',result)
        expect(result).toBe(5)
    });
