import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects.js';

/**
 * A helper function that renders populated ProjectCards
 *
 * @param amount desired number of projects generated
 * @returns ProjectCard(s)
 */
export default function generateProjectCards(amount?: number) {
  return projects.map(
    (project, index) =>
      (!amount || index < amount) && (
        <ProjectCard key={index} project={project} />
      )
  );
}
