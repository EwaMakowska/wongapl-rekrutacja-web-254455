import { test, expect } from '@playwright/test';

test.describe('Types page pagination', () => {
  test('should allow user to navigate through pages', async ({ page }) => {
    // 1. Navigate to the first page of the list
    await page.goto('/types/1');

    // Find the navigation buttons
    const nextButton = page.getByRole('link', { name: 'Next Page »' });
    const prevButton = page.getByRole('link', { name: '« Previous Page' });

    // 2. On the first page, check that the "Previous" button is not visible
    await expect(prevButton).not.toBeVisible();
    await expect(nextButton).toBeVisible();

    // 3. Navigate to the second page
    const firstArticleOnPage1 = await page.locator('article h2').first().textContent();
    await nextButton.click();

    // 4. Check if the URL is correct and the content has changed
    await expect(page).toHaveURL('/types/2');
    const firstArticleOnPage2 = await page.locator('article h2').first().textContent();
    expect(firstArticleOnPage1).not.toEqual(firstArticleOnPage2);

    // 5. Check if both buttons are visible on the second page
    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();

    // 6. Navigate to the last page by clicking "Next" until the button disappears
    while (await nextButton.isVisible()) {
      await nextButton.click();
    }

    // 7. Check if we are on the last page (the "Next" button is not visible)
    await expect(nextButton).not.toBeVisible();
    await expect(prevButton).toBeVisible();

    // 8. Go back to the previous page
    await prevButton.click();
    await expect(page.url()).toContain('/types/'); // A generic check, as we don't know the second-to-last page number
    await expect(nextButton).toBeVisible();
  });
}); 