import { site } from '@/content/site';
import { cn } from '@/lib/utils';

type MediaCreditProps = {
  className?: string;
};

export function MediaCredit({ className }: MediaCreditProps) {
  const { label, name, url } = site.mediaCredit;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-baseline gap-1.5 font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-90',
        className,
      )}
      style={{
        color: 'var(--neon-green)',
        textShadow: 'var(--neon-green-glow)',
      }}
    >
      <span className="opacity-80">{label} :</span>
      <span>{name}</span>
      <span className="sr-only"> (yeni sekmede açılır)</span>
    </a>
  );
}
