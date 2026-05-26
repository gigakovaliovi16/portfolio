import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const easing: Easing = [0.22, 0.61, 0.36, 1];

export type ChartProps = {
  label: string;
  unit: string;
  before: { value: number; caption: string };
  after: { value: number; caption: string };
  /** Direction of "improvement" — used for delta phrasing only */
  direction?: 'down' | 'up';
  /** Optional fixed scale max; otherwise derived from the larger of before/after */
  max?: number;
};

function formatDelta(before: number, after: number, direction: 'down' | 'up') {
  if (direction === 'down') {
    const pct = Math.round(((before - after) / before) * 100);
    return `↓ ${pct}%`;
  }
  // For "up" we report the multiple (e.g., 6 → 30 = 5×)
  const mult = after / before;
  if (mult >= 2) return `× ${mult.toFixed(mult % 1 === 0 ? 0 : 1)}`;
  const pct = Math.round(((after - before) / before) * 100);
  return `↑ ${pct}%`;
}

function formatValue(v: number) {
  if (v >= 100) return v.toFixed(0);
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(1);
}

export function MetricChart({
  label,
  unit,
  before,
  after,
  direction = 'down',
  max,
}: ChartProps) {
  const scale = max ?? Math.max(before.value, after.value);
  const beforeW = scale > 0 ? (before.value / scale) * 100 : 0;
  const afterW = scale > 0 ? (after.value / scale) * 100 : 0;

  return (
    <motion.figure
      className="chart"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: easing }}
    >
      <figcaption className="chart-cap">
        <span className="chart-cap-label">{label}</span>
        <span className="chart-cap-delta">{formatDelta(before.value, after.value, direction)}</span>
      </figcaption>

      <div className="chart-rows">
        <div className="chart-row">
          <span className="chart-row-label">Before</span>
          <div className="chart-track">
            <motion.span
              className="chart-bar chart-bar--before"
              initial={{ width: 0 }}
              whileInView={{ width: `${beforeW}%` }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: easing, delay: 0.1 }}
              aria-hidden
            />
          </div>
          <span className="chart-row-val">
            <strong>{formatValue(before.value)}</strong>
            <span className="chart-row-unit">{unit}</span>
          </span>
        </div>

        <div className="chart-row">
          <span className="chart-row-label chart-row-label--after">After</span>
          <div className="chart-track">
            <motion.span
              className="chart-bar chart-bar--after"
              initial={{ width: 0 }}
              whileInView={{ width: `${afterW}%` }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: easing, delay: 0.32 }}
              aria-hidden
            />
          </div>
          <span className="chart-row-val">
            <strong>{formatValue(after.value)}</strong>
            <span className="chart-row-unit">{unit}</span>
          </span>
        </div>
      </div>

      <div className="chart-notes">
        <span>{before.caption}</span>
        <span className="chart-notes-sep" aria-hidden>
          /
        </span>
        <span>{after.caption}</span>
      </div>
    </motion.figure>
  );
}
