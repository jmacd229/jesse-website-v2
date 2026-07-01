import { expect, Page, test } from '@playwright/test';
import { waitForImagesLoaded } from './utils/waitForImagesLoaded';

test.describe('Work Section', () => {
  const navigateToWorkSection = async (page: Page) => {
    await page.goto('/');
    await page
      .getByRole('heading', { name: 'My Work' })
      .evaluate((heading) => heading.scrollIntoView());
    await waitForImagesLoaded(page);
  };

  test('light mode matches snapshot', async ({ page }) => {
    await navigateToWorkSection(page);
    expect(await page.screenshot()).toMatchSnapshot('light.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('dark mode matches snapshot', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await navigateToWorkSection(page);

    expect(await page.screenshot()).toMatchSnapshot('dark.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
