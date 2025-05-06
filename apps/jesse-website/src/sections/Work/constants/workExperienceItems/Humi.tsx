import Humi from '../../../../assets/images/SVG/Humi';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { WorkHistoryItem } from '../../types';

const HUMI: WorkHistoryItem = {
  id: 'humi',
  title: 'Humi',
  icon: <Humi />,
  startDate: '2022',
  role: 'Staff Developer (Front-end) - Platform Team',
  content: (
    <div>
      At Humi, I've led large-scale frontend and infrastructure initiatives to
      modernize our HR platform.
      <ExperienceDetailsDescriptionHeading icon="Test">
        Testing
      </ExperienceDetailsDescriptionHeading>
      Ownership of front-end testing architecture:
      <ul>
        <li>Reduced average E2E suite runtime by ~5 minutes (11m from 16m)</li>
        <li>
          Cut monthly failure rate from 3–4% to under 1% through test
          reliability best practices
        </li>
        <li>
          Introduced flaky test retry support and custom ESLint rules to catch
          common CI mistakes
        </li>
        <li>
          Migrated legacy Karma test suite to Jest for better stability and
          performance
        </li>
      </ul>
      <ExperienceDetailsDescriptionHeading icon="Design">
        Design System
      </ExperienceDetailsDescriptionHeading>
      Created a design system from the ground up using Lit Web Components,
      Storybook, and Cypress component testing. Integrated CSS custom properties
      and shared tokens across React and Angular apps to deliver brand
      consistency and seamless rebrand/dark mode rollout.
      <ExperienceDetailsDescriptionHeading icon="Lock">
        Security
      </ExperienceDetailsDescriptionHeading>
      Enabled secure SOC2-compliant token storage, removing localStorage
      dependencies across the org with a global and maintainable authentication
      flow.
      <ExperienceDetailsDescriptionHeading icon="GitFolder">
        Monorepo
      </ExperienceDetailsDescriptionHeading>
      Built and evangelized Nx monorepo tooling, enabling smart CI/CD
      orchestration to run only affected builds and tests, improving developer
      productivity.
      <ExperienceDetailsDescriptionHeading icon="Responsive">
        Responsiveness
      </ExperienceDetailsDescriptionHeading>
      Led responsive redesign of our legacy platform, creating scalable layout
      systems and a clean migration path. Resulted in significantly broader
      usability than even our mobile app.
    </div>
  ),
  tools: [
    'React',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Next.JS',
    'Redux',
    'Web Components',
    'Jest',
    'Cypress',
    'Testing Library',
    'Nx',
    'MUI',
    'React Native',
    'Sass',
    'Karma',
    'Styled Components',
  ],
};

export default HUMI;
