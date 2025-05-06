import { Icon } from '@jesse-website-v2/design-system';
import AliciaWebsiteV1 from '../../../../assets/images/SVG/AliciaWebsiteV1';
import AliciaWebsiteV2 from '../../../../assets/images/SVG/AliciaWebsiteV2';
import alicia_v1 from '../../../../assets/images/alicia_v1.jpg';
import alicia_v2 from '../../../../assets/images/alicia_v2.jpg';
import ExperienceDetailsDescriptionHeading from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import ExperienceDetailsDescriptionImage from '../../Experience/ExperienceDetails/ExperienceDetailsDescriptionImage/ExperienceDetailsDescriptionImage';
import { ProjectHistoryItem } from '../../types';

export const ALICIA_V2: ProjectHistoryItem = {
  id: 'alicia_v2',
  title: 'Dr. Alicia',
  icon: <AliciaWebsiteV2 />,
  tools: ['React', 'TypeScript', 'Next.JS', 'Styled Components', 'Sanity'],
  version: 2,
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        Visit{' '}
        <a href="https://dralicia.ca" target="_blank" rel="noreferrer noopener">
          <Icon.Link /> Dr.Alicia.ca
        </a>{' '}
        or{' '}
        <a
          href="https://github.com/jmacd229/alicia-website-v3"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.GitHub /> view the code
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Replace">
        Framework Migration
      </ExperienceDetailsDescriptionHeading>
      Migrated the site from Gatsby to Next.js to reduce maintenance overhead
      and gain greater flexibility. Simplified the tech stack by removing unused
      plugins and optimizing for a lower-update content model.
      <ExperienceDetailsDescriptionHeading icon="Design">
        Website Redesign
      </ExperienceDetailsDescriptionHeading>
      Collaborated with the client on a full redesign to reflect a new brand
      identity focused on ADHD care. Implemented a lightweight design system
      using styled-components, improving consistency and reducing styling
      complexity compared to the previous Sass setup.
      <ExperienceDetailsDescriptionImage
        src={alicia_v2}
        alt={`Current version of the dr.alicia website. The following text can be found inside: Struggling with ADHD as an adult? I offer evidence-based naturopathic support so you can embrace your unique (and awesome!) brain—and take back control of your life! Dealing with ADHD can feel beyond frustrating, like trying to put together an Ikea bookshelf with instructions in the wrong language and half of the steps missing! Despite your best efforts, you’re left feeling overwhelmed and frustrated that the seemingly simple end goal feels forever out of reach. Your self-esteem takes an unfair hit, but you’re not the problem, the instruction manual is the problem. What if I told you that it’s possible to create an instruction manual aligned with your uniquely awesome brain? To implement strategies not just to improve focus, but to to reduce the chronic overwhelm, energy fluctuations, and the emotional rollercoaster. Whether you have ADHD or other mental health concerns, it’s time to finally find balance in the chaos and unlock your full potential!`}
      />
    </div>
  ),
};

export const ALICIA_V1: ProjectHistoryItem = {
  id: 'alicia_v1',
  title: 'Dr. Alicia',
  icon: <AliciaWebsiteV1 />,
  tools: ['React', 'TypeScript', 'Gatsby', 'Sass', 'Sanity'],
  version: 1,
  content: (
    <div>
      <ExperienceDetailsDescriptionHeading centered>
        <a
          href="https://github.com/jmacd229/alicia-website-v2"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.GitHub /> View the code
        </a>
      </ExperienceDetailsDescriptionHeading>
      <ExperienceDetailsDescriptionHeading icon="Repeat">
        Client Collaboration
      </ExperienceDetailsDescriptionHeading>
      Worked closely with a non-technical client, adapting to evolving design
      feedback and shifting requirements. Prioritized clear communication and
      flexibility to deliver a site aligned with their creative vision.
      <ExperienceDetailsDescriptionHeading icon="Files">
        Headless CMS
      </ExperienceDetailsDescriptionHeading>
      Integrated Sanity to allow easy content and media updates, with
      webhook-triggered Netlify redeploys for a smooth, hands-off publishing
      workflow.
      <ExperienceDetailsDescriptionImage
        src={alicia_v1}
        alt={`An early version of the dr.alicia website. The following text can be found inside:
    Dr. Alicia MacDougall, naturopathic doctor.  You deserve to navigate your busy life without feeling fuelled by cortisol & caffeine! Your mental health isn't in check, but you can’t find the time to "self-care" your way out of it? I'm Dr. Alicia MacDougall, a Naturopathic Doctor and fellow mental health warrior! I want to restore your hope that you CAN be successful in your career, your studies, as a mom, or in whatever other aspirations you have, while staying in control of your mental health. As someone who has been there myself, I not only know that it is possible, but also how to achieve it. I believe that ambitious people shouldn't have to choose between their dreams and their health!`}
      />
    </div>
  ),
};
