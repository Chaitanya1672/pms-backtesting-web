'use client'

import React from 'react'
import styles from '../styles/ServicesSection.module.css'

const ServicesSection = () => {
  return (
    <div id="services-section" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>
        We Believe in Simplicity Without Compromise
      </h2>
      <p className={styles.sectionDescription}>
        Every feature of our service is designed to make your backtesting
        process effortless. You bring the strategy, and we handle the rest. Our
        expert team codes, tests, and analyzes your strategies using advanced
        tools to provide you with detailed insights.
      </p>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Strategy Backtesting</h3>
          <p>Test your trading strategies on historical data effortlessly.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Custom Indicators</h3>
          <p>Design and use custom indicators for enhanced analysis.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Detailed Reports</h3>
          <p>Get comprehensive analytics and performance reports.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
