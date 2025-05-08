/*
Used to attempt to call a function attached to the window.
Since these scripts have to be loaded manually (often in the <head> tag for fast loading)
It's possible a user could forget to include them. This is a non-intrusive way to warn that the scripts are not there
An optional callback can be provided to perform default behaviour in the absence of the script
*/
export default <T>(scriptName: string, callbackWhenScriptMissing?: () => T) =>
  Object.getOwnPropertyNames(window).includes(scriptName)
    ? window[scriptName as keyof Window]
    : () => {
        console.error(
          `A window function was called without the script being available. Please ensure you include the script to call window.${scriptName}. Scripts should be found in src/assets/scripts`
        );
        return callbackWhenScriptMissing?.();
      };
