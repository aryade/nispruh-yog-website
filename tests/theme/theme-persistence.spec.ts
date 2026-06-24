import { test, expect, Page, Locator } from '@playwright/test';

function themeToggle(page: Page): Locator {
  return page.getByRole('button').filter({ has: page.locator('svg').first() }).last();
}

/**
 * Drives the theme toggle to the desired state with retries. The click can land
 * before React hydration attaches the handler (a no-op), so we retry the whole
 * "check → maybe click → assert" block until the html class settles.
 */
async function ensureTheme(page: Page, mode: 'dark' | 'light') {
  const html = page.locator('html');
  const toggle = themeToggle(page);
  await expect(toggle).toBeVisible();

  await expect(async () => {
    const cls = (await html.getAttribute('class')) ?? '';
    const isDark = cls.includes('dark');
    if ((mode === 'dark') !== isDark) {
      await toggle.click();
    }
    const after = (await html.getAttribute('class')) ?? '';
    expect(after.includes('dark')).toBe(mode === 'dark');
  }).toPass({ timeout: 8000 });
}

test.describe('Theme Persistence Across Pages', () => {
  test('should persist dark mode when navigating between pages', async ({ page }) => {
    await page.goto('/');
    await ensureTheme(page, 'dark');

    const html = page.locator('html');
    for (const pageUrl of ['/about-kriya-yoga', '/blog', '/contact']) {
      await page.goto(pageUrl);
      await expect(html, `Theme should persist on ${pageUrl}`).toHaveClass(/dark/);
    }
  });

  test('should maintain light mode when navigating', async ({ page }) => {
    await page.goto('/');
    await ensureTheme(page, 'light');

    const html = page.locator('html');
    await page.goto('/blog');
    await expect(html).not.toHaveClass(/dark/);
  });

  test('should preserve theme after page refresh', async ({ page }) => {
    await page.goto('/');
    await ensureTheme(page, 'dark');

    const html = page.locator('html');
    await page.reload();
    await expect(html).toHaveClass(/dark/);
  });
});
