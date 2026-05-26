import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const easing: Easing = [0.22, 0.61, 0.36, 1];

type Stamp = {
  acronym: string;
  long: string;
  jurisdiction: string;
  operator: 'eToro' | 'SetantaSports' | 'Both';
};

const stamps: Stamp[] = [
  { acronym: 'MGA', long: 'Malta Gaming Authority', jurisdiction: 'Malta', operator: 'SetantaSports' },
  { acronym: 'UKGC', long: 'UK Gambling Commission', jurisdiction: 'United Kingdom', operator: 'SetantaSports' },
  { acronym: 'FCA', long: 'Financial Conduct Authority', jurisdiction: 'United Kingdom', operator: 'eToro' },
  { acronym: 'CySEC', long: 'Cyprus Securities & Exchange Commission', jurisdiction: 'Cyprus / EU', operator: 'eToro' },
  { acronym: 'DORA', long: 'Digital Operational Resilience Act', jurisdiction: 'EU', operator: 'eToro' },
  { acronym: 'MiFID II', long: 'Markets in Financial Instruments Directive II', jurisdiction: 'EU', operator: 'eToro' },
  { acronym: 'SOX 404', long: 'Sarbanes–Oxley §404 (post-listing controls)', jurisdiction: 'United States', operator: 'eToro' },
  { acronym: 'GDPR', long: 'General Data Protection Regulation', jurisdiction: 'EU / UK', operator: 'Both' },
  { acronym: 'AML / CFT', long: 'Anti-Money Laundering & Counter-Financing of Terrorism', jurisdiction: 'Multi-jurisdiction', operator: 'Both' },
];

export default function RegulatoryWall() {
  return (
    <div className="regwall">
      <ul className="regwall-grid">
        {stamps.map((s, i) => (
          <motion.li
            key={s.acronym}
            className="regwall-cell"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.04, duration: 0.55, ease: easing }}
          >
            <div className="regwall-stamp">
              <span className="regwall-stamp-mark" aria-hidden />
              <span className="regwall-stamp-acronym">{s.acronym}</span>
            </div>
            <div className="regwall-body">
              <div className="regwall-long">{s.long}</div>
              <div className="regwall-meta">
                <span>{s.jurisdiction}</span>
                <span className="regwall-meta-sep" aria-hidden>
                  ·
                </span>
                <span className="regwall-meta-op">via {s.operator}</span>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <p className="regwall-foot">
        Named only where I&rsquo;ve worked inside the framework — classification, reporting, breach
        handling, or change-management discipline. Verifiable in a 15-minute interview.
      </p>
    </div>
  );
}
