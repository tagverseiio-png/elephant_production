'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './work.module.css';

const WORK_CATEGORIES = [
  {
    category: 'FASHION',
    mainBrand: 'Lacoste',
    hasIcon: true,
    slug: 'lacoste',
    otherBrands: ['Mansur Gavriel', 'J. Crew', 'Madhappy'],
    color: '#496A74',
    imageUrl: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'BEAUTY',
    mainBrand: 'Kosas',
    hasIcon: true,
    slug: 'kosas',
    otherBrands: ['Ilia Beauty', 'Living Proof', 'Sol de Janeiro'],
    color: '#2B4636',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'WELLNESS',
    mainBrand: 'Sakara Life',
    hasIcon: true,
    slug: 'sakara-life',
    otherBrands: ['HigherDOSE', 'CorePower Yoga', 'Equinox'],
    color: '#1A4A5D',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'LIFESTYLE',
    mainBrand: 'Away',
    hasIcon: true,
    slug: 'away',
    otherBrands: ['Paravel', 'Rhode', 'Aero'],
    color: '#D48695',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'FOOD & BEVERAGE',
    mainBrand: 'Pressed',
    hasIcon: true,
    slug: 'pressed',
    otherBrands: ['Yasso', 'Sweetgreen', 'TALA'],
    color: '#2C4A2D',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'HOME',
    mainBrand: 'Our Place',
    hasIcon: true,
    slug: 'our-place',
    otherBrands: ['Boy Smells', 'West Elm', 'Beast'],
    color: '#133D4F',
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-a6ebbb56e297?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'FOOTWEAR',
    mainBrand: 'HOKA',
    hasIcon: true,
    slug: 'hoka',
    otherBrands: ['New Balance', 'Teva', 'UGG'],
    color: '#4A3D36',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'ACTIVEWEAR',
    mainBrand: 'Vuori',
    hasIcon: true,
    slug: 'vuori',
    otherBrands: ['Alo Yoga', 'Lululemon', 'Gymshark'],
    color: '#2A2D34',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Work</h1>
            <p className={styles.heroSubtitle}>
              We create global awareness for brands<br />
              through tailored creative strategies and<br />
              an action-first approach.
            </p>
          </div>
        </section>

        {/* WORK GRID */}
        <section className={styles.workSection}>
          <div className={styles.workContainer}>
            {WORK_CATEGORIES.map((cat, idx) => {
              return (
                <div className={styles.workRow} key={idx}>
                  <div className={styles.workText} style={{ backgroundColor: cat.color }}>
                    <div className={styles.workCategoryLabel}>
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
                </div>
              );
            })}
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
        </section>
      </main>
      <Footer />
    </>
  );
}
