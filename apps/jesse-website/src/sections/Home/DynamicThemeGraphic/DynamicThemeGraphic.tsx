import {
  Animation,
  dynamicAnimations,
  getAnimation,
  HexString,
  useCSS,
} from '@jmacd229/design-system';
import {
  CSSProperties,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import WebsiteImg from '../../../assets/images/SVG/WebsiteImg';
import JesseProfileImage from './JesseProfileImage';
import { HEX_COLOR_VALIDATOR } from './constants';
import styles from './dynamicThemeGraphic.module.css';

type DynamicThemeGraphicProps = HTMLAttributes<HTMLDivElement>;

const DynamicThemeGraphic = ({ className }: DynamicThemeGraphicProps) => {
  const [colorInputValue, setColorInputValue] = useState('8500BB');
  const [graphicThemeColor, setGraphicThemeColor] =
    useState<HexString>('#8500BB');
  const { getCSSColor } = useCSS();

  const htmlAnimationData = useMemo(
    () =>
      getAnimation(
        dynamicAnimations.htmlAnimation,
        graphicThemeColor,
        getCSSColor('--neutral-700')
      ),
    [graphicThemeColor, getCSSColor]
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
          <JesseProfileImage />

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
                  aria-label="Theme customization hex value editor"
                  value={colorInputValue}
                  maxLength={6}
                  onChange={(e) =>
                    setColorInputValue(e.target.value.substring(0, 6))
                  }
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
