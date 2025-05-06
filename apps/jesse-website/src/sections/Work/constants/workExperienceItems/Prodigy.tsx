import Prodigy from '../../../../assets/images/SVG/Prodigy';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { WorkHistoryItem } from '../../types';

const PRODIGY: WorkHistoryItem = {
  id: 'prodigy',
  title: 'Prodigy',
  icon: <Prodigy />,
  role: 'Full-stack developer',
  startDate: '2021',
  endDate: '2022',
  tools: [
    'React',
    'JavaScript',
    'TypeScript',
    'Redux',
    'GraphQL',
    'Styled Components',
    'PostgreSQL',
    'Jest',
    'Testing Library',
    'Cypress',
    'Docker',
    'Backbone.js',
  ],
  content: (
    <div>
      At Prodigy, I grew from React hobbyist to full-time full-stack developer,
      learning from experienced mentors and contributing across the stack
      <ExperienceDetailsDescriptionHeading icon="FrontEnd">
        Front-end development
      </ExperienceDetailsDescriptionHeading>
      Built and maintained features in React and legacy Backbone.js, gaining a
      deep understanding of component architecture, code quality, and
      maintainability. Advocated for accessibility best practices, contributed
      accessible components to the design system, and helped educate teammates
      on testing and implementing a11y features.
      <ExperienceDetailsDescriptionHeading icon="BackEnd">
        Back-end development
      </ExperienceDetailsDescriptionHeading>
      Implemented full-stack features by designing and integrating GraphQL
      schemas and resolvers with PostgreSQL data sources. Created and maintained
      database migration and seeding scripts to support changes across
      environments.
      <ExperienceDetailsDescriptionHeading icon="Speed">
        Performance
      </ExperienceDetailsDescriptionHeading>
      Led discovery for a project to rewrite the legacy application
      initialization process aiming to improve performance and stability.
      <ExperienceDetailsDescriptionHeading icon="Help">
        Mentorship
      </ExperienceDetailsDescriptionHeading>
      Onboarded and mentored multiple junior and co-op developers, fostering
      growth in both technical and communication skills while strengthening my
      own leadership abilities.
    </div>
  ),
};

export default PRODIGY;
