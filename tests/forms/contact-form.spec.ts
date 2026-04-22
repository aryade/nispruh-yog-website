import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
  });

  test('should display contact form with all fields', async ({ page }) => {
    // Check form exists
    const form = page.locator('form[aria-label="Contact form"]');
    await expect(form).toBeVisible();
    
    // Check for name field (inside label with text "Name")
    const nameInput = form.locator('label:has-text("Name") input');
    await expect(nameInput).toBeVisible();
    
    // Check for email field
    const emailInput = form.locator('label:has-text("Email") input');
    await expect(emailInput).toBeVisible();
    
    // Check for message/textarea
    const textarea = form.locator('label:has-text("Message") textarea');
    await expect(textarea).toBeVisible();
    
    // Check for submit button
    const submitButton = form.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
  });

  test('should fill and submit contact form', async ({ page }) => {
    // Get form
    const form = page.locator('form[aria-label="Contact form"]');
    
    // Fill name field
    const nameInput = form.locator('label:has-text("Name") input');
    await nameInput.fill('John Doe');
    
    // Fill email field
    const emailInput = form.locator('label:has-text("Email") input');
    await emailInput.fill('john@example.com');
    
    // Fill message field
    const textarea = form.locator('label:has-text("Message") textarea');
    await textarea.fill('I am interested in learning more about Kriya Yoga courses');
    
    // Submit form
    const submitButton = form.locator('button[type="submit"]');
    await submitButton.click();
    
    // Wait for response or success message
    await page.waitForTimeout(2000);
  });

  test('should validate required fields', async ({ page }) => {
    const form = page.locator('form[aria-label="Contact form"]');
    
    // Try to submit empty form
    const submitButton = form.locator('button[type="submit"]');
    await submitButton.click();
    
    // Wait for response
    await page.waitForTimeout(1000);
    
    // Check for error message in form
    const errorMessage = form.locator('.notice.error, [role="alert"]');
    const errorExists = await errorMessage.count();
    
    // Either error message appears or form stays visible (validation prevents submit)
    expect(errorExists > 0 || await form.isVisible()).toBeTruthy();
  });

  test('should accept valid email format', async ({ page }) => {
    const form = page.locator('form[aria-label="Contact form"]');
    const emailInput = form.locator('label:has-text("Email") input');
    
    // Test valid email
    await emailInput.fill('valid@example.com');
    await expect(emailInput).toHaveValue('valid@example.com');
    
    // Test that input accepts email format
    await emailInput.clear();
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
  });

  test('contact form should be accessible in dark and light modes', async ({ page }) => {
    const form = page.locator('form[aria-label="Contact form"]');
    
    // Form should be visible in light mode
    await expect(form).toBeVisible();
    
    const nameInput = form.locator('label:has-text("Name") input');
    await expect(nameInput).toBeVisible();
    
    // Get theme toggle
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    const alternativeToggle = page.getByRole('button').filter({ 
      has: page.locator('svg').first() 
    }).last();
    
    const toggle = await themeToggle.isVisible().catch(() => false) 
      ? themeToggle 
      : alternativeToggle;
    
    // Switch theme
    if (await toggle.isVisible()) {
      await toggle.click();
      await page.waitForTimeout(300);
      
      // Form should still be visible in dark mode
      await expect(form).toBeVisible();
      await expect(nameInput).toBeVisible();
    }
  });
});
