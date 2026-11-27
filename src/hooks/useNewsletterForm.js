import { useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Frontend-only newsletter form state shared by both concepts.
 * Validates the email and flips to a confirmation state. Nothing is sent or stored.
 */
export default function useNewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!value) return setError('Please enter your email address.')
    if (!EMAIL_RE.test(value)) return setError('Please enter a valid email address.')
    setError('')
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setEmail('')
  }

  return { email, error, submitted, onChange, onSubmit, reset }
}
