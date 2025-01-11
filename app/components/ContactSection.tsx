'use client'

import { useState } from 'react'
import {
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
} from '@mui/material'
import styles from '../styles/ContactSection.module.css'

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<'success' | 'error'>('success')

  async function handleSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    const { name, email, message } = formState
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await response.json()
    setIsLoading(false)
    if (response.ok) {
      setFormState({ name: '', email: '', message: '' })
      setSnackbarValue('Mail sent successfully!', 'success')
    } else {
      setSnackbarValue(`Failed to send email: ${data.message}`, 'error')
    }
  }

  const setSnackbarValue = (message: string, severity: 'success' | 'error') => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  return (
    <section id="contact-section" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>
      <p className={styles.sectionDescription}>
        Feel free to reach out for inquiries or support.
      </p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <TextField
          name="name"
          type="text"
          label="Your Name"
          variant="outlined"
          fullWidth
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          placeholder="eg. John Doe"
        />
        <TextField
          name="email"
          type="email"
          label="Your Email"
          variant="outlined"
          fullWidth
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          required
          placeholder="eg. johndoe@example.com"
        />
        <TextField
          name="message"
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          required
          placeholder="eg. Hello, I have a question about your service."
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          className={styles.submitButton}
        >
          {isLoading ? (
            <>
              <CircularProgress
                size={20}
                color="inherit"
                className={styles.spinner}
              />
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          className={styles.snackbarAlert}
        >
          {message}
        </Alert>
      </Snackbar>
    </section>
  )
}

export default ContactSection
