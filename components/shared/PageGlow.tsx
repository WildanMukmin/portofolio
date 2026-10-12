/** The hero's cobalt light, reused at the top of inner pages so they read as the same room. */
export default function PageGlow() {
  return (
    <div
      aria-hidden
      className="page-light pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]"
    />
  );
}
