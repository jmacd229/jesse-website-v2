export type Theme = 'light' | 'dark';

export type ThemeContextProps = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};
