import { ToggleProps } from './Toggle';

/**
 * Checks if a label provided to the component is just a string or has different enabled/disabled values
 */
export const isBasicLabel = (
  label: ToggleProps['labelValue']
): label is string => typeof label === 'string';

// We use REM in the CSS to do responsive sizing based on screen-width
// Therefore, in order to properly calculate the distances for the label we need to convert pixels to REMs
// In order to do that we need to know the current REM value (ie. 16px at its max and 10px at its smallest)
export const getCurrentRemRatio = () =>
  parseFloat(getComputedStyle(document.documentElement).fontSize);

// Gets the value that the label has already been translated
const getTranslateXValue = (transform: string) =>
  parseFloat(transform.match(/translateX\((-?\d+(\.\d+)?)rem\)/)?.[1] ?? '0');

const buildTranslateXValue = (xValue: number) =>
  `transform: translateX(${xValue}rem)`;

/**
 * Used to ensure that the label is going out of the horizontal bounds of the window
 * @param label The HTML Element reference to the label
 * @param staticWidth The initially calculated width of the label. This value should not change even though the label expands and collapses
 * @param currentRemRatio The current font-size on the HTML tag. Used to convert pixels to rems
 * @param lastWindowWidth The last screen-size at which the calculation was run. Is used to exit early if no changes have occurred
 * @returns the windowWidth that the current label position was calculated at, to be fed in as lastWindowWidth on next call
 */
export const centerLabel = (
  label: HTMLDivElement | null,
  staticWidth: number,
  currentRemRatio: number,
  lastWindowWidth: number
): number | undefined => {
  if (!label) {
    return;
  }

  const windowWidth = window.innerWidth / currentRemRatio;

  // The label position has already been calculated, no need to recalculate
  if (lastWindowWidth === windowWidth) {
    return;
  }

  const labelLeftPosition =
    label.getBoundingClientRect().left / currentRemRatio;
  const labelRightPosition = labelLeftPosition + staticWidth;

  // If we have already moved the label at all, that needs to be taken into account
  const currentOffset = label.style.transform
    ? getTranslateXValue(label.style.transform)
    : 0;

  // Label is off-screen to the left
  if (labelLeftPosition < 0) {
    label.style = buildTranslateXValue(
      (labelLeftPosition - currentOffset) * -1
    );
    // Label is off-screen to the right
  } else if (labelRightPosition > windowWidth) {
    label.style = buildTranslateXValue(
      (labelRightPosition - windowWidth - currentOffset) * -1
    );
    // Label is on-screen no adjustments necessary
  } else {
    label.style = '';
  }

  return windowWidth;
};
