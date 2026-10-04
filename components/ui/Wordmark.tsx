import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span aria-hidden className="h-8 w-px bg-current opacity-50" />
      <span className="t-wordmark block text-[0.875rem] lg:text-[0.9375rem]">
        <span className="block">{site.wordmark[0]}</span>
        <span className="block font-normal tracking-[0.2em] opacity-75">{site.wordmark[1]}</span>
      </span>
    </span>
  );
}
