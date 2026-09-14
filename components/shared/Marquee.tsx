import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

/**
 * Infinite horizontal ticker. Renders the item list twice back-to-back and
 * animates a -50% translate so the loop is seamless (see .animate-marquee
 * in globals.css).
 */
export default function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "pause-on-hover relative flex overflow-hidden select-none",
        className,
      )}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
          )}
        >
          {items.map((item, i) => (
            <Fragment key={i}>
              <span
                className={cn(
                  "px-6 text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap",
                  itemClassName,
                )}
              >
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
