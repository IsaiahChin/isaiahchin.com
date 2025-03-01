import Section from "./Section";
import generateProjectCards from "@/util/generateProjectCards";

export default function ProjectSection() {
  return (
    <Section id="projects">
      <div className="flex justify-between items-start">
        <h2 className="before:content-['/'] before:text-accent mb-10">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-12">{generateProjectCards()}</div>
    </Section>
  );
}
