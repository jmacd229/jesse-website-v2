import { Icon } from '@jmacd229/design-system';
import JesseWebsiteV2 from '../../../../assets/images/SVG/JesseWebsiteV2';
import jesse_v1_logo from '../../../../assets/images/jesse-website-v1.png';
import jesse_v1 from '../../../../assets/images/jesse_v1.jpg';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import ExperienceDetailsDescriptionImage from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionImage/ExperienceDetailsDescriptionImage';
import { ProjectHistoryItem } from '../../types';

export const JESSE_V1: ProjectHistoryItem = {
  id: 'jesse_v1',
  title: 'Personal Website',
  iconImg: { src: jesse_v1_logo, alt: "Logo for Jesse's Website version 1" },
  tools: [
    'React',
    'TypeScript',
    'Gatsby',
    'Styled Components',
    'MUI',
    'Cypress',
  ],
  version: 1,
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        <a
          href="https://github.com/jmacd229/jesse-website"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.GitHub /> View the code
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Learn">
        Self-Taught React Development
      </ExperienceDetailsDescriptionHeading>
      Taught myself React from scratch with no prior experience, using this site
      as my first project to understand core concepts. It later became a
      playground to explore ideas I was interested in such as animations with
      react-spring and Lottie, or styling with MUI and styled-components.
      <ExperienceDetailsDescriptionHeading icon="Mountain">
        Perfectionism vs. Progress
      </ExperienceDetailsDescriptionHeading>
      Learned the importance of shipping over obsessing, as the project remained
      in an "Under Construction" state for years. This experience reshaped my
      mindset around iteration, feedback, and the value of releasing early.
      <ExperienceDetailsDescriptionHeading icon="Puzzle">
        Creative Problem Solving
      </ExperienceDetailsDescriptionHeading>
      Proud of early custom solutions built without formal React knowledge—such
      as a self-made FadeIn component to sequentially animate a
      list—demonstrating initiative and inventive thinking before mastering
      standard best practices.
      <ExperienceDetailsDescriptionImage
        src={jesse_v1}
        alt={`Previous version of Jesse MacDougall's portfolio website. The following text can be found inside: Hi, I'm Jesse. A full-stack web developer based in Toronto. Sorry, this site is still in progress - please check back later for updates! Unfortunately, while this website has been an enjoyable personal project of mine, it can still be difficult to find time to work on it. I work as a full-time developer throughout the week, while also working on the occasional side project. This site was originally developed when I had little experince with React, and I have devoted a fair amount of time into refactoring it with more performant and maintainable/readable solutions. I will continue to make updates as often as I can, and if you'd like to check in on the progress, you can view the public GitHub repo for this site. Finally, if you'd like to read more about me and my work history, or to contact me, please visit my LinkedIn profile`}
      />
    </div>
  ),
};

export const JESSE_V2: ProjectHistoryItem = {
  id: 'jesse_v2',
  title: 'Personal Website',
  icon: <JesseWebsiteV2 />,
  tools: [
    'React',
    'TypeScript',
    'Vite',
    'CSS Modules',
    'Nx',
    'Playwright',
    'Vitest',
  ],
  version: 2,
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        <a
          href="https://github.com/jmacd229/jesse-website-v2"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.GitHub /> View the code
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Scale">
        Minimal Dependencies, Maximum Control
      </ExperienceDetailsDescriptionHeading>
      Intentionally limited third-party libraries to retain full control over
      behavior, styling, and performance. Prioritized writing custom
      implementations to better realize creative ideas and avoid long-term
      maintenance overhead tied to library upgrades.
      <ExperienceDetailsDescriptionHeading icon="Blocks">
        Reusable Design System
      </ExperienceDetailsDescriptionHeading>
      After re-creating multiple personal projects from the ground up, I
      realized the benefit of building a fully isolated component and theming
      library decoupled from the main app. This modular setup allows for reuse
      across future projects, and streamlines maintenance by keeping design
      logic centralized and portable.
      <ExperienceDetailsDescriptionHeading icon="Speed">
        Rapid Iteration
      </ExperienceDetailsDescriptionHeading>
      Delivered the complete site in under 3 weeks while still working
      full-time, applying lessons from past projects to prioritize momentum,
      ship confidently, and iterate with purpose.
      <ExperienceDetailsDescriptionHeading icon="Design">
        Creative Direction & Visual Identity
      </ExperienceDetailsDescriptionHeading>
      Used this project as an opportunity to push my visual and creative
      boundaries. I experimented with layout, motion and color to craft a design
      that feels personal, polished, and distinct from previous iterations.
    </div>
  ),
};
