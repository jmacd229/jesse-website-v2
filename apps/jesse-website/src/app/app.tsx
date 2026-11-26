import {
  AnimationToggle,
  Navigation,
  ThemeToggle,
  useAnimations,
} from '@jmacd229/design-system';
import { MotionConfig } from 'motion/react';
import About from '../sections/About/About';
import Home from '../sections/Home/Home';
import Work from '../sections/Work/Work';
import { animationToggle, app, sections, themeToggle } from './app.styles';

export function App() {
  const { areAnimationsEnabled } = useAnimations();

  return (
    <MotionConfig skipAnimations={!areAnimationsEnabled}>
      <div className={app}>
        <Navigation>
          <Navigation.Group>
            <Navigation.Item id="home" icon="Home">
              Home
            </Navigation.Item>
            <Navigation.Item id="work" icon="Work">
              Work
            </Navigation.Item>
            <Navigation.Item id="about" icon="About" isUnavailable>
              About Me
            </Navigation.Item>
          </Navigation.Group>
          <AnimationToggle className={animationToggle} />
          <ThemeToggle className={themeToggle} />
        </Navigation>
        <main>
          <div className={sections}>
            <Home />
            <Work />
            <About />
          </div>
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
