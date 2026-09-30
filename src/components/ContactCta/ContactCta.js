'use client';
import { useState } from 'react';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import styles from './ContactCta.module.css';

export default function ContactCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={styles.ctaBtn} onClick={() => setOpen(true)}>
        <span className={styles.ctaDot}>↗</span>
        Open the contact form
      </button>
      <ContactSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
