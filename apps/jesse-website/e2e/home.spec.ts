import { expect, test } from '@playwright/test';

test.describe('Home Section', () => {
  test('light mode matches snapshot', async ({ page }) => {
    await page.goto('/');

    expect(await page.screenshot()).toMatchSnapshot('light.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('dark mode matches snapshot', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    expect(await page.screenshot()).toMatchSnapshot('dark.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
