import { Animation, Card, Heading, Link } from '@jmacd229/design-system';

import DynamicThemeGraphic from './DynamicThemeGraphic/DynamicThemeGraphic';
import JesseProfileImage from './DynamicThemeGraphic/JesseProfileImage';
import {
  graphic,
  headingContainer,
  homeContainer,
  introCard,
  jesse,
  mainTitle,
  rocket,
  subTitle,
  textContainer,
} from './Home.styles';

const Home = () => {
  return (
    <div className={homeContainer}>
      <div className={textContainer}>
        <div className={headingContainer}>
          <Heading className={mainTitle} level={1}>
            Hi, I'm Jesse
          </Heading>
          <Heading className={subTitle} level={2}>
            A front-end web engineer based in Toronto
          </Heading>
          <JesseProfileImage className={jesse} />
        </div>

        <Card className={introCard} elevation="1">
          I've been working in web development for the past{' '}
          {new Date().getFullYear() - 2016} years. In that time I've grown a
          passion for building beautiful, accessible and responsive UIs while
          writing clean, highly-maintainable code.
          <br />
          <br />
          If you'd like to know more about the work I've done (including this
          website) visit the <Link to="work">Work</Link> section below. If
          you're looking to get in touch with me, please send me a message on my{' '}
          <Link
            to="https://www.linkedin.com/in/jesse-macdougall-6709b7114/"
            isExternal
          >
            LinkedIn Profile
          </Link>
          .
          <Animation className={rocket} animation="rocket" />
        </Card>
      </div>
      <DynamicThemeGraphic className={graphic} />
    </div>
  );
};

export default Home;
