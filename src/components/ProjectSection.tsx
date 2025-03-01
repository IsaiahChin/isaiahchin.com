import Section from "./Section";
import generateProjectCards from "@/util/generateProjectCards";

export default function ProjectSection() {
  return (
    <Section id="projects">
      <div className="flex justify-between items-start">
        <h2 className="before:content-['/'] dark:before:text-accent mb-9">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-12">{generateProjectCards()}</div>
    </Section>
  );
}
