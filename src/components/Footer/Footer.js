'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import ContactSidebar from '../ContactSidebar/ContactSidebar';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTagline}>
          <span className={styles.taglineDot}></span>
          Where strategy becomes culture
          <span className={styles.taglineDot}></span>
        </div>
        <div className={styles.footerGiantText}>
          ELEPHANT MEDIA
        </div>
        <div className={styles.footerBottomRow}>
          <div className={styles.footerLeft}>
            <span>© Elephant Media 2026</span>
          </div>
          <div className={styles.footerCenter}>
            <Link href="/work">WORK</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/influencers">INFLUENCERS</Link>
            <Link href="/studio">STUDIO</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
            <a href="https://www.instagram.com/elephantmedia/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
          <div className={styles.footerRight}>
            <a href="mailto:info@elephantmedia.com">INFO@ELEPHANTMEDIA.COM</a>
            <button
              className={styles.contactBtn}
              onClick={() => setContactOpen(true)}
            >
              SAY HELLO
            </button>
          </div>
        </div>
      </footer>
      <ContactSidebar isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
