// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Skip to Content Link', () => {
  test('should provide a keyboard-accessible skip link', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.locator('a[href="#content"]');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveText('Skip to content');

    // Initially visually hidden with sr-only
    await expect(skipLink).toHaveClass(/sr-only/);

    // Focus via Tab key
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();

    // When focused, it should be visible to keyboard users
    await expect(skipLink).toBeVisible();

    // Pressing Enter should navigate focus / URL to #content
    await page.keyboard.press('Enter');
    expect(page.url()).toContain('#content');
  });
});
