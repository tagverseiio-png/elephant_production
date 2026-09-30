'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const TOPICS = [
  'Brand campaign',
  'Video & photo production',
  'Social & influencer marketing',
  'Podcast studio booking',
  'Something else',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const valid =
    name.trim().length > 0 &&
    /.+@.+\..+/.test(email.trim()) &&
    message.trim().length > 0;

  const mailtoHref = () => {
    const subject = encodeURIComponent(`New enquiry — ${topic} — ${name || 'Website'}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Topic: ${topic}`, '', message].join('\n')
    );
    return `mailto:info@elephantmedia.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!valid) {
          setTouched(true);
          return;
        }
        window.location.href = mailtoHref();
      }}
    >
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="contact-name">
            Your Name <span className={styles.asterisk}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Appleseed"
            autoComplete="name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="contact-email">
            Email <span className={styles.asterisk}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@brand.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="contact-topic">
          What&apos;s this about?
        </label>
        <select
          id="contact-topic"
          className={styles.select}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="contact-message">
          Your Message <span className={styles.asterisk}>*</span>
        </label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your brand, your goals, and your timeline…"
          rows={5}
        />
      </div>

      {touched && !valid && (
        <p className={styles.error}>Please add your name, a valid email, and a message.</p>
      )}

      <button type="submit" className={styles.submitBtn}>
        <span className={styles.submitIcon}>↗</span>
        Send enquiry
      </button>
      <p className={styles.disclaimer}>
        Sending opens your email app with a pre-addressed draft to
        info@elephantmedia.com — nothing is submitted automatically.
      </p>
    </form>
  );
}
