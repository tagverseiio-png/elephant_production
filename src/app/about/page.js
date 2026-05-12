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
  { name: 'Founder & CEO', role: 'Leadership', gradient: 'linear-gradient(135deg, #e8ddd0, #c4a882)' },
  { name: 'VP of Communications', role: 'Strategy', gradient: 'linear-gradient(135deg, #d4c5b2, #a8956e)' },
  { name: 'Director of Influencer', role: 'Partnerships', gradient: 'linear-gradient(135deg, #a8c5a0, #6b9e5e)' },
  { name: 'Creative Director', role: 'Creative', gradient: 'linear-gradient(135deg, #c9b99a, #8fb573)' },
  { name: 'Senior Account Manager', role: 'Client Services', gradient: 'linear-gradient(135deg, #c4a882, #8b6d4f)' },
  { name: 'Digital Strategist', role: 'Digital', gradient: 'linear-gradient(135deg, #e0d5c7, #c4a882)' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>About The Elephant Production</span>
            <h1 className={styles.heroTitle}>
              We create magic<br />for brands
            </h1>
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
                The Elephant Production is an action-first creative communications agency. We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct and adaptable communications strategies.
              </p>
              <p className={styles.missionText}>
                With an unmatched consumer understanding and a true collaborative spirit, we create magic for brands by bringing their authenticity and differentiated perspective to the forefront. Our team brings decades of combined experience across media, fashion, lifestyle, and consumer brands.
              </p>
            </motion.div>
          </div>
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
                <div className={styles.teamImage} style={{ background: member.gradient }}>
                  <div className={styles.teamInitial}>
                    {member.name.charAt(0)}
                  </div>
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
              The Elephant Production has been a transformative partner for our brand. Their strategic vision combined with flawless execution has elevated our presence in ways we never thought possible.
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
