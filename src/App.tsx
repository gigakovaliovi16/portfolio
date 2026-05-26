import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
  FileText,
} from 'lucide-react';
import { GithubGlyph, LinkedinGlyph } from '@/components/brand-icons';
import CinematicHero from '@/components/cinematic-hero';
import Foreword from '@/components/foreword';
import VitalsStrip from '@/components/vitals-strip';
import ChapterRail from '@/components/chapter-rail';
import type { Chapter } from '@/components/chapter-rail';
import PullQuote from '@/components/pull-quote';
import { MetricChart } from '@/components/metric-chart';
import RegulatoryWall from '@/components/regulatory-wall';
import { CaseStudyCard } from '@/components/case-study-card';
import { EtoroMark, EvolutionMark, SetantaMark } from '@/components/company-logos';
import './index.css';

const easing: Easing = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.7, ease: easing },
  }),
};

type SectionHeaderProps = {
  numeral: string;
  label: string;
  title: string;
  subtitle: string;
};

function SectionHeader({ numeral, label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="section-head"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={0}
      variants={fadeInUp}
    >
      <div className="section-head-row">
        <span className="section-head-numeral">{numeral}</span>
        <span className="section-head-rule" aria-hidden />
        <span className="section-head-label">{label}</span>
      </div>
      <h2 className="section-head-title">{title}</h2>
      <p className="section-head-subtitle">{subtitle}</p>
    </motion.div>
  );
}

const chapters: Chapter[] = [
  { id: 'hero', numeral: 'I', label: 'Cover' },
  { id: 'mandate', numeral: 'II', label: 'Mandate' },
  { id: 'track-record', numeral: 'III', label: 'Track Record' },
  { id: 'experience', numeral: 'IV', label: 'Tenure' },
  { id: 'case-studies', numeral: 'V', label: 'Selected Work' },
  { id: 'regulatory', numeral: 'VI', label: 'Perimeter' },
  { id: 'skills', numeral: 'VII', label: 'Instruments' },
  { id: 'projects', numeral: 'VIII', label: 'In Parallel' },
  { id: 'philosophy', numeral: 'IX', label: 'Operating' },
  { id: 'contact', numeral: 'X', label: 'Correspondence' },
];

const charts = [
  {
    label: 'Escalation Rate · SetantaSports',
    unit: '%',
    direction: 'down' as const,
    before: { value: 65, caption: 'Pre-restructure · escalations flooding into engineering' },
    after: { value: 3, caption: 'Twelve months later · L2 absorbs the work' },
    max: 70,
  },
  {
    label: 'Mean Time to Acknowledge · eToro',
    unit: 'min',
    direction: 'down' as const,
    before: { value: 17.3, caption: 'Pre-intervention baseline · 2,000+ tickets / month' },
    after: { value: 1.2, caption: 'Post tiered-escalation rollout · live trading windows' },
    max: 18,
  },
  {
    label: 'First-Line Resolution · eToro',
    unit: '%',
    direction: 'up' as const,
    before: { value: 80, caption: 'Pre-restructure · escalations leaking into engineering' },
    after: { value: 98, caption: 'Post-restructure · L1 closes the work' },
    max: 100,
  },
  {
    label: '24/7 Operations Headcount · eToro',
    unit: 'FTE',
    direction: 'up' as const,
    before: { value: 6, caption: 'Initial team · NOC only' },
    after: { value: 30, caption: 'Built out · NOC · SOC · Professional Services' },
    max: 32,
  },
];

