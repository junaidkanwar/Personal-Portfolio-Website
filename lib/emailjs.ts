import emailjs from "@emailjs/browser"

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_i9o2z9d", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_scf2z9g", // Replace with your EmailJS template ID
  PUBLIC_KEY: "y3I3_m7B159rKHqrE", // Replace with your EmailJS public key
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send email function
export const sendEmail = async (templateParams: {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_name?: string
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        ...templateParams,
        to_name: "Junaid Kanwar", // Your name
        to_email: "junaidkanwar04@gmail.com", // Your email
      },
      EMAILJS_CONFIG.PUBLIC_KEY,
    )
    return { success: true, response }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return { success: false, error }
  }
}
