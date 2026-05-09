'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGiantText}>
        The Elephant Production
      </div>
      <div className={styles.footerBottomRow}>
        <div className={styles.footerLeft}>
          <span>© The Elephant Production 2026</span>
        </div>
        <div className={styles.footerCenter}>
          <Link href="/work">WORK</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/influencers">INFLUENCERS</Link>
          <Link href="/about">ABOUT</Link>
          <a href="https://www.instagram.com/theelephantproduction/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </div>
        <div className={styles.footerRight}>
          <a href="mailto:info@theelephantproduction.com">INFO@THEELEPHANTPRODUCTION.COM</a>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </footer>
  );
}
