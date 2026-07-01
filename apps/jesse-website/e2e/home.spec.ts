import { expect, test } from '@playwright/test';
import { waitForImagesLoaded } from './utils/waitForImagesLoaded';

test.describe('Home Section', () => {
  test('light mode matches snapshot', async ({ page }) => {
    await page.goto('/');
    await waitForImagesLoaded(page);

    expect(await page.screenshot()).toMatchSnapshot('light.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('dark mode matches snapshot', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await waitForImagesLoaded(page);

    expect(await page.screenshot()).toMatchSnapshot('dark.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
