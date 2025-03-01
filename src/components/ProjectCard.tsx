import { FaArrowRight } from "react-icons/fa6";

interface Project {
  project: {
    title: string;
    description: string;
    dateStarted: string;
    repo: string;
    link: string;
    status: string;
  };
}

export default function ProjectCard({ project }: Project) {
  return (
    <div
      className={`project-card ${
        project.status == "inactive" && "opacity-50"
      } w-full [&>*]:w-fit`}
    >
      <div className="mb-3 group">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            className="inline-flex gap-2 items-center underline decoration-dashed group-hover:decoration-solid underline-offset-4 dark:decoration-accent"
          >
            {project.title}
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 dark:fill-accent transition-all" />
          </a>
        ) : (
          <p>{project.title} <span className="text-sm">(it&apos;s getting there)</span></p>
        )}
      </div>

      <p className="text-base">{project.description}</p>
    </div>
  );
}
