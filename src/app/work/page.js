import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { CASE_STUDIES } from '@/data/caseStudies';
import styles from './work.module.css';

export const metadata = {
  title: 'Work | Elephant Media',
  description:
    'Selected Elephant Media productions — brand films, campaign photography and content systems across fashion, beauty, lifestyle and beyond.',
};

// Portfolio index driven entirely by src/data/caseStudies.js.
// Project names, categories and images all come from that file —
// nothing is hardcoded here, so no new project facts can drift in.
export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* PAGE HEADER */}
        <section className={styles.header}>
          <span className={`eyebrow ${styles.headerEyebrow}`}>Selected Work</span>
          <h1 className={styles.title}>Work</h1>
          <p className={styles.subline}>
            A selection of Elephant Media productions — brand films, campaign
            photography and content systems, made together with the teams
            behind them.
          </p>
        </section>

        {/* PROJECT LIST — thin-bordered rows with index, name, category */}
        <section className={styles.listSection} aria-label="Projects">
          <ol className={styles.list}>
            {CASE_STUDIES.map((study) => (
              <li key={study.slug} className={styles.row}>
                <Link href={`/work/${study.slug}`} className={styles.rowLink}>
                  <span className={styles.rowIndex} aria-hidden="true">
                    {study.index}
                  </span>
                  <span className={styles.rowMain}>
                    <span className={styles.rowName}>{study.projectName}</span>
                    <span className={styles.rowCategory}>{study.category}</span>
                  </span>
                  {/* Hover preview thumbnail (revealed on hover, hidden on touch) */}
                  <span className={styles.rowPreview} aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={study.heroImage} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className={styles.rowArrow} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 13L13 1M13 1H4M13 1V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* CLOSING — approach statement (no client list: we publish no
            verified client roster, so this section states how we work). */}
        <section className={styles.approach}>
          <span className={`eyebrow ${styles.approachEyebrow}`}>How we work</span>
          <h2 className={styles.approachTitle}>
            Every project starts from the idea, not the deliverable.
          </h2>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3 className={styles.approachCardTitle}>Concept first</h3>
              <p className={styles.approachCardText}>
                Direction and planning before anything is shot, so each asset
                serves the same story.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3 className={styles.approachCardTitle}>Systems, not one-offs</h3>
              <p className={styles.approachCardText}>
                Hero films supported by cutdowns, stills and social formats —
                built to be reused across placements.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3 className={styles.approachCardTitle}>Made with your team</h3>
              <p className={styles.approachCardText}>
                We work alongside in-house teams and hand over content they
                can keep running independently.
              </p>
            </div>
          </div>
          <div className={styles.approachCtas}>
            <Link href="/services" className={styles.ctaPrimary}>
              See services
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Start a project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
