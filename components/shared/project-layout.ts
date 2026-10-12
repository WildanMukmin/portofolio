export type ProjectLayout = "split" | "split-reverse" | "wide";

const ROTATION = ["split", "split-reverse", "wide"] as const;

/** Two split rows, then one full-width row, so rows never zigzag more than twice. */
export function layoutFor(index: number): ProjectLayout {
  return ROTATION[index % ROTATION.length];
}
