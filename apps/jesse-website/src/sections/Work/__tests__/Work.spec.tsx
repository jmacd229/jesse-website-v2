import { fireEvent, render, screen } from 'test-utils';

import Work from '../Work';

describe('Work Section', () => {
  test('should be able to expand and collapse principles', async () => {
    const PRINCIPLE_TITLE = 'Code quality = Overall quality';
    const PRINCIPLE_DESCRIPTION = /I prioritize reusable/;
    const { user } = render(<Work />);

    expect(screen.getByText(PRINCIPLE_DESCRIPTION)).not.toBeVisible();
    await user.click(screen.getByRole('button', { name: PRINCIPLE_TITLE }));

    expect(screen.getByText(PRINCIPLE_DESCRIPTION)).toBeVisible();
    await user.click(screen.getByText(PRINCIPLE_DESCRIPTION));

    expect(screen.getByText(PRINCIPLE_DESCRIPTION)).not.toBeVisible();
  });

  test('should be able to view and dismiss the work description panel on desktop', async () => {
    const WORK_ITEM_TITLE = /Personal Website V2/;
    const { user } = render(<Work />);

    expect(
      screen.queryByRole('heading', { name: WORK_ITEM_TITLE })
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: WORK_ITEM_TITLE }));

    expect(
      await screen.findByRole('heading', { name: 'Personal Website Version 2' })
    ).toBeVisible();
    await user.click(
      screen.getByRole('button', { name: 'Close Personal Website' })
    );

    expect(
      screen.queryByRole('heading', { name: WORK_ITEM_TITLE })
    ).not.toBeInTheDocument();
  });

  test('should be able to view and dismiss the work description dialog on mobile', async () => {
    window.innerWidth = 575;
    const WORK_ITEM_TITLE = /Personal Website V2/;
    fireEvent(window, new Event('resize'));
    const { user } = render(<Work />);

    expect(
      screen.queryByRole('dialog', { name: WORK_ITEM_TITLE })
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: WORK_ITEM_TITLE }));

    expect(
      await screen.findByRole('dialog', { name: 'Personal Website Version 2' })
    ).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Close dialog' }));

    expect(
      screen.queryByRole('dialog', { name: WORK_ITEM_TITLE })
    ).not.toBeInTheDocument();
  });
});
