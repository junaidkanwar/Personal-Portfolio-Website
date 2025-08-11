import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Certificates() {
  const certificates = [
    {
      title: "AI Skills Challenge",
      issuer: "Microsoft",
      date: "August 2023",
      description:
        "Completed a hands-on program focused on core AI concepts including machine learning, computer vision, and natural language processing using Microsoft technologies.",
      skills: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Microsoft AI"],
      color: "from-blue-600 via-cyan-500 to-teal-500",
      glowColor: "shadow-blue-500/25",
    },
    {
      title: "Computer Architecture",
      issuer: "Saylor Academy",
      date: "November 2023",
      description:
        "Completed an in-depth course covering processor design, memory systems, instruction sets, and foundational computer hardware principles.",
      skills: ["Processor Design", "Memory Systems", "Instruction Sets", "Hardware Principles"],
      color: "from-emerald-600 via-green-500 to-lime-500",
      glowColor: "shadow-emerald-500/25",
    },
  ]

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Certificates &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and skill
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:shadow-2xl hover:${cert.glowColor} transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1 group`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`}></div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mr-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Award className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-gray-300 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Award className="h-5 w-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">More certifications in progress...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
