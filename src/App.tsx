import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';
import AetherFlowHero from '@/components/ui/aether-flow-hero';
import { CaseStudyCard } from '@/components/case-study-card';
import { EtoroMark, EvolutionMark, SetantaMark } from '@/components/company-logos';
import './index.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.7, ease: 'easeOut' as Easing },
  }),
};

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  subtitle: string;
};

function SectionHeader({ index, label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={0}
      variants={fadeInUp}
    >
      <span className="section-label">
        § {index} — {label}
      </span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  );
}

const metrics = [
  { value: '93%', label: 'MTTA reduction (17.3 → 1.2 min)' },
  { value: '99.98%', label: 'SLA adherence through peak streaming & betting events' },
  { value: '6→30', label: 'FTE scale across NOC, SOC, and Professional Services' },
  { value: '80%', label: 'Manual triage reduction via AI-assisted routing' },
  { value: '10/12', label: 'P0–P2 events proactively detected (from 1 of 6)' },
  { value: '22%', label: 'MTTR improvement via AI triage' },
];

const caseStudies = [
  {
    title: 'The eToro MTTA Intervention',
    situation:
      'eToro 24/7 operations ran with a 17-minute MTTA across 2,000+ monthly tickets. Customer impact during active trading was measurable; two prior restructures had failed to close the gap.',
    hardestPart:
      'Rebuilding the escalation model without breaking production during live trading windows — while hiring 24 new roles across NOC, SOC, and Professional Services in parallel.',
    action:
      'Designed tiered escalation layers with explicit ownership at each boundary. Replaced ad-hoc handoffs with on-call rotations and clear authority to pull the alarm.',
    result:
      'MTTA 17.3 → 1.2 min (93%). FLR 80% → 98%. The structure now anchors eToro’s global 24/7 platform commitments.',
  },
  {
    title: 'Building L2 Application Support at SetantaSports from Zero',
    situation:
      'SetantaSports had no dedicated Tier 2 structure when I took over application support — 2,000+ monthly cases were escalating into engineering through an overloaded Tier 1. Live broadcast and betting traffic left no maintenance window.',
    hardestPart:
      'Hiring and standing up a 10-person Tier 2 team while holding the platform up through peak streaming and betting events. No soft-launch — every escalation model change had to land in production live.',
    action:
      'Built the L2 function end-to-end: hiring plan, shift model, tiered escalation, Jira Service Management workflow, and an AI-assisted triage layer on top — all phased so Tier 1 and engineering stayed unblocked through the build.',
    result:
      '99.98% SLA adherence against a 5-minute MTTA target. 22% MTTR improvement. Independent Tier 2 operation within the first year — engineering no longer carries frontline escalation load.',
  },
];

const leadershipPrinciples = [
  'I build systems, not dependencies on individuals.',
  'I design escalation so the on-call engineer has the authority to stop the line.',
  'I treat incidents as data for improvement, not isolated failures.',
  'I scale before I optimize — the binding constraint is almost always capacity, not efficiency.',
  'I measure operational maturity by how many decisions happen without my involvement.',
];

const skillCategories = [
  {
    title: 'Incident Management',
    skills: ['MTTA/MTTR Optimization', 'Root Cause Analysis', 'Escalation Frameworks', 'Blameless Postmortems', 'Incident Command'],
  },
  {
    title: 'Operations & Tooling',
    skills: ['PagerDuty', 'Jira Service Management', 'AWS Monitoring', 'Confluence', 'Service Desk Automation'],
  },
  {
    title: 'Leadership & Strategy',
    skills: ['24/7 NOC / SOC Management', 'Team Building (6→30 FTE)', 'SLA Framework Design', 'Bootcamp Development', 'Cross-functional Partnership'],
  },
  {
    title: 'AI & Automation',
    skills: ['AI-Assisted Ticket Routing', 'Automated Categorization', 'Proactive Detection (P0–P2)', 'Log Analysis Automation', 'Operational Reporting'],
  },
  {
    title: 'Regulatory & Business Acumen',
    skills: [
      'Multi-Jurisdictional Licensed Operations',
      'Senior-Leadership Operational Reporting',
      'Vendor Management',
      'Ops Cost & Capacity Planning',
      'Cross-functional Partnership (Product · Engineering · Legal)',
    ],
  },
];

