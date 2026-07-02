import EmploymentHero from '../../../../assets/images/SVG/EmploymentHero';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { WorkHistoryItem } from '../../types';

const EMPLOYMENT_HERO: WorkHistoryItem = {
  id: 'employment_hero',
  title: 'Employment Hero',
  icon: <EmploymentHero />,
  startDate: '2025',
  role: 'Staff Developer (Front-end) - Canadian Payroll Team',
  content: (
    <div>
      I joined Employment Hero after an acquisition of my previous company,
      Humi, and was handed our most important feature: migrating Canadian
      Payroll from the old Angular app to the new codebase, with a new team
      and a tight deadline.
      <ExperienceDetailsDescriptionHeading icon="Table">
        Payroll Tables
      </ExperienceDetailsDescriptionHeading>
      Designed and built 6 rules-driven, stateful payroll tables, each with
      distinct interdependent column/row logic, mixed read/write permissions,
      and real-time validation.
      <ExperienceDetailsDescriptionHeading icon="Globe">
        Leading Across Time Zones
      </ExperienceDetailsDescriptionHeading>
      Led 3 senior engineers based 12 hours out of sync, keeping
      collaboration consistent despite frequent blockers and shipping on
      schedule.
      <ExperienceDetailsDescriptionHeading icon="Handshake">
        We Are One Team
      </ExperienceDetailsDescriptionHeading>
      Awarded the Values Champion Award (12 of 1,600 employees, only
      Canadian recipient) for living out Employment Hero's "We Are One Team"
      value across the org.
      <ExperienceDetailsDescriptionHeading icon="Speed">
        Speed
      </ExperienceDetailsDescriptionHeading>
      Rebuilt the whole Canadian Payroll workflow in 6 months, with near
      zero front-end defects, letting the team run early sales demos and
      open up the beta ahead of schedule.
    </div>
  ),
  tools: [
    'React',
    'TypeScript',
    'JavaScript',
    'Redux',
    'Jest',
    'Testing Library',
    'Nx',
    'Styled Components',
    'MUI',
  ],
};

export default EMPLOYMENT_HERO;
