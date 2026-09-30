import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import StudioWizard from '@/components/StudioWizard/StudioWizard';
import styles from './studio.module.css';

export const metadata = {
  title: 'Studio | Elephant Media',
  description:
    'How work takes shape at the Elephant Media studio: a simple process, a focused session, and a clear booking request.',
};

// ── PLACEHOLDERS — owner: fill in real values before launch. ──
// We have no verified contact details or social accounts, so any contact
// reference below uses obvious placeholder targets (same pattern as
// Footer.js) instead of inventing real-looking addresses or handles.
// CONTACT_EMAIL uses the RFC 2606 reserved `example.com` domain.
// No location, equipment, team-size, or capacity details are listed here:
// describing those would invent facts, so this page stays with process
// and approach only.
const CONTACT_EMAIL = 'hello@example.com';

// Process steps describe approach only — no claims about room size,
// gear models, staffing, or throughput.
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Talk it through',
    text: 'Start with what you want to make and who it is for. We agree on the shape of the session before anything is scheduled.',
  },
  {
    number: '02',
    title: 'Plan the session',
    text: 'An outline for the time together: topics, order, and what to bring, so the recording time stays focused.',
  },
  {
    number: '03',
    title: 'Record together',
    text: 'A guided session with time set aside to pause, rephrase, and re-record parts that need another pass.',
  },
  {
    number: '04',
    title: 'Shape and share',
    text: 'After the session, the material is organised for review, so you can decide what happens next with a clear record.',
  },
];

const BOOKING_NOTES = [
  {
    title: 'Requests are reviewed',
    text: 'Use the steps to send a request. Each one is read and answered — nothing confirms itself.',
  },
  {
    title: 'Bring your outline',
    text: 'A short list of topics or questions helps the session stay on track.',
  },
  {
    title: 'Ask before the day',
    text: 'If anything is unclear, write to us first and we will talk it through.',
  },
];

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page header — dark editorial band */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className="eyebrow">The studio</span>
            <h1 className={styles.title}>How the work gets made</h1>
            <p className={styles.sub}>
              The studio is the practical side of Elephant Media: a set-aside time and
              place to plan, record, and review audio and video work with guidance.
            </p>
          </div>
        </section>

        {/* Process — light section, consistent step rhythm */}
        <section className={styles.processSection} aria-label="Studio process">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Process</span>
            <h2 className={styles.sectionTitle}>Four stages, same order every time</h2>
            <p className={styles.sectionSub}>
              Every session follows the same working pattern, so you always know what
              comes next.
            </p>
          </div>
          <ol className={styles.stepList}>
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className={styles.stepRow}>
                <span className={styles.stepIndex} aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Booking — wizard interaction (kept) beside engagement notes */}
        <section className={styles.wizardSection} aria-label="Request a studio session">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Booking</span>
            <h2 className={styles.sectionTitle}>Request a session</h2>
            <p className={styles.sectionSub}>
              Walk through the steps and send your request. Your slot is confirmed only
              when our team replies.
            </p>
          </div>
          <div className={styles.wizardGrid}>
            <aside className={styles.infoRail} aria-label="Good to know">
              <h3 className={styles.railTitle}>Good to know</h3>
              <ul className={styles.noteList}>
                {BOOKING_NOTES.map((note, i) => (
                  <li key={note.title} className={styles.note}>
                    <span className={styles.noteIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className={styles.noteTitle}>{note.title}</h4>
                      <p className={styles.noteText}>{note.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.railContact}>
                {/* PLACEHOLDER email — see CONTACT_EMAIL note above. */}
                <span className={styles.railContactLabel}>Prefer email?</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL.toUpperCase()}</a>
              </div>
            </aside>
            <div className={styles.wizardCol}>
              <StudioWizard />
            </div>
          </div>
        </section>

        {/* Closing — dark band */}
        <section className={styles.closingSection}>
          <div className={styles.closingInner}>
            <span className={`eyebrow ${styles.closingEyebrow}`}>Next step</span>
            <h2 className={styles.closingTitle}>Not sure what you need yet?</h2>
            <p className={styles.closingText}>
              Read through the services first, or send a short note describing what you
              want to make.
            </p>
            <div className={styles.closingActions}>
              <Link href="/services" className={styles.closingBtn}>
                Browse services
              </Link>
              <Link href="/contact" className={styles.closingLink}>
                Go to the contact page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
