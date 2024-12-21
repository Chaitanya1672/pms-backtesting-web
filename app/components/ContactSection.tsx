'use client'

import { useState } from 'react'
import { Button, CircularProgress } from '@mui/material'
import { Snackbar, Alert } from '@mui/material'

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
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })

    const data = await response.json()
    if (response.ok) {
      setIsLoading(false)
      setFormState({
        name: '',
        email: '',
        message: '',
      })
      setSnackbarValue(`Mail sent succesfully!`, 'success')
    } else {
      setIsLoading(false)
      setSnackbarValue(`Failed to send email: ${data.message}`, 'error')
    }
  }
  const setSnackbarValue = (message: string, severity: 'success' | 'error') => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  return (
    <section
      id="contact-section"
      style={{
        margin: '60px auto',
        maxWidth: '500px',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '30px',
          color: '#555',
        }}
      >
        Feel free to reach out for inquiries or support.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formState.name}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formState.email}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={{
            padding: '10px',
            width: '100%',
            height: '120px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            resize: 'none',
          }}
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          required
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{
            bgcolor: '#0070f3',
            '&:hover': {
              bgcolor: '#005bb5',
            },
            fontSize: '1rem',
            padding: '10px 20px',
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress
                size={20}
                color="inherit"
                sx={{ marginRight: '8px' }}
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
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </section>
  )
}

export default ContactSection
