'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import ContactSidebar from '../ContactSidebar/ContactSidebar';

// ── PLACEHOLDERS — owner: fill in real values before launch. ──
// We have no verified contact details or social accounts, so the links
// below intentionally use obvious placeholder targets instead of
// inventing real-looking addresses or handles.
//   • CONTACT_EMAIL uses the RFC 2606 reserved `example.com` domain, so it
//     can never be mistaken for a real address.
//   • INSTAGRAM_URL points at the platform root with no handle.
const CONTACT_EMAIL = 'hello@example.com';
const INSTAGRAM_URL = 'https://www.instagram.com/';

// Every internal href below maps to a real route directory under src/app:
//   /  /work  /services  /about  /studio  /influencers  /contact
const SITE_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/work', label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about', label: 'ABOUT' },
  { href: '/studio', label: 'STUDIO' },
  { href: '/influencers', label: 'INFLUENCERS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footerTagline}>
          <span className={styles.taglineDot} aria-hidden="true"></span>
          Where strategy becomes culture
          <span className={styles.taglineDot} aria-hidden="true"></span>
        </p>
        <div className={styles.footerGiantText} aria-label="Elephant Media">
          ELEPHANT MEDIA
        </div>
        <div className={styles.footerBottomRow}>
          <div className={styles.footerLeft}>
            <span>© Elephant Media {year}</span>
          </div>
          <nav className={styles.footerCenter} aria-label="Footer">
            {SITE_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
          </nav>
          <div className={styles.footerRight}>
            {/* PLACEHOLDER email — see CONTACT_EMAIL note above. */}
            <a href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL.toUpperCase()}
            </a>
            <button
              type="button"
              className={styles.contactBtn}
              onClick={() => setContactOpen(true)}
              aria-haspopup="dialog"
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
