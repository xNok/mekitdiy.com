// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Skip to Content Link', () => {
  test('skip link exists, is visually hidden until focused, and links to main content', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', { name: 'Skip to content' });
    await expect(skipLink).toHaveAttribute('href', '#content');

    // Link should initially have sr-only class (visually hidden)
    await expect(skipLink).toHaveClass(/sr-only/);

    // Press tab to focus the first interactive element (the skip link)
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    // Verify main target exists
    const mainContent = page.locator('#content');
    await expect(mainContent).toBeVisible();
  });
});
