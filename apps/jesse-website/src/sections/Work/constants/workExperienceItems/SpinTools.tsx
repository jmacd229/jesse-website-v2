import { Icon } from '@jmacd229/design-system';
import spin_tools_logo from '../../../../assets/images/spintools.webp';
import spin_tools_logo_dark from '../../../../assets/images/spintools_dark.webp';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import { ProjectHistoryItem } from '../../types';

export const SPIN_TOOLS: ProjectHistoryItem = {
  id: 'spin_tools',
  title: 'SpinTools',
  iconImg: {
    src: { light: spin_tools_logo, dark: spin_tools_logo_dark },
    alt: 'Logo for SpinTools',
  },
  tools: ['Electron', 'React', 'React Query', 'Zustand', 'Motion', 'MUI'],
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        Visit{' '}
        <a
          href="https://spintools.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Link /> SpinTools.io
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Blocks">
        Establishing the Foundation
      </ExperienceDetailsDescriptionHeading>
      Joined at the project's start and helped establish the Electron shell and
      shared type system, using path aliasing to keep types in sync between the
      main process and renderer without a separate package.
      <ExperienceDetailsDescriptionHeading icon="Replace">
        Spotify Playlist Import
      </ExperienceDetailsDescriptionHeading>
      Built the first multi-source import flow: a drag-and-drop URL component
      with immediate validation, backed by a Zustand store that normalized
      Spotify API responses.
      <ExperienceDetailsDescriptionHeading icon="Repeat">
        A Table Component Built Once, Used Everywhere
      </ExperienceDetailsDescriptionHeading>
      Built the DataTable component used across the app on top of TanStack
      Table, with row virtualization and a Zustand store that persists each
      table's column layout.
    </div>
  ),
};
