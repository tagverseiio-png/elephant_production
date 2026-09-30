'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import styles from './Navbar.module.css';

// PLACEHOLDER — owner: replace with the verified Instagram profile URL.
// We have no confirmed social account, so this intentionally points at the
// platform root rather than inventing a handle.
const INSTAGRAM_URL = 'https://www.instagram.com/';

const PRIMARY_LINKS = [
  { href: '/work', label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/influencers', label: 'INFLUENCER COLLABORATIONS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Navbar({ isHome = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(!isHome);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 50);
        if (isHome) {
          setLogoVisible(y > window.innerHeight * 0.35);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const openContact = () => {
    closeMenu();
    setContactOpen(true);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}
        aria-label="Primary"
      >
        <div className={styles.navContainer}>
          <div className={styles.navLinksLeft}>
            <Link href="/work" className={styles.navLink}>WORK</Link>
            <Link href="/services" className={styles.navLink}>SERVICES</Link>
            <Link href="/influencers" className={styles.navLink}>INFLUENCER COLLABORATIONS</Link>
          </div>

          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={`${styles.logoText} ${logoVisible ? styles.logoVisible : styles.logoHidden}`}>
              Elephant Media
            </span>
          </Link>

          <div className={styles.navLinksRight}>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.navLink}>INSTAGRAM</a>
            <button
              type="button"
              className={styles.navLink}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => setContactOpen(true)}
            >
              CONTACT
            </button>
          </div>

          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className={styles.menuBar} />
            <span aria-hidden="true" className={styles.menuBar} />
          </button>
        </div>

        <div
          id="mobile-nav-panel"
          className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
          hidden={!menuOpen}
        >
          <div className={styles.mobileLinks}>
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileLink}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              INSTAGRAM
            </a>
            <button
              type="button"
              className={styles.mobileLink}
              onClick={openContact}
              tabIndex={menuOpen ? 0 : -1}
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      <ContactSidebar isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
