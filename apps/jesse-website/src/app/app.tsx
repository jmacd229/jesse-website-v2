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
import styles from './app.module.css';

export function App() {
  const { areAnimationsEnabled } = useAnimations();

  return (
    <MotionConfig skipAnimations={!areAnimationsEnabled}>
      <div className={styles['app']}>
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
          <AnimationToggle className={styles['animation-toggle']} />
          <ThemeToggle className={styles['theme-toggle']} />
        </Navigation>
        <main>
          <div className={styles['sections']}>
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
