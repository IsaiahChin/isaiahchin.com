import Image from 'next/image';
import Penguin from '../assets/penguin-512x512.png';

export default function Home() {
  return (
    <>
      <section className="mt-8 pt-0 py-16 w-fit bg-stone-100">
        <h1 className="pb-4 text-5xl hover:bg-inherit">
          Hey, I'm{' '}
          <span className="font-semibold group">
            Isaiah
            <Image
              src={Penguin}
              alt="Penguin"
              className="-z-10 max-w-[8rem] w-[fit-content] sm:ml-[11.8rem] absolute group-hover:-translate-y-24 transition-transform"
            />
          </span>
        </h1>
        <p>A design-driven developer with an eye for details.</p>
        <br />
        <p>
          I aspire to build responsive and intuitive software that helps others.
          I like planning, solving problems, photography, playing the piano,
          thinking... and gaming.
        </p>
      </section>
    </>
  );
}
