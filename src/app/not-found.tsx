import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1 className="mb-4 text-5xl font-extrabold">404</h1>
      <p>I haven't made this page (yet) (maybe).</p>
      <Link href="/">Here's one I have.</Link>
    </>
  );
}
