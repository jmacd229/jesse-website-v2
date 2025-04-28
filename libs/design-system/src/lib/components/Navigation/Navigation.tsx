import { PropsWithChildren } from 'react';
import style from './navigation.module.css';

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
  <nav className={style['nav-anchor']}>
    <button
      onClick={focusMain}
      className={`${style[`skip-to-content`]} ${style['nav-item']}`}
    >
      Skip to Content
    </button>
    <div className={style['root-nav-container']}>{children}</div>
  </nav>
);

export default Navigation;
