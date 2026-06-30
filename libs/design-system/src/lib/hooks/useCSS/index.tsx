import { useCallback, useMemo } from 'react';
import { useTheme } from '../useTheme';
import { PaletteColor } from './types';

export const useCSS = () => {
  const { currentTheme } = useTheme();
  const rootStyles = useMemo(
    () => getComputedStyle(document.documentElement),
    // currentTheme isn't read directly, but its change is what invalidates the computed styles
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTheme]
  );

  const getCSSCustomProperty = useCallback(
    (property: `--${string}`) => rootStyles?.getPropertyValue(property),
    [rootStyles]
  );

  return {
    getCSSCustomProperty,
    getCSSColor: (property: PaletteColor) =>
      (getCSSCustomProperty(property) ?? '#FFFFFF') as `#${string}`,
  };
};