const projects = [
  {
    title: 'Opsrift',
    subtitle: 'Incident Management Platform',
    badge: 'Shipping',
    description:
      'End-to-end incident management for ops and SRE teams — detection, routing, investigation, and post-incident learning in one surface. Built from the problems I lived at eToro, with AI layered into the workflow where it measurably shortens time-to-decision.',
    tags: ['AI', 'Incident Management', 'SRE'],
    href: 'https://opsrift.com',
    hrefLabel: 'opsrift.com',
  },
  {
    title: 'Akamaru',
    subtitle: 'Commercial SaaS Boilerplate',
    badge: 'Shipped Product',
    description:
      'Designed the architecture, auth flow, billing scaffold, and admin panel. Sold commercially at akamaru.dev; open-source predecessor at mysaas-boilerplate. Built in parallel with ops work — sharpens my product, auth, and deployment context.',
    tags: ['React', 'Express', 'Postgres', 'Clerk', 'Paddle', 'Drizzle'],
    href: 'https://akamaru.dev',
    hrefLabel: 'akamaru.dev',
  },
];

function App() {
  return (
    <main>
      <AetherFlowHero />

      <section className="portfolio-section" id="achievements">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="01"
            label="Impact"
            title="Key Achievements"
            subtitle="Measurable outcomes from building operational infrastructure at scale."
          />

          <div className="metrics-grid">
            {metrics.map((metric, i) => (
              <motion.div
                className="metric-card"
                key={metric.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <span className="metric-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-section-alt" id="experience">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="02"
            label="Experience"
            title="Professional Journey"
            subtitle="Six years scaling 24/7 operations across iGaming and FinTech. Started on the floor at Evolution; now leading application support at SetantaSports alongside the Operational Excellence role at eToro."
          />

          <div className="experience-timeline">
            <motion.article
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={1}
              variants={fadeInUp}
            >
              <div className="experience-header">
                <div className="experience-header-main">
                  <SetantaMark className="experience-company-logo" />
                  <div>
                    <div className="experience-role">Application Support Manager</div>
                    <div className="experience-company experience-company-setanta">
                      SetantaSports · iGaming
                    </div>
                    <div className="experience-company-scale">
                      Premium sports streaming &amp; betting · high-traffic broadcast
                    </div>
                  </div>
                </div>
                <div className="experience-meta">
                  <span>
                    <Calendar size={12} /> Jan 2025 — Present
                  </span>
                  <span>
                    <MapPin size={12} /> Tbilisi, Georgia
                  </span>
                </div>
              </div>
              <p className="experience-note">
                Concurrent appointment alongside Webiz · eToro
              </p>
              <ul className="experience-highlights">
                <li>
                  Built the Application Support function from scratch at a streaming platform with no
                  prior L2 structure — recruited and shaped a 10-person Tier 2 team from zero.
                </li>
                <li>
                  Held <strong>99.98% SLA</strong> with a 1-minute average MTTA against a 5-minute
                  target, safeguarding platform availability through peak streaming and betting
                  events.
                </li>
                <li>
                  Owned the AI-assisted triage rollout in Jira Service Management across 2,000+
                  monthly cases — cutting MTTR by <strong>22%</strong>.
                </li>
                <li>
                  Partnered with Product and DevOps leadership to prioritize operational risk by
                  business impact during high-traffic windows.
                </li>
              </ul>
            </motion.article>

            <motion.article
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={2}
              variants={fadeInUp}
            >
              <div className="experience-header">
                <div className="experience-header-main">
                  <EtoroMark className="experience-company-logo" />
                  <div>
                    <div className="experience-role">
                      Operations Center Manager → Operational Excellence Manager
                    </div>
                    <div className="experience-company experience-company-etoro">
                      eToro · Webiz International
                    </div>
                    <div className="experience-company-scale">
                      NASDAQ-listed social trading platform (ETOR) · global consumer FinTech
                    </div>
                  </div>
                </div>
                <div className="experience-meta">
                  <span>
                    <Calendar size={12} /> Oct 2023 — Present
                  </span>
                  <span>
                    <MapPin size={12} /> Tbilisi, Georgia
                  </span>
                </div>
              </div>
              <p className="experience-note">
                Promoted from Operations Center Manager to Operational Excellence Manager, October
                2024
              </p>
              <ul className="experience-highlights">
                <li>
                  Grew and led the 24/7 operations organization from <strong>6 to 30 FTE</strong>{' '}
                  across NOC, SOC, and Professional Services — on-call rotations, explicit
                  escalation authority at every boundary, and the coverage model now underpinning
                  eToro’s global platform commitments.
                </li>
                <li>
                  Cut MTTA <strong>93%</strong> (17.3 → 1.2 min) and lifted First Line Resolution
                  from 80% to 98% across 2,000+ monthly tickets — materially reducing
                  customer-facing downtime during peak trading.
                </li>
                <li>
                  Shifted incident management from reactive to proactive — driving P0–P2 detection
                  from 1-of-6 to 10-of-12 events, with AI-assisted triage cutting manual workload{' '}
                  <strong>80%</strong>.
                </li>
                <li>
                  Owned the operational narrative to senior leadership — shaping platform
                  reliability planning and sustaining <strong>99.95%+</strong> SLA adherence through
                  it.
                </li>
              </ul>
            </motion.article>

            <motion.article
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={3}
              variants={fadeInUp}
            >
              <div className="experience-header">
                <div className="experience-header-main">
                  <EvolutionMark className="experience-company-logo" />
                  <div>
                    <div className="experience-role">
                      Service Support Specialist → Service Support Team Lead
                    </div>
                    <div className="experience-company experience-company-evolution">
                      Evolution · iGaming
                    </div>
                    <div className="experience-company-scale">
                      Global live-casino leader · Nasdaq Stockholm (EVO)
                    </div>
                  </div>
                </div>
                <div className="experience-meta">
                  <span>
                    <Calendar size={12} /> Dec 2019 — Oct 2023
                  </span>
                  <span>
                    <MapPin size={12} /> Tbilisi, Georgia
                  </span>
                </div>
              </div>
              <p className="experience-note">
                Promoted to Team Lead within two years of joining
              </p>
              <ul className="experience-highlights">
                <li>
                  Managed a 12-person support team across four global locations in a 24/7 iGaming
                  environment — owning shift planning, quality calibration, and performance
                  coaching.
                </li>
                <li>
                  Led Tier 1 and Tier 2 escalations on VIP and regulator-sensitive incidents —
                  ensuring compliant resolution and protecting the business from compliance exposure
                  across multiple licensed jurisdictions.
                </li>
                <li>
                  Designed mentorship and QA programs that lifted first-level resolution rates{' '}
                  <strong>30%</strong> across a 66-person support organization.
                </li>
                <li>
                  Standardized 45+ operational workflows in Confluence — cutting onboarding time 25%
                  and average ticket workload 40%.
                </li>
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="case-studies">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="03"
            label="Case Studies"
            title="Selected Work"
            subtitle="Two stories told the way I’d tell them in an interview — situation, hardest part, approach, outcome."
          />

          <div className="case-studies-stack">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <CaseStudyCard
                  index={String(i + 1).padStart(2, '0')}
                  title={cs.title}
                  situation={cs.situation}
                  hardestPart={cs.hardestPart}
                  action={cs.action}
                  result={cs.result}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-section-alt" id="projects">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="04"
            label="Product"
            title="Projects"
            subtitle="Products I’ve shipped in parallel — they sharpen the ops discipline with firsthand product, auth, billing, and deployment context."
          />

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <div className="project-card-head">
                  <span className="project-card-index">
                    {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span className="project-card-badge">{project.badge}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">
                  <em
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: 'italic',
                      color: 'var(--wine-200)',
                    }}
                  >
                    {project.subtitle}.
                  </em>{' '}
                  {project.description}
                </p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.href}
                  className="project-card-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit {project.hrefLabel}</span>
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="skills">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="05"
            label="Expertise"
            title="Skills & Tools"
            subtitle="Core competencies across incident response, automation, and the regulatory and business fluency expected of senior operations leadership."
          />

          <div className="skills-categories">
            {skillCategories.map((cat, i) => (
              <motion.div
                className="skill-category"
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <div className="skill-category-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-section-alt" id="leadership">
        <div className="portfolio-section-inner portfolio-section-narrow">
          <SectionHeader
            index="06"
            label="Philosophy"
            title="How I Operate"
            subtitle="Principles that guide how I build teams, systems, and accountability."
          />

          <motion.ul
            className="philosophy-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={1}
            variants={fadeInUp}
          >
            {leadershipPrinciples.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="portfolio-section" id="contact">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="07"
            label="Connect"
            title="Correspondence"
            subtitle="Open to Director / Head of Operations roles in regulated FinTech and iGaming."
          />

          <p className="contact-availability">
            Based in Tbilisi, Georgia — open to remote and international opportunities.
          </p>

          <div className="contact-grid">
            <motion.a
              href="mailto:gigakovaliovi@gmail.com"
              className="contact-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
            >
              <span className="contact-label">
                <Mail size={11} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />
                Email
              </span>
              <span className="contact-value">gigakovaliovi@gmail.com</span>
              <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
            </motion.a>

            <motion.a
              href="tel:+995591947168"
              className="contact-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
            >
              <span className="contact-label">
                <Phone size={11} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />
                Phone
              </span>
              <span className="contact-value">+995 591 947 168</span>
              <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/giga-kovaliovi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeInUp}
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">giga-kovaliovi</span>
              <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
            </motion.a>

            <div className="contact-item" style={{ cursor: 'default' }}>
              <span className="contact-label">
                <MapPin size={11} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />
                Location
              </span>
              <span className="contact-value">Tbilisi, Georgia</span>
              <span />
            </div>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <span>© {new Date().getFullYear()} · Giga Kovaliovi</span>
        <span className="portfolio-footer-colophon">
          Set in Fraunces &amp; Inter Tight · Tbilisi, MMXXVI
        </span>
      </footer>
    </main>
  );
}

export default App;
