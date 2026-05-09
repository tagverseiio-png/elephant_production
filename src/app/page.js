'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Creative · Production · Strategy</span>
            <h1 className={styles.heroTitle}>The Elephant Production</h1>
            <p className={styles.heroSubtitle}>An action-first creative communications agency.</p>
            <Link href="/work" className={styles.heroBtn}>
              <span className={styles.heroBtnCircle}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span>VIEW WORK</span>
            </Link>
          </div>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              <span className={styles.marqueeText}>
                Photography &amp; Film • Brand Campaigns • Social Strategy • Event Coverage • Influencer Partnerships • Concert Production • Photography &amp; Film • Brand Campaigns • Social Strategy • Event Coverage • Influencer Partnerships • Concert Production •&nbsp;
              </span>
              <span className={styles.marqueeText}>
                Photography &amp; Film • Brand Campaigns • Social Strategy • Event Coverage • Influencer Partnerships • Concert Production • Photography &amp; Film • Brand Campaigns • Social Strategy • Event Coverage • Influencer Partnerships • Concert Production •&nbsp;
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════ BENTO GRID ═══════════════ */}
        <section className={styles.bentoSection}>

          {/* Row 1 — Image | Text */}
          <div className={styles.bentoRow}>
            <div className={`${styles.bentoItem} ${styles.imageItem}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200"
                alt="Creative production shoot"
                className={styles.imagePlaceholder}
              />
            </div>
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent)' }}>
              <div>
                <span className={styles.bentoLabel}>Who We Are</span>
                <h2 className={styles.bentoTitle}>Infusing creative<br/>alchemy into<br/>today&apos;s brands</h2>
                <p className={styles.bentoDesc}>
                  We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct, adaptable communications strategies. With an unmatched consumer understanding and a true collaborative spirit, we create magic for brands.
                </p>
              </div>
              <Link href="/services" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>OUR SERVICES</span>
              </Link>
            </div>
          </div>

          {/* Row 2 — Text | Image */}
          <div className={styles.bentoRow}>
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent2)' }}>
              <div>
                <span className={styles.bentoLabel}>Influencer Strategy</span>
                <h2 className={styles.bentoTitle}>Maximizing<br/>your orbit</h2>
                <p className={styles.bentoDesc}>
                  We connect your brand with the right talent, VIPs, and influencers to ensure the relationship with your community is a powerful lever in the overall communications strategy — cultivating genuine relationships and memorable campaigns.
                </p>
              </div>
              <Link href="/influencers" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>INFLUENCER SERVICES</span>
              </Link>
            </div>
            <div className={`${styles.bentoItem} ${styles.imageItem}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200"
                alt="Influencer collaboration"
                className={styles.imagePlaceholder}
              />
            </div>
          </div>

          {/* Row 3 — Image | Text */}
          <div className={styles.bentoRow}>
            <div className={`${styles.bentoItem} ${styles.imageItem}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
                alt="Event production"
                className={styles.imagePlaceholder}
              />
            </div>
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent3)' }}>
              <div>
                <span className={styles.bentoLabel}>Full-Service Production</span>
                <h2 className={styles.bentoTitle}>Everything you<br/>want and more</h2>
                <p className={styles.bentoDesc}>
                  From A-Z brand building to photoshoot conception, commercial ad production, event coverage, and concert production — we offer multifaceted creative solutions to support your brand at every stage of growth.
                </p>
              </div>
              <Link href="/services" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>ALL SERVICES</span>
              </Link>
            </div>
          </div>

        </section>

        {/* ═══════════════ INSTAGRAM ═══════════════ */}
        <section className={styles.instagramSection}>
          <div className={styles.instaHeader}>
            <h2 className={styles.instaTitle}>Follow Us</h2>
            <a href="https://www.instagram.com/theelephantproduction/" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
              @theelephantproduction
            </a>
          </div>
          <div className={styles.instaGrid}>
            {[
              '#C4A882', '#8B7355', '#6B4F35', '#A0856A', '#D4B896', '#7A6045', '#B89070'
            ].map((color, i) => (
              <div key={i} className={styles.instaBox} style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
