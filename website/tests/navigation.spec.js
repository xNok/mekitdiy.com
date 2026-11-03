// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Main Navigation Accessibility and Active State', () => {
  test('should not mark any section link as current on home page', async ({ page }) => {
    await page.goto('/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a[href="/projects/"]');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a[href="/blog/"]');

    await expect(projectsLink).toBeAttached();
    await expect(blogLink).toBeAttached();

    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('should mark Projects link as current when viewing projects section', async ({ page }) => {
    await page.goto('/projects/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a[href="/projects/"]');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a[href="/blog/"]');

    await expect(projectsLink).toHaveAttribute('aria-current', 'page');
    await expect(projectsLink).toHaveClass(/text-nb-pop-yellow/);
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('should mark Blog link as current when viewing blog section', async ({ page }) => {
    await page.goto('/blog/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a[href="/projects/"]');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a[href="/blog/"]');

    await expect(blogLink).toHaveAttribute('aria-current', 'page');
    await expect(blogLink).toHaveClass(/text-nb-pop-yellow/);
    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
  });
});
