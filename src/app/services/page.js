'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './services.module.css';

const SERVICES = [
  {
    number: '01',
    title: 'Creative Direction & Concept Planning',
    description:
      'Your vision, structured into a bold and executable creative strategy. We work closely with your brand to understand your market, your audience, and your goals — then translate that into a creative blueprint every team member can execute against.',
    features: [
      'Brand & audience discovery sessions',
      'Concept mood boards & visual references',
      'Campaign brief & content strategy document',
      'Shot list and production planning',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000',
    imageAlt: 'Creative direction planning session',
  },
  {
    number: '02',
    title: 'Professional Photography & Videography',
    description:
      'High-end visual storytelling at cinematic standards — every frame intentional. From product photography and portrait sessions to brand campaigns and commercial video, every visual we produce is crafted to command attention.',
    features: [
      'Full-day or half-day photography & video shoots',
      'On-set creative direction throughout',
      'Edited, colour-graded final deliverables',
      'Platform-ready formats: Instagram, YouTube, web, print',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000',
    imageAlt: 'Professional photography shoot',
  },
  {
    number: '03',
    title: 'Social Media Content Creation',
    description:
      "Platform-native content that drives engagement and converts attention into loyal audiences. Each piece is built specifically for its platform, its audience, and its objective — from reels and carousels to story sequences and feed aesthetics.",
    features: [
      'Monthly content calendars',
      'Reel & short-form video creation',
      'Carousel and static post design',
      'Caption copywriting and hashtag strategy',
      'Feed aesthetic planning and brand consistency',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
    imageAlt: 'Social media content creation',
  },
  {
    number: '04',
    title: 'High-End Commercial Ads & Brand Campaigns',
    description:
      'Bold, market-dominating campaigns built for recognition, reach, and lasting brand equity. From 15-second product spots to full brand campaign rollouts — content that stands out in a saturated feed and drives measurable results.',
    features: [
      'Commercial ad video production (15s, 30s, 60s)',
      'Brand campaign photography series',
      'Ad copy and messaging frameworks',
      'Multi-platform campaign assets',
      'Performance review and creative optimisation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000',
    imageAlt: 'Commercial brand campaign',
  },
  {
    number: '05',
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
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
    imageAlt: 'Analytics and growth strategy',
  },
  {
    number: '06',
    title: 'Event Coverage',
    description:
      "Capturing the energy and essence of live moments — from intimate events to large-scale productions. Whether it's a product launch, brand activation, or corporate event, we deliver a full photo and video package that brings the experience to life.",
    features: [
      'Event photography — full coverage',
      'Event highlight reel video',
      'Same-day content for live social posting',
      'Edited gallery delivered within agreed timeline',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
    imageAlt: 'Event coverage and photography',
  },
  {
    number: '07',
    title: 'Influencer & Digital Marketing Collaborations',
    description:
      "Strategic creator partnerships that extend your reach and drive authentic engagement at scale. We identify, brief, and manage creator partnerships aligned with your brand values — from micro-influencers to large-scale campaigns.",
    features: [
      'Influencer identification and vetting',
      'Campaign brief creation and talent briefing',
      'Content review and brand alignment',
      'Campaign performance tracking',
      'Long-term partnership management',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000',
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
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000',
    imageAlt: 'Podcast studio recording',
  },
  {
    number: '09',
    title: 'Concert & Live Production',
    description:
      'The ultimate authority in live experience production — from pre-production to the final curtain call. We handle the full production pipeline for concerts, live shows, and large-scale events.',
    features: [
      'Pre-production planning and shot list',
      'Multi-camera live video coverage',
      'Concert and event photography',
      'Post-production highlight reel and full edit',
      'Social content cut-downs for digital distribution',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000',
    imageAlt: 'Concert and live production',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.07 }
    );

    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>What We Do</span>
            <h1 className={styles.heroTitle}>Services</h1>
            <p className={styles.heroSub}>
              From concept to camera, strategy to screen — we handle every dimension of your brand&apos;s creative output.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          {SERVICES.map((service, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={service.number}
                className={`${styles.serviceRow} ${isReversed ? styles.reversed : ''} ${styles.reveal}`}
                style={{ transitionDelay: `0.05s` }}
              >
                {/* Image */}
                <div className={styles.serviceImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className={styles.serviceImage}
                  />
                </div>

                {/* Text */}
                <div className={styles.serviceTextWrap}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
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
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className={`${styles.ctaSection} ${styles.reveal}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to create<br />something extraordinary?</h2>
            <a href="mailto:info@theelephantproduction.com" className={styles.ctaBtn}>
              <span>Get In Touch</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
