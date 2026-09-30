'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const VALUES = [
  {
    title: 'Action-First',
    description: 'We don\'t just talk strategy — we execute. Every recommendation comes with a clear path to results.',
    icon: '→',
  },
  {
    title: 'Creative Alchemy',
    description: 'We blend art and strategy, intuition and data, to create communications that truly resonate.',
    icon: '✦',
  },
  {
    title: 'Authentic Storytelling',
    description: 'We bring your brand\'s unique perspective and authenticity to the forefront of every narrative.',
    icon: '◈',
  },
  {
    title: 'Collaborative Spirit',
    description: 'Your brand is our brand. We embed ourselves in your culture to deliver work that feels genuinely yours.',
    icon: '◎',
  },
];

const TEAM = [
  { name: 'Founder & CEO', role: 'Leadership', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'VP of Communications', role: 'Strategy', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Director of Influencer', role: 'Partnerships', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { name: 'Creative Director', role: 'Creative', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Senior Account Manager', role: 'Client Services', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' },
  { name: 'Digital Strategist', role: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.pageHero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop"
            alt="City lights at night"
            className={styles.heroBg}
          />
          <div className={styles.heroShade}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>About Elephant Media</span>
            <h1 className={styles.heroTitle}>
              We create magic<br />for brands
            </h1>
            <p className={styles.heroSub}>
              A crew of strategists, filmmakers, and culture obsessives — built for brands that refuse to blend in.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.missionSection}>
          <div className={styles.missionContainer}>
            <motion.div
              className={styles.missionLeft}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className={styles.labelLine}></span>
              <span className={styles.sectionLabel}>Who We Are</span>
            </motion.div>
            <motion.div
              className={styles.missionRight}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className={styles.missionText}>
                Elephant Media is an action-first creative communications agency. We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct and adaptable communications strategies.
              </p>
              <p className={styles.missionText}>
                With an unmatched consumer understanding and a true collaborative spirit, we create magic for brands by bringing their authenticity and differentiated perspective to the forefront. Our team brings decades of combined experience across media, fashion, lifestyle, and consumer brands.
              </p>
            </motion.div>
          </div>
          <motion.div
            className={styles.missionBanner}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
              alt="Elephant Media team planning a campaign"
              loading="lazy"
              decoding="async"
            />
            <div className={styles.missionBannerCaption}>
              <span>Strategy first — every shoot starts at the whiteboard</span>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <motion.h2 
              className={styles.valuesTitle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Values
            </motion.h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <motion.div 
              className={styles.sectionLabelWrap}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className={styles.labelLine}></span>
              <span className={styles.sectionLabel}>The Team</span>
            </motion.div>
            <motion.h2 
              className={styles.teamTitle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Meet the people behind<br />the magic
            </motion.h2>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
              >
                <div className={styles.teamImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.teamRoleChip}>{member.role}</span>
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className={styles.testimonialSection}>
          <motion.div 
            className={styles.testimonialContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.quoteIcon}>&ldquo;</div>
            <blockquote className={styles.quote}>
              Elephant Media has been a transformative partner for our brand. Their strategic vision combined with flawless execution has elevated our presence in ways we never thought possible.
            </blockquote>
            <div className={styles.quoteAuthor}>
              <span className={styles.authorName}>Brand Partner</span>
              <span className={styles.authorRole}>Fortune 500 Company</span>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
