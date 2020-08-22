jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];
 
it('For loop and array', async () => {
 
    const values = []
    let i
    for ( i = 0; i < 5; i++) {
      values.push(i)
      }
    
    console.log('Array values:', values)
   } 
 )

it('if loop', async () => {
  let i=0
  let j=1

  if ((i===0) || (j===0) ){
    console.log('Either i and j are Zero')
  }
  else console.log('Either i or j or Both are NOT zero')
}
 )

it('if loop 3', async () => {
  let i=0
  let j=0

if ((i!==0) || (j!==0) ){
  console.log('Either i or  j or Both are NOT Zero')
}
else console.log('Both are zero')
}
 )

it('if loop 2', async () => {
  let i=0
  let j=0

if (!(i===0) || !(j===0) ){
  console.log('Either i or  j or Both are NOT Zero')
}
else console.log('Both are zero')
}
 )

 it('assigning values based on comparison', async () => {
  let i=10
  let j=100
  let result
 const actual = i === j ? result='same' : result='Not same'
 console.log('ressult is:',result)
 }
 )