import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { CASE_STUDIES, CLIENTS } from '@/data/caseStudies';
import styles from './work.module.css';

export const metadata = {
  title: 'Work | Elephant Media',
  description:
    'Recent Elephant Media productions — campaign films, product photography and content series, presented alongside the client teams we made them with.',
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
            Striking films, crafted imagery and campaigns built to land with
            real audiences — a tour through recent Elephant Media productions
            and the stories behind them.
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

        {/* CLIENT MARQUEE — logo roster driven by CLIENTS in caseStudies.js */}
        <section className={styles.clients} aria-label="Clients">
          <span className={`eyebrow ${styles.clientsEyebrow}`}>Client Wall</span>
          <h2 className={styles.clientsTitle}>In good company.</h2>
          <p className={styles.clientsSubline}>
            A few of the teams whose stories we have helped shape.
          </p>
          <div className={styles.marquee} role="presentation">
            <div className={styles.marqueeTrack}>
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <span
                  key={`${client.name}-${i}`}
                  className={styles.marqueeItem}
                  title={client.name}
                  aria-hidden={i >= CLIENTS.length}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={i < CLIENTS.length ? client.name : ''}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ))}
            </div>
            <span className={styles.marqueeFadeLeft} aria-hidden="true" />
            <span className={styles.marqueeFadeRight} aria-hidden="true" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
