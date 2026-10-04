import { cn } from "@/lib/cn";

type SectionLabelProps = {
  index?: string;
  children: string;
  /** Secondary English descriptor, shown from tablet up. */
  en?: string;
  /** Draws a hairline between index and label, like a drawing title block. */
  rule?: boolean;
  className?: string;
};

export function SectionLabel({ index, children, en, rule = false, className }: SectionLabelProps) {
  return (
    <p className={cn("t-label flex items-center gap-4 text-muted", className)}>
      {index ? <span className="t-num text-accent">{index}</span> : null}
      {index ? (
        <span aria-hidden className={cn("h-px bg-current opacity-35", rule ? "flex-1" : "w-10")} />
      ) : null}
      <span className="text-foreground">{children}</span>
      {en ? <span className="hidden md:inline">/ {en}</span> : null}
    </p>
  );
}
