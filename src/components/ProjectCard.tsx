import ExternalLinkIcon from '../assets/ExternalLinkIcon';
import GithubIcon from '../assets/GithubIcon';

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
        project.status == 'inactive' && 'opacity-50'
      } min-w-[300px] w-full min-h-[200px] flex flex-col justify-between
      text-base p-6 rounded-xl border border-primary/30 dark:border-light/10
      bg-stone-50 dark:bg-dark-shade gap-6 duration-200`}
    >
      <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl">{project.title}</h2>
          <code>{project.dateStarted}</code>
        </div>
        <p>{project.description}</p>
      </div>
      {(project.repo || project.link) && (
        <div className="flex gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className="inline-flex gap-1 rounded-md clickable"
            >
              <GithubIcon />
              Source
              <ExternalLinkIcon size="1.2" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-flex gap-1 border rounded-md p-2 bg-stone-50 dark:bg-primary/10
            border-primary/30 dark:border-light/10 hover:border-accent dark:hover:border-accent transition-colors"
            >
              Live
              <ExternalLinkIcon size="1.2" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
