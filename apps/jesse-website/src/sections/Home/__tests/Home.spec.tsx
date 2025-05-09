import { render, screen } from 'test-utils';

import Home from '../Home';

describe('Home Section', () => {
  test('should be able to change the theme color of the side graphic upon inputting a valid hex color', async () => {
    const { user } = render(<Home />);
    const inputField = screen.getByRole('textbox', {
      name: 'Theme customization hex value editor',
    });

    // 6 digits
    await user.clear(inputField);
    await user.type(inputField, 'FF00FF');

    expect(screen.getByText('.jesse-dev')).toHaveStyle({ color: '#FF00FF' });

    // 3 digits
    await user.clear(inputField);
    await user.type(inputField, 'A9F');

    expect(screen.getByText('.jesse-dev')).toHaveStyle({ color: '#A9F' });
  });

  test('should not change the theme color upon inputting an invalid hex color', async () => {
    const { user } = render(<Home />);
    const inputField = screen.getByRole('textbox', {
      name: 'Theme customization hex value editor',
    });

    await user.clear(inputField);
    await user.type(inputField, 'HELLO');

    expect(screen.getByText('.jesse-dev')).toHaveStyle({ color: '#8500BB' });
  });
});
