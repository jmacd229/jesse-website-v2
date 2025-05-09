import { IconType } from '@jmacd229/design-system';
import { ReactNode } from 'react';

export type Tool =
  | 'React'
  | 'JavaScript'
  | 'TypeScript'
  | 'Styled Components'
  | 'Web Components'
  | 'Node'
  | 'Sass'
  | 'Angular'
  | 'React Native'
  | 'Nx'
  | 'C'
  | 'Docker'
  | 'GraphQL'
  | 'PostgreSQL'
  | 'StoryBook'
  | 'Next.JS'
  | 'Cypress'
  | 'Karma'
  | 'Jest'
  | 'Redux'
  | 'ReduxToolkit'
  | 'Backbone.js'
  | 'Unix'
  | 'ASP'
  | 'CSharp'
  | 'Mongo'
  | 'Windows'
  | 'Oracle'
  | 'Python'
  | 'Testing Library'
  | 'Java'
  | 'Gatsby'
  | 'Sanity'
  | 'MUI'
  | 'Vite'
  | 'CSS Modules'
  | 'Playwright'
  | 'Vitest';

type BaseWorkItem = {
  id: string;
  title: string;
  icon?: ReactNode;
  iconImg?: { src: string; alt: string };
  tools: Tool[];
  content: ReactNode;
};

export type WorkHistoryItem = BaseWorkItem & {
  startDate: string;
  endDate?: string;
  role: string;
};

export type ProjectHistoryItem = BaseWorkItem & {
  title: string;
  icon?: ReactNode;
  version?: number;
};

export type WorkPrinciple = {
  title: string;
  description: ReactNode;
  icon: IconType;
};
