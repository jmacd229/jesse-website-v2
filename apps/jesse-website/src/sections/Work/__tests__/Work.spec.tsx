import { render, screen } from 'test-utils';

import Work from '../Work';

describe('Work Section', () => {
  test('should be able to expand and collapse principles', async () => {
    const PRINCIPLE_TITLE = 'Code quality = Overall quality';
    const PRINCIPLE_DESCRIPTION = /I prioritize reusable/;
    const { user } = render(<Work />);

    expect(screen.getByText(PRINCIPLE_DESCRIPTION)).not.toBeVisible();
    await user.click(screen.getByRole('button', { name: PRINCIPLE_TITLE }));

    expect(screen.getByText(PRINCIPLE_DESCRIPTION)).toBeVisible();
  });
});
