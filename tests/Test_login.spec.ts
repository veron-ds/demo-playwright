
import { test, expect } from '@playwright/test';

test('standard user can log in', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByTestId('title')).toHaveText('Products');
})

test('locked out user sees error, cannot log in', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('locked_out_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('error')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  await expect(page.getByTestId('login-button')).toBeVisible();
})

test('incorrect credentials show error', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('incorrect_user');
  await page.getByTestId('password').fill('incorrect_password');
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  await expect(loginPage.loginButton).toBeVisible();

})