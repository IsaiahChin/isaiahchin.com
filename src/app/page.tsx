import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { projects } from '../data/projects.js';

export default function Home() {
  return (
    <>
      <Section id="home" className="scroll-mt-[100vh]">
        <h1>Hi, I'm Isaiah</h1>
        <p>A keen-eyed developer with a passion for UI/UX design.</p>
        <br />
        <p className="max-w-[70ch]">
          I aspire to build responsive and intuitive software that helps others.
          I like planning, solving problems, photography, playing the piano, and
          gaming.
        </p>
      </Section>
      <Section id="projects">
        <h1 className="before:content-['/'] before:text-accent pb-12">
          Projects
        </h1>
        <div
          id="project-container"
          className="grid sm:grid-cols-[repeat(2,_1fr)] gap-4"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