const ledger = [
  { value: '99.98%', label: 'SLA adherence through peak streaming & betting events' },
  { value: '60%', label: 'Manual triage workload removed via AI-assisted routing' },
  { value: '10 / 12', label: 'P0–P2 events proactively detected — from 1 of 6 prior' },
  { value: '411k', label: 'Aviator B2B daily users on Jira-integrated bonus engine I shipped' },
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
    skills: [
      'MTTA / MTTR Optimization',
      'Root Cause Analysis',
      'Escalation Frameworks',
      'Blameless Postmortems',
      'Incident Command',
    ],
  },
  {
    title: 'Monitoring & Incident',
    skills: [
      'Datadog',
      'Grafana',
      'Splunk',
      'Kibana',
      'PagerDuty',
      'OpsGenie',
      'Incident.io',
      'AWS CloudWatch',
    ],
  },
  {
    title: 'Service Management',
    skills: [
      'Jira Service Management',
      'ServiceNow',
      'Confluence',
      'Workflow Automation',
      'ITIL',
    ],
  },
  {
    title: 'Cloud & Data',
    skills: [
      'AWS Infrastructure',
      'Databricks',
      'SQL',
      'API Troubleshooting',
      'Log Analysis',
    ],
  },
  {
    title: 'Leadership & Strategy',
    skills: [
      '24/7 NOC / SOC Management',
      'Team Building (6 → 30 FTE)',
      'SLA Framework Design',
      'Bootcamp Development',
      'Cross-functional Partnership',
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      'AI-Assisted Ticket Routing',
      'Automated Categorization',
      'Proactive Detection (P0–P2)',
      'Log Analysis Automation',
      'Operational Reporting',
    ],
  },
  {
    title: 'Regulatory & Compliance',
    skills: [
      'iGaming Licensing (MGA · UKGC · Responsible Gambling)',
      'FinTech Regulation (FCA · CySEC · MiFID II)',
      'Operational Resilience (DORA · SOX 404)',
      'GDPR & Data-Breach Handling',
      'AML / CFT Controls',
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
    <>
      <ChapterRail chapters={chapters} />

      <main className="shell">
        <CinematicHero />

        <Foreword />

        <VitalsStrip />

        <section className="section" id="mandate">
          <div className="section-inner section-inner--narrow">
            <SectionHeader
              numeral="II"
              label="Mandate"
              title="The work, in one paragraph."
              subtitle="What I actually do — for recruiters who only have ninety seconds before the next CV."
            />
            <div className="mandate-body">
              <p className="mandate-lede">
                I take 24/7 operations from <em>“we hope it holds”</em> to a system that runs
                without me in the room. Tiered escalation with explicit authority. AI-assisted
                triage where it actually shortens time-to-decision. A regulatory posture that
                survives audit instead of just passing it.
              </p>
              <p className="mandate-sub">
                Currently at SetantaSports, where I stood up Application Support Tier 2 from zero
                while the platform was live — cutting escalation rate from 65% to 3% in twelve
                months and holding 99.98% SLA through peak streaming and betting. Before that, at
                eToro, I rebuilt the Operations Center from six people to thirty across NOC, SOC,
                and Professional Services, cut MTTA 93%, and founded Georgia&rsquo;s first SOC
                bootcamp. I&rsquo;m looking for the next operation to run.
              </p>
            </div>
          </div>
        </section>

        <PullQuote attribution="Operating principle">
          <em>Operations is the part of the business that turns promises into receipts.</em>
        </PullQuote>

        <section className="section section--alt" id="track-record">
          <div className="section-inner">
            <SectionHeader
              numeral="III"
              label="Track Record"
              title="Measured outcomes, not vibes."
              subtitle="Four intervention curves and a brief ledger of everything else worth noting."
            />

            <div className="chart-stack">
              {charts.map((c) => (
                <MetricChart
                  key={c.label}
                  label={c.label}
                  unit={c.unit}
                  before={c.before}
                  after={c.after}
                  direction={c.direction}
                  max={c.max}
                />
              ))}
            </div>

            <div className="ledger">
              <div className="ledger-head">
                <span>Ledger</span>
                <span className="ledger-head-rule" aria-hidden />
                <span className="ledger-head-meta">Additional, audited</span>
              </div>
              <dl className="ledger-rows">
                {ledger.map((row) => (
                  <div className="ledger-row" key={row.label}>
                    <dt>{row.value}</dt>
                    <dd>{row.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-inner">
            <SectionHeader
              numeral="IV"
              label="Tenure"
              title="Six years on the floor and at the helm."
              subtitle="Started as a specialist at Evolution. Now running application support at SetantaSports concurrently with the Operational Excellence role at eToro."
            />

            <ol className="tenure">
              <motion.li
                className="tenure-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={1}
                variants={fadeInUp}
              >
                <span className="tenure-marker" aria-hidden />
                <div className="tenure-meta">
                  <span className="tenure-dates">
                    <Calendar size={12} aria-hidden /> Jan 2025 — Present
                  </span>
                  <span className="tenure-place">
                    <MapPin size={12} aria-hidden /> Tbilisi, Georgia
                  </span>
                  <span className="tenure-tag">Concurrent</span>
                </div>
                <div className="tenure-body">
                  <header className="tenure-head">
                    <SetantaMark className="tenure-logo" />
                    <div>
                      <h3 className="tenure-role">Application Support Manager</h3>
                      <p className="tenure-company tenure-company--setanta">
                        SetantaSports · iGaming
                      </p>
                      <p className="tenure-context">
                        Premium sports streaming &amp; betting · high-traffic broadcast
                      </p>
                    </div>
                  </header>
                  <ul className="tenure-points">
                    <li>
                      Built the Application Support function from scratch at a streaming platform
                      with no prior L2 structure — recruited and shaped a 10-person Tier 2 team
                      from zero.
                    </li>
                    <li>
                      Cut escalation rate from <strong>65% to 3%</strong> in twelve months by
                      restructuring triage logic and L1-to-L2 handoff protocols — engineering no
                      longer carries frontline escalation load.
                    </li>
                    <li>
                      Held <strong>99.98% SLA</strong> with a 1-minute average MTTA against a
                      5-minute target, safeguarding platform availability through peak streaming
                      and betting events.
                    </li>
                    <li>
                      Designed and shipped a Jira-integrated bonus engine for the{' '}
                      <strong>Aviator B2B operator team</strong> serving <strong>411k daily
                      users</strong> — automating dispute and reconciliation workflows.
                    </li>
                    <li>
                      Shipped AI-assisted triage in Jira Service Management across 2,000+ monthly
                      cases — cutting MTTR <strong>22%</strong> with no headcount increase.
                    </li>
                    <li>
                      Operated under <strong>MGA</strong> and <strong>UKGC</strong> licensing —
                      regulator-facing incident reporting, GDPR 72-hour breach handling, and
                      Responsible Gambling / AML-CFT controls integrated into the incident routing
                      model.
                    </li>
                  </ul>
                </div>
              </motion.li>

              <motion.li
                className="tenure-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={2}
                variants={fadeInUp}
              >
                <span className="tenure-marker" aria-hidden />
                <div className="tenure-meta">
                  <span className="tenure-dates">
                    <Calendar size={12} aria-hidden /> Oct 2023 — Jan 2026
                  </span>
                  <span className="tenure-place">
                    <MapPin size={12} aria-hidden /> Tbilisi, Georgia
                  </span>
                  <span className="tenure-tag">Promoted · Oct 2024</span>
                </div>
                <div className="tenure-body">
                  <header className="tenure-head">
                    <EtoroMark className="tenure-logo" />
                    <div>
                      <h3 className="tenure-role">
                        Operations Center Manager → Operational Excellence Manager
                      </h3>
                      <p className="tenure-company tenure-company--etoro">
                        eToro · Webiz International
                      </p>
                      <p className="tenure-context">
                        NASDAQ-listed social trading platform (ETOR) · global consumer FinTech
                      </p>
                    </div>
                  </header>
                  <ul className="tenure-points">
                    <li>
                      Grew and led the 24/7 operations organization from <strong>6 to 30 FTE</strong>{' '}
                      across NOC, SOC, and Professional Services — structured under three team
                      leads, each owning a function with explicit escalation authority.
                    </li>
                    <li>
                      Cut MTTA <strong>93%</strong> (17.3 → 1.2 min) and lifted First Line Resolution
                      from 80% to 98% across 2,000+ monthly tickets and ~2,000 monthly monitoring
                      alerts — materially reducing customer-facing downtime during peak trading.
                    </li>
                    <li>
                      Shifted incident management from reactive to proactive — driving P0–P2
                      detection from 1-of-6 to 10-of-12 events, with AI-assisted triage cutting
                      manual workload <strong>60%</strong>.
                    </li>
                    <li>
                      Founded and ran <strong>Georgia&rsquo;s first SOC bootcamp</strong> —
                      converted cohort graduates into full-time eToro security operations hires,
                      building a domestic talent pipeline where one didn&rsquo;t exist.
                    </li>
                    <li>
                      Led regulatory incident handling via <strong>Professional Services</strong> —
                      classification, escalation, and reporting under <strong>DORA</strong>,{' '}
                      <strong>MiFID II</strong>, <strong>FCA</strong>, and <strong>CySEC</strong>,
                      with <strong>SOX 404</strong> change-management discipline layered in
                      following eToro&rsquo;s 2025 NASDAQ listing.
                    </li>
                  </ul>
                </div>
              </motion.li>

              <motion.li
                className="tenure-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={3}
                variants={fadeInUp}
              >
                <span className="tenure-marker" aria-hidden />
                <div className="tenure-meta">
                  <span className="tenure-dates">
                    <Calendar size={12} aria-hidden /> Dec 2019 — Oct 2023
                  </span>
                  <span className="tenure-place">
                    <MapPin size={12} aria-hidden /> Tbilisi, Georgia
                  </span>
                  <span className="tenure-tag">Promoted to Team Lead</span>
                </div>
                <div className="tenure-body">
                  <header className="tenure-head">
                    <EvolutionMark className="tenure-logo" />
                    <div>
                      <h3 className="tenure-role">
                        Service Support Specialist → Service Support Team Lead
                      </h3>
                      <p className="tenure-company tenure-company--evolution">
                        Evolution · iGaming
                      </p>
                      <p className="tenure-context">
                        Global live-casino leader · Nasdaq Stockholm (EVO)
                      </p>
                    </div>
                  </header>
                  <ul className="tenure-points">
                    <li>
                      Managed a 12-person support team across four global locations in a 24/7
                      iGaming environment — owning shift planning, quality calibration, and
                      performance coaching.
                    </li>
                    <li>
                      Led Tier 1 and Tier 2 escalations on VIP and regulator-sensitive incidents —
                      ensuring compliant resolution across multiple licensed jurisdictions.
                    </li>
                    <li>
                      Designed mentorship and QA programs that lifted first-level resolution rates{' '}
                      <strong>30%</strong> across a 66-person support organization.
                    </li>
                    <li>
                      Standardized 45+ operational workflows in Confluence — cutting onboarding
                      time 25% and average ticket workload 40%.
                    </li>
                  </ul>
                </div>
              </motion.li>
            </ol>
          </div>
        </section>

        <section className="section section--alt" id="case-studies">
          <div className="section-inner">
            <SectionHeader
              numeral="V"
              label="Selected Work"
              title="Two stories, the way I&rsquo;d tell them in the interview."
              subtitle="Situation, hardest part, approach, outcome. The shape of a Director-level answer."
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

        <section className="section" id="regulatory">
          <div className="section-inner">
            <SectionHeader
              numeral="VI"
              label="Perimeter"
              title="Regulatory frameworks I&rsquo;ve operated under."
              subtitle="Not a list of acronyms I&rsquo;ve read — frameworks I&rsquo;ve filed, classified, escalated, and survived audit inside."
            />
            <RegulatoryWall />
          </div>
        </section>

        <PullQuote attribution="On hiring an operations leader">
          <em>
            The job is to make sure the on-call engineer at 03:47 has the authority to stop the
            line — and the system to do it inside a five-minute window.
          </em>
        </PullQuote>

        <section className="section section--alt" id="skills">
          <div className="section-inner">
            <SectionHeader
              numeral="VII"
              label="Instruments"
              title="Skills & tools."
              subtitle="Core competencies across incident response, automation, and the regulatory and business fluency expected of senior operations leadership."
            />

            <div className="skills">
              {skillCategories.map((cat, i) => (
                <motion.div
                  className="skills-category"
                  key={cat.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i + 1}
                  variants={fadeInUp}
                >
                  <div className="skills-category-title">{cat.title}</div>
                  <div className="skills-tags">
                    {cat.skills.map((skill) => (
                      <span className="skills-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-inner">
            <SectionHeader
              numeral="VIII"
              label="In Parallel"
              title="Products I&rsquo;ve shipped alongside the day job."
              subtitle="They sharpen the ops discipline with firsthand product, auth, billing, and deployment context."
            />

            <div className="projects-grid">
              {projects.map((project, i) => (
                <motion.article
                  key={project.title}
                  className="project"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i + 1}
                  variants={fadeInUp}
                >
                  <div className="project-head">
                    <span className="project-index">
                      {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                    <span className="project-badge">{project.badge}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}.</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    className="project-cta"
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

        <section className="section section--alt" id="philosophy">
          <div className="section-inner section-inner--narrow">
            <SectionHeader
              numeral="IX"
              label="Operating"
              title="How I run a room."
              subtitle="Principles that guide how I build teams, systems, and accountability."
            />

            <motion.ol
              className="creed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={1}
              variants={fadeInUp}
            >
              {leadershipPrinciples.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-inner">
            <SectionHeader
              numeral="X"
              label="Correspondence"
              title="The line is open."
              subtitle="Open to Director / Head of Operations roles in regulated FinTech and iGaming. Remote, or relocation for the right operation."
            />

            <div className="contact-grid">
              <motion.a
                href="/giga-kovaliovi-cv.pdf"
                download
                className="contact-item contact-item--feature"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeInUp}
              >
                <span className="contact-label">
                  <FileText size={11} aria-hidden /> CV · PDF
                </span>
                <span className="contact-value">Download dossier</span>
                <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
              </motion.a>

              <motion.a
                href="mailto:gigakovaliovi@gmail.com"
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={fadeInUp}
              >
                <span className="contact-label">
                  <Mail size={11} aria-hidden /> Email
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
                custom={3}
                variants={fadeInUp}
              >
                <span className="contact-label">
                  <Phone size={11} aria-hidden /> Direct Line
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
                custom={4}
                variants={fadeInUp}
              >
                <span className="contact-label">
                  <LinkedinGlyph /> LinkedIn
                </span>
                <span className="contact-value">giga-kovaliovi</span>
                <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
              </motion.a>

              <motion.a
                href="https://github.com/gigakovaliovi16"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={fadeInUp}
              >
                <span className="contact-label">
                  <GithubGlyph /> GitHub
                </span>
                <span className="contact-value">gigakovaliovi16</span>
                <ArrowUpRight size={16} className="contact-arrow" aria-hidden />
              </motion.a>

              <div className="contact-item contact-item--passive">
                <span className="contact-label">
                  <MapPin size={11} aria-hidden /> Domicile
                </span>
                <span className="contact-value">Tbilisi, Georgia · GMT+4</span>
                <span />
              </div>
            </div>
          </div>
        </section>

        <footer className="colophon">
          <div className="colophon-row">
            <span className="colophon-mark">GK</span>
            <span className="colophon-rule" aria-hidden />
            <span className="colophon-copy">
              © {new Date().getFullYear()} Giga Kovaliovi · All rights reserved
            </span>
          </div>
          <div className="colophon-meta">
            <span>Set in Fraunces, Inter Tight &amp; Geist Mono</span>
            <span className="colophon-dot" aria-hidden />
            <span>Hand-built in Tbilisi, MMXXVI</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
