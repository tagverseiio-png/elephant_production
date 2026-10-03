'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SnowParticles from '@/components/SnowParticles/SnowParticles';
import { motion } from 'framer-motion';
import { CASE_STUDIES, CLIENTS } from '@/data/caseStudies';
import styles from './work.module.css';

// Panel colours reuse existing globals.css tokens so consecutive cards differ.
const PANEL_COLORS = [
  'var(--color-accent2)',
  'var(--color-accent3)',
  'var(--color-accent)',
  'var(--dk-surface)',
  'var(--color-bg-dark)',
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div>
              <span className={styles.heroEyebrow}>01</span>
              <h1 className={styles.heroTitle}>Work That Moves People</h1>
            </div>
            <p className={styles.heroSubtitle}>
              Films, stills and stories shaped with care.
              <br />
              A tour of recent Elephant Media collaborations and craft.
            </p>
          </div>
        </section>

        {/* WORK GRID */}
        <section className={styles.workSection}>
          <SnowParticles />
          <div className={styles.workList}>
            {CASE_STUDIES.map((study, idx) => {
              const number = String(idx + 1).padStart(2, '0');
              const flipped = idx % 2 !== 0;
              const panelColor = PANEL_COLORS[idx % PANEL_COLORS.length];
              return (
                <motion.article
                  className={`${styles.workCard} ${flipped ? styles.flipped : ''}`}
                  key={study.slug}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <Link href={`/work/${study.slug}`} className={styles.workCardMedia}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.workCardImage}
                      src={study.heroImage}
                      alt={study.projectName}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={styles.workCardShade}></div>
                    <span className={styles.workCardIndex}>{number}</span>
                    <span className={styles.workCardChip}>{study.category}</span>
                  </Link>
                  <div className={styles.workCardPanel} style={{ backgroundColor: panelColor }}>
                    <Link href={`/work/${study.slug}`} className={styles.brandLink}>
                      <h2 className={styles.mainBrand}>
                        {study.projectName}
                        <span className={styles.arrowIcon}>
                          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                            <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </span>
                      </h2>
                    </Link>
                    <span className={styles.viewCase}>View case study</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* CLIENTS */}
        <section className={styles.clientsSection}>
          <span className={styles.clientsEyebrow}>Our Clients</span>
          <h2 className={styles.clientsTitle}>Trusted by Elephant Media brands across every category.</h2>
          <div className={styles.clientStrip}>
            {CLIENTS.map((client) => (
              <span key={client.name} className={styles.clientLogo} title={client.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={client.logo} alt={client.name} loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </section>

        {/* WHAT WE OFFER SECTION */}
        <section className={styles.offerSectionWrapper}>
          <div className={styles.offerSection}>
            <div className={styles.offerLeft}>
              <h2 className={styles.offerTitle}>What we offer</h2>
            </div>
            <div className={styles.offerRight}>
              <Link href="/services" className={styles.offerBtn}>
                <span className={styles.offerBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>See Services</span>
              </Link>
            </div>
          </div>
          <p className={styles.closingStatement}>
            Elephant Media — where strategy becomes culture.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
