import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import StudioWizard from '@/components/StudioWizard/StudioWizard';
import styles from './studio.module.css';

export const metadata = {
  title: 'Book The Studio | Elephant Media',
  description:
    'Reserve your slot for our premium podcast studio. Review the packages and request your session via email.',
};

const STUDIO_PERKS = [
  {
    title: 'Broadcast-grade sound',
    text: 'Treated room, pro mics, and an engineer on every session.',
  },
  {
    title: 'Camera-ready lighting',
    text: 'Podcast-ready lighting and multi-angle video included.',
  },
  {
    title: 'Publish-ready delivery',
    text: 'Mixed audio, edited cuts, and cover art as add-ons.',
  },
];

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1600&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className={styles.heroBg}
          />
          <div className={styles.heroShade}></div>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>02 — Studio</span>
            <h1 className={styles.title}>Book The Studio</h1>
            <p className={styles.sub}>
              Reserve your slot in Elephant Media podcast studio. Walk through the
              steps, review the packages, and send your request — our team confirms every
              booking personally.
            </p>
          </div>
        </section>
        <section className={styles.wizardSection}>
          <aside className={styles.infoRail}>
            <h2 className={styles.railTitle}>Why record with us</h2>
            <ul className={styles.perkList}>
              {STUDIO_PERKS.map((perk, i) => (
                <li key={perk.title} className={styles.perk}>
                  <span className={styles.perkIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className={styles.perkTitle}>{perk.title}</h3>
                    <p className={styles.perkText}>{perk.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.railNote}>
              <span className={styles.railNoteLabel}>Good to know</span>
              <p>
                Every request is reviewed by a producer. Your slot is confirmed only when
                our team replies — nothing books itself.
              </p>
            </div>
          </aside>
          <div className={styles.wizardCol}>
            <StudioWizard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
