'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './influencers.module.css';

const CATEGORIES = ['All', 'Fashion', 'Lifestyle', 'Travel', 'Food', 'Fitness', 'Music'];

const INFLUENCERS = [
  { name: 'Creative Campaign', category: 'Fashion', gradient: 'linear-gradient(135deg, #e8ddd0, #c4a882)', stat: '2.4M Reach' },
  { name: 'Brand Activation', category: 'Lifestyle', gradient: 'linear-gradient(135deg, #d4c5b2, #a8956e)', stat: '1.8M Impressions' },
  { name: 'Product Launch', category: 'Travel', gradient: 'linear-gradient(135deg, #a8c5a0, #6b9e5e)', stat: '920K Engagement' },
  { name: 'VIP Gifting', category: 'Food', gradient: 'linear-gradient(135deg, #c9b99a, #8fb573)', stat: '3.1M Views' },
  { name: 'Event Seeding', category: 'Fitness', gradient: 'linear-gradient(135deg, #c4a882, #8b6d4f)', stat: '1.5M Reach' },
  { name: 'Social Takeover', category: 'Music', gradient: 'linear-gradient(135deg, #1a1a1a, #444)', stat: '4.2M Impressions', textLight: true },
  { name: 'Ambassador Program', category: 'Fashion', gradient: 'linear-gradient(135deg, #e0d5c7, #c4a882)', stat: '5.6M Reach' },
  { name: 'Content Series', category: 'Lifestyle', gradient: 'linear-gradient(135deg, #d9cfc3, #b09470)', stat: '2.1M Views' },
];

export default function InfluencersPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(INFLUENCERS);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(INFLUENCERS);
    } else {
      setFilteredItems(INFLUENCERS.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Influencer Collaborations</span>
            <h1 className={styles.heroTitle}>Maximizing<br />Your Orbit</h1>
            <p className={styles.heroSub}>
              We connect your brand with the right talent, VIPs, and influencers to ensure the relationship with your community is a powerful lever in the overall communications strategy.
            </p>
          </div>
        </section>

        <section className={styles.filterSection}>
          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.influencerGrid}>
          <div className={styles.gridContainer}>
            {filteredItems.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className={`${styles.card} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className={styles.cardImage}
                  style={{ background: item.gradient }}
                >
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardStat}>{item.stat}</span>
                  </div>
                  <div className={styles.cardLabel}>
                    <span style={{ color: item.textLight ? '#f5f0eb' : '#1a1a1a' }}>
                      {item.name}
                    </span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <h3 className={styles.cardName}>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
