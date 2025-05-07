import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('Can navigate to Work section', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Work' })
      .click();

    await expect(
      page.getByRole('heading', { name: 'My Work' })
    ).toBeInViewport();
    await expect(
      page.getByRole('heading', { name: "Hi, I'm Jesse" })
    ).not.toBeInViewport();
  });

  test('Can navigate to Home section', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('heading', { name: 'My Work' })
      .evaluate((heading) => heading.scrollIntoView());
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Home' })
      .click();

    await expect(
      page.getByRole('heading', { name: "Hi, I'm Jesse" })
    ).toBeInViewport();
    await expect(
      page.getByRole('heading', { name: 'My Work' })
    ).not.toBeInViewport();
  });
});
