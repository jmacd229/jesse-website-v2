const setAnimations = (isEnabled) => {
  if (isEnabled) {
    document.querySelector('html')?.classList.remove('no-motion');
    localStorage.removeItem('animations-disabled');
  } else {
    document.querySelector('html')?.classList.add('no-motion');
    localStorage.setItem('animations-disabled', true);
  }
};
window.setAnimations = setAnimations;

const getAnimationsSetting = () => {
  // Attempt to retrieve saved settings if they're valid
  const isDisabled = localStorage.getItem('animations-disabled');
  if (isDisabled) {
    return { isEnabled: false };
  }
  // Otherwise use system defaults
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion)').matches
  ) {
    return { isEnabled: false };
  }

  return { isEnabled: true };
};
window.getAnimationsSetting = getAnimationsSetting;
setAnimations(getAnimationsSetting().isEnabled);
