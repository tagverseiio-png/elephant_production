import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';

// Placeholder contact targets. The owner replaces these with verified
// details before launch, following the same pattern used in Footer.
// The email uses a reserved example domain and the social link points
// at the platform root, so neither can be mistaken for a real address.
const CONTACT_EMAIL = 'hello@example.com';
const INSTAGRAM_URL = 'https://www.instagram.com/';

// How we work is described as principles, not as a timeline, so this
// page makes no claims about dates, durations, or team size.
const STEPS = [
  {
    title: 'Listen well',
    text: 'We begin by understanding the brand, its audience, and the change it hopes to make, before any concept is proposed.',
  },
  {
    title: 'Shape the story',
    text: 'We agree on one central idea and the messages that support it, so every later decision has something to answer to.',
  },
  {
    title: 'Make with care',
    text: 'We produce the work attentively across film, stills, social, and sound, keeping craft consistent at every step.',
  },
  {
    title: 'Share and learn',
    text: 'We release the work thoughtfully, watch how it is received, and carry what we learn into whatever comes next.',
  },
];

// Beliefs are stated as values, not as achievements, so nothing here
// asserts awards, results, or recognition of any kind.
const BELIEFS = [
  {
    title: 'Clarity outlasts noise.',
    text: 'A simple idea, plainly told, stays with people longer than spectacle.',
  },
  {
    title: 'Honesty holds attention.',
    text: 'Audiences recognise what is genuine. We build stories a brand can stand behind.',
  },
  {
    title: 'Craft shows respect.',
    text: 'Care in sound, image, and word tells the audience that their time matters.',
  },
  {
    title: 'Good ideas welcome company.',
    text: 'The strongest work is improved by collaboration, candour, and fresh perspectives.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Opening statement: who this page is for and what it covers. */}
        <section className={styles.hero} aria-label="About Elephant Media">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={`eyebrow ${styles.heroEyebrow}`}>
              About Elephant Media
            </p>
            <h1 className={styles.heroTitle}>
              A studio for clear and honest brand stories.
            </h1>
            <p className={styles.heroSub}>
              Elephant Media is a creative communications agency. This page
              describes who we are, how we work, and what guides our
              choices &mdash; in plain language, without embellishment.
            </p>
          </div>
          <p className={styles.heroWordmark} aria-hidden="true">
            Elephant Media
          </p>
        </section>

        {/* Who we are. Stated in general terms; anything unverified
            is left out on purpose rather than invented. */}
        <section className={styles.light} aria-label="Who we are">
          <div className={styles.narrow}>
            <p className={`eyebrow ${styles.kicker}`}>Who we are</p>
            <h2 className={styles.lead}>
              People who care how stories land.
            </h2>
            <p className={styles.body}>
              We are strategists, makers, and editors gathered around a
              shared interest: helping brands communicate with care.
              Strategy sits beside production here, so ideas are shaped by
              the people who will bring them to life.
            </p>
            <p className={styles.body}>
              We describe only what we can stand behind. Anything that
              would require names, numbers, or addresses we do not hold is
              left out of this page on purpose &mdash; what remains is how
              we think and how we work.
            </p>
          </div>
          <div className={styles.narrow}>
            <div className={styles.visual} aria-hidden="true">
              <span className={styles.visualMark}>&ldquo;</span>
              <span className={styles.visualText}>
                Say it plainly, make it well
              </span>
            </div>
          </div>
        </section>

        {/* How we work: a steady path from idea to release. */}
        <section className={styles.dark} aria-label="How we work">
          <div className={styles.wide}>
            <p className={`eyebrow ${styles.kickerDark}`}>How we work</p>
            <h2 className={styles.sectionTitle}>
              A steady path from idea to release.
            </h2>
            <ol className={styles.steps}>
              {STEPS.map((step) => (
                <li key={step.title} className={styles.step}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What we believe: guiding principles. */}
        <section className={styles.light} aria-label="What we believe">
          <div className={styles.wide}>
            <p className={`eyebrow ${styles.kicker}`}>What we believe</p>
            <h2 className={styles.sectionTitleLight}>
              Principles that guide the work.
            </h2>
            <ul className={styles.beliefs}>
              {BELIEFS.map((belief) => (
                <li key={belief.title} className={styles.belief}>
                  <h3 className={styles.beliefTitle}>{belief.title}</h3>
                  <p className={styles.beliefText}>{belief.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Concrete closing section with placeholder contact targets. */}
        <section className={styles.closing} aria-label="Get in touch">
          <div className={styles.narrowCenter}>
            <p className={`eyebrow ${styles.kickerDark}`}>Get in touch</p>
            <h2 className={styles.closingTitle}>
              Tell us what you hope to make.
            </h2>
            <p className={styles.closingBody}>
              If the way we work sounds like a fit, write to us through
              the contact page. Bring whatever you have &mdash; a brief, a
              sketch, or simply a question.
            </p>
            <p className={styles.contactLines}>
              {/* Placeholder email; see CONTACT_EMAIL note above. */}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <span aria-hidden="true">&middot;</span>
              {/* Placeholder social link; see INSTAGRAM_URL note above. */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <Link href="/contact" className={styles.btnSolid}>
              Go to the contact page
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
