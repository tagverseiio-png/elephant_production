'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SnowParticles from '@/components/SnowParticles/SnowParticles';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // As scroll progresses from 0 to 1, shrink the title
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.12]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 0.6, 0]);

  return (
    <>
      <Navbar isHome />

      <main className={styles.main}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroBackground}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className={styles.heroVideo}
            >
              <source src="https://cdn.dribbble.com/userupload/47649503/file/f9562b477f17db6f6383731afafee870.mp4" type="video/mp4" />
            </video>
            <div className={styles.heroOverlay}></div>
            <SnowParticles />
          </div>
          
          {/* Giant full-width title — shrinks on scroll */}
          <motion.h1 
            className={styles.heroGiantTitle}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              scale: titleScale,
              y: titleY,
              opacity: titleOpacity,
            }}
          >
            THE ELEPHANT PRODUCTION
          </motion.h1>

          <div className={styles.heroContent}>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              An action-first creative communications agency
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="/work" className={styles.heroBtn}>
                <span>↗ VIEW WORK</span>
              </Link>
            </motion.div>
          </div>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              <span className={styles.marqueeText}>
                J.Crew • REI • Fender • Sweetgreen • HOKA • Away • J.Crew • REI • Fender • Sweetgreen • HOKA • Away •&nbsp;
              </span>
              <span className={styles.marqueeText}>
                J.Crew • REI • Fender • Sweetgreen • HOKA • Away • J.Crew • REI • Fender • Sweetgreen • HOKA • Away •&nbsp;
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════ BENTO GRID ═══════════════ */}
        <section className={styles.bentoSection}>

          {/* Row 1 — Image | Text */}
          <motion.div
            className={styles.bentoRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={`${styles.bentoItem} ${styles.imageItem}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200"
                alt="Creative production shoot"
                className={styles.imagePlaceholder}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent)' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className={styles.bentoLabel}>Who we are</span>
                <h2 className={styles.bentoTitle}>Infusing creative alchemy into today&apos;s brands</h2>
                <p className={styles.bentoDesc}>
                  We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct, adaptable communications strategies. With an unmatched consumer understanding and a true collaborative spirit, we create magic for brands.
                </p>
              </motion.div>
              <Link href="/services" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>OUR SERVICES</span>
              </Link>
            </div>
          </motion.div>

          {/* Row 2 — Text | Image */}
          <motion.div
            className={styles.bentoRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent2)' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className={styles.bentoLabel}>Influencer Strategy</span>
                <h2 className={styles.bentoTitle}>Engage with cultural tastemakers</h2>
                <p className={styles.bentoDesc}>
                  Our dedicated influencer team manages everything from macro-ambassador programs to hyper-local micro-influencer campaigns, ensuring authentic alignment and measurable impact.
                </p>
              </motion.div>
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
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Row 3 — Video | Text */}
          <motion.div
            className={styles.bentoRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className={`${styles.bentoItem} ${styles.imageItem}`} style={{ overflow: 'hidden' }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="none"
                className={styles.imagePlaceholder}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              >
                <source src="https://cdn.dribbble.com/userupload/47649503/file/f9562b477f17db6f6383731afafee870.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={`${styles.bentoItem} ${styles.textItem}`} style={{ backgroundColor: 'var(--color-accent3)' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className={styles.bentoLabel}>Experiential</span>
                <h2 className={styles.bentoTitle}>Experiences that leave a mark</h2>
                <p className={styles.bentoDesc}>
                  From intimate press dinners to massive consumer activations, we handle end-to-end event production that amplifies your message and creates lasting impressions.
                </p>
              </motion.div>
              <Link href="/services" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>ALL SERVICES</span>
              </Link>
            </div>
          </motion.div>

        </section>

        {/* ═══════════════ INSTAGRAM ═══════════════ */}
        <section className={styles.instagramSection}>
          <div className={styles.instaHeader}>
            <h2 className={styles.instaTitle}>Follow Us</h2>
            <a href="https://www.instagram.com/theelephantproduction/" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
              @theelephantproduction
            </a>
          </div>
          <div className={styles.instaCarousel}>
            <div className={styles.instaCarouselTrack}>
              {[
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop'
              ].map((src, i) => (
                <div key={i} className={styles.instaBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Instagram post" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
