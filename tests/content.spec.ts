import { test, expect } from '@playwright/test';

test.describe('Content Verification', () => {
  test('should display the alphabetically first type on the first page', async ({ page }) => {
    // Navigate to the first page of the types list
    await page.goto('/types/1');

    // Find the first article on the page
    const firstArticleHeading = page.locator('article h2').first();

    // Check if its content is "Any", because we are sorting alphabetically
    await expect(firstArticleHeading).toHaveText('Any');
  });

  test('should display "under construction" message on the advantages page', async ({ page }) => {
    // Navigate to the advantages page
    await page.goto('/advantages');

    // Find the main container <main> and then search for the paragraph <p> within it
    const mainContainer = page.locator('main');
    const underConstructionText = mainContainer.locator('p');
    await expect(underConstructionText).toHaveText('Page under construction. Come back soon!');
  });
}); 