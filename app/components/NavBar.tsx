'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#0070f3fc',
        color: 'white',
        borderRadius: '10px 10px 0 0',
      }}
    >
      {/* Logo */}
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
          <Link
            href="#hero-section"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            BackTestify
          </Link>
        </h1>
      </div>

      {/* Navigation Links (Desktop) */}
      <div style={{ display: 'flex', gap: '20px' }} className="nav-links">
        <Link
          href="#hero-section"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link
          href="#services-section"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Services
        </Link>
        <Link
          href="#choose-us-section"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Choose Us
        </Link>
        <Link
          href="#contact-section"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Contact Us
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        style={{ display: 'none', cursor: 'pointer' }}
        className="hamburger-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '20px',
            backgroundColor: '#0070f3',
            border: '1px solid #005bb5',
            borderRadius: '8px',
            padding: '10px',
          }}
        >
          <Link
            href="/"
            style={{ display: 'block', color: 'white', marginBottom: '10px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            style={{ display: 'block', color: 'white', marginBottom: '10px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            style={{ display: 'block', color: 'white' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
