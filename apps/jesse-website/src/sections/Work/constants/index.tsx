import { WorkPrinciple } from '../types';
import { ALICIA_V1, ALICIA_V2 } from './workExperienceItems/Alicia';
import CANADA_LIFE from './workExperienceItems/CanadaLife';
import HUMI from './workExperienceItems/Humi';
import { JESSE_V1, JESSE_V2 } from './workExperienceItems/Jesse';
import PRODIGY from './workExperienceItems/Prodigy';
import UWO from './workExperienceItems/Western';

export const WORK_ITEMS = { HUMI, PRODIGY, CANADA_LIFE, UWO };
export const PROJECT_ITEMS = { JESSE_V1, JESSE_V2, ALICIA_V1, ALICIA_V2 };

const CODE_QUALITY: WorkPrinciple = {
  title: 'Code quality = Overall quality',
  description: (
    <div>
      I prioritize reusable, maintainable code that enables teams to build
      faster and iterate confidently.
    </div>
  ),
  icon: 'Wrench',
};

const A11Y_TESTING: WorkPrinciple = {
  title: 'Accessibility and Testing are non-negotiable',
  description: (
    <div>
      I build with accessibility and testing in mind from the start, not as
      afterthoughts.
    </div>
  ),
  icon: 'Accessibility',
};

const COLLABORATION: WorkPrinciple = {
  title: '"Close enough" isn\'t good enough',
  description: (
    <div>
      I collaborate closely with design and product to deliver high-quality,
      pixel-perfect UIs.
    </div>
  ),
  icon: 'Target',
};

const STANDARDIZATION: WorkPrinciple = {
  title: 'Constantly re-evaluate best-practices',
  description: (
    <div>
      I stay curious, adapt to new ideas, and never stick with something just
      because “it's how it's always been done.”
    </div>
  ),
  icon: 'Compass',
};

export const WORK_PRINCIPLES: WorkPrinciple[] = [
  CODE_QUALITY,
  A11Y_TESTING,
  COLLABORATION,
  STANDARDIZATION,
];
