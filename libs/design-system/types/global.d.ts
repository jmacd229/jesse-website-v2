type Theme = 'light' | 'dark';

declare global {
  interface Window {
    setTheme: (theme: Theme) => void;
    parseTheme: () => Theme;
    setAnimations: (isEnabled: boolean) => void;
    getAnimationsSetting: () => { isEnabled: boolean };
  }
}

export {};
