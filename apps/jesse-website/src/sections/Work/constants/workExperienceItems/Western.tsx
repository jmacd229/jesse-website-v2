import Western from '../../../../assets/images/SVG/Western';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { WorkHistoryItem } from '../../types';

const UWO: WorkHistoryItem = {
  id: 'uwo',
  title: 'UWO',
  role: 'Bachelor of Software Engineering',
  icon: <Western />,
  startDate: '2013',
  endDate: '2018',
  tools: [],
  content: (
    <div>
      At Western University, I completed a Software Engineering degree,
      graduating with distinction.
      <ExperienceDetailsDescriptionHeading icon="Cross">
        Health Informatics Specialization
      </ExperienceDetailsDescriptionHeading>
      Explored the intersection of software, data, and healthcare. Gained
      insight into the complexities of information management, privacy, and
      interoperability in the Canadian medical system.
      <ExperienceDetailsDescriptionHeading icon="Android">
        Capstone Project
      </ExperienceDetailsDescriptionHeading>
      Led development of an NFC-enabled Android app for managing prescriptions,
      designed to address elderly polypharmacy through simple, accessible
      technology. Project was awarded “Most Innovative” among 10 capstone
      projects across the department.
    </div>
  ),
};

export default UWO;
