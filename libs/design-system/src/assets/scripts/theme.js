const setTheme = (theme) => {
  if (theme === 'dark') {
    document.querySelector('html')?.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.querySelector('html')?.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
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
