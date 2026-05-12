'use client';
import { useEffect } from 'react';
import styles from './ContactSidebar.module.css';

export default function ContactSidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close Contact">
          ✕
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>Drop us<br />a line.</h2>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                NAME <span className={styles.asterisk}>*</span>
              </label>
              <input type="text" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                EMAIL <span className={styles.asterisk}>*</span>
              </label>
              <input type="email" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                PHONE/MOBILE <span className={styles.asterisk}>*</span>
              </label>
              <input type="tel" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                YOUR MESSAGE <span className={styles.asterisk}>*</span>
              </label>
              <textarea className={styles.textarea} required />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span className={styles.submitIcon}>↗</span>
              SEND MESSAGE
            </button>
          </form>

          <div className={styles.emailContact}>
            <a href="mailto:info@azionepr.com">info@azionepr.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
