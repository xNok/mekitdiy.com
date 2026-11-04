// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Main Navigation Active State', () => {
  test('home page should not have active nav link', async ({ page }) => {
    await page.goto('/');

    const projectsLink = page.locator('header nav a', { hasText: 'Projects' });
    const blogLink = page.locator('header nav a', { hasText: 'Blog' });

    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('projects section should indicate active page', async ({ page }) => {
    await page.goto('/projects/');

    const projectsLink = page.locator('header nav a', { hasText: 'Projects' });
    const blogLink = page.locator('header nav a', { hasText: 'Blog' });

    await expect(projectsLink).toHaveAttribute('aria-current', 'page');
    await expect(projectsLink).toHaveClass(/bg-nb-pop-yellow/);
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('blog section should indicate active page', async ({ page }) => {
    await page.goto('/blog/');

    const projectsLink = page.locator('header nav a', { hasText: 'Projects' });
    const blogLink = page.locator('header nav a', { hasText: 'Blog' });

    await expect(blogLink).toHaveAttribute('aria-current', 'page');
    await expect(blogLink).toHaveClass(/bg-nb-pop-yellow/);
    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
  });
});
