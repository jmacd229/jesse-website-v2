import { PropsWithChildren } from 'react';
import {
  navAnchor,
  navItem,
  rootNavContainer,
  skipToContent,
} from './Navigation.styles';

const focusMain = () => {
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus();

    main.addEventListener('blur', () => main.removeAttribute('tabindex'), {
      once: true,
    });
  }
};

const Navigation = ({ children }: PropsWithChildren) => (
  <nav className={navAnchor}>
    <button onClick={focusMain} className={`${skipToContent} ${navItem}`}>
      Skip to Content
    </button>
    <div className={rootNavContainer}>{children}</div>
  </nav>
);

export default Navigation;
