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
import { ImpactCard } from '@/components/impact-card';
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
  { value: '99.98%', label: 'SLA adherence with 1-minute average MTTA' },
  { value: '6→30', label: 'FTE scale across NOC, SOC, and Professional Services' },
  { value: '80%', label: 'Manual triage reduction via AI-assisted routing' },
  { value: '2,000+', label: 'Monthly tickets managed end-to-end' },
  { value: '22%', label: 'MTTR improvement via AI triage' },
];

const caseStudies = [
  {
    title: 'Scaling 24/7 Operations at eToro',
    problem: 'Reactive incident handling, slow MTTA, unclear escalation ownership.',
    action: 'Designed and implemented a structured NOC with clear escalation layers and ownership model.',
    result: 'Reduced MTTA by 93% (17.3 → 1.2 minutes) and increased First Line Resolution from 80% to 98%.',
  },
  {
    title: 'AI-Assisted Triage Implementation',
    problem: 'Manual triage overload across 2,000+ monthly tickets.',
    action: 'Implemented automated categorization and routing using AI-assisted workflows in Jira Service Management.',
    result: 'Reduced manual workload by 80% and improved MTTR by 22%.',
  },
  {
    title: 'Building L2 Application Support from Zero',
    problem: 'No structured Tier 2 support; high dependency on engineering.',
    action: 'Recruited and structured a 10-person L2 team with defined responsibilities and workflows.',
    result: 'Achieved 99.98% SLA adherence and improved incident resolution speed during peak events.',
  },
];

const operationalImpactItems: Array<{ label: string; body: string }> = [
  {
    label: 'Availability',
    body: 'Protected platform availability during peak trading events, minimizing revenue loss exposure.',
  },
  {
    label: 'Retention',
    body: 'Reduced incident response time, improving customer experience during high-traffic periods.',
  },
  {
    label: 'Efficiency',
    body: 'Enabled scalable operations without proportional headcount increase through automation and structured process.',
  },
  {
    label: 'Strategy',
    body: 'Provided leadership with actionable incident and performance insights to support operational strategy decisions.',
  },
];

const leadershipPrinciples = [
  'I build systems, not dependencies on individuals.',
  'I prioritize clarity in ownership, escalation, and accountability.',
  'I treat incidents as data for improvement, not isolated failures.',
  'I focus on scalability before optimization.',
  'I design operations that can sustain growth without constant intervention.',
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
];

const projects = [
  {
    title: 'Opsrift',
    subtitle: 'Incident Postmortem Platform',
    badge: 'Shipping',
    description:
      'AI-powered postmortem generation for operations and SRE teams — reduces investigation time, standardizes documentation, and improves incident learning.',
    tags: ['AI', 'Incident Response', 'SRE'],
    href: 'https://opsrift.com',
    hrefLabel: 'opsrift.com',
  },
  {
    title: 'Akamaru',
    subtitle: 'SaaS Boilerplate, sold commercially',
    badge: 'Shipped Product',
    description:
      'Production-ready React + Express + Postgres SaaS boilerplate with Clerk auth, Paddle billing, admin panel, refunds, and audit trails. Rebrand in five minutes, deploy in an hour.',
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
            subtitle="Six years building and scaling operational infrastructure across iGaming and FinTech environments."
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
                <li>Built the Application Support function from zero — no dedicated L2 structure existed prior. Recruited and structured a 10-person Tier 2 team.</li>
                <li>Achieved 99.98% SLA adherence with a 1-minute average MTTA against a 5-minute target — safeguarding platform availability during high-traffic streaming and betting events.</li>
                <li>Implemented AI-assisted triage in Jira Service Management across 2,000+ monthly cases, reducing MTTR by 22%.</li>
                <li>Led root cause investigations using AWS monitoring and log analysis, coordinating with Engineering to implement permanent fixes.</li>
                <li>Partnered with Product and DevOps leadership to prioritize technical issues by business impact — ensuring platform stability during high-traffic events.</li>
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
                Promoted from Operations Center Manager to Operational Excellence Manager, October 2024
              </p>
              <ul className="experience-highlights">
                <li>Reduced MTTA by 93% (17.3 → 1.2 minutes) and improved First Line Resolution from 80% to 98% across 2,000+ monthly tickets — significantly reducing customer-impacting downtime during peak trading activity.</li>
                <li>Designed and scaled a 24/7 operations organization from 6 to 30 FTE across NOC, SOC, and Professional Services — establishing clear escalation layers and operational ownership at each tier.</li>
                <li>Shifted incident management from reactive to proactive detection — improving P0–P2 proactive detection from 1 in 6 to 10 in 12 events.</li>
                <li>Implemented AI-assisted ticket routing and automated categorization, reducing manual triage workload by 80%.</li>
                <li>Designed and delivered internal bootcamps to develop monitoring, security, and compliance specialists — eliminating external hiring dependency.</li>
                <li>Established escalation frameworks, staffing models, and process infrastructure sustaining 99.95%+ SLA adherence — providing the foundation for eToro's global 24/7 platform commitments.</li>
                <li>Reported operational performance, incident trends, and team metrics to senior leadership — contributing to operational strategy discussions and platform reliability planning.</li>
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
                <li>Managed a 12-person support team operating across four global locations within a high-volume, 24/7 iGaming environment — owning shift planning, quality calibration, and performance coaching.</li>
                <li>Led Tier 1 and Tier 2 escalations including VIP and regulator-sensitive incidents — ensuring compliant resolution within strict regulatory frameworks and protecting the business from compliance exposure across multiple licensed jurisdictions.</li>
                <li>Implemented structured mentorship and QA programs improving first-level resolution rates by 30% across a 66-person support organization.</li>
                <li>Standardized 45+ operational workflows in Confluence, reducing onboarding time by 25% and lowering average ticket workload by 40% through systematic process optimization.</li>
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
            subtitle="Operational problems, the approach taken, and the measurable result."
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
                  problem={cs.problem}
                  action={cs.action}
                  result={cs.result}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-section-alt" id="operational-impact">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="04"
            label="Business Value"
            title="Operational Impact"
            subtitle="How operational rigor translates into outcomes beyond technical metrics."
          />

          <div className="impact-stack">
            {operationalImpactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <ImpactCard label={item.label}>{item.body}</ImpactCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="05"
            label="Product"
            title="Projects"
            subtitle="Products I've built and shipped — alongside the operations work."
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
                  <em style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', color: 'var(--wine-200)' }}>
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

      <section className="portfolio-section portfolio-section-alt" id="skills">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="06"
            label="Expertise"
            title="Skills & Tools"
            subtitle="Core competencies in operations management, incident response, and infrastructure automation."
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

      <section className="portfolio-section" id="leadership">
        <div className="portfolio-section-inner portfolio-section-narrow">
          <SectionHeader
            index="07"
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

      <section className="portfolio-section portfolio-section-alt" id="contact">
        <div className="portfolio-section-inner">
          <SectionHeader
            index="08"
            label="Connect"
            title="Correspondence"
            subtitle="Open to discussing operations leadership opportunities, consulting, and strategic partnerships."
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
