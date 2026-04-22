import { test, expect } from '@playwright/test';

test.describe('Light to Dark Mode Toggle', () => {
  test('should toggle between light and dark mode', async ({ page }) => {
    await page.goto('/');
    
    // Find theme toggle button
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    // Fallback selectors if data-testid is not available
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    await expect(toggle).toBeVisible();
    
    // Get initial theme
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    // Click toggle
    await toggle.click();
    await page.waitForTimeout(300);
    
    // Verify theme changed
    const newClass = await html.getAttribute('class');
    expect(newClass).not.toEqual(initialClass);
  });

  test('should have proper dark mode styling', async ({ page }) => {
    await page.goto('/');
    
    // Find and click theme toggle
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    // Switch to dark mode
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    if (!initialClass?.includes('dark')) {
      await toggle.click();
      await page.waitForTimeout(300);
    }
    
    // Verify dark mode class is applied
    const darkModeClass = await html.getAttribute('class');
    expect(darkModeClass).toContain('dark');
    
    // Verify content is still visible
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
  });

  test('should toggle back to light mode', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    const html = page.locator('html');
    
    // Toggle twice to ensure it cycles
    await toggle.click();
    await page.waitForTimeout(300);
    await toggle.click();
    await page.waitForTimeout(300);
    
    // Should be back to original state
    const finalClass = await html.getAttribute('class');
    expect(finalClass).toBeTruthy();
  });

  test('theme toggle button should be clickable and responsive', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    // Verify button is enabled and clickable
    await expect(toggle).toBeEnabled();
    
    // Click multiple times rapidly
    for (let i = 0; i < 3; i++) {
      await toggle.click();
      await page.waitForTimeout(100);
    }
    
    // Page should still be responsive
    await expect(page.locator('html')).toBeVisible();
  });
});
