import { Animation, Card, Heading } from '@jesse-website-v2/design-system';
import { differenceInYears } from 'date-fns';

import DynamicThemeGraphic from './DynamicThemeGraphic/DynamicThemeGraphic';
import styles from './home.module.css';
import ProfileImage from './ProfileImage/ProfileImage';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['text-container']}>
        <div className={styles['heading-container']}>
          <Heading className={styles['main-title']} level="1">
            Hi, I'm Jesse
          </Heading>
          <Heading level="2">A front-end web engineer based in Toronto</Heading>
          <ProfileImage className={styles['jesse']} />
        </div>

        <Card className={styles['intro-card']} elevation="1">
          I've been working in web development for that past{' '}
          {differenceInYears(new Date(), new Date(2016, 5, 1))} years. In that
          time I've grown a passion for building beautiful, accessible and
          responsive UIs while writing clean, highly-maintainable code.
          <br />
          <br />
          If you'd like to know more about the work I've done (including this
          website) visit the <a href="#">Work</a> section below. If you want to
          know more about myself then check out the <a href="#">About Me</a>{' '}
          section. If you're looking to get in touch with me, please send me a
          message on my{' '}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jesse-macdougall-6709b7114/"
          >
            LinkedIn Profile
          </a>
          .
          <Animation className={styles['rocket']} animation="rocket" />
        </Card>
      </div>
      <DynamicThemeGraphic className={styles['graphic']} />
    </div>
  );
};

export default Home;
