// This file is for Cucumber
// This file is responsible for setting up the default timeout, starting the WebDriver and creating the session.

const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});