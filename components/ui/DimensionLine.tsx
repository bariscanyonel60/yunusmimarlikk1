import { cn } from "@/lib/cn";

/** Technical-drawing style dimension line with end ticks and a centred annotation. */
export function DimensionLine({ label, className }: { label: string; className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-3 text-muted", className)}>
      <span className="h-3 w-px bg-current" />
      <span className="h-px flex-1 bg-current opacity-50" />
      <span className="t-label t-num shrink-0">{label}</span>
      <span className="h-px flex-1 bg-current opacity-50" />
      <span className="h-3 w-px bg-current" />
    </div>
  );
}
