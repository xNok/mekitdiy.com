// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation active states', () => {
  test('home page should not mark section links as active', async ({ page }) => {
    await page.goto('/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Projects")');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Blog")');

    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('projects section should mark Projects link with aria-current="page"', async ({ page }) => {
    await page.goto('/projects/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Projects")');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Blog")');

    await expect(projectsLink).toHaveAttribute('aria-current', 'page');
    await expect(projectsLink).toHaveClass(/bg-nb-pop-yellow/);
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('blog section should mark Blog link with aria-current="page"', async ({ page }) => {
    await page.goto('/blog/');

    const projectsLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Projects")');
    const blogLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Blog")');

    await expect(blogLink).toHaveAttribute('aria-current', 'page');
    await expect(blogLink).toHaveClass(/bg-nb-pop-yellow/);
    await expect(projectsLink).not.toHaveAttribute('aria-current', 'page');
  });

  test('individual blog post retains active blog nav state', async ({ page }) => {
    await page.goto('/blog/minime-scanning-tips/');

    const blogLink = page.locator('nav[aria-label="Main navigation"] a:has-text("Blog")');
    await expect(blogLink).toHaveAttribute('aria-current', 'page');
  });
});
