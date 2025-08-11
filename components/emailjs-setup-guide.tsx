import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Mail, Settings } from "lucide-react"

export function EmailJSSetupGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">EmailJS Setup Guide</h1>
        <p className="text-lg text-gray-600">Follow these steps to configure EmailJS for your contact form</p>
      </div>

      <div className="grid gap-6">
        {/* Step 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              Create EmailJS Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Sign up for a free EmailJS account to get started.</p>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Free Plan Available</Badge>
              <a
                href="https://www.emailjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                Visit EmailJS <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              Configure Email Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Connect your email service (Gmail, Outlook, etc.) in the EmailJS dashboard.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Recommended:</strong> Use Gmail for easy setup. You'll need to enable 2-factor authentication
                and create an app password.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              Create Email Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Create an email template with the following variables:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <p>Subject: New message from {"{{from_name}}"}</p>
              <br />
              <p>Hello {"{{to_name}}"},</p>
              <br />
              <p>You have received a new message from your portfolio:</p>
              <br />
              <p>
                <strong>From:</strong> {"{{from_name}}"} ({"{{from_email}}"})
              </p>
              <p>
                <strong>Subject:</strong> {"{{subject}}"}
              </p>
              <br />
              <p>
                <strong>Message:</strong>
              </p>
              <p>{"{{message}}"}</p>
              <br />
              <p>
                Best regards,
                <br />
                Your Portfolio Contact Form
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              Update Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Update the configuration in <code className="bg-gray-100 px-2 py-1 rounded">lib/emailjs.ts</code>:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <p>export const EMAILJS_CONFIG = {"{"}</p>
              <p className="ml-4">SERVICE_ID: 'your_service_id', // From EmailJS dashboard</p>
              <p className="ml-4">TEMPLATE_ID: 'your_template_id', // From EmailJS dashboard</p>
              <p className="ml-4">PUBLIC_KEY: 'your_public_key', // From EmailJS dashboard</p>
              <p>{"}"}</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">5</span>
              </div>
              Install Dependencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Install the EmailJS package:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <p>npm install @emailjs/browser</p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-6 w-6 mr-2 text-purple-600" />
              Features Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Form validation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Loading states</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Success/error handling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Toast notifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Form reset on success</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">Responsive design</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
