import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('should navigate to homepage from the main menu', async ({ page }) => {
    // Start on the types page
    await page.goto('/types/2');

    // Find the "Home" link in the main menu (inside <header>) and click it
    const header = page.locator('header');
    const homeLink = header.getByRole('link', { name: 'Home' });
    await homeLink.click();

    // Check if we were redirected to the homepage
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Welcome in the typeScript world');
  });

  test('should navigate to types page from the footer', async ({ page }) => {
    // Start on the homepage
    await page.goto('/');

    // Find the "Types" link in the footer (inside <footer>) and click it
    const footer = page.locator('footer');
    const typesLink = footer.getByRole('link', { name: 'Types', exact: true });
    await typesLink.click();

    // Check if we were redirected to the types page
    await expect(page).toHaveURL('/types/1');
    await expect(page.locator('h1')).toHaveText('TypeScript Types');
  });
}); 