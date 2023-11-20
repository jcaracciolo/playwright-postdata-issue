// @ts-check
const { test } = require('@playwright/test');
const path = require('path');

test('has title', async ({ page, context, browserName }) => {

  await context.addInitScript({
    path: path.resolve(__dirname, 'initScript.js'),
  });

  await context.routeFromHAR(`har/${browserName}.har`, {
    update: true,
    updateContent: 'embed',
    url: "https://reqres.in/api/articles"
  })


  await page.goto('http://localhost:3000/');

  await page.waitForLoadState("networkidle");
});

