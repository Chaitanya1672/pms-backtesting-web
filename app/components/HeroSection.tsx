'use client'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Background image */}
      <div className={styles.background} />

      {/* Content container */}
      <div className={styles.contentContainer}>
        <h1>Welcome to the Future of Trading Insights</h1>
        <p>
          Where data meets precision. Our state-of-the-art backtesting platform,
          built with the power of advanced quantitative analysis and Python,
          delivers unparalleled accuracy to optimize your trading strategies.
        </p>
        <Link href="#services-section" className={styles.learnMoreLink}>
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
