import { Icon } from '@jmacd229/design-system';
import Amplify from '../../../../assets/images/SVG/Amplify';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { ProjectHistoryItem } from '../../types';

export const AMPLIFY: ProjectHistoryItem = {
  id: 'amplify',
  title: 'Amplify Events',
  icon: <Amplify />,
  tools: ['Electron', 'React', 'dnd-kit', 'MUI'],
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        Visit{' '}
        <a
          href="https://amplifyevents.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Link /> AmplifyEvents.app
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Design">
        Theming the App Top to Bottom
      </ExperienceDetailsDescriptionHeading>
      Continuously iterated on the shared MUI theme: light and dark palettes
      from design tokens, with overrides across nearly every component.
      <ExperienceDetailsDescriptionHeading icon="Puzzle">
        Drag-and-Drop at the Core
      </ExperienceDetailsDescriptionHeading>
      Built the music planner with dnd-kit, integrating the complex multi-column
      workflow with an experience that feels intuitive to users.
      <ExperienceDetailsDescriptionHeading icon="Responsive">
        Mobile-First on a Complex Workflow
      </ExperienceDetailsDescriptionHeading>
      Adapted the music planner, into a touch-native mobile experience with
      collapsible panels and reflowed layouts that kept full functionality
      intact.
    </div>
  ),
};
