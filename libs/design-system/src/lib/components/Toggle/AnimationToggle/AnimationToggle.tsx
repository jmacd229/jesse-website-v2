import { HTMLProps } from 'react';
import { useAnimations } from '../../../hooks';
import Pause from '../../../icons/Pause';
import Play from '../../../icons/Play';
import { Toggle } from '../Toggle';

export const AnimationToggle = ({ ...rest }: HTMLProps<HTMLDivElement>) => {
  const { toggleAnimations, areAnimationsEnabled } = useAnimations();

  return (
    <Toggle
      {...rest}
      onToggle={toggleAnimations}
      display={{
        enabled: <Play aria-hidden="true" />,
        disabled: <Pause aria-hidden="true" />,
      }}
      initialState={areAnimationsEnabled}
      labelValue={{
        enabled: 'Animations Enabled',
        disabled: 'Animations Disabled',
      }}
    />
  );
};
