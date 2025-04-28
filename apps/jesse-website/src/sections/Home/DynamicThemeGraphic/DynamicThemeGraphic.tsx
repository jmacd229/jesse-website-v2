import {
  Animation,
  getHtmlAnimation,
  useTheme,
} from '@jesse-website-v2/design-system';
import {
  CSSProperties,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import WebsiteImg from '../../../assets/images/SVG/WebsiteImg';
import ProfileImage from '../ProfileImage/ProfileImage';
import { HEX_COLOR_VALIDATOR } from './constants';
import styles from './dynamicThemeGraphic.module.css';

type DynamicThemeGraphicProps = HTMLAttributes<HTMLDivElement>;

const DynamicThemeGraphic = ({ className }: DynamicThemeGraphicProps) => {
  const [colorInputValue, setColorInputValue] = useState('8500BB');
  const [graphicThemeColor, setGraphicThemeColor] = useState('8500BB');
  const { currentTheme } = useTheme();

  const htmlAnimationData = useMemo(
    () => getHtmlAnimation(graphicThemeColor, currentTheme),
    [graphicThemeColor, currentTheme]
  );

  useEffect(() => {
    if (HEX_COLOR_VALIDATOR.test(colorInputValue)) {
      setGraphicThemeColor(`#${colorInputValue}`);
    }
  }, [colorInputValue]);

  return (
    <div
      style={{ '--theme-color': graphicThemeColor } as CSSProperties}
      className={`${className} ${styles['graphic']}`}
    >
      <div className={styles['html']}>
        <Animation
          animationConfig={{
            loop: false,
            animationData: htmlAnimationData,
          }}
          loopDelay={5000}
        />
        <div className={styles['jesse']}>
          <ProfileImage />

          <div className={styles['website']}>
            <WebsiteImg />

            <div className={styles['dynamic-text']}>
              <div>
                <i className={styles['code']}>.jesse-dev</i>
                <span>&nbsp;&#123;</span>
              </div>
              <div className={`${styles['indent']} ${styles['input']}`}>
                --theme-color: #
                <input
                  value={colorInputValue}
                  onChange={(e) => setColorInputValue(e.target.value)}
                />
                ;
              </div>
              <div className={styles['indent']}>color: var(--theme-color);</div>
              <span>&nbsp;&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicThemeGraphic;
