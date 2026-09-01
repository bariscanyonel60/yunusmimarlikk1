export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} üzerinden 5 yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-[var(--color-bronze)]" : "fill-[var(--color-ink)]/15"
          }`}
        >
          <path d="M10 1.5l2.472 5.253 5.788.673-4.28 3.98 1.13 5.72L10 14.9l-5.11 2.226 1.13-5.72-4.28-3.98 5.788-.673L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
