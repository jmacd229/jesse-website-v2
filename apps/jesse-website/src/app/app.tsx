import {
  AnimationToggle,
  Navigation,
  ThemeToggle,
} from '@jesse-website-v2/design-system';
import Home from '../sections/Home/Home';
import Work from '../sections/Work/Work';
import styles from './app.module.css';

export function App() {
  return (
    <>
      <Navigation>
        <Navigation.Group>
          <Navigation.Item id="home" icon="Home">
            Home
          </Navigation.Item>
          <Navigation.Item id="work" icon="Work">
            Work
          </Navigation.Item>
          <Navigation.Item id="about" icon="About">
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
        </div>
      </main>
    </>
  );
}

export default App;
