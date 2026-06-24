import { test, expect } from '@playwright/test';
import { clickNavLink } from '../helpers/nav';

test.describe('Main Pages Navigation', () => {
  test('should navigate to About Kriyayog page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /about/i);
    await page.waitForURL(/about-kriya-yoga/);
    expect(page.url()).toContain('about-kriya-yoga');
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /blog/i);
    await page.waitForURL(/blog/);
    expect(page.url()).toContain('blog');
  });

  test('should navigate to Courses/Programs page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /courses/i);
    await page.waitForURL(/courses-programs/);
    expect(page.url()).toContain('courses-programs');
  });

  test('should navigate to Events/Retreats page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /events/i);
    await page.waitForURL(/events-retreats/);
    expect(page.url()).toContain('events-retreats');
  });

  test('should navigate to Practices page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /practices/i);
    await page.waitForURL(/practices/);
    expect(page.url()).toContain('practices');
  });

  test('should navigate to Teachings page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /teachings/i);
    await page.waitForURL(/teachings/);
    expect(page.url()).toContain('teachings');
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /contact/i);
    await page.waitForURL(/contact/);
    expect(page.url()).toContain('contact');

    // Verify contact form is visible
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should navigate back using browser back button', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, /about/i);
    await page.waitForURL(/about-kriya-yoga/);

    // Go back
    await page.goBack();

    // Should be back on home page
    await expect(page).toHaveURL('/');
  });
});
