import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const easing: Easing = [0.22, 0.61, 0.36, 1];

type Props = {
  children: React.ReactNode;
  attribution?: string;
};

export default function PullQuote({ children, attribution }: Props) {
  return (
    <motion.aside
      className="pullquote"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: easing }}
    >
      <span className="pullquote-mark" aria-hidden>
        &ldquo;
      </span>
      <blockquote className="pullquote-body">{children}</blockquote>
      {attribution ? <cite className="pullquote-cite">— {attribution}</cite> : null}
    </motion.aside>
  );
}
