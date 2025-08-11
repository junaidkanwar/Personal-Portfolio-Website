"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, MessageCircle } from "lucide-react"
import { useContactForm } from "@/hooks/use-contact-form"
import { initEmailJS } from "@/lib/emailjs"
import { Toast } from "@/components/ui/toast"

export function Contact() {
  const { formData, isLoading, isSuccess, error, handleInputChange, handleSubmit, resetForm } = useContactForm()

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  // Handle success/error states
  useEffect(() => {
    if (isSuccess) {
      setToastMessage("Message sent successfully! I'll get back to you soon.")
      setToastType("success")
      setShowToast(true)
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      setToastMessage(error)
      setToastType("error")
      setShowToast(true)
    }
  }, [error])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "junaidkanwar04@gmail.com",
      href: "mailto:junaidkanwar04@gmail.com",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "03155128728",
      href: "tel:03155128728",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/junaid-kanwar-0725b6315",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-cyan-400 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about
            technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking for a developer, have a project in mind, or just want to connect, I'd love to hear
              from you. Here's how you can reach me:
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div
                    className={`p-4 rounded-xl ${info.bgColor} mr-4 backdrop-blur-sm group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className={`h-5 w-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
              >
                <a href="https://github.com/junaidkanwar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
              >
                <a href="https://www.linkedin.com/in/junaid-kanwar-0725b6315" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Send me a message</CardTitle>
              {isSuccess && (
                <div className="text-sm text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  ❌ {error}
                </div>
              )}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      disabled={isLoading}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      disabled={isLoading}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isLoading}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="Let's work together!"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    disabled={isLoading}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    disabled={isLoading}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} type={toastType} isVisible={showToast} onClose={() => setShowToast(false)} />
    </section>
  )
}
