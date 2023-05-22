import Link from 'next/link';
import Section from '../components/Section';
import generateProjectCards from '../util/generateProjectCards';
import RightArrowIcon from '../assets/RightArrowIcon';

export default function Home() {
  return (
    <>
      <Section id="home" className="scroll-mt-[100vh]">
        <h1 className="before:content-['{'] before:text-accent after:content-['}'] after:text-accent">
          {" Hi, I'm Isaiah "}
        </h1>
        <p>A keen-eyed developer with a passion for UI/UX design.</p>
        <p className="max-w-[70ch] pt-6">
          I aspire to build responsive and intuitive software that helps others.
          I like planning, solving problems, photography, playing the piano, and
          gaming.
        </p>
      </Section>
      <Section id="projects">
        <div className="flex justify-between items-start">
          <h1 className="before:content-['/'] before:text-accent pb-12">
            Projects
          </h1>
          <Link
            href="/projects"
            className="inline-flex gap-1 items-center p-2 rounded-xl border border-primary/30 dark:border-light/10 bg-stone-50 dark:bg-zinc-800
          hover:border-accent dark:hover:border-accent hover:scale-105 active:scale-100 duration-200 transition-[color,_transform]"
          >
            More <RightArrowIcon />
          </Link>
        </div>
        <div
          id="project-container"
          className="grid sm:grid-cols-[repeat(2,_1fr)] gap-4 mb-6"
        >
          {generateProjectCards(2)}
        </div>
      </Section>
    </>
  );
}
