import { HexString, LottieColorDefinition } from './types';

/**
 * Lottie color values are stored as a number between 0-1 representing 0-255 for RGB
 */
const hexValueToLottie = (hexValue: string) => parseInt(hexValue, 16) / 255;

const hexColorToLottie = (color: HexString): LottieColorDefinition => {
  const [r, g, b] =
    color.length === 7
      ? [
          hexValueToLottie(color.substring(1, 3)),
          hexValueToLottie(color.substring(3, 5)),
          hexValueToLottie(color.substring(5, 7)),
        ]
      : [
          hexValueToLottie(color[1] + color[1]),
          hexValueToLottie(color[2] + color[2]),
          hexValueToLottie(color[3] + color[3]),
        ];
  return [r, g, b, 1];
};

/**
 * This function dynamically builds the Lottie animation. Doing so, allows us to change the colors within, and to adapt to light/dark mode
 */
export default (
  lottieJSON: (...colors: LottieColorDefinition[]) => unknown,
  ...colors: HexString[]
) => {
  const newColors = colors.map(hexColorToLottie);

  return lottieJSON(...newColors);
};
