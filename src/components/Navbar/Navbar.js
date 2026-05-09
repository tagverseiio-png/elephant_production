'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.navLinksLeft}>
            <Link href="/work" className={styles.navLink}>WORK</Link>
            <Link href="/services" className={styles.navLink}>SERVICES</Link>
            <Link href="/influencers" className={styles.navLink}>INFLUENCER COLLABORATIONS</Link>
          </div>

          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>The Elephant Production</span>
          </Link>

          <div className={styles.navLinksRight}>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>
            <a href="https://www.instagram.com/theelephantproduction/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>INSTAGRAM</a>
            <Link href="/contact" className={styles.navLink}>CONTACT</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
