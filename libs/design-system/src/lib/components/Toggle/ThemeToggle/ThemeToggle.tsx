import { HTMLProps, useMemo } from 'react';
import { useTheme } from '../../../hooks';
import { Animation } from '../../Animation/Animation';
import { Toggle } from '../Toggle';
import { animation } from './ThemeToggle.styles';

export const ThemeToggle = ({ ...rest }: HTMLProps<HTMLDivElement>) => {
  const { setTheme, currentTheme } = useTheme();

  const isActive = currentTheme === 'dark';

  const toggleTheme = () => setTheme(isActive ? 'light' : 'dark');

  const animationConfig = useMemo(
    () => ({
      enabled: (
        <Animation
          className={animation}
          animation="dark"
          animationConfig={{ loop: false }}
        />
      ),
      disabled: (
        <Animation
          className={animation}
          animation="light"
          animationConfig={{ loop: false }}
        />
      ),
    }),
    [],
  );

  return (
    <Toggle
      {...rest}
      onToggle={toggleTheme}
      display={animationConfig}
      initialState={currentTheme === 'dark'}
      labelValue={{
        enabled: 'Current theme: dark',
        disabled: 'Current theme: light',
      }}
      hideLabel={true}
    />
  );
};
