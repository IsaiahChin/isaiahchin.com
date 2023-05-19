export default function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: String;
  className?: String;
}) {
  return (
    <section
      id={`${id ? id : ''}`}
      className={`${
        className ? className : ''
      } inline-block my-8 sm:my-16 w-full`}
    >
      {children}
    </section>
  );
}
