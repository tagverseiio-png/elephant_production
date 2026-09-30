'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SnowParticles from '@/components/SnowParticles/SnowParticles';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

const ROTATOR_PHRASES = [
  'Creative direction & concept planning',
  'Cinematic video & brand films',
  'Social & influencer marketing',
  'Podcast studio & recording',
];

const INSTA_SHOTS = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469334031211-173a6d445cb8?q=80&w=400&auto=format&fit=crop',
];

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

  // Rotating eyebrow headline above the wordmark
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATOR_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
              poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
              className={styles.heroVideo}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
            </video>
            <div className={styles.heroOverlay}></div>
            <SnowParticles />
          </div>

          <span className={styles.heroEyebrowTopLeft}>Action-first creative agency</span>
          <span className={styles.heroEyebrowTopRight}>Showreel — 2026</span>

          {/* Rotating eyebrow above the giant wordmark */}
          <div className={styles.heroRotator}>
            <span className={styles.heroRotatorDot}></span>
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                className={styles.heroRotatorText}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {ROTATOR_PHRASES[phraseIndex]}
              </motion.span>
            </AnimatePresence>
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
            ELEPHANT MEDIA
          </motion.h1>

          {/* Split bottom bar: statement left, actions right */}
          <div className={styles.heroBottomBar}>
            <motion.div
              className={styles.heroBottomLeft}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className={styles.heroSubtitle}>
                An action-first creative communications agency
              </p>
              <p className={styles.heroDesc}>
                Brand films, social campaigns, and studio production — strategy that becomes culture.
              </p>
            </motion.div>
            <motion.div
              className={styles.heroBottomRight}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="/work" className={styles.heroBtn}>
                <span>↗ VIEW WORK</span>
              </Link>
              <Link href="/studio" className={`${styles.heroBtn} ${styles.heroBtnSolid}`}>
                <span>BOOK THE STUDIO</span>
              </Link>
            </motion.div>
          </div>

          <span className={styles.scrollText}>Scroll</span>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              <span className={styles.marqueeText}>
                Maison Solstice • Lumen Skincare • Atelier Verdant • Northbound Films • Harbour &amp; Vale • Solace Home • Cobalt Athletics • Ridgeline Outfitters •&nbsp;
              </span>
              <span className={styles.marqueeText}>
                Maison Solstice • Lumen Skincare • Atelier Verdant • Northbound Films • Harbour &amp; Vale • Solace Home • Cobalt Athletics • Ridgeline Outfitters •&nbsp;
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════ FEATURE MOSAIC ═══════════════ */}
        <section className={styles.bentoSection}>

          {/* Band 1 — large image + stacked mini cards */}
          <motion.div
            className={styles.mosaicTop}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.mosaicFeature}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop"
                alt="Cinema camera on a film set"
                className={styles.mosaicImg}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.mosaicCaption}>
                <span className={styles.bentoLabel}>Who we are</span>
                <h2 className={styles.mosaicTitle}>Infusing creative alchemy into today&apos;s brands</h2>
              </div>
            </div>
            <div className={styles.mosaicStack}>
              <div className={styles.miniCard} style={{ backgroundColor: 'var(--color-accent)' }}>
                <span className={styles.bentoLabel}>Strategy</span>
                <p className={styles.miniText}>
                  Visibility and awareness that attract new customers through thoughtful storytelling.
                </p>
                <Link href="/services" className={styles.bentoBtn}>
                  <span className={styles.bentoBtnCircle}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span>OUR SERVICES</span>
                </Link>
              </div>
              <div className={styles.miniCard} style={{ backgroundColor: 'var(--color-accent2)' }}>
                <span className={styles.bentoLabel}>Influence</span>
                <p className={styles.miniText}>
                  Macro-ambassador programs to hyper-local micro-influencer campaigns with measurable impact.
                </p>
                <Link href="/influencers" className={styles.bentoBtn}>
                  <span className={styles.bentoBtnCircle}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span>INFLUENCER SERVICES</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Band 2 — full-width cinematic banner */}
          <motion.div
            className={styles.cineBanner}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop"
              alt="Film projector beam in a dark cinema"
              className={styles.cineBannerBg}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.cineBannerShade}></div>
            <div className={styles.cineBannerContent}>
              <span className={styles.bentoLabel}>Experiential</span>
              <h2 className={styles.cineBannerTitle}>Experiences that leave a mark</h2>
              <p className={styles.bentoDesc}>
                From intimate press dinners to massive consumer activations — end-to-end production that amplifies your message.
              </p>
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

          {/* Band 3 — trio */}
          <motion.div
            className={styles.trioRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className={styles.trioImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop"
                alt="Photographer holding a camera"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.trioText} style={{ backgroundColor: 'var(--color-accent3)' }}>
              <span className={styles.bentoLabel}>Studio</span>
              <h2 className={styles.trioTitle}>Record where stories sound best</h2>
              <p className={styles.miniText}>
                A premium podcast studio — crisp sound, cinematic visuals, ready to publish.
              </p>
              <Link href="/studio" className={styles.bentoBtn}>
                <span className={styles.bentoBtnCircle}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>BOOK THE STUDIO</span>
              </Link>
            </div>
            <div className={styles.trioImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop"
                alt="Creative design workspace"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

        </section>

        {/* ═══════════════ INSTAGRAM ═══════════════ */}
        <section className={styles.instagramSection}>
          <div className={styles.instaHeader}>
            <div>
              <span className={styles.instaEyebrow}>Behind the scenes</span>
              <h2 className={styles.instaTitle}>Follow the story</h2>
            </div>
            <a href="https://www.instagram.com/elephantmedia/" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
              @elephantmedia
            </a>
          </div>
          <div className={styles.instaCarousel}>
            <div className={styles.instaCarouselTrack}>
              {[...INSTA_SHOTS, ...INSTA_SHOTS].map((src, i) => (
                <div key={i} className={`${styles.instaBox} ${i % 2 === 1 ? styles.instaBoxTall : ''}`}>
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
