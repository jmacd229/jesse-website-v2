import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import warnOnMissingWindowScript from '../warnOnMissingWindowScript';
import { Theme, ThemeContextProps } from './types';

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'light',
  setTheme: () => void 0,
});

// Ensure we safely attempt to call window functions
const parseTheme = warnOnMissingWindowScript(
  'parseTheme',
  () => 'light' as Theme
);
const setTheme = warnOnMissingWindowScript('setTheme');

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<Theme | undefined>();

  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme ?? parseTheme(),
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
