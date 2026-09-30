'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SnowParticles from '@/components/SnowParticles/SnowParticles';
import { motion } from 'framer-motion';
import styles from './work.module.css';

// All project names are fictional, Elephant-owned concepts — no real third-party brands.
const WORK_CATEGORIES = [
  {
    category: 'FASHION',
    mainBrand: 'Maison Solstice',
    hasIcon: true,
    slug: 'lacoste',
    otherBrands: ['Alder & Ash', 'Marlowe Goods', 'Opal & Ember'],
    color: '#496A74',
    imageUrl: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'BEAUTY',
    mainBrand: 'Lumen Skincare',
    hasIcon: true,
    slug: 'kosas',
    otherBrands: ['Petal & Pine', 'Gilded Hour', 'Bare Botanica'],
    color: '#2B4636',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'WELLNESS',
    mainBrand: 'Atelier Verdant',
    hasIcon: true,
    slug: 'sakara-life',
    otherBrands: ['Fern & Fable', 'Halcyon Goods', 'Juniper & Oak'],
    color: '#1A4A5D',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'LIFESTYLE',
    mainBrand: 'Northbound Films',
    hasIcon: true,
    slug: 'away',
    otherBrands: ['Fieldnote Studio', 'Junction Works', 'Cinder Studio'],
    color: '#D48695',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'FOOD & BEVERAGE',
    mainBrand: 'Harbour & Vale',
    hasIcon: true,
    slug: 'pressed',
    otherBrands: ['The Copper Room', 'Setter & Stone', 'Ostro Studio'],
    color: '#2C4A2D',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'HOME',
    mainBrand: 'Solace Home',
    hasIcon: true,
    slug: 'our-place',
    otherBrands: ['Hearth & Hollow', 'Linen & Lark', 'Dune House'],
    color: '#133D4F',
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-a6ebbb56e297?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'FOOTWEAR',
    mainBrand: 'Cobalt Athletics',
    hasIcon: true,
    slug: 'hoka',
    otherBrands: ['Stride Society', 'Pace & Pine', 'Forwardline'],
    color: '#4A3D36',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'ACTIVEWEAR',
    mainBrand: 'Ridgeline Outfitters',
    hasIcon: true,
    slug: 'vuori',
    otherBrands: ['Trailhead Supply', 'Motion Club', 'Highline Goods'],
    color: '#2A2D34',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop'
  }
];

const CLIENT_WORDMARKS = [
  'Maison Solstice',
  'Lumen Skincare',
  'Atelier Verdant',
  'Northbound Films',
  'Harbour & Vale',
  'Solace Home',
  'Cobalt Athletics',
  'Ridgeline Outfitters',
  'Fieldnote Studio',
  'Vantage Audio',
  'Meridian Optics',
  'The Copper Room',
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
              <h1 className={styles.heroTitle}>Our Portfolio</h1>
            </div>
            <p className={styles.heroSubtitle}>
              Bold campaigns. Cinematic visuals. Real results.<br />
              A selection of Elephant-grown projects across fashion,
              beauty, lifestyle, and beyond.
            </p>
          </div>
        </section>

        {/* WORK GRID */}
        <section className={styles.workSection}>
          <SnowParticles />
          <div className={styles.workList}>
            {WORK_CATEGORIES.map((cat, idx) => {
              const number = String(idx + 1).padStart(2, '0');
              return (
                <motion.div 
                  className={styles.workRow} 
                  key={cat.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * (idx % 2) }}
                >
                  <div className={styles.workText} style={{ backgroundColor: cat.color }}>
                    <div className={styles.workCategoryLabel}>
                      <span className={styles.workNumber}>{number}</span>
                      <span>{cat.category}</span>
                    </div>
                    <div className={styles.workBrands}>
                      {cat.slug ? (
                        <Link href={`/work/${cat.slug}`} className={styles.brandLink}>
                          <h2 className={styles.mainBrand}>
                            {cat.mainBrand}
                            {cat.hasIcon && (
                              <span className={styles.arrowIcon}>
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                              </span>
                            )}
                          </h2>
                        </Link>
                      ) : (
                        <h2 className={styles.mainBrand}>
                          {cat.mainBrand}
                          {cat.hasIcon && (
                            <span className={styles.arrowIcon}>
                              <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                              </svg>
                            </span>
                          )}
                        </h2>
                      )}
                      <div className={styles.otherBrandsWrapper}>
                        {cat.otherBrands.map((brand, i) => (
                          <h3 className={styles.otherBrand} key={i}>{brand}</h3>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.workImage}>
                    <div 
                      className={styles.imagePlaceholder} 
                      style={{ backgroundImage: `url(${cat.imageUrl})` }}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CLIENTS */}
        <section className={styles.clientsSection}>
          <span className={styles.clientsEyebrow}>Our Clients</span>
          <h2 className={styles.clientsTitle}>Trusted by Elephant-grown brands across every category.</h2>
          <div className={styles.clientStrip}>
            {CLIENT_WORDMARKS.map((name) => (
              <span key={name} className={styles.clientWordmark}>{name}</span>
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
            The Elephant Production — where strategy becomes culture.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
