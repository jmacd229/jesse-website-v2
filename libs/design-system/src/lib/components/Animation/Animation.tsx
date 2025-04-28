import lottie, { AnimationConfigWithData, AnimationItem } from 'lottie-web';
import { PropsWithChildren, useEffect, useRef } from 'react';
import animations from '../../../assets/animations';
import { useAnimations } from '../../hooks';

type AnimationProps = PropsWithChildren<{
  className?: string;
  animation?: keyof typeof animations;
  animationConfig?: Partial<AnimationConfigWithData<'svg'>>;
  loopDelay?: number;
  setAnimationRef?: (ref: AnimationItem) => void;
}>;

export const Animation = ({
  children,
  animation,
  animationConfig,
  loopDelay,
  setAnimationRef,
  ...rest
}: AnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { areAnimationsEnabled } = useAnimations();

  useEffect(() => {
    if (!animation && !animationConfig?.animationData) {
      return;
    }
    let animationRef: AnimationItem;
    let autoPlayInterval: NodeJS.Timer | undefined;
    if (containerRef.current) {
      animationRef = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: !loopDelay,
        autoplay: areAnimationsEnabled && !loopDelay,
        animationData: animation
          ? animations[animation]
          : animationConfig?.animationData,
        ...animationConfig,
      });

      if (setAnimationRef) {
        setAnimationRef(animationRef);
      }

      if (areAnimationsEnabled) {
        if (loopDelay) {
          autoPlayInterval = setInterval(() => {
            animationRef.stop();
            animationRef.play();
          }, loopDelay);
        }
      } else {
        // Set animations to their final frames since looping animations will go back to frame 1 and enter/exit animations will be in their final state
        animationRef.setSegment(
          Math.max(animationRef.totalFrames - animationRef.frameRate, 0),
          animationRef.totalFrames - 1
        );
      }
    }
    return () => {
      animationRef.destroy();
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, [
    containerRef,
    animation,
    animationConfig,
    loopDelay,
    setAnimationRef,
    areAnimationsEnabled,
  ]);

  return (
    <div ref={containerRef} {...rest}>
      {children}
    </div>
  );
};
