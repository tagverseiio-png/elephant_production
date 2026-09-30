'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './services.module.css';

const SERVICES = [
  {
    number: '01',
    title: 'Creative Direction & Concept Planning',
    description:
      'Your vision, structured into a bold and executable creative strategy. We work closely with your brand to understand your market, your audience, and your goals — then translate that into a creative blueprint every team member can execute against. This is the foundation: strategy and ideas that drive everything else.',
    features: [
      'Brand & audience discovery sessions',
      'Concept mood boards & visual references',
      'Campaign brief & content strategy document',
      'Shot list and production planning',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
    imageAlt: 'Creative direction planning session',
  },
  {
    number: '02',
    title: 'Website Development',
    description:
      'Fast, cinematic websites engineered to turn visitors into customers. From striking marketing sites to full portfolio and booking experiences, we design and build web presences that carry your brand story with polish — and perform flawlessly on every device.',
    features: [
      'Custom marketing and portfolio websites',
      'Booking and contact flows that convert',
      'Motion, interaction, and cinematic art direction',
      'Performance, SEO, and mobile optimisation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c524df714b11?q=80&w=1000',
    imageAlt: 'Website development workspace',
  },
  {
    number: '03',
    title: 'Social Media Marketing',
    description:
      "Platform-native content that drives engagement and converts attention into loyal audiences. Each piece is built specifically for its platform, its audience, and its objective — from reels and carousels to story sequences and feed aesthetics.",
    features: [
      'Monthly content calendars',
      'Reel & short-form video creation',
      'Carousel and static post design',
      'Caption copywriting and hashtag strategy',
      'Feed aesthetic planning and brand consistency',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000',
    imageAlt: 'Social media marketing content',
  },
  {
    number: '04',
    title: 'Video Marketing',
    description:
      'High-end visual storytelling at cinematic standards — every frame intentional. From brand films and commercial spots to event coverage and live production, every video we produce is crafted to command attention and move your audience to act.',
    features: [
      'Brand films and commercial video production (15s, 30s, 60s)',
      'Event coverage and multi-camera live production',
      'On-set creative direction throughout',
      'Edited, colour-graded final deliverables',
      'Platform-ready formats: Instagram, YouTube, web, screen',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000',
    imageAlt: 'Video marketing production shoot',
  },
  {
    number: '05',
    title: 'Performance Marketing',
    description:
      'Bold campaigns built for recognition, reach, and measurable return. We pair striking creative with disciplined media thinking — launching paid social and campaign rollouts, then iterating on what the data tells us until every placement earns its keep.',
    features: [
      'Paid social campaign creative and setup',
      'Ad copy and messaging frameworks',
      'Multi-platform campaign asset packs',
      'A/B testing and creative iteration',
      'Performance review and optimisation reporting',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    imageAlt: 'Performance marketing campaign',
  },
  {
    number: '06',
    title: 'Account Growth & Optimisation',
    description:
      "Data-backed strategy to scale your social presence with real, measurable growth. We analyse your account data, identify what's working, and build a strategic roadmap to accelerate follower growth, increase reach, and improve engagement rates.",
    features: [
      'Monthly performance reports (reach, engagement, follower growth)',
      'Content strategy adjustments based on analytics',
      'Competitor benchmarking',
      'Growth roadmap and milestone tracking',
      'Platform algorithm insights and posting optimisation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000',
    imageAlt: 'Analytics and growth strategy',
  },
  {
    number: '07',
    title: 'Influencer Marketing',
    description:
      "Strategic creator partnerships that extend your reach and drive authentic engagement at scale. We identify, brief, and manage creator partnerships aligned with your brand values — from micro-influencers to large-scale campaigns.",
    features: [
      'Influencer identification and vetting',
      'Campaign brief creation and talent briefing',
      'Content review and brand alignment',
      'Campaign performance tracking',
      'Long-term partnership management',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000',
    imageAlt: 'Influencer marketing collaboration',
  },
  {
    number: '08',
    title: 'Podcast Studio & Recording Services',
    description:
      'Professional audio production in a fully equipped studio — crisp sound, cinematic visuals, ready to publish. Soundproofed, professionally lit, and fully equipped for both audio recording and video production.',
    features: [
      'Studio rental — hourly, half-day, full-day packages',
      'Professional audio recording and mixing',
      'Video recording with podcast-ready lighting setup',
      'Post-production and episode editing (add-on)',
      'Thumbnail and cover art creation (add-on)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000',
    imageAlt: 'Podcast studio recording',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>01 — What We Do</span>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSub}>
              Comprehensive creative solutions for your brand — from concept to camera, strategy to screen.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className={styles.serviceGrid}>
          {SERVICES.map((service, i) => {
            const isWide = i % 2 === 0;
            return (
              <motion.article
                key={service.number}
                className={`${styles.serviceCard} ${isWide ? styles.cardWide : styles.cardNarrow}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Image header with number badge */}
                <div className={styles.cardMedia}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className={styles.cardImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.cardShade}></div>
                  <span className={styles.cardNumber}>{service.number}</span>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feat, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <span className={styles.featureDot}></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.serviceLine}></div>
                </div>
              </motion.article>
            );
          })}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={styles.ctaTitle}>Ready to create<br />something extraordinary?</h2>
            <a href="mailto:info@elephantmedia.com" className={styles.ctaBtn}>
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
