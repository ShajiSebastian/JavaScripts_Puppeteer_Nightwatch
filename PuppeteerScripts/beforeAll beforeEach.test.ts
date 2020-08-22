jest.setTimeout(50000);
const puppeteer = require('puppeteer');
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices['iPhone X'];

'use strict';
//import { getEndPoint, iPhonex, verifyLabel } from "../helpers/helper";

//let url: string = 'things-to-do/a.a170432.a';

beforeAll(async () => {
    console.log('beforeAll executed. beforeAll will execute only one time in a suite.')
});

beforeEach(async () => {
  console.log('beforeEach executed. beforeEach will execute for each script in a suite')
});

afterEach(async () => {
  console.log('afterEach executed. afterEach will execute for each script in a suite')
});

afterAll(async () => {
  console.log('afterAll executed.afterAll will execute only one time in a suite')
});


describe('BeforeEach AfterEach BeforeAll AfterAll', () => {

    it('test 1', async () => {
      console.log('test 1 executed')
    });

    it('test 2', async () => {
      console.log('test 2 executed')
    });

    it('test 3', async () => {
      console.log('test 3 executed')
    });
  }
)