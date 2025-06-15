import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the main heading and a link to the types page', async ({ page }) => {
    // 1. Navigate to the homepage
    await page.goto('/');

    // 2. Find the main container and then find the h1 heading within it
    const mainContainer = page.locator('main');
    const mainHeading = mainContainer.locator('h1');
    // Check that the heading contains the correct text
    await expect(mainHeading).toContainText('Welcome in the typeScript world');
    // Check that the icon is visible inside the heading
    await expect(mainHeading.locator('img[alt="Pill icon"]')).toBeVisible();

    // 3. Find the main menu (inside <header>) and then find the link to the types page
    const header = page.locator('header');
    const typesLink = header.locator('a[href="/types/1"]');
    await expect(typesLink).toBeVisible();
  });

  test('should match the homepage screenshot', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Wait for the main heading and the icon to be visible
    const mainHeading = page.locator('main').locator('h1');
    await expect(mainHeading).toContainText('Welcome in the typeScript world');
    await expect(mainHeading.locator('img[alt="Pill icon"]')).toBeVisible();

    // Wait until the network is idle, ensuring all assets like images are fully loaded
    await page.waitForLoadState('networkidle');

    // Take a screenshot and compare it with the golden one
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true, maxDiffPixelRatio: 0.01 });
  });
}); 