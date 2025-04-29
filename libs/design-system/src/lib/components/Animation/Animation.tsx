import lottie, { AnimationConfigWithData, AnimationItem } from 'lottie-web';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import animations from '../../../assets/animations';
import { useAnimations } from '../../hooks';

type AnimationProps = PropsWithChildren<{
  className?: string;
  animation?: keyof typeof animations;
  animationConfig?: Partial<AnimationConfigWithData<'svg'>>;
  loopDelay?: number;
}>;

export const Animation = ({
  children,
  animation,
  animationConfig,
  loopDelay,
  ...rest
}: AnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationRef, setAnimationRef] = useState<AnimationItem>();

  const { areAnimationsEnabled } = useAnimations();

  // Load initial Animation item via lottie
  useEffect(() => {
    if (!animation && !animationConfig?.animationData) {
      return;
    }
    let animationItem: AnimationItem | undefined;
    if (containerRef.current) {
      animationItem = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: !loopDelay,
        autoplay: !loopDelay,
        animationData: animation
          ? animations[animation]
          : animationConfig?.animationData,
        ...animationConfig,
      });
      setAnimationRef(animationItem);
    }
    return () => {
      animationItem?.destroy();
      setAnimationRef(undefined);
    };
  }, [containerRef, animation, animationConfig, loopDelay]);

  // In the case of a loopDelay, we set an interval to play the animation at
  useEffect(() => {
    let timer: NodeJS.Timer | undefined;
    if (animationRef && loopDelay && areAnimationsEnabled) {
      timer = setInterval(() => {
        animationRef?.stop();
        animationRef?.play();
      }, loopDelay);
    }
    return () => {
      clearInterval(timer);
    };
  }, [loopDelay, animationRef, areAnimationsEnabled]);

  // When enabling and disabling animations different behaviours are necessary
  useEffect(() => {
    if (animationRef) {
      if (areAnimationsEnabled) {
        // Only need to play if the animation was looping.
        // If it was on an interval, the interval will be restarted in the previous use-effect
        if (animationRef.loop) {
          animationRef.play();
        }
      } else {
        if (animationRef.loop) {
          // Only need to pause if the animation was looping.
          // If it was on an interval, it will be cleaned up as part of previous use-effect callback
          animationRef.pause();
        } else {
          // For non-looping animations we set them to their final frame since some animations have a "reveal effect" they are
          // invisible in initial frames.
          animationRef.goToAndStop(animationRef.totalFrames, true);
        }
      }
    }
  }, [areAnimationsEnabled, animationRef, animationConfig]);

  return (
    <div ref={containerRef} {...rest}>
      {children}
    </div>
  );
};
