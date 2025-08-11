"use client"

import type React from "react"

import { useState } from "react"
import { sendEmail } from "@/lib/emailjs"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface UseContactFormReturn {
  formData: ContactFormData
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  handleInputChange: (field: keyof ContactFormData, value: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user starts typing
    if (error) setError(null)
    if (isSuccess) setIsSuccess(false)
  }

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setError("First name is required")
      return false
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required")
      return false
    }
    if (!formData.email.trim()) {
      setError("Email is required")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address")
      return false
    }
    if (!formData.subject.trim()) {
      setError("Subject is required")
      return false
    }
    if (!formData.message.trim()) {
      setError("Message is required")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await sendEmail({
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      if (result.success) {
        setIsSuccess(true)
        setFormData(initialFormData)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setIsSuccess(false)
    setError(null)
  }

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
    resetForm,
  }
}
