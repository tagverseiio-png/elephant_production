'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './services.module.css';

// ── PLACEHOLDERS — owner: fill in real values before launch. ──
// We have no verified contact details, so the CTA below uses an obvious
// placeholder target instead of inventing a real-looking address.
// CONTACT_EMAIL uses the RFC 2606 reserved `example.com` domain, so it
// can never be mistaken for a real address (same pattern as Footer.js).
const CONTACT_EMAIL = 'hello@example.com';

// Service lineup written for Elephant Media. Names and wording are original
// and intentionally distinct from the structure-reference site's services.
// Each entry follows the same anatomy: index, title, one-line description,
// and 4–5 supporting points.
const SERVICES = [
  {
    number: '01',
    title: 'Brand Identity & Concept Development',
    description:
      'A clear creative starting point for your brand, shaped around what you want to say and who you want to reach.',
    features: [
      'Discovery conversations about goals and audience',
      'Mood boards and visual reference collections',
      'Written concept and messaging outline',
      'Content pillars to guide later production',
    ],
  },
  {
    number: '02',
    title: 'Web & Digital Experience Design',
    description:
      'Websites and digital pages planned around your story, so visitors can find their way and get in touch.',
    features: [
      'Page structure and content planning',
      'Design for desktop and mobile layouts',
      'Contact and enquiry flow planning',
      'Launch checks for readability and performance',
      'Handover notes for ongoing updates',
    ],
  },
  {
    number: '03',
    title: 'Social Content & Community Management',
    description:
      'Everyday content planned for the channels you use, with a consistent look and tone across posts.',
    features: [
      'Monthly content themes and calendars',
      'Short-form video and reel planning',
      'Static post and carousel design support',
      'Caption drafting and posting guidance',
      'Comment and message handling routines',
    ],
  },
  {
    number: '04',
    title: 'Film, Video & Motion Production',
    description:
      'Planned, filmed, and edited video pieces for launches, events, and ongoing storytelling.',
    features: [
      'Treatment and shot planning before filming',
      'Filming direction on the day',
      'Editing, colour, and sound assembly',
      'Cuts sized for web and social placements',
      'Review rounds before final delivery',
    ],
  },
  {
    number: '05',
    title: 'Paid Media & Campaign Management',
    description:
      'Structured campaign support that pairs creative assets with a clear testing and review routine.',
    features: [
      'Campaign structure and asset planning',
      'Ad copy and message variations',
      'Asset packs sized per placement',
      'Creative testing and iteration notes',
      'Plain-language summary of what ran',
    ],
  },
  {
    number: '06',
    title: 'Audience Growth & Channel Optimization',
    description:
      'A steady review routine for your channels, so future content builds on what already resonates.',
    features: [
      'Channel review and content audit',
      'Posting rhythm and format suggestions',
      'Audience and topic research notes',
      'Growth priorities for the next period',
      'Simple reporting template your team can reuse',
    ],
  },
  {
    number: '07',
    title: 'Creator Collaborations & Partnerships',
    description:
      'Help planning and running creator-led work, from first outreach through to published content.',
    features: [
      'Creator shortlisting against your brief',
      'Outreach and briefing support',
      'Content review against brand guidance',
      'Posting schedule coordination',
      'Wrap-up notes on deliverables received',
    ],
  },
  {
    number: '08',
    title: 'Podcast & Audio Production Support',
    description:
      'Support for planning, recording, and shaping audio episodes you can publish with confidence.',
    features: [
      'Episode planning and run-of-show notes',
      'Recording session guidance',
      'Dialogue editing and cleanup coordination',
      'Show notes and title drafting',
      'Cover and thumbnail direction as an add-on',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page header — dark editorial band */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className="eyebrow">What we do</span>
            <h1 className={styles.heroTitle}>Services</h1>
            <p className={styles.heroSub}>
              Creative and communications support from first idea to final delivery, scoped
              around your goals.
            </p>
          </div>
        </section>

        {/* Service list — one consistent anatomy per entry */}
        <section className={styles.servicesSection} aria-label="Service list">
          <ol className={styles.serviceList}>
            {SERVICES.map((service) => (
              <motion.li
                key={service.number}
                className={styles.serviceRow}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <article className={styles.serviceArticle}>
                  <div className={styles.serviceHead}>
                    {/* Neutral CSS/SVG placeholder treatment — no photographic
                        claims about facilities, gear, or output. */}
                    <span className={styles.serviceIndex} aria-hidden="true">
                      {service.number}
                    </span>
                    <svg
                      className={styles.serviceMark}
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="24" cy="24" r="5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className={styles.serviceText}>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.description}</p>
                    <ul className={styles.featureList}>
                      {service.features.map((feat) => (
                        <li key={feat} className={styles.featureItem}>
                          <span className={styles.featureDot} aria-hidden="true" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Closing CTA — dark band */}
        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={`eyebrow ${styles.ctaEyebrow}`}>Next step</span>
            <h2 className={styles.ctaTitle}>Tell us what you are working toward</h2>
            <p className={styles.ctaText}>
              Share a short outline of your project and we will reply with suggested next
              steps.
            </p>
            <div className={styles.ctaActions}>
              {/* PLACEHOLDER email — see CONTACT_EMAIL note above. */}
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.ctaBtn}>
                <span>{CONTACT_EMAIL.toUpperCase()}</span>
              </a>
              <Link href="/contact" className={styles.ctaLink}>
                Go to the contact page
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
