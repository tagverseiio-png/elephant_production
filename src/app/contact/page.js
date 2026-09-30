import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactCta from '@/components/ContactCta/ContactCta';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact | The Elephant Production',
  description:
    'Get in touch with The Elephant Production — leadership contacts, studio availability, and collaboration enquiries.',
};

const LEADERSHIP = [
  {
    role: 'Founder & Director',
    team: 'Leadership Team',
    email: 'info@theelephantproduction.com',
  },
  {
    role: 'Creative & Production',
    team: 'Production Team',
    email: 'info@theelephantproduction.com',
  },
  {
    role: 'Partnerships & Growth',
    team: 'Partnerships Team',
    email: 'info@theelephantproduction.com',
  },
];

const MARKETS = [
  {
    market: 'In-Studio Sessions',
    region: 'Studio 1, [City] — by appointment',
    note: 'Podcast recording, shoots, and meetings in person.',
  },
  {
    market: 'Remote Collaboration',
    region: 'Available worldwide (remote)',
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
          <div className={styles.heroCta}>
            <ContactCta />
            <a href="mailto:info@theelephantproduction.com" className={styles.mailLink}>
              info@theelephantproduction.com
            </a>
          </div>
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
            href="https://www.instagram.com/theelephantproduction/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialHandle}
          >
            @theelephantproduction
          </a>
          <p className={styles.wordmark}>The Elephant</p>
          <p className={styles.copyright}>
            © 2026 The Elephant Production. All rights reserved.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
