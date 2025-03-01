// import { FaArrowUp } from "react-icons/fa6"
import Image from "next/image";
import Penguin from "@/assets/penguin-512x512.png";
import FishingRod from "@/assets/fishing-rod.svg";

export default function Footer() {
  return (
    <footer className="flex w-full py-8 justify-between">
      <p>
        <span className="underline underline-offset-4 decoration-dashed dark:decoration-accent group cursor-help">
          <Image src={FishingRod} alt="Fishing Rod" />
          <Image
            src={Penguin}
            alt="Penguin"
            className="fixed -bottom-40 left-1/4 max-w-[8rem] w-fit -scale-x-100 2xl:scale-100 sm:pointer-events-none group-hover:-translate-y-24 transition-transform"
          />
        </span>
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
