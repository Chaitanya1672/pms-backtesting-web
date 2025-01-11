import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LinkedIn
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} EdgeTest. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
