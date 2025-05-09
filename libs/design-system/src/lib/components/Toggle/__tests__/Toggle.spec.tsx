import { render, screen, waitFor } from 'test-utils';

import { Toggle } from '../Toggle';

describe('Toggle Component', () => {
  test('should load initial state from prop', async () => {
    render(<Toggle initialState={true} labelValue="test" />);

    expect(screen.getByRole('switch')).toBeChecked();
  });

  test('should call onToggle callback when clicked', async () => {
    const onToggle = vitest.fn();
    const { user } = render(<Toggle onToggle={onToggle} labelValue="test" />);
    const toggle = screen.getByRole('switch');

    expect(toggle).not.toBeChecked();
    user.click(toggle);

    await waitFor(() => expect(toggle).toBeChecked());
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith({
      isActive: true,
    });
  });
});
