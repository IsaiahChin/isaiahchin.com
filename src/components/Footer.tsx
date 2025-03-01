// import { FaArrowUp } from "react-icons/fa6"
import Image from "next/image";
import Penguin from "../assets/penguin-512x512.png";

export default function Footer() {
  return (
    <footer className="flex w-full py-8 justify-between">
      <p className="group">
        Built by{" "}
        <span className="underline decoration-accent underline-offset-4 decoration-dashed">
          Isaiah
        </span>
        <Image
          src={Penguin}
          alt="Penguin"
          className="fixed -bottom-40 left-1/4 max-w-[8rem] w-fit sm:ml-[11.8rem] sm:pointer-events-none group-hover:-translate-y-24 transition-transform"
        />
      </p>
      {/* Back to Top feature */}
      {/* <a
        href="#home"
        className="inline-flex gap-1 items-center p-1 px-2 border rounded-md 
        border-primary/10 dark:border-light/10 
        hover:bg-accent hover:-translate-y-1
        dark:hover:text-primary
        dark:hover:bg-accent
        dark:[&_g]:hover:stroke-primary
        transition-transform"
      >
        <FaArrowUp />
        Back to top
      </a> */}
    </footer>
  );
}
