import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation', () => {
  test('should load home page with hero section and navigation', async ({ page }) => {
    await page.goto('/');
    
    // Verify page loaded successfully
    await expect(page).toHaveURL('/');
    
    // Check hero section is visible
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    // Check navigation bar is present
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    
    // Check footer is visible (use more specific selector)
    const footer = page.locator('footer[role="contentinfo"]');
    await expect(footer).toBeVisible();
  });

  test('should display navigation links', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = [
      'About',
      'Blog',
      'Courses',
      'Events',
      'Practices',
      'Teachings',
      'Contact'
    ];

    for (const linkText of navLinks) {
      const link = page.getByLabel('Primary').getByRole('link', { name: new RegExp(linkText, 'i') });
      await expect(link).toBeVisible();
    }
  });

  test('should scroll through home page sections', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to view different sections
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(500);
    
    // Verify page is scrollable
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const windowHeight = await page.evaluate(() => window.innerHeight);
    expect(scrollHeight).toBeGreaterThan(windowHeight);
  });

  test('should have footer visible at bottom', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    
    const footer = page.locator('footer[role="contentinfo"]');
    await expect(footer).toBeInViewport();
  });
});
