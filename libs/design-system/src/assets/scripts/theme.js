const META_COLORS = {light: '#f2f2f2', dark: '#262626'};

const setTheme = (theme) => {
  if (theme === 'dark') {
    document.querySelector('html')?.classList.add('dark');
  } else {
    document.querySelector('html')?.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
};
window.setTheme = setTheme;

const parseTheme = () => {
  // Attempt to retrieve saved settings if they're valid
  const theme = localStorage.getItem('theme');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
  // Otherwise use system defaults
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};
window.parseTheme = parseTheme;
setTheme(parseTheme());
