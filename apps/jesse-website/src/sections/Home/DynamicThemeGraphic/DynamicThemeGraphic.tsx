import {
  Animation,
  dynamicAnimations,
  getAnimation,
  HexString,
  useCSS,
} from '@jmacd229/design-system';
import { CSSProperties, HTMLAttributes, useMemo, useState } from 'react';
import WebsiteImg from '../../../assets/images/SVG/WebsiteImg';
import JesseProfileImage from './JesseProfileImage';
import { HEX_COLOR_VALIDATOR } from './constants';
import {
  code,
  dynamicText,
  graphic,
  htmlIcon,
  indent,
  input,
  jesse,
  website,
} from './DynamicThemeGraphic.styles';

type DynamicThemeGraphicProps = HTMLAttributes<HTMLDivElement>;

const DynamicThemeGraphic = ({ className }: DynamicThemeGraphicProps) => {
  const [colorInputValue, setColorInputValue] = useState('8500BB');
  const { getCSSColor } = useCSS();

  const graphicThemeColor = useMemo<HexString>(
    () =>
      HEX_COLOR_VALIDATOR.test(colorInputValue)
        ? `#${colorInputValue}`
        : '#8500BB',
    [colorInputValue],
  );

  const htmlAnimationData = useMemo(
    () =>
      getAnimation(
        dynamicAnimations.htmlAnimation,
        graphicThemeColor,
        getCSSColor('--neutral-700'),
      ),
    [graphicThemeColor, getCSSColor],
  );

  return (
    <div
      style={{ '--theme-color': graphicThemeColor } as CSSProperties}
      className={`${className} ${graphic}`}
    >
      <div className={htmlIcon}>
        <Animation
          animationConfig={{
            loop: false,
            animationData: htmlAnimationData,
          }}
          loopDelay={5000}
        />
        <div className={jesse}>
          <JesseProfileImage />

          <div className={website}>
            <WebsiteImg />

            <div className={dynamicText}>
              <div>
                <i className={code}>.jesse-dev</i>
                <span>&nbsp;&#123;</span>
              </div>
              <div className={`${indent} ${input}`}>
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
              <div className={indent}>color: var(--theme-color);</div>
              <span>&nbsp;&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicThemeGraphic;
