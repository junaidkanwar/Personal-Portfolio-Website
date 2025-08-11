import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>

          <div className="mb-8">
            {/* Unique profile design */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-slate-900 to-purple-900 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  JK
                </div>
              </div>
              {/* Floating code symbols */}
              <Code className="absolute -top-2 -right-2 h-6 w-6 text-cyan-400 animate-bounce" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Junaid Kanwar
              </span>
            </h1>

            <div className="relative">
              <p className="text-xl sm:text-3xl text-gray-300 mb-6 font-light">
                Final Year{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  Computer Science
                </span>{" "}
                Student
              </p>

              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate about building <span className="text-purple-400 font-semibold">practical</span>,{" "}
              <span className="text-pink-400 font-semibold">impactful</span> software solutions with expertise in{" "}
              <span className="text-cyan-400 font-semibold">full-stack development</span>,{" "}
              <span className="text-emerald-400 font-semibold">mobile apps</span>, and{" "}
              <span className="text-yellow-400 font-semibold">AI technologies</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 bg-transparent backdrop-blur-sm"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/junaid-kanwar-0725b6315",
                color: "hover:text-blue-400",
              },
              { icon: Github, href: "https://github.com/junaidkanwar", color: "hover:text-purple-400" },
              { icon: Mail, href: "mailto:junaidkanwar04@gmail.com", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:rotate-12`}
              >
                <social.icon className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
