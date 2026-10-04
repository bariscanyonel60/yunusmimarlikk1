import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArrowDirection = "up-right" | "right" | "down";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  direction?: ArrowDirection;
  variant?: "text" | "solid" | "outline";
  className?: string;
  ariaLabel?: string;
};

function ArrowIcon({ direction }: { direction: ArrowDirection }) {
  switch (direction) {
    case "up-right":
      return <ArrowUpRight aria-hidden className="arrow-nudge size-4 shrink-0" strokeWidth={1.5} />;
    case "right":
      return <ArrowRight aria-hidden className="arrow-nudge-right size-4 shrink-0" strokeWidth={1.5} />;
    case "down":
      return <ArrowDown aria-hidden className="arrow-nudge-down size-4 shrink-0" strokeWidth={1.5} />;
    default: {
      const exhaustive: never = direction;
      return exhaustive;
    }
  }
}

const variants = {
  text: "gap-3 py-2",
  solid:
    "gap-4 bg-foreground px-6 py-4 text-background transition-colors duration-500 hover:bg-accent hover:text-background",
  outline:
    "gap-4 border border-current px-6 py-4 transition-colors duration-500 hover:bg-foreground hover:text-background",
} as const;

export function ArrowLink({
  href,
  children,
  direction = "up-right",
  variant = "text",
  className,
  ariaLabel,
}: ArrowLinkProps) {
  const classes = cn("group t-label inline-flex min-h-11 items-center", variants[variant], className);
  const content = (
    <>
      <span className={variant === "text" ? "link-line pb-0.5" : undefined}>{children}</span>
      <ArrowIcon direction={direction} />
    </>
  );

  const isNative = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isNative) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
