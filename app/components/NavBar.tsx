'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <h1 className={styles.logoText}>
          <Link href="#hero-section">EdgeTest</Link>
        </h1>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className={styles.navLinks}>
        <Link href="#hero-section">Home</Link>
        <Link href="#services-section">Services</Link>
        <Link href="#choose-us-section">Choose Us</Link>
        <Link href="#contact-section">Contact Us</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className={styles.hamburgerMenu}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#hero-section" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="#services-section"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#choose-us-section"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Choose Us
          </Link>
          <Link
            href="#contact-section"
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
