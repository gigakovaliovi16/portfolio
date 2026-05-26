import { useEffect, useState } from 'react';

export type Chapter = {
  id: string;
  numeral: string;
  label: string;
};

type Props = {
  chapters: Chapter[];
};

/**
 * Fixed left rail with vertical chapter numerals.
 * Highlights the chapter whose section header is closest to the viewport top.
 */
export default function ChapterRail({ chapters }: Props) {
  const [activeId, setActiveId] = useState<string>(chapters[0]?.id ?? '');

  useEffect(() => {
    const onScroll = () => {
      const viewportAnchor = window.innerHeight * 0.28;
      let best: { id: string; distance: number } | null = null;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);
        if (!best || distance < best.distance) {
          best = { id: c.id, distance };
        }
      }
      if (best && best.id !== activeId) setActiveId(best.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [chapters, activeId]);

  return (
    <nav className="chapter-rail" aria-label="Sections">
      <ol>
        {chapters.map((c) => (
          <li
            key={c.id}
            className={c.id === activeId ? 'chapter-rail-item is-active' : 'chapter-rail-item'}
          >
            <a href={`#${c.id}`}>
              <span className="chapter-rail-numeral">{c.numeral}</span>
              <span className="chapter-rail-mark" aria-hidden />
              <span className="chapter-rail-label">{c.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
