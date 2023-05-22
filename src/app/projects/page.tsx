import { Metadata } from 'next';

import Section from '../../components/Section';
import generateProjectCards from '../../util/generateProjectCards';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <Section>
      <h1 className="pb-12 before:content-['/'] before:text-accent">
        Projects
      </h1>
      <div
        id="project-container"
        className="grid sm:grid-cols-[repeat(2,_1fr)] gap-4"
      >
        {generateProjectCards()}
      </div>
    </Section>
  );
}
