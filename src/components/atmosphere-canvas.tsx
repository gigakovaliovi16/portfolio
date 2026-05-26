import { useEffect, useRef } from 'react';

/**
 * Slow-drifting cinematic atmosphere — long horizontal filaments riding a faint
 * burgundy radial haze, with a film-grain pass.
 *
 * Reads as surveillance / radar / theatre stage instead of "particle network".
 */
export default function AtmosphereCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;
    let w = 0;
    let h = 0;

    type Filament = {
      y: number;
      phase: number;
      amp: number;
      speed: number;
      thickness: number;
      tint: number; // 0 = bone, 1 = burgundy
      length: number;
    };

    let filaments: Filament[] = [];
    let grain: ImageData | null = null;

    const resize = () => {
      w = window.innerWidth;
      h = Math.max(window.innerHeight, 720);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Quieter — fewer filaments, more spaced out
      const count = Math.round(h / 64);
      filaments = Array.from({ length: count }, (_, i) => {
        const yJitter = (Math.random() - 0.5) * (h / count) * 0.6;
        return {
          y: (i / count) * h + yJitter,
          phase: Math.random() * Math.PI * 2,
          amp: 5 + Math.random() * 16,
          speed: 0.00012 + Math.random() * 0.00028,
          thickness: 0.28 + Math.random() * 0.55,
          tint: Math.random() < 0.78 ? 1 : 0,
          length: 0.45 + Math.random() * 0.4,
        };
      });

      grain = buildGrain(ctx, 220);
    };

    const buildGrain = (c: CanvasRenderingContext2D, size: number) => {
      const img = c.createImageData(size, size);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        img.data[i] = v;
        img.data[i + 1] = v;
        img.data[i + 2] = v;
        img.data[i + 3] = 9; // alpha — whisper soft
      }
      return img;
    };

    const drawHaze = () => {
      // Two slow-orbiting radial pools — quieter for the monolith
      const g1cx = w * (0.78 + Math.sin(t * 0.00009) * 0.05);
      const g1cy = h * (0.22 + Math.cos(t * 0.00011) * 0.04);
      const g1 = ctx.createRadialGradient(g1cx, g1cy, 0, g1cx, g1cy, Math.max(w, h) * 0.75);
      g1.addColorStop(0, 'rgba(122, 27, 46, 0.13)');
      g1.addColorStop(0.4, 'rgba(58, 14, 24, 0.06)');
      g1.addColorStop(1, 'rgba(10, 8, 7, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2cx = w * (0.15 + Math.cos(t * 0.00007) * 0.05);
      const g2cy = h * (0.85 + Math.sin(t * 0.0001) * 0.03);
      const g2 = ctx.createRadialGradient(g2cx, g2cy, 0, g2cx, g2cy, Math.max(w, h) * 0.65);
      g2.addColorStop(0, 'rgba(155, 44, 66, 0.06)');
      g2.addColorStop(1, 'rgba(10, 8, 7, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
    };

    const drawFilament = (f: Filament) => {
      const segments = 80;
      const startX = w * (1 - f.length) * (0.5 + Math.sin(f.phase) * 0.5);
      const endX = startX + w * f.length;
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const px = startX + (endX - startX) * (i / segments);
        const wobble = Math.sin(t * f.speed + f.phase + (i / segments) * 4.2) * f.amp;
        const wobble2 = Math.cos(t * f.speed * 0.6 + f.phase + (i / segments) * 2.1) * f.amp * 0.35;
        const py = f.y + wobble + wobble2;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      const alpha = 0.035 + 0.05 * Math.abs(Math.sin(t * f.speed * 1.3 + f.phase));
      ctx.strokeStyle =
        f.tint === 1
          ? `rgba(168, 77, 99, ${alpha.toFixed(3)})`
          : `rgba(242, 236, 224, ${(alpha * 0.55).toFixed(3)})`;
      ctx.lineWidth = f.thickness;
      ctx.stroke();
    };

    const drawGrain = () => {
      if (!grain) return;
      // Tile the grain image at random offsets for a moving film-grain feel
      const ox = (Math.random() * 220) | 0;
      const oy = (Math.random() * 220) | 0;
      for (let x = -ox; x < w; x += 220) {
        for (let y = -oy; y < h; y += 220) {
          ctx.putImageData(grain, x, y);
        }
      }
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      t += 16;

      // Hard base
      ctx.fillStyle = '#0A0807';
      ctx.fillRect(0, 0, w, h);

      drawHaze();

      // Soft scrim lines (very faint horizontal grid)
      ctx.strokeStyle = 'rgba(242, 236, 224, 0.018)';
      ctx.lineWidth = 1;
      for (let y = 0; y < h; y += 96) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      for (const f of filaments) drawFilament(f);

      drawGrain();

      // Bottom fade into page
      const fade = ctx.createLinearGradient(0, h * 0.75, 0, h);
      fade.addColorStop(0, 'rgba(10, 8, 7, 0)');
      fade.addColorStop(1, 'rgba(10, 8, 7, 1)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, w, h);
    };

    window.addEventListener('resize', resize);
    resize();
    frame();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden />;
}
