import { test, expect } from '@playwright/test';

test.describe('Main Pages Navigation', () => {
  test('should navigate to About Kriya Yoga page', async ({ page }) => {
    await page.goto('/');
    
    // Click on About link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /about/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/about-kriya-yoga/);
    
    expect(page.url()).toContain('about-kriya-yoga');
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Blog link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /blog/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/blog/);
    
    expect(page.url()).toContain('blog');
  });

  test('should navigate to Courses/Programs page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Courses link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /courses/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/courses-programs/);
    
    expect(page.url()).toContain('courses-programs');
  });

  test('should navigate to Events/Retreats page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Events link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /events/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/events-retreats/);
    
    expect(page.url()).toContain('events-retreats');
  });

  test('should navigate to Practices page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Practices link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /practices/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/practices/);
    
    expect(page.url()).toContain('practices');
  });

  test('should navigate to Teachings page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Teachings link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /teachings/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/teachings/);
    
    expect(page.url()).toContain('teachings');
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Contact link (in navbar, not footer)
    await page.getByLabel('Primary').getByRole('link', { name: /contact/i }).click();
    
    // Wait for navigation
    await page.waitForURL(/contact/);
    
    expect(page.url()).toContain('contact');
    
    // Verify contact form is visible
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should navigate back using browser back button', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to a different page
    await page.getByLabel('Primary').getByRole('link', { name: /about/i }).click();
    await page.waitForURL(/about-kriya-yoga/);
    
    // Go back
    await page.goBack();
    
    // Should be back on home page
    await expect(page).toHaveURL('/');
  });
});
