import Section from '@/components/Section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section>
      <h1>404</h1>
      <p>This is a page I haven't put any content on.</p>
      <Link
        href="/"
        className="dark:text-accent underline underline-offset-4 hover:decoration-accent transition-all"
      >
        Here's one I have.
      </Link>
    </Section>
  );
}
