import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { CASE_STUDIES } from '@/data/caseStudies';
import styles from './page.module.css';

// Placeholder contact targets. The owner replaces these with verified
// details before launch, following the same pattern used in Footer.
// The email uses a reserved example domain and the social link points
// at the platform root, so neither can be mistaken for a real address.
const CONTACT_EMAIL = 'hello@example.com';
const INSTAGRAM_URL = 'https://www.instagram.com/';

// A small sample drawn from the shared project library. Slugs are matched
// by name so no new project data is introduced here.
const FEATURED_SLUGS = ['the-madras-barber', 'chuan-watch', 'super-deluxe'];
const FEATURED_WORK = CASE_STUDIES.filter((study) =>
  FEATURED_SLUGS.includes(study.slug)
);

// A plain-language summary of the kinds of help we offer. The full detail
// lives on the services page, which owns the canonical descriptions.
const CAPABILITIES = [
  {
    title: 'Brand storytelling',
    text: 'Positioning, messaging, and campaign ideas that give every asset a shared spine.',
  },
  {
    title: 'Film and photography',
    text: 'Concept-led shoots, edits, and stills composed for screens of every shape and size.',
  },
  {
    title: 'Social and creator content',
    text: 'Everyday formats and creative collaborations shaped for the feeds where audiences gather.',
  },
  {
    title: 'Studio and audio',
    text: 'Recorded conversations and voice work captured in a calm setting, ready to publish.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar isHome />

      <main className={styles.main}>
        {/* Immersive typographic hero. Type-led by design: no video
            assets are used, so motion here is CSS animation only. */}
        <section className={styles.hero} aria-label="Introduction">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={`eyebrow ${styles.heroEyebrow}`}>
              Elephant Media &middot; Creative communications
            </p>
            <h1 className={styles.heroTitle}>
              Stories people
              <br />
              carry with them.
            </h1>
            <p className={styles.heroSub}>
              Elephant Media shapes brand stories for film, social, and
              studio &mdash; thoughtful work made to be remembered.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/work" className={styles.btnSolid}>
                View our work
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
                Start a conversation
              </Link>
            </div>
          </div>
          <p className={styles.heroWordmark} aria-hidden="true">
            Elephant Media
          </p>
          <span className={styles.scrollCue} aria-hidden="true">
            Scroll
          </span>
        </section>

        {/* Short positioning statement. */}
        <section className={styles.position} aria-label="Our position">
          <div className={styles.narrow}>
            <p className={`eyebrow ${styles.kicker}`}>Our position</p>
            <h2 className={styles.lead}>
              Attention is earned, never assumed.
            </h2>
            <p className={styles.body}>
              We help brands say something worth hearing. Every engagement
              begins with listening &mdash; to the people behind the brand
              and the audience it hopes to reach &mdash; and ends with work
              that feels honest wherever it appears.
            </p>
            <p className={styles.body}>
              From early sketch to final cut, we keep one idea at the
              center, so each film, post, or recording speaks in the same
              clear voice.
            </p>
          </div>
        </section>

        {/* Selected-work preview, rendered from the shared project
            library. Concept pieces only; nothing new is invented here. */}
        <section className={styles.work} aria-label="Selected work">
          <div className={styles.wide}>
            <div className={styles.sectionHead}>
              <div>
                <p className={`eyebrow ${styles.kickerDark}`}>
                  Selected work
                </p>
                <h2 className={styles.sectionTitle}>
                  A first look at our project library
                </h2>
                <p className={styles.sectionSub}>
                  Concept pieces from our shared project library, shown here
                  to illustrate how we approach an idea from brief to release.
                </p>
              </div>
              <Link href="/work" className={styles.sectionLink}>
                See all work <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <ul className={styles.workList}>
              {FEATURED_WORK.map((study) => (
                <li key={study.slug} className={styles.workRow}>
                  <Link
                    href={`/work/${study.slug}`}
                    className={styles.workLink}
                  >
                    <span className={styles.workThumb} aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={study.heroImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className={styles.workMeta}>
                      <span className={styles.workCat}>
                        {study.category}
                      </span>
                      <span className={styles.workName}>
                        {study.projectName}
                      </span>
                    </span>
                    <span className={styles.workArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services teaser. Summaries only; canonical detail lives
            on the services page. */}
        <section className={styles.services} aria-label="How we can help">
          <div className={styles.wide}>
            <p className={`eyebrow ${styles.kicker}`}>How we can help</p>
            <h2 className={styles.sectionTitleLight}>
              Ideas carried through to release.
            </h2>
            <ul className={styles.capGrid}>
              {CAPABILITIES.map((cap) => (
                <li key={cap.title} className={styles.capCard}>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capText}>{cap.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/services" className={styles.textLink}>
              Explore services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Concrete closing section with placeholder contact targets. */}
        <section className={styles.closing} aria-label="Get in touch">
          <div className={styles.narrowCenter}>
            <p className={`eyebrow ${styles.kickerDark}`}>Say hello</p>
            <h2 className={styles.closingTitle}>
              Have a story to tell? Let us shape it with you.
            </h2>
            <p className={styles.closingBody}>
              Write to us about what you are making and what you hope it
              could become. We read every thoughtful note and reply in kind.
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
              Visit the contact page
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
