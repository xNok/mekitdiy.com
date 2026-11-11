// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Breadcrumb Navigation', () => {
  test('project single page displays accessible breadcrumbs', async ({ page }) => {
    await page.goto('/projects/minime/');

    const nav = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(nav).toBeVisible();

    const homeLink = nav.locator('a[href="/"]');
    await expect(homeLink).toHaveText('Home');

    const sectionLink = nav.locator('a[href="/projects/"]');
    await expect(sectionLink).toHaveText('projects');

    const currentPage = nav.locator('[aria-current="page"]');
    await expect(currentPage).toBeVisible();
    await expect(currentPage).toContainText('MiniMe - 3D Printed Miniature Of Yourself');
  });

  test('blog single page displays accessible breadcrumbs', async ({ page }) => {
    await page.goto('/blog/minime-scanning-tips/');

    const nav = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(nav).toBeVisible();

    const homeLink = nav.locator('a[href="/"]');
    await expect(homeLink).toHaveText('Home');

    const sectionLink = nav.locator('a[href="/blog/"]');
    await expect(sectionLink).toHaveText('blog');

    const currentPage = nav.locator('[aria-current="page"]');
    await expect(currentPage).toBeVisible();
    await expect(currentPage).toContainText('Top 5 Tips for Scanning for Your MiniMe');
  });

  test('breadcrumbs navigation links work', async ({ page }) => {
    await page.goto('/projects/minime/');

    const sectionLink = page.locator('nav[aria-label="Breadcrumb"] a[href="/projects/"]');
    await sectionLink.click();
    await expect(page).toHaveURL(/\/projects\/$/);
  });
});
