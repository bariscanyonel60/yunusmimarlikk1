"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { ArchImage } from "@/components/ui/ArchImage";
import { cn } from "@/lib/cn";
import type { Service } from "@/lib/types";

export function ServicesAccordion({ services }: { services: Service[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const total = String(services.length).padStart(2, "0");

  return (
    <ul className="border-t border-border">
      {services.map((service) => {
        const open = openId === service.id;
        const panelId = `${baseId}-${service.id}-panel`;
        const buttonId = `${baseId}-${service.id}-button`;

        return (
          <li key={service.id} className="group/row relative border-b border-border">
            {/* Hover preview: desktop + fine pointer only, purely decorative. */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute right-[16%] top-1/2 z-10 hidden w-[clamp(15rem,19vw,20rem)] -translate-y-1/2 scale-90 opacity-0",
                "transition-[opacity,scale] duration-700 ease-[var(--ease-arch)]",
                "[@media(hover:hover)_and_(pointer:fine)]:lg:block",
                !open && "group-hover/row:scale-100 group-hover/row:opacity-100",
              )}
            >
              <ArchImage image={service.image} ratio="4 / 5" sizes="20rem" quality={70} />
            </div>

            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : service.id)}
                className="grid min-h-[5.5rem] w-full grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 py-5 text-left md:min-h-[6.5rem] md:grid-cols-[1fr_9fr_2fr] md:py-6"
              >
                <span
                  className={cn(
                    "t-label t-num transition-colors duration-500",
                    open ? "text-accent" : "text-muted group-hover/row:text-accent",
                  )}
                >
                  {service.number}
                </span>
                <span
                  className={cn(
                    "font-display text-[clamp(1.75rem,5.4vw,5rem)] font-medium uppercase leading-[0.9] tracking-[-0.03em] [font-stretch:86%]",
                    "transition-[translate,color] duration-700 ease-[var(--ease-arch)]",
                    open ? "text-accent md:translate-x-6" : "md:group-hover/row:translate-x-6",
                  )}
                >
                  {service.title}
                </span>
                <span className="flex items-center justify-self-end gap-5">
                  <span className="t-label t-num hidden text-muted lg:inline">
                    {service.number} / {total}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full border transition-colors duration-500 md:size-12",
                      open ? "border-accent bg-accent text-background" : "border-border group-hover/row:border-current",
                    )}
                  >
                    <Plus
                      className={cn("size-4 transition-transform duration-500", open && "rotate-45")}
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={cn(
                "grid transition-[grid-template-rows] duration-700 ease-[var(--ease-arch)]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "grid gap-8 pb-10 transition-opacity duration-700 md:grid-cols-12 md:gap-x-8 md:pb-14",
                    open ? "opacity-100" : "opacity-0",
                  )}
                >
                  <div className="md:col-span-6 md:col-start-2">
                    <p className="t-lead text-foreground/85">{service.summary}</p>
                    <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                      {service.scope.map((item) => (
                        <li key={item} className="t-meta flex items-center gap-3 border-t border-border py-3 text-muted">
                          <span aria-hidden className="h-px w-3 bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-4 md:col-start-9">
                    <ArchImage
                      image={service.image}
                      ratio="var(--r)"
                      sizes="(min-width: 768px) 30vw, 100vw"
                      quality={70}
                      className="[--r:3/2] md:[--r:4/5]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
