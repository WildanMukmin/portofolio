/**
 * Label that rolls upward on hover or focus: the text slides out and an
 * identical copy in the link colour slides in from below. The parent must be
 * `group/roll`. The copy is aria-hidden, so the label is announced once.
 */
export default function RollText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="block transition-transform duration-500 ease-(--ease-snap) group-hover/roll:-translate-y-full group-focus-visible/roll:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full text-link transition-transform duration-500 ease-(--ease-snap) group-hover/roll:translate-y-0 group-focus-visible/roll:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </span>
  );
}
