"use client"

import type React from "react"

import { useEffect } from "react"
import { X, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToastProps {
  message: string
  type: "success" | "error"
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export function Toast({ message, type, isVisible, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border max-w-md ${
          type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
        }`}
      >
        {type === "success" ? (
          <CheckCircle className="h-5 w-5 text-green-600" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-600" />
        )}
        <p className="text-sm font-medium flex-1">{message}</p>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0 hover:bg-transparent">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ToastViewport = () => {
  return <></>
}

export const ToastTitle = () => {
  return <></>
}

export const ToastDescription = () => {
  return <></>
}

export const ToastClose = () => {
  return <></>
}

export const ToastAction = () => {
  return <></>
}
