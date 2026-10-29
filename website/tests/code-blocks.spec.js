// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Code Block Rendering', () => {
  test('neo-theme showcase page renders code blocks and inline code correctly', async ({ page }) => {
    await page.goto('/neo-theme/');

    // Check heading
    await expect(page.locator('h2').first()).toContainText('Neo Theme Showcase');

    // Check code block exists and is visible
    const highlight = page.locator('.highlight');
    await expect(highlight.first()).toBeVisible();

    const codeBlock = page.locator('.highlight pre code');
    await expect(codeBlock.first()).toContainText('hugo server');

    // Check inline code element exists
    const inlineCode = page.locator('p code');
    await expect(inlineCode.first()).toBeVisible();
    await expect(inlineCode.first()).toHaveText('hugo server');
  });
});
