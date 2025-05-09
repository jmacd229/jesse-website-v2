import { Animation, Card, Heading, Link } from '@jmacd229/design-system';

import DynamicThemeGraphic from './DynamicThemeGraphic/DynamicThemeGraphic';
import styles from './home.module.css';
import ProfileImage from './ProfileImage/ProfileImage';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['text-container']}>
        <div className={styles['heading-container']}>
          <Heading className={styles['main-title']} level={1}>
            Hi, I'm Jesse
          </Heading>
          <Heading level={2}>A front-end web engineer based in Toronto</Heading>
          <ProfileImage className={styles['jesse']} />
        </div>

        <Card className={styles['intro-card']} elevation="1">
          I've been working in web development for the past{' '}
          {new Date().getFullYear() - 2016} years. In that time I've grown a
          passion for building beautiful, accessible and responsive UIs while
          writing clean, highly-maintainable code.
          <br />
          <br />
          If you'd like to know more about the work I've done (including this
          website) visit the <Link to="work">Work</Link> section below. If you
          want to know more about myself then check out the{' '}
          <Link to="about">About Me</Link> section. If you're looking to get in
          touch with me, please send me a message on my{' '}
          <Link
            to="https://www.linkedin.com/in/jesse-macdougall-6709b7114/"
            isExternal
          >
            LinkedIn Profile
          </Link>
          .
          <Animation className={styles['rocket']} animation="rocket" />
        </Card>
      </div>
      <DynamicThemeGraphic className={styles['graphic']} />
    </div>
  );
};

export default Home;
