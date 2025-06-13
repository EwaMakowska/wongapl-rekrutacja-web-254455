import { test, expect } from '@playwright/test';

test.describe('Types page pagination', () => {
  test('should allow user to navigate through pages', async ({ page }) => {
    // 1. Wejdź na pierwszą stronę listy
    await page.goto('/types/1');

    // Znajdź przyciski nawigacyjne
    const nextButton = page.getByRole('link', { name: 'Next Page »' });
    const prevButton = page.getByRole('link', { name: '« Previous Page' });

    // 2. Sprawdź, czy na pierwszej stronie przycisk "Previous" nie jest widoczny
    await expect(prevButton).not.toBeVisible();
    await expect(nextButton).toBeVisible();

    // 3. Przejdź na drugą stronę
    const firstArticleOnPage1 = await page.locator('article h2').first().textContent();
    await nextButton.click();

    // 4. Sprawdź, czy URL jest poprawny i czy treść się zmieniła
    await expect(page).toHaveURL('/types/2');
    const firstArticleOnPage2 = await page.locator('article h2').first().textContent();
    expect(firstArticleOnPage1).not.toEqual(firstArticleOnPage2);

    // 5. Sprawdź, czy na drugiej stronie oba przyciski są widoczne
    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();

    // 6. Przejdź na ostatnią stronę
    // W tym celu musimy klikać "Next" aż przycisk zniknie
    while (await nextButton.isVisible()) {
      await nextButton.click();
    }

    // 7. Sprawdź, czy jesteśmy na ostatniej stronie (przycisk "Next" jest niewidoczny)
    await expect(nextButton).not.toBeVisible();
    await expect(prevButton).toBeVisible();

    // 8. Wróć na poprzednią stronę
    await prevButton.click();
    await expect(page.url()).toContain('/types/'); // Sprawdzamy ogólnie, bo nie wiemy, która strona jest przedostatnia
    await expect(nextButton).toBeVisible();
  });
}); 