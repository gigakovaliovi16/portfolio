/** Raster logos from `/public/logos` — transparent PNG where provided */

export function EtoroMark({ className }: { className?: string }) {
  return (
    <span className={`company-logo-wrap company-logo-wrap--etoro ${className ?? ''}`}>
      <img
        src="/logos/etoro.png"
        alt=""
        className="company-logo-img company-logo-img--etoro company-logo-img--rail"
        width={120}
        height={36}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export function SetantaMark({ className }: { className?: string }) {
  return (
    <span className={`company-logo-wrap company-logo-wrap--setanta ${className ?? ''}`}>
      <img
        src="/logos/setanta-sports.png"
        alt=""
        className="company-logo-img company-logo-img--setanta company-logo-img--rail"
        width={120}
        height={36}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export function EvolutionMark({ className }: { className?: string }) {
  return (
    <span className={`company-logo-wrap company-logo-wrap--evolution ${className ?? ''}`}>
      <img
        src="/logos/evolution.png"
        alt=""
        className="company-logo-img company-logo-img--evolution company-logo-img--rail"
        width={120}
        height={34}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
