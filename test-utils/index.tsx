import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, ReactNode } from 'react';

import {
  AnimationContextProvider,
  ThemeContextProvider,
} from '@jmacd229/design-system';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <AnimationContextProvider>{children}</AnimationContextProvider>
    </ThemeContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};

export * from '@testing-library/react';
export { customRender as render };
