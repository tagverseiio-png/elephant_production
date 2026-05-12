'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './influencers.module.css';

const INFLUENCERS_DATA = [
  {
    id: 1,
    brand: "KIEHL'S",
    title: "KIEHL'S Acne Liquid Patch Launch",
    category: 'BEAUTY',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    brand: 'SUNDAYS FURNITURE',
    title: 'Sundays Furniture Ambassador Program',
    category: 'HOME',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    brand: 'FARMACY',
    title: 'Farmacy',
    category: 'BEAUTY',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    brand: 'ALDO',
    title: 'ALDO VIP Dressing',
    category: 'FASHION',
    imageUrl: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    brand: "TRAVISMATHEW WOMEN'S",
    title: "TravisMathew Women's Ojai Content Trip",
    category: 'LIFESTYLE',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    brand: 'REI',
    title: 'REI Influencer Programming',
    category: 'ACTIVEWEAR',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop'
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
          {/* GRID */}
          <div className={styles.grid}>
            {INFLUENCERS_DATA.map((item, idx) => (
              <motion.div 
                key={item.id} 
                className={styles.gridItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * (idx % 2) }}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
