import {
  AnimationToggle,
  Navigation,
  ThemeToggle,
} from '@jesse-website-v2/design-system';
import Home from '../sections/Home/Home';
import styles from './app.module.css';

export function App() {
  return (
    <>
      <Navigation>
        <Navigation.Group>
          <Navigation.Item icon="Home">Home</Navigation.Item>
          <Navigation.Item icon="Work">Work</Navigation.Item>
          <Navigation.Item icon="About">About Me</Navigation.Item>
        </Navigation.Group>
        <AnimationToggle className={styles['animation-toggle']} />
        <ThemeToggle className={styles['theme-toggle']} />
      </Navigation>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
