'use client'

import React from 'react'

const ServicesSection = () => {
  return (
    <div
      id="services-section"
      style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}
    >
      <h2
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}
      >
        We Believe in Simplicity Without Compromise
      </h2>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1rem',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}
      >
        Every feature of our service is designed to make your backtesting
        process effortless. You bring the strategy, and we handle the rest. Our
        expert team codes, tests, and analyzes your strategies using advanced
        tools to provide you with detailed insights.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        <div
          style={{
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Strategy Backtesting</h3>
          <p>Test your trading strategies on historical data effortlessly.</p>
        </div>
        <div
          style={{
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Custom Indicators</h3>
          <p>Design and use custom indicators for enhanced analysis.</p>
        </div>
        <div
          style={{
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Detailed Reports</h3>
          <p>Get comprehensive analytics and performance reports.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
