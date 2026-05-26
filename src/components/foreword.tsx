import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const easing: Easing = [0.22, 0.61, 0.36, 1];

/**
 * Quiet introductory block sitting between the monolith hero and the Vitals strip.
 * Holds the lede paragraph and the only CTAs — kept out of the cover above the fold.
 */
export default function Foreword() {
  return (
    <section className="foreword" id="foreword" aria-label="Foreword">
      <div className="foreword-inner">
        <motion.span
          className="foreword-marker"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <span className="foreword-marker-rule" aria-hidden />
          <span>Foreword</span>
        </motion.span>

        <motion.p
          className="foreword-body"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: easing, delay: 0.08 }}
        >
          Six years building the operational spine behind regulated consumer platforms — on-call
          rotations, escalation authority, AI-assisted triage. At <em>eToro</em>: six to thirty
          FTE across NOC, SOC and Professional Services; MTTA down ninety-three percent;
          Georgia&rsquo;s first SOC bootcamp. At <em>SetantaSports</em>: Tier 2 built from zero;
          escalation rate sixty-five to three percent in twelve months; 99.98% SLA through peak
          streaming. Currently fielding the next mandate.
        </motion.p>

        <motion.div
          className="foreword-actions"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: easing, delay: 0.18 }}
        >
          <a href="#case-studies" className="hero-cta hero-cta--primary">
            <span>Selected Work</span>
            <ArrowRight size={14} aria-hidden />
          </a>
          <a href="#contact" className="hero-cta hero-cta--secondary">
            <span>Correspondence</span>
            <ArrowRight size={14} aria-hidden />
          </a>
          <a href="/giga-kovaliovi-cv.pdf" download className="hero-cta hero-cta--ghost">
            <span>CV · PDF</span>
            <ArrowDown size={14} aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
