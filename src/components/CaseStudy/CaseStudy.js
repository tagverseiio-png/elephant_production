import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getNextCaseStudy } from '@/data/caseStudies';
import styles from './CaseStudy.module.css';

export default function CaseStudy({ study }) {
  const next = getNextCaseStudy(study.slug);
  const total = String(study.media.length).padStart(2, '0');

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* BACK + META */}
        <div className={styles.topRow}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backCircle}>←</span>
            BACK
          </Link>
          <div className={styles.metaRow}>
            <span className={styles.metaIndex}>{study.index}</span>
            <span className={styles.metaCategory}>{study.category}</span>
            <span className={styles.metaYear}>{study.year}</span>
          </div>
        </div>

        {/* HERO TITLE — stacked words */}
        <header className={styles.header}>
          <h1 className={styles.titleStack}>
            {study.stackedTitle.map((word) => (
              <span key={word} className={styles.titleWord}>
                {word}
              </span>
            ))}
          </h1>
          <p className={styles.lead}>{study.statement}</p>
        </header>

        {/* HERO IMAGE */}
        <div className={styles.heroImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.heroImage} alt={study.projectName} className={styles.heroImage} />
        </div>

        {/* STATEMENT — repeated as large H2 */}
        <h2 className={styles.bigStatement}>{study.statement}</h2>

        {/* STRATEGIC IMPACT */}
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>Strategic Impact</h3>
          <p className={styles.impactText}>{study.impact}</p>
          <ul className={styles.servicesList}>
            {study.services.map((service) => (
              <li key={service} className={styles.serviceItem}>
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* MEDIA BREAKDOWN */}
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>Media Breakdown</h3>
          <div className={styles.mediaList}>
            {study.media.map((item, i) => {
              const counter = `${String(i + 1).padStart(2, '0')} / ${total}`;
              return (
                <article key={item.title} className={styles.mediaItem}>
                  <div className={styles.mediaImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" />
                  </div>
                  <div className={styles.mediaCaption}>
                    <p className={styles.mediaTitle}>{item.title}</p>
                    <span className={styles.mediaCounter}>{counter}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* FORWARD NAVIGATION */}
        <nav className={styles.forwardNav}>
          <span className={styles.forwardLabel}>Forward Navigation</span>
          <Link href={`/work/${next.slug}`} className={styles.forwardLink}>
            <span className={styles.forwardIndex}>{next.index}</span>
            <span className={styles.forwardName}>{next.projectName}</span>
            <span className={styles.forwardArrow}>→</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
