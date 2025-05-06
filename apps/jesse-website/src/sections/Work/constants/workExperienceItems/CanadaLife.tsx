import CanadaLife from '../../../../assets/images/SVG/CanadaLife';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { WorkHistoryItem } from '../../types';

const CANADA_LIFE: WorkHistoryItem = {
  id: 'canada_life',
  title: 'Canada Life',
  role: 'Full-stack developer',
  icon: <CanadaLife />,
  startDate: '2016',
  endDate: '2021',
  tools: [
    'Angular',
    'Java',
    'TypeScript',
    'Sass',
    'Mongo',
    'Docker',
    'CSharp',
    'ASP',
    'Oracle',
    'Python',
    'Unix',
    'Windows',
    'Node',
    'C',
  ],
  content: (
    <div>
      At Canada Life (formerly London Life), I evolved from an intern on a
      legacy support team into a key full-stack contributor on multiple Agile
      teams.
      <ExperienceDetailsDescriptionHeading icon="Bug">
        Production Support
      </ExperienceDetailsDescriptionHeading>
      Supported critical production systems written in ASP.NET, VB.NET, and C#.
      Served in a 24/7 on-call rotation, debugging legacy Windows/Unix systems
      and C programs—gaining early experience in high-pressure, low-support
      environments.
      <ExperienceDetailsDescriptionHeading icon="Work">
        Full-stack Development
      </ExperienceDetailsDescriptionHeading>
      Chosen as one of five developers to reimagine the member experience site I
      previously supported. Transitioned into full-stack development using
      Angular, Java Spring Boot, RESTful APIs, and MongoDB.
      <ExperienceDetailsDescriptionHeading icon="Accessibility">
        Accessibility
      </ExperienceDetailsDescriptionHeading>
      Acted as a primary contributor toward meeting WCAG 2.0 AA compliance,
      working closely with accessibility specialists and embedding a11y best
      practices across the UI.
    </div>
  ),
};

export default CANADA_LIFE;
