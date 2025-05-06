/*
 * Used when creating button-like elements that don't use the "button" semantic element. This allows elements to perform functions both on click and via the keyboard
 */
export const OnActivateProps = (
  eventHandler: (e?: React.KeyboardEvent | React.MouseEvent) => void
) => ({
  onClick: eventHandler,
  onKeyDown: (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault(); // prevent scrolling when pressing space
      eventHandler(e);
    }
  },
});
