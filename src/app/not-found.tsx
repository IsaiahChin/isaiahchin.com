import Section from '@/components/Section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section>
      <h1 className="pb-4 leading-tight">404</h1>
      <p>I haven't made this page (yet) (maybe).</p>
      <Link
        href="/"
        className="text-blue-600 underline decoration-blue-600 hover:no-underline"
      >
        Here's one I have.
      </Link>
    </Section>
  );
}
