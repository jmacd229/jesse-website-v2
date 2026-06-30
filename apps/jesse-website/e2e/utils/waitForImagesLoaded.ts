import { Page } from '@playwright/test';

export const waitForImagesLoaded = (page: Page) =>
  page.waitForFunction(() =>
    Array.from(document.images).every(
      (img) => img.complete && img.naturalWidth > 0
    )
  );
