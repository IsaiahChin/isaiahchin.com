import ProjectSection from "@/components/ProjectSection";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section id="home" className="scroll-mt-[100vh]">
        <p>A keen-eyed developer, passionate about UI/UX design.</p>
        <p className="max-w-[65ch] mt-7">
          I aspire to create responsive and intuitive software that helps
          others. In my spare time, I enjoy solving problems, taking photos, and
          playing games.
        </p>
      </Section>
      <ProjectSection />
    </>
  );
}
