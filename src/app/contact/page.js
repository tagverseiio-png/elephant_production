import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact | Elephant Media',
  description:
    'Get in touch with Elephant Media — leadership contacts, studio availability, and collaboration enquiries.',
};

const LEADERSHIP = [
  {
    role: 'Founder & Director',
    team: 'Leadership Team',
    email: 'info@elephantmedia.com',
  },
  {
    role: 'Creative & Production',
    team: 'Production Team',
    email: 'info@elephantmedia.com',
  },
  {
    role: 'Partnerships & Growth',
    team: 'Partnerships Team',
    email: 'info@elephantmedia.com',
  },
];

const MARKETS = [
  {
    market: 'In-Studio',
    region: 'Visits by appointment',
    note: 'Podcast recording, campaign shoots, and client sessions at our studio.',
  },
  {
    market: 'On Location',
    region: 'Available for travel',
    note: 'Event coverage, brand activations, and productions wherever you are.',
  },
  {
    market: 'Remote',
    region: 'Worldwide',
    note: 'Strategy, editing, and creative direction from anywhere.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <span className={styles.eyebrow}>03 — Contact</span>
          <h1 className={styles.title}>Say Hello</h1>
          <p className={styles.sub}>
            Tell us about your brand and what you want to build. We reply to every
            serious enquiry — usually within two working days.
          </p>
        </section>

        {/* FORM + DIRECT RAIL */}
        <section className={styles.formSection}>
          <div className={styles.formCol}>
            <h2 className={styles.formTitle}>Start a project</h2>
            <ContactForm />
          </div>
          <aside className={styles.railCol}>
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Direct email</span>
              <a href="mailto:info@elephantmedia.com" className={styles.mailLink}>
                info@elephantmedia.com
              </a>
            </div>
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Social</span>
              <a
                href="https://www.instagram.com/elephantmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.railLink}
              >
                @elephantmedia
              </a>
            </div>
            <div className={styles.railCard}>
              <span className={styles.railLabel}>Prefer to talk studio?</span>
              <p className={styles.railText}>
                Hourly, half-day, and full-day recording sessions with engineering included.
              </p>
              <a href="/studio" className={styles.railLink}>
                Book the studio →
              </a>
            </div>
          </aside>
        </section>

        {/* LEADERSHIP */}
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Leadership</h2>
          <ul className={styles.entryList}>
            {LEADERSHIP.map((entry) => (
              <li key={entry.role} className={styles.entry}>
                <div>
                  <p className={styles.entryRole}>{entry.role}</p>
                  <p className={styles.entryTeam}>{entry.team}</p>
                </div>
                <a href={`mailto:${entry.email}`} className={styles.entryEmail}>
                  {entry.email}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* MARKETS */}
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Markets</h2>
          <ul className={styles.entryList}>
            {MARKETS.map((entry) => (
              <li key={entry.market} className={styles.entry}>
                <div>
                  <p className={styles.entryRole}>{entry.market}</p>
                  <p className={styles.entryTeam}>{entry.region}</p>
                </div>
                <p className={styles.entryNote}>{entry.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* SOCIAL + WORDMARK */}
        <section className={styles.socialBlock}>
          <a
            href="https://www.instagram.com/elephantmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialHandle}
          >
            @elephantmedia
          </a>
          <p className={styles.wordmark}>Elephant Media</p>
          <p className={styles.copyright}>
            © 2026 Elephant Media. All rights reserved.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
