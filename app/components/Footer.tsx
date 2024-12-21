import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: '40px',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            margin: '0 10px',
            textDecoration: 'none',
            fontSize: '1.2rem',
          }}
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            margin: '0 10px',
            textDecoration: 'none',
            fontSize: '1.2rem',
          }}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            margin: '0 10px',
            textDecoration: 'none',
            fontSize: '1.2rem',
          }}
        >
          LinkedIn
        </a>
      </div>
      <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
        &copy; {new Date().getFullYear()} BackTestify. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
