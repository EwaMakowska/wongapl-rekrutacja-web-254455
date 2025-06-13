import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('should navigate to homepage from the main menu', async ({ page }) => {
    // Zacznij na stronie z typami
    await page.goto('/types/2');

    // Znajdź link "Home" w menu głównym i go kliknij
    const mainMenu = page.locator('nav');
    const homeLink = mainMenu.getByRole('link', { name: 'Home' });
    await homeLink.click();

    // Sprawdź, czy zostaliśmy przeniesieni na stronę główną
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Welcome in the typeScript world');
  });

  test('should navigate to types page from the footer', async ({ page }) => {
    // Zacznij na stronie głównej
    await page.goto('/');

    // Znajdź link "Types" w stopce i go kliknij, upewniając się, że tekst jest dokładny
    const footer = page.locator('footer');
    const typesLink = footer.getByRole('link', { name: 'Types', exact: true });
    await typesLink.click();

    // Sprawdź, czy zostaliśmy przeniesieni na stronę z typami
    await expect(page).toHaveURL('/types/1');
    await expect(page.locator('h1')).toHaveText('TypeScript Types');
  });
}); 