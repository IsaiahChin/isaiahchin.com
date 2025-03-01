import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function GitHubButton() {
  return (
    <Link
      href="https://github.com/IsaiahChin"
      target="_blank"
      className="bg-inherit p-2 rounded-xl hover:scale-125 active:scale-100 transition-transform group"
    >
      <FiGithub size="1.6rem" className="dark:group-hover:stroke-accent" />
    </Link>
  );
}
