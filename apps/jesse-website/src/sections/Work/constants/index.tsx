import { WorkPrinciple } from '../types';
import { ALICIA_V1, ALICIA_V2 } from './workExperienceItems/Alicia';
import { AMPLIFY } from './workExperienceItems/Amplify';
import CANADA_LIFE from './workExperienceItems/CanadaLife';
import EMPLOYMENT_HERO from './workExperienceItems/EmploymentHero';
import HUMI from './workExperienceItems/Humi';
import { JESSE_V1, JESSE_V2 } from './workExperienceItems/Jesse';
import PRODIGY from './workExperienceItems/Prodigy';
import { SPIN_TOOLS } from './workExperienceItems/SpinTools';
import UWO from './workExperienceItems/Western';

export const WORK_ITEMS = { EMPLOYMENT_HERO, HUMI, PRODIGY, CANADA_LIFE, UWO };
export const PROJECT_ITEMS = {
  JESSE_V1,
  JESSE_V2,
  ALICIA_V1,
  ALICIA_V2,
  SPIN_TOOLS,
  AMPLIFY,
};

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

const AI: WorkPrinciple = {
  title: 'AI as a tool, not a replacement',
  description: (
    <div>
      I thoughtfully use AI to expedite delivery and augment my own thought
      process, but still code by hand when a task calls for it or I want deeper
      learning.
    </div>
  ),
  icon: 'Brain',
};

export const WORK_PRINCIPLES: WorkPrinciple[] = [
  CODE_QUALITY,
  A11Y_TESTING,
  COLLABORATION,
  AI,
];
