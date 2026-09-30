'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './influencers.module.css';

const INFLUENCERS_DATA = [
  {
    id: 1,
    brand: 'LUMEN SKINCARE',
    title: 'Lumen Skincare Glow Ritual Launch',
    category: 'BEAUTY',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aaad9c73dc52?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    brand: 'SOLACE HOME',
    title: 'Solace Home Ambassador Program',
    category: 'HOME',
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    brand: 'PETAL & PINE',
    title: 'Petal & Pine Seasonal Drop',
    category: 'BEAUTY',
    imageUrl: 'https://images.unsplash.com/photo-1487412947141-5cebbf640320?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    brand: 'MAISON SOLSTICE',
    title: 'Maison Solstice Atelier Preview',
    category: 'FASHION',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    brand: 'NORTHBOUND FILMS',
    title: 'Northbound Films Field Diaries Trip',
    category: 'LIFESTYLE',
    imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d45238a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    brand: 'RIDGELINE OUTFITTERS',
    title: 'Ridgeline Outfitters Community Programming',
    category: 'ACTIVEWEAR',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function InfluencersPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Influencer Collaborations</h1>
            <div className={styles.heroRight}>
              <p className={styles.heroText}>
                We fuel brand awareness, boost conversion, and create tangible ROI by fostering authentic partnerships between influencers and brands. Because influencers are changing the way we interact with brands, you might trust a post from your favorite creator more than a celebrity commercial.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.contentSection}>
          {/* STAGGERED GRID */}
          <div className={styles.grid}>
            {INFLUENCERS_DATA.map((item, idx) => (
              <motion.article
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * (idx % 3) }}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" />
                  <div className={styles.cardShade}></div>
                  <span className={styles.cardCategory}>{item.category}</span>
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.itemIndex}>{String(item.id).padStart(2, '0')}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
