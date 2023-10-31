// @ts-check
const { test } = require('@playwright/test');

test('has title', async ({ page, context, browserName }) => {

  await context.routeFromHAR(`har/${browserName}.har`, {
    update: true,
    updateContent: 'embed',
    url: "https://reqres.in/api/articles"
  })


  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await page.waitForLoadState("networkidle");
});

