import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../useTheme';
import { PaletteColor } from './types';

export const useCSS = () => {
  const { currentTheme } = useTheme();
  const [rootStyles, setRootStyles] = useState<CSSStyleDeclaration>();

  useEffect(() => {
    setRootStyles(getComputedStyle(document.documentElement));
  }, [currentTheme]);

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
