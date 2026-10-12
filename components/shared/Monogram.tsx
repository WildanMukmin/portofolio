import { MONOGRAM_HEIGHT, MONOGRAM_WIDTH, monogramPath } from "@/lib/monogram";

/** Flat W mark, painted with currentColor. Decorative: pair it with a text label. */
export default function Monogram({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${MONOGRAM_WIDTH} ${MONOGRAM_HEIGHT}`}
      className={className}
    >
      <path d={monogramPath} fill="currentColor" />
    </svg>
  );
}
