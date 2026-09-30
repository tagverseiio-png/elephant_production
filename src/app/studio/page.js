import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import StudioWizard from '@/components/StudioWizard/StudioWizard';
import styles from './studio.module.css';

export const metadata = {
  title: 'Book The Studio | The Elephant Production',
  description:
    'Reserve your slot for our premium podcast studio. Review the packages and request your session via email.',
};

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>02 — Studio</span>
          <h1 className={styles.title}>Book The Studio</h1>
          <p className={styles.sub}>
            Reserve your slot in The Elephant Production podcast studio. Walk through the
            steps, review the packages, and send your request — our team confirms every
            booking personally.
          </p>
        </section>
        <section className={styles.wizardSection}>
          <StudioWizard />
        </section>
      </main>
      <Footer />
    </>
  );
}
