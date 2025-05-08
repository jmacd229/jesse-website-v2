import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import warnOnMissingWindowScript from '../warnOnMissingWindowScript';
import { AnimationContextProps } from './types';

// Ensure we safely attempt to call window functions
const getAnimationsSetting = warnOnMissingWindowScript(
  'getAnimationsSetting',
  () => ({ isEnabled: true })
);
const setAnimations = warnOnMissingWindowScript('setAnimations');

const AnimationContext = createContext<AnimationContextProps>({
  areAnimationsEnabled: true,
  toggleAnimations: () => void 0,
});

export const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [areAnimationsEnabled, setAnimationsEnabled] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (areAnimationsEnabled !== undefined) {
      setAnimations(areAnimationsEnabled);
    }
  }, [areAnimationsEnabled]);

  return (
    <AnimationContext.Provider
      value={{
        areAnimationsEnabled:
          areAnimationsEnabled ?? getAnimationsSetting().isEnabled,
        toggleAnimations: () =>
          setAnimationsEnabled(
            !(areAnimationsEnabled ?? getAnimationsSetting().isEnabled)
          ),
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationContext);
