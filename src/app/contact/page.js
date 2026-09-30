import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact | Elephant Media',
  description:
    'Get in touch with Elephant Media — send an enquiry about brand campaigns, production, or studio sessions.',
};

// ── PLACEHOLDERS — owner: fill in real values before launch. ──
// We have no verified contact details or social accounts, so the links
// below intentionally use obvious placeholder targets instead of
// inventing real-looking addresses or handles (same pattern as Footer.js).
//   • CONTACT_EMAIL uses the RFC 2606 reserved `example.com` domain, so it
//     can never be mistaken for a real address.
//   • INSTAGRAM_URL points at the platform root with no handle.
const CONTACT_EMAIL = 'hello@example.com';
const INSTAGRAM_URL = 'https://www.instagram.com/';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HEADER */}
        <section className={styles.header}>
          <span className={`eyebrow ${styles.headerEyebrow}`}>Contact</span>
          <h1 className={styles.title}>Start a conversation</h1>
          <p className={styles.subline}>
            Tell us what you are making and where it needs to live. Send the
            form below, or reach out directly — we reply to every serious
            enquiry.
          </p>
        </section>

        {/* FORM + DIRECT RAIL */}
        <section className={styles.formSection}>
          <div className={styles.formCol}>
            <h2 className={styles.formTitle}>Send an enquiry</h2>
            <ContactForm />
          </div>
          <aside className={styles.railCol} aria-label="Other ways to reach us">
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Direct email</span>
              {/* PLACEHOLDER email — see CONTACT_EMAIL note above. */}
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.mailLink}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Social</span>
              {/* PLACEHOLDER — platform root with no handle, see note above. */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.railLink}
              >
                Find us on Instagram
              </a>
            </div>
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Prefer to browse first?</span>
              <p className={styles.railText}>
                See what we offer before you write — from brand stories to
                film and social.
              </p>
              <a href="/services" className={styles.railLink}>
                Explore our services →
              </a>
            </div>
          </aside>
        </section>

        {/* WHAT TO INCLUDE — honest guidance, no invented facts */}
        <section className={styles.guide}>
          <span className={`eyebrow ${styles.guideEyebrow}`}>
            What to include
          </span>
          <h2 className={styles.guideTitle}>
            Three things that help us reply well.
          </h2>
          <ol className={styles.guideList}>
            <li className={styles.guideItem}>
              <span className={styles.guideIndex} aria-hidden="true">01</span>
              <div>
                <h3 className={styles.guideItemTitle}>What you are making</h3>
                <p className={styles.guideItemText}>
                  A campaign, a launch, a series — and the story it needs to tell.
                </p>
              </div>
            </li>
            <li className={styles.guideItem}>
              <span className={styles.guideIndex} aria-hidden="true">02</span>
              <div>
                <h3 className={styles.guideItemTitle}>Where it needs to live</h3>
                <p className={styles.guideItemText}>
                  Web, social, in-store, broadcast — each placement shapes how
                  we plan the shoot.
                </p>
              </div>
            </li>
            <li className={styles.guideItem}>
              <span className={styles.guideIndex} aria-hidden="true">03</span>
              <div>
                <h3 className={styles.guideItemTitle}>Your timing</h3>
                <p className={styles.guideItemText}>
                  When you need it, and whether there is a launch date we
                  should plan around.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CLOSING WORDMARK */}
        <section className={styles.closing}>
          <p className={styles.wordmark} aria-label="Elephant Media">
            Elephant Media
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
