import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Theme, ThemeContextProps } from './types';

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'light',
  setTheme: () => void 0,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<Theme | undefined>();

  useEffect(() => {
    if (currentTheme) {
      window.setTheme(currentTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme ?? (window.parseTheme() as Theme),
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
