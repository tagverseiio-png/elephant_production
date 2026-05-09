'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './work.module.css';

const WORK_CATEGORIES = [
  {
    category: 'FASHION',
    mainBrand: 'Lacoste',
    otherBrands: ['Mansur Gavriel', 'J. Crew', 'Madhappy'],
    color: '#1A3B47',
    imageGradient: 'linear-gradient(135deg, #1A3B47 0%, #295F72 100%)'
  },
  {
    category: 'BEAUTY',
    mainBrand: 'Kosas',
    otherBrands: ['Alo Beauty', 'Living Proof', 'Sol de Janeiro'],
    color: '#2B4636',
    imageGradient: 'linear-gradient(135deg, #E6D8CA 0%, #87715F 100%)'
  },
  {
    category: 'WELLNESS',
    mainBrand: 'Sakara Life',
    otherBrands: ['HigherDOSE', 'CorePower Yoga', 'Equinox'],
    color: '#1A4A5D',
    imageGradient: 'linear-gradient(135deg, #6FA656 0%, #345B25 100%)'
  },
  {
    category: 'LIFESTYLE',
    mainBrand: 'Away',
    otherBrands: ['Fender', 'Blueland', 'Aero'],
    color: '#D48695',
    imageGradient: 'linear-gradient(135deg, #E0E0E0 0%, #A3A3A3 100%)'
  },
  {
    category: 'FOOD & BEVERAGE',
    mainBrand: 'Pressed',
    otherBrands: ['Yasso', 'Sweetgreen', 'JAJA'],
    color: '#2C4A2D',
    imageGradient: 'linear-gradient(135deg, #8DA881 0%, #46553F 100%)'
  },
  {
    category: 'HOME',
    mainBrand: 'Caraway',
    otherBrands: ['Boy Smells', 'West Elm', 'Beast'],
    color: '#133D4F',
    imageGradient: 'linear-gradient(135deg, #DCAF9A 0%, #8A6451 100%)'
  },
  {
    category: 'FOOTWEAR',
    mainBrand: 'HOKA',
    otherBrands: ['Havianas', 'Kizik', 'ALDO'],
    color: '#8A3B1B',
    imageGradient: 'linear-gradient(135deg, #74AED0 0%, #386A88 100%)'
  },
  {
    category: 'ACTIVEWEAR',
    mainBrand: 'Vuori',
    otherBrands: ['Bandier', 'Outdoor Voices', 'Year of Ours'],
    color: '#D48695',
    imageGradient: 'linear-gradient(135deg, #4F7CA9 0%, #203A55 100%)'
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

        {/* WORK CATEGORIES GRID */}
        <section className={styles.workList}>
          {WORK_CATEGORIES.map((cat, idx) => (
            <div className={styles.workRow} key={idx}>
              <div className={styles.workText} style={{ backgroundColor: cat.color }}>
                <span className={styles.workCategoryLabel}>{cat.category}</span>
                <div className={styles.workBrands}>
                  <h2 className={styles.mainBrand}>
                    {cat.mainBrand}
                    <span className={styles.arrowIcon}>
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                        <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </h2>
                  {cat.otherBrands.map((brand, i) => (
                    <h3 className={styles.otherBrand} key={i}>{brand}</h3>
                  ))}
                </div>
              </div>
              <div className={styles.workImage}>
                <div className={styles.imagePlaceholder} style={{ background: cat.imageGradient }}></div>
              </div>
            </div>
          ))}
        </section>

        {/* WHAT WE OFFER SECTION */}
        <section className={styles.offerSection}>
          <div className={styles.offerLeft}>
            <h2 className={styles.offerTitle}>What we offer</h2>
          </div>
          <div className={styles.offerRight}>
            <p className={styles.offerDesc}>
              We'll meet you at the apex of content creation, brand strategy, and visual and real-life creative endeavors.
            </p>
            <Link href="/services" className={styles.offerBtn}>
              <span className={styles.offerBtnCircle}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span>ADDITIVE SERVICES</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
