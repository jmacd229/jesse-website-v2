import darkAnimation from './dark.json';
import gearAnimation from './dynamic/gear';
import getAnimation from './dynamic/getAnimation';
import hammerAnimation from './dynamic/hammer';
import htmlAnimation from './dynamic/html';
import lightAnimation from './light.json';
import rocketAnimation from './rocket.json';

export const dynamicAnimations = {
  htmlAnimation,
  gearAnimation,
  hammerAnimation,
};

export { type HexString } from './dynamic/types';

export { getAnimation };

export default {
  rocket: rocketAnimation,
  html: htmlAnimation(),
  light: lightAnimation,
  dark: darkAnimation,
};
