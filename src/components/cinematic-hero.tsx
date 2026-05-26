import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import AtmosphereCanvas from './atmosphere-canvas';

const easing: Easing = [0.22, 0.61, 0.36, 1];

export default function CinematicHero() {
  return (
    <section className="hero" id="hero">
      <AtmosphereCanvas />
      <div className="hero-scrim" aria-hidden />

      {/* Corner markers — quiet, almost invisible */}
      <motion.span
        className="hero-corner hero-corner--tl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: easing }}
      >
        <span className="hero-corner-glyph">GK</span>
        <span className="hero-corner-rule" aria-hidden />
        <span>2026</span>
      </motion.span>

      <motion.span
        className="hero-corner hero-corner--tr"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: easing }}
      >
        Tbilisi · GMT+4
      </motion.span>

      {/* Monolith — the entire above-the-fold composition */}
      <div className="hero-monolith">
        <motion.div
          className="hero-monolith-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.0, ease: easing }}
          aria-hidden
        >
          <span />
        </motion.div>

        <h1 className="hero-monolith-name" aria-label="Giga Kovaliovi">
          <span className="hero-monolith-word">
            <motion.span
              className="hero-monolith-inner"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.85, duration: 1.1, ease: easing }}
            >
              Giga
            </motion.span>
          </span>{' '}
          <span className="hero-monolith-word">
            <motion.span
              className="hero-monolith-inner hero-monolith-inner--italic"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 1.05, duration: 1.1, ease: easing }}
            >
              Kovaliovi
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="hero-monolith-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1.1, ease: easing }}
          aria-hidden
        />

        <motion.p
          className="hero-monolith-tagline"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 1.0, ease: easing }}
        >
          Operations &amp; Infrastructure
        </motion.p>

        <motion.p
          className="hero-monolith-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.85, duration: 0.9, ease: easing }}
        >
          For regulated FinTech &amp; iGaming
        </motion.p>
      </div>

      {/* Scroll cue — the only "interface" above the fold */}
      <motion.a
        href="#foreword"
        className="hero-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.0 }}
        aria-label="Continue to foreword"
      >
        <span className="hero-cue-label">Continue</span>
        <span className="hero-cue-rule" aria-hidden />
        <span className="hero-cue-arrow" aria-hidden>
          ↓
        </span>
      </motion.a>
    </section>
  );
}
