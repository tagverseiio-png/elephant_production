'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './lacoste.module.css';

export default function LacosteWorkPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* MARQUEE */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeText}>
            <span>THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x </span><span>THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x THE ELEPHANT Lacoste x </span>
          </div>
        </div>

        {/* TWO COLUMN SECTION */}
        <section className={styles.detailSection}>
          <div className={styles.stickyCol}>
            <p className={styles.clientName}>Lacoste</p>
            <h1 className={styles.pageTitle}>
              Lacoste's immersive entry into global tennis culture at the Open '23
            </h1>
            
            <div className={styles.servicesList}>
              <p>Event Production</p>
              <p>VIP & Influencer Seeding</p>
              <p>Creative Services</p>
            </div>

            <a href="#" className={styles.visitLink}>
              <span className={styles.linkCircle}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              VISIT WEBSITE
            </a>
          </div>

          <div className={styles.scrollCol}>
            <div className={styles.imageGrid}>
              <div className={styles.gridFull}>
                <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1200&auto=format&fit=crop" alt="Lacoste" />
              </div>
              <div className={styles.gridHalf}>
                <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop" alt="Green juice" />
              </div>
              <div className={styles.gridHalf}>
                <img src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=600&auto=format&fit=crop" alt="Tennis player" />
              </div>
              <div className={styles.gridFull}>
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop" alt="Group photo" />
              </div>
              <div className={styles.gridHalf}>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" alt="Woman in sweater" />
              </div>
              <div className={styles.gridHalf}>
                <img src="https://images.unsplash.com/photo-1530915534664-4ac6423816b7?q=80&w=600&auto=format&fit=crop" alt="Tennis balls" />
              </div>
            </div>
          </div>
        </section>

        {/* INSTAGRAM BANNER */}
        <section className={styles.socialBanner}>
          <div className={styles.socialGrid}>
            <div className={styles.socialPost}>
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" alt="Post 1" />
            </div>
            <div className={styles.socialPost}>
              <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=400&auto=format&fit=crop" alt="Post 2" />
            </div>
            <div className={styles.socialPost}>
              <img src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=400&auto=format&fit=crop" alt="Post 3" />
            </div>
          </div>
        </section>

        {/* EVENT SERIES */}
        <section className={styles.eventSeries}>
          <h2 className={styles.eventTitle}>Three part experiential event series</h2>
          <div className={styles.eventTextGrid}>
            <p className={styles.eventText}>
              We created a multi-faceted event series that brought the brand to life through an immersive entry into global tennis culture at the Open '23.
            </p>
            <p className={styles.eventText}>
              Through bespoke installations, influencer seeding, and high-impact VIP gatherings, we solidified Lacoste's position at the intersection of fashion and sport.
            </p>
          </div>

          <div className={styles.eventImageGrid}>
             <div className={styles.eventImgWrapper}>
                <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=800&auto=format&fit=crop" alt="Women" />
             </div>
             <div className={styles.eventImgWrapper}>
                <img src="https://images.unsplash.com/photo-1563241527-200ecfbc51af?q=80&w=800&auto=format&fit=crop" alt="Neon sign" />
             </div>
             <div className={styles.eventImgWrapper}>
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" alt="Menu" />
             </div>
             <div className={styles.eventImgWrapper}>
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="Selfie" />
             </div>
          </div>
        </section>

        {/* MORE WORK */}
        <section className={styles.moreWork}>
          <div className={styles.moreWorkHeader}>
            <h3>More Work</h3>
            <div className={styles.moreWorkNav}>
              <span className={styles.navDot}></span>
              <span className={styles.navDot}></span>
            </div>
          </div>
          <div className={styles.moreWorkGrid}>
            <div className={styles.moreWorkCard}>
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=400&auto=format&fit=crop" alt="Project 1" />
              <p>Outdoor Voices</p>
            </div>
            <div className={styles.moreWorkCard}>
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" alt="Project 2" />
              <p>Paravel</p>
            </div>
            <div className={styles.moreWorkCard}>
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop" alt="Project 3" />
              <p>Sweetgreen</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>
            Interested in our work?<br/>
            Let's talk. <span className={styles.ctaDash}>—</span>
          </h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
