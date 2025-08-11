import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, GraduationCap, Zap, Heart, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Computer Science student at Air University with a solid foundation in multiple programming languages and
            full-stack development. Currently developing innovative solutions and continuously learning to stay ahead in
            the tech landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-6 w-6 text-pink-400" />
              <h3 className="text-2xl font-semibold text-white">Get to know me!</h3>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  I'm a passionate Computer Science student at Air University (2022–2026) with expertise in{" "}
                  <span className="text-cyan-400 font-semibold">frontend development</span>,{" "}
                  <span className="text-purple-400 font-semibold">React.js</span>, and modern web technologies.
                </span>
              </p>

              <p className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>
                  Currently working on my final year project, "Code Arena" - a tiered progression coding competition
                  website with static code analysis features. I'm passionate about building practical, impactful
                  software solutions.
                </span>
              </p>

              <p className="flex items-start space-x-3">
                <GraduationCap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span>
                  I enjoy tackling complex problems and am always eager to learn new technologies and frameworks to
                  enhance my development skills.
                </span>
              </p>
            </div>
          </div>

          {/* Right side - Contact Card */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan", color: "text-purple-400" },
                  { icon: Phone, label: "Phone", value: "03155128728", color: "text-blue-400" },
                  { icon: Mail, label: "Email", value: "junaidkanwar04@gmail.com", color: "text-cyan-400" },
                  {
                    icon: GraduationCap,
                    label: "University",
                    value: "Air University, Islamabad",
                    color: "text-emerald-400",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300 group hover:text-white transition-colors">
                    <div
                      className={`p-2 rounded-lg bg-slate-700/50 mr-4 group-hover:bg-slate-600/50 transition-colors`}
                    >
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
