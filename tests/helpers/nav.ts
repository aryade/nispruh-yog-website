import { Page, Locator, expect } from '@playwright/test';

/**
 * Returns a locator for the active navbar navigation, opening the mobile
 * hamburger drawer first when the desktop nav is hidden (small viewports).
 * This lets the same navigation specs run on both desktop and mobile projects.
 */
export async function openNav(page: Page): Promise<Locator> {
  const desktopNav = page.getByRole('navigation', { name: 'Primary' });
  if (await desktopNav.isVisible().catch(() => false)) {
    return desktopNav;
  }
  // Mobile: open the hamburger drawer.
  await page.getByRole('button', { name: /open menu/i }).click();
  const mobileNav = page.getByRole('navigation', { name: 'Mobile primary' });
  await expect(mobileNav).toBeVisible();
  return mobileNav;
}

/** Clicks a navbar link by accessible name, handling desktop and mobile layouts. */
export async function clickNavLink(page: Page, name: RegExp): Promise<void> {
  const nav = await openNav(page);
  await nav.getByRole('link', { name }).click();
}
