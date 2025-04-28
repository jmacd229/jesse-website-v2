import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AnimationContextProps } from './types';

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
      window.setAnimations(areAnimationsEnabled);
    }
  }, [areAnimationsEnabled]);

  return (
    <AnimationContext.Provider
      value={{
        areAnimationsEnabled:
          areAnimationsEnabled ?? window.getAnimationsSetting().isEnabled,
        toggleAnimations: () =>
          setAnimationsEnabled(
            !(areAnimationsEnabled ?? window.getAnimationsSetting().isEnabled)
          ),
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationContext);
