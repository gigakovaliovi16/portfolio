import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const easing: Easing = [0.22, 0.61, 0.36, 1];

const vitals: { label: string; value: string }[] = [
  { label: 'Mandate', value: 'Director / Head of Operations' },
  { label: 'Sectors', value: 'Regulated FinTech · iGaming' },
  { label: 'Coverage', value: '24 / 7 / 365' },
  { label: 'Now at', value: 'SetantaSports · Application Support' },
  { label: 'Recently', value: 'eToro · concluded Jan 2026' },
  { label: 'Status', value: 'Open · Remote or relocation' },
];

const stamps: string[] = [
  'MGA',
  'UKGC',
  'FCA',
  'CySEC',
  'DORA',
  'MiFID II',
  'SOX 404',
  'GDPR',
  'AML / CFT',
];

/**
 * Quiet horizontal "credenza" strip — replaces the floating dossier card.
 * Slots between the editorial hero and the Mandate chapter.
 */
export default function VitalsStrip() {
  return (
    <section className="vitals" id="vitals" aria-label="Candidate dossier">
      <div className="vitals-inner">
        <header className="vitals-head">
          <span className="vitals-head-mark">Dossier · GK / 2026</span>
          <span className="vitals-head-rule" aria-hidden />
          <span className="vitals-head-meta">File 01 / Vol. VI · Verified May MMXXVI</span>
        </header>

        <motion.dl
          className="vitals-grid"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easing }}
        >
          {vitals.map((v) => (
            <div className="vitals-cell" key={v.label}>
              <dt>{v.label}</dt>
              <dd>{v.value}</dd>
            </div>
          ))}
        </motion.dl>

        <div className="vitals-perimeter">
          <span className="vitals-perimeter-label">Regulatory perimeter</span>
          <ul>
            {stamps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
