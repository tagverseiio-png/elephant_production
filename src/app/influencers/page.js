import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './influencers.module.css';

export const metadata = {
  title: 'Influencer Collaborations | Elephant Media',
  description:
    'How Elephant Media plans, produces and supports influencer collaborations — formats, process and what makes a good fit.',
};

// Offering page for influencer collaborations. The reference site has no
// equivalent page, so this is built from our own structural patterns.
// It describes formats and process only — no creator names, follower
// counts, engagement rates, campaign results or brand partnerships are
// asserted anywhere on this page.
const FORMATS = [
  {
    index: '01',
    title: 'Product storytelling',
    text: 'Creators introduce a product the way they actually use it — filmed, edited and directed to match the brand’s wider campaign.',
  },
  {
    index: '02',
    title: 'Launch moments',
    text: 'Coordinated content around drops, openings and announcements, planned alongside the hero campaign assets.',
  },
  {
    index: '03',
    title: 'Ongoing series',
    text: 'Recurring formats — routines, diaries, behind-the-scenes — that give audiences a reason to keep watching.',
  },
  {
    index: '04',
    title: 'Events and activations',
    text: 'On-the-ground coverage of gatherings, pop-ups and launches, cut for both immediate posting and longer-term reuse.',
  },
];

const STEPS = [
  {
    index: '01',
    title: 'Fit and briefing',
    text: 'We start from the brand and the audience, then agree what a credible collaboration looks like before anyone is approached.',
  },
  {
    index: '02',
    title: 'Shared concept',
    text: 'Creators help shape the idea rather than reading a script — the concept is agreed by everyone involved.',
  },
  {
    index: '03',
    title: 'Production support',
    text: 'Our team handles direction, filming, editing and delivery, so the finished work meets the same bar as the rest of the campaign.',
  },
  {
    index: '04',
    title: 'Rollout and reuse',
    text: 'Content is planned for each placement from the outset, and the best material is cut for reuse across channels.',
  },
];

export default function InfluencersPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HEADER */}
        <section className={styles.header}>
          <span className={`eyebrow ${styles.headerEyebrow}`}>
            Influencer Collaborations
          </span>
          <h1 className={styles.title}>Made with creators</h1>
          <p className={styles.subline}>
            People trust the creators they follow. We plan, produce and
            support collaborations between brands and creators — treated with
            the same care as any other campaign work.
          </p>
        </section>

        {/* FORMATS */}
        <section className={styles.section} aria-label="Collaboration formats">
          <h2 className={styles.sectionTitle}>What this covers</h2>
          <ol className={styles.rows}>
            {FORMATS.map((format) => (
              <li key={format.index} className={styles.row}>
                <span className={styles.rowIndex} aria-hidden="true">
                  {format.index}
                </span>
                <div className={styles.rowBody}>
                  <h3 className={styles.rowTitle}>{format.title}</h3>
                  <p className={styles.rowText}>{format.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PROCESS */}
        <section className={styles.section} aria-label="How collaborations take shape">
          <h2 className={styles.sectionTitle}>How a collaboration takes shape</h2>
          <ol className={styles.cards}>
            {STEPS.map((step) => (
              <li key={step.index} className={styles.card}>
                <span className={styles.cardIndex} aria-hidden="true">
                  {step.index}
                </span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FIT + CTA */}
        <section className={styles.fit}>
          <span className={`eyebrow ${styles.fitEyebrow}`}>Good fit</span>
          <h2 className={styles.fitTitle}>
            The best collaborations feel obvious in hindsight.
          </h2>
          <p className={styles.fitText}>
            A creator whose audience already cares about the category, a
            product they can speak about honestly, and a concept with room
            for their voice. If those three are in place, the production
            side is our job — direction, filming, editing and delivery.
          </p>
          <div className={styles.fitCtas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Discuss a collaboration
            </Link>
            <Link href="/work" className={styles.ctaSecondary}>
              See our work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
