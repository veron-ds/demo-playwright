import { test, expect } from '@playwright/test';
import { standardUser, lockedUser } from '@src/data/users';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('standard user lands on the inventory page', async ({ page }) => {
    await page.getByTestId('username').fill(standardUser.username);
    await page.getByTestId('password').fill(standardUser.password);
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByTestId('title')).toHaveText('Products');
  });

  test('locked-out user sees an error and stays on the login page', async ({ page }) => {
    await page.getByTestId('username').fill(lockedUser.username);
    await page.getByTestId('password').fill(lockedUser.password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('error')).toContainText('locked out');
    await expect(page).toHaveURL('/');
  });

  test('empty credentials are rejected with a required-field message', async ({ page }) => {
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('error')).toContainText('Username is required');
  });
});