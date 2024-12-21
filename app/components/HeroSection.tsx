'use client'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div
      style={{
        position: 'relative',
        marginTop: '2rem',
        borderRadius: '1rem',
        overflow: 'hidden', // Ensures the overlay stays within border radius
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          zIndex: 1,
        }}
      />

      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/images/stock-market2.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: 'auto',
            width: '60%',
            marginBottom: '2rem',
          }}
        >
          Welcome to the Future of Trading Insights
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            margin: 'auto',
            width: '70%',
            marginBottom: '3rem',
          }}
        >
          Where data meets precision. Our state-of-the-art backtesting platform,
          built with the power of advanced quantitative analysis and Python,
          delivers unparalleled accuracy to optimize your trading strategies.
        </p>
        <Link
          href="#services-section"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
            textDecoration: 'none',
            width: '100px',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#005bb5')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#0070f3')
          }
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
