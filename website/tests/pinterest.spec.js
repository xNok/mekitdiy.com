// @ts-check
const { test, expect } = require('@playwright/test');

// Pinterest domain verification token
const PINTEREST_DOMAIN_VERIFICATION_TOKEN = 'b2a76553d3605a9602f0f4409f059530';

test.describe('Pinterest Integration', () => {
  test('should have Pinterest domain verification meta tag', async ({ page }) => {
    await page.goto('/');
    
    // Check for Pinterest domain verification meta tag
    const metaTag = await page.locator('meta[name="p:domain_verify"]');
    await expect(metaTag).toHaveAttribute('content', PINTEREST_DOMAIN_VERIFICATION_TOKEN);
  });

  // Skipping Pinterest embed tests - they are unreliable due to external Pinterest widget loading
  test.skip('Mini Me project page should have Pinterest board embed', async ({ page }) => {
    await page.goto('/projects/minime/');
    
    // Wait for page to load
    await expect(page.locator('h1')).toContainText('MiniMe');
    
    // Check for Pinterest embed (element exists in DOM)
    const pinterestEmbed = await page.locator('a[data-pin-do="embedBoard"]').first();
    await expect(pinterestEmbed).toBeAttached();
    await expect(pinterestEmbed).toHaveAttribute('href', /mini-me/);
    
    // Check for Pinterest script
    const pinterestScript = await page.locator('script[src*="pinit.js"]').first();
    await expect(pinterestScript).toBeAttached();
  });

  test.skip('Mini Me project page should have 3D Printed board embed', async ({ page }) => {
    await page.goto('/projects/minime/');
    
    // Check for 3D Printed Pinterest board
    const pinterestEmbeds = await page.locator('a[data-pin-do="embedBoard"]');
    const count = await pinterestEmbeds.count();
    
    // Should have at least 2 boards (mini-me and 3d-printed)
    expect(count).toBeGreaterThanOrEqual(2);
    
    // Check for 3D printed board URL
    const has3dBoard = await page.locator('a[data-pin-do="embedBoard"][href*="3d-printed"]').count();
    expect(has3dBoard).toBeGreaterThan(0);
  });

  test.skip('MKB project page should have Pinterest board embed', async ({ page }) => {
    await page.goto('/projects/mkb/');
    
    // Wait for page to load
    await expect(page.locator('h1')).toContainText('MKB');
    
    // Check for Pinterest embed (element exists in DOM)
    const pinterestEmbed = await page.locator('a[data-pin-do="embedBoard"]').first();
    await expect(pinterestEmbed).toBeAttached();
    await expect(pinterestEmbed).toHaveAttribute('href', /mkb/);
    
    // Check for Pinterest script
    const pinterestScript = await page.locator('script[src*="pinit.js"]').first();
    await expect(pinterestScript).toBeAttached();
  });

  test.skip('Pinterest boards should have correct embed attributes', async ({ page }) => {
    await page.goto('/projects/minime/');
    
    const pinterestEmbed = await page.locator('a[data-pin-do="embedBoard"]').first();
    
    // Check embed has required attributes
    await expect(pinterestEmbed).toHaveAttribute('data-pin-do', 'embedBoard');
    await expect(pinterestEmbed).toHaveAttribute('data-pin-board-width', '400');
    await expect(pinterestEmbed).toHaveAttribute('data-pin-scale-height', '240');
    await expect(pinterestEmbed).toHaveAttribute('data-pin-scale-width', '80');
  });
});
