'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './services.module.css';

// ── PLACEHOLDERS — owner: fill in real values before launch. ──
// We have no verified contact details, so the CTA below uses an obvious
// placeholder target instead of inventing a real-looking address.
// CONTACT_EMAIL uses the RFC 2606 reserved `example.com` domain, so it
// can never be mistaken for a real address (same pattern as Footer.js).
const CONTACT_EMAIL = 'hello@example.com';

// Service catalogue in live-data order. Titles, descriptions, feature
// bullets, slugs and image URLs are reproduced as-is from the data file.
// Only the surrounding page copy (eyebrow, subline, CTA) is authored here.
const SERVICES = [
  {
    number: '01',
    slug: 'creative-direction-concept-planning',
    title: 'Creative Direction',
    description:
      'Your vision, structured into a bold and executable creative strategy. Every successful campaign starts with a clear direction. We work closely with your brand to understand your market, your audience, and your goals — then translate that understanding into a creative blueprint that every team member can execute against.',
    features: [
      'Brand & audience discovery sessions',
      'Concept mood boards & visual references',
      'Campaign brief & content strategy document',
      'Shot list and production planning',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/cab52a95-35d4-4cde-b01d-c46c13431b20.jpg',
  },
  {
    number: '02',
    slug: 'website-developement',
    title: 'Website development',
    description:
      'Design and build responsive, high-performance websites optimized for user experience, speed, and conversions.',
    features: [
      'Responsive design',
      'Custom development',
      'SEO-friendly structure',
      'Fast loading',
      'CMS integration',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/7e466581-9a16-4365-8b84-71b929ee0110.jpeg',
  },
  {
    number: '03',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description:
      'Create and manage social media campaigns that increase brand awareness, audience engagement, and customer acquisition.',
    features: [
      'Content planning',
      'Platform management',
      'Paid campaigns',
      'Analytics',
      'Community engagement',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/6ed05afd-538e-4bf2-ba15-22dcd6d1fea3.webp',
  },
  {
    number: '04',
    slug: 'video-marketing',
    title: 'Video Marketing',
    description:
      'Produce and distribute engaging video content that helps businesses attract, educate, and convert their target audience.',
    features: [
      'Promotional videos',
      'Short-form content',
      'Video ads',
      'Editing',
      'Distribution strategy',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/af10d7a5-09d0-479a-8939-bff5c31c13e6.jpg',
  },
  {
    number: '05',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    description:
      'Run data-driven advertising campaigns focused on measurable outcomes such as leads, sales, and return on ad spend.',
    features: [
      'PPC advertising',
      'Meta Ads',
      'Google Ads',
      'Conversion tracking',
      'Campaign optimization',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/1b76f689-82f9-445e-bf04-df0833fbc5c3.jpg',
  },
  {
    number: '06',
    slug: 'account-growth-optimisation',
    title: 'Account Growth & Optimisation',
    description:
      'Improve digital account performance through strategic optimization, audience analysis, and ongoing growth initiatives.',
    features: [
      'Profile optimization',
      'Audience growth',
      'Engagement improvement',
      'Analytics review',
      'Strategy refinement',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/db3046dc-3251-4e3c-9729-11ca3cd61a60.png',
  },
  {
    number: '07',
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    description:
      'Connect brands with relevant creators to build trust, increase visibility, and drive authentic customer engagement.',
    features: [
      'Influencer discovery',
      'Campaign management',
      'Partnership coordination',
      'Content collaboration',
      'Performance reporting',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/a1de9ebd-96c9-42a4-af6c-9f2949c0e8ba.jpg',
  },
  {
    number: '08',
    slug: 'podcast-studio-recording-services',
    title: 'Podcast Studio & Recording Services',
    description:
      'Professional audio production in a fully equipped studio — crisp sound, cinematic visuals, ready to publish. Our podcast studio is built for creators who take their content seriously. Soundproofed, professionally lit, and fully equipped for both audio recording and video production, the studio gives your podcast the production quality it deserves. Book by the hour, half-day, or full day.',
    features: [
      'Studio rental — hourly, half-day, full-day packages',
      'Professional audio recording and mixing',
      'Video recording with podcast-ready lighting setup',
      'Post-production and episode editing (add-on)',
      'Thumbnail and cover art creation (add-on)',
    ],
    image:
      'https://tsk-website.s3.eu-north-1.amazonaws.com/services/25b2528f-bd43-4946-8b72-7b09ff742d3c.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page header — dark editorial band */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className="eyebrow">What we do</span>
            <h1 className={styles.heroTitle}>Services</h1>
            <p className={styles.heroSub}>
              Creative and communications support from first idea to final delivery, scoped
              around your goals.
            </p>
          </div>
        </section>

        {/* Service set — one consistent anatomy per entry, alternating media side */}
        <section className={styles.servicesSection} aria-label="Service list">
          <ol className={styles.serviceList}>
            {SERVICES.map((service, index) => (
              <motion.li
                key={service.slug}
                id={service.slug}
                className={`${styles.serviceRow} ${index % 2 === 1 ? styles.serviceRowAlt : ''}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <article className={styles.serviceArticle}>
                  <div className={styles.serviceMedia}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      unoptimized
                      className={styles.serviceImage}
                    />
                  </div>
                  <div className={styles.serviceText}>
                    <span className={styles.serviceIndex} aria-hidden="true">
                      {service.number}
                    </span>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.description}</p>
                    <ul className={styles.featureList}>
                      {service.features.map((feat) => (
                        <li key={feat} className={styles.featureItem}>
                          <span className={styles.featureDot} aria-hidden="true" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Closing CTA — dark band */}
        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={`eyebrow ${styles.ctaEyebrow}`}>Next step</span>
            <h2 className={styles.ctaTitle}>Tell us what you are working toward</h2>
            <p className={styles.ctaText}>
              Share a short outline of your project and we will reply with suggested next
              steps.
            </p>
            <div className={styles.ctaActions}>
              {/* PLACEHOLDER email — see CONTACT_EMAIL note above. */}
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.ctaBtn}>
                <span>{CONTACT_EMAIL.toUpperCase()}</span>
              </a>
              <Link href="/contact" className={styles.ctaLink}>
                Go to the contact page
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
