import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the main heading and a link to the types page', async ({ page }) => {
    // 1. Otwórz stronę główną
    await page.goto('/');

    // 2. Znajdź główny kontener strony i w nim szukaj nagłówka h1
    const mainContainer = page.locator('main');
    const mainHeading = mainContainer.locator('h1');
    await expect(mainHeading).toHaveText('Welcome in the typeScript world 💊 !');

    // 3. Znajdź menu główne i w nim szukaj linku do strony z typami
    const mainMenu = page.locator('nav');
    const typesLink = mainMenu.locator('a[href="/types/1"]');
    await expect(typesLink).toBeVisible();
  });
}); 