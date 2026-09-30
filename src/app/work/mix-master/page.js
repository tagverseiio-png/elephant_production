import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getCaseStudy, getNextCaseStudy } from '@/data/caseStudies';
import styles from '@/components/CaseStudy/CaseStudy.module.css';

export const metadata = {
  title: "Mix Master — Work | Elephant Media",
  description: "DJ announcements and shoutout-style content produced to fuel Mix Master's event promotion and social engagement, keeping the brand front-of-mind between nights out.",
};

// Detail page driven by src/data/caseStudies.js — hero statement, story,
// services and media all render from the looked-up study. Video items play
// inline with their poster frame; stills render as images. The list layout
// holds for a single media item as well as large galleries.
export default function MixMasterPage() {
  const study = getCaseStudy("mix-master");
  const next = getNextCaseStudy("mix-master");
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
            {study.stackedTitle.map((word, i) => (
              <span key={`${word}-${i}`} className={styles.titleWord}>
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

        {/* STATEMENT */}
        <h2 className={styles.bigStatement}>{study.statement}</h2>

        {/* PROJECT STORY */}
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>Project Story</h3>
          <p className={styles.impactText}>{study.impact}</p>
          <ul className={styles.servicesList}>
            {study.services.map((service) => (
              <li key={service} className={styles.serviceItem}>
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* MEDIA */}
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>Media</h3>
          <div className={styles.mediaList}>
            {study.media.map((item, i) => {
              const counter = `${String(i + 1).padStart(2, '0')} / ${total}`;
              return (
                <article key={`${item.title}-${i}`} className={styles.mediaItem}>
                  <div className={styles.mediaImageWrap}>
                    {item.type === 'video' && item.videoUrl ? (
                      <video
                        src={item.videoUrl}
                        poster={item.poster || item.imageUrl}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={item.title}
                        style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" />
                    )}
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
          <span className={styles.forwardLabel}>Next Project</span>
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
