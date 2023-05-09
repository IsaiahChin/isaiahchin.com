import Image from 'next/image';
import Penguin from '../assets/penguin-512x512.png';

export default function Home() {
  return (
    <>
      <section className="mt-8 pt-0 py-16 w-fit">
        <h1 className="pb-4">
          Hey, I'm{' '}
          <span className="font-semibold group">
            Isaiah
            <Image
              src={Penguin}
              alt=" "
              className="fixed -bottom-40 left-1/4 max-w-[8rem] w-fit sm:ml-[11.8rem] sm:pointer-events-none group-hover:-translate-y-24 transition-transform"
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
