import { cn } from "@/lib/utils";

/**
 * Page title whose words rise out of clips on a stagger, the same entrance
 * the hero headline uses, so inner pages open with the home page's voice.
 * Pure CSS: it plays from the server HTML and is skipped under reduced motion.
 */
export default function PageTitle({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");
  return (
    <h1 className={cn("font-display-wide font-extrabold", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="hero-word inline-block overflow-hidden pb-[0.14em] align-bottom">
            <span
              style={{ "--w": i } as React.CSSProperties}
              className="inline-block origin-bottom-left"
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
