import { test, expect } from '@playwright/test';

test.describe('Theme Persistence Across Pages', () => {
  test('should persist dark mode when navigating between pages', async ({ page }) => {
    await page.goto('/');
    
    // Switch to dark mode
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    // Toggle to dark mode if not already
    if (!initialClass?.includes('dark')) {
      await toggle.click();
      await page.waitForTimeout(300);
    }
    
    const darkClass = await html.getAttribute('class');
    expect(darkClass).toContain('dark');
    
    // Navigate to different pages
    const pages = ['/about-kriya-yoga', '/blog', '/contact'];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      await page.waitForLoadState('networkidle');
      
      const currentClass = await html.getAttribute('class');
      expect(currentClass).toContain('dark', `Theme should persist on ${pageUrl}`);
    }
  });

  test('should maintain light mode when navigating', async ({ page }) => {
    await page.goto('/');
    
    // Ensure light mode is active
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    const html = page.locator('html');
    let currentClass = await html.getAttribute('class');
    
    // Switch to dark and back to light if needed
    if (currentClass?.includes('dark')) {
      await toggle.click();
      await page.waitForTimeout(300);
      currentClass = await html.getAttribute('class');
    }
    
    expect(!currentClass?.includes('dark')).toBeTruthy();
    
    // Navigate and verify light mode persists
    await page.goto('/blog');
    const blogClass = await html.getAttribute('class');
    expect(!blogClass?.includes('dark')).toBeTruthy();
  });

  test('should preserve theme after page refresh', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    // Switch theme
    await toggle.click();
    await page.waitForTimeout(300);
    
    const beforeRefresh = await html.getAttribute('class');
    
    // Refresh page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Check if theme persisted
    const afterRefresh = await html.getAttribute('class');
    expect(afterRefresh).toEqual(beforeRefresh);
  });
});
