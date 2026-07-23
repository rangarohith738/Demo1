import { test, expect } from '@playwright/test';

import testData from '../../data/variables.json';
test('F1', async ({ page, context }) => {

  // Step 1: Open 'https://qa.rygen.com/'
  await page.goto('https://qa.rygen.com/');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Enter testData.RYGEN_USERNAME in 'Enter your username or email address' field
  const step2_locator = page.getByRole('textbox', { name: 'Enter your username or email' });
  await step2_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step2_locator.fill(testData.RYGEN_USERNAME);

  // Step 3: Click on 'Continue' button
  const step3_locator = page.getByRole('button', { name: 'Continue' });
  await step3_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step3_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 4: Enter testData.RYGEN_PASSWORD in Password field
  const step4_locator = page.getByRole('textbox', { name: 'Password' });
  await step4_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step4_locator.fill(testData.RYGEN_PASSWORD);

  // Step 5: Click on 'Sign in' button
  const step5_locator = page.getByRole('button', { name: 'Sign in' });
  await step5_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step5_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 6: Verify 'Select a Domain' Text is visible
  await page.getByText(/Select\ a\ Domain/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Select\ a\ Domain/i).first()).toBeVisible();

  // Step 7: Enter 'Client A' in Search Domains field
  const step7_locator = page.getByRole('searchbox', { name: 'Search' });
  await step7_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step7_locator.fill('Client A');

  // Step 8: Click on 'Client AB'
  const step8_locator = page.getByRole('treeitem', { name: 'Client AB' });
  await step8_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step8_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 9: Click on 'Order'
  const step9_locator = page.getByRole('link', { name: 'Order' });
  await step9_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step9_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 10: Click on 'New Order'
  const step10_locator = page.getByTestId('order-list-new-button');
  await step10_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step10_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 11: Verify 'Origin' section
  await page.getByText(/Origin/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Origin/i).first()).toBeVisible();

  // Step 12: Under 'Origin' click on  'Address Book'
  await page.getByText(/Origin/i).first().scrollIntoViewIfNeeded();
  const step12_locator = page.locator('fieldset, [role=group], [role=region], [role=tabpanel], section, article, [aria-label], li, [role=listitem], form, [data-section], [data-group], [data-testid]').filter({ has: page.getByText(/^Origin$/i) }).filter({ visible: true }).last().getByRole('button', { name: 'Address Book', exact: true });
  await step12_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step12_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 13: Verify 'Add Origin'
  await page.getByText(/Add\ Origin/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Add\ Origin/i).first()).toBeVisible();

  // Step 14: Click on 'chicago'
  const step14_locator = page.getByRole('button', { name: 'Select chicago' });
  await step14_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step14_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 15: Verify 'Destination' section
  await page.getByText(/Destination/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Destination/i).first()).toBeVisible();

  // Step 16: Under 'Destination' click on  'Address Book'
  await page.getByText(/Destination/i).first().scrollIntoViewIfNeeded();
  const step16_locator = page.locator('fieldset, [role=group], [role=region], [role=tabpanel], section, article, [aria-label], li, [role=listitem], form, [data-section], [data-group], [data-testid]').filter({ has: page.getByText(/^Destination$/i) }).filter({ visible: true }).last().getByRole('button', { name: 'Address Book', exact: true });
  await step16_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step16_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 17: Verify 'Add Destination'
  await page.getByText(/Add\ Destination/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Add\ Destination/i).first()).toBeVisible();

  // Step 18: Click on 'Novapath Supply Chain Systems'
  const step18_locator = page.locator('button').filter({ hasText: 'NNovapath Supply Chain Systems1175 Revolution Mill Dr.Suite 19Greensboro,' });
  await step18_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step18_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 19: Verify 'Bill To' section
  await page.getByText(/Bill\ To/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Bill\ To/i).first()).toBeVisible();

  // Step 20: Under 'Bill To' click on  'Address Book'
  await page.getByText(/Bill To/i).first().scrollIntoViewIfNeeded();
  const step20_locator = page.locator('fieldset, [role=group], [role=region], [role=tabpanel], section, article, [aria-label], li, [role=listitem], form, [data-section], [data-group], [data-testid]').filter({ has: page.getByText(/^Bill To$/i) }).filter({ visible: true }).last().getByRole('button', { name: 'Address Book', exact: true });
  await step20_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step20_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 21: Verify 'Add Bill To'
  await page.getByText(/Add\ Bill\ To/i).first().waitFor({ state: 'visible', timeout: 60000 });
  await expect(page.getByText(/Add\ Bill\ To/i).first()).toBeVisible();

  // Step 22: Click on 'Chicago Distribution Center'
  const step22_locator = page.getByRole('button', { name: 'Select Chicago Distribution' });
  await step22_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step22_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 23: Enter 'This is for testing' in 'Description' field
  const step23_locator = page.getByRole('combobox', { name: 'Description' });
  await step23_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step23_locator.fill('This is for testing');

  // Step 24: Enter '8' in 'Handling' field
  const step24_locator = page.getByRole('spinbutton', { name: 'Handling' });
  await step24_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step24_locator.fill('8');

  // Step 25: Enter '60' in 'Weight' field
  const step25_locator = page.getByRole('spinbutton', { name: 'Weight' });
  await step25_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step25_locator.fill('60');

  // Step 26: Click on 'Select Direction'
  const step26_locator = page.getByRole('combobox', { name: 'Select Direction' });
  await step26_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step26_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 27: Click on 'Inbound'
  const step27_locator = page.getByRole('option', { name: 'Inbound' });
  await step27_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step27_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 28: Click on 'Select Billing Terms'
  const step28_locator = page.getByRole('combobox', { name: 'Select Billing Terms' });
  await step28_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step28_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 29: Click on 'Prepaid'
  const step29_locator = page.getByRole('option', { name: 'Prepaid' });
  await step29_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step29_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 30: Click on 'Requested Earliest Pickup' field
  const step30_locator = page.getByRole('combobox', { name: 'Requested Earliest Pickup' });
  await step30_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step30_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 31: Click on '17' th july in calendar popup
  const step31_locator = page.getByRole('gridcell', { name: '17' });
  await step31_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step31_locator.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 32: Click on 'Create Order for client AB'
  const step32_locator = page.getByRole('button', { name: 'Create Order for client AB' });
  await step32_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step32_locator.click();
  await page.waitForLoadState('domcontentloaded');
});
