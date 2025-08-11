import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export function Education() {
  const coreSubjects = [
    "Visual Programming",
    "Mobile Computing",
    "Database Systems",
    "Full Stack Web Development",
    "Artificial Intelligence",
    "Computer Architecture",
    "Data Structures & Algorithms",
    "Software Engineering",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-emerald-400 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My academic journey and the foundational knowledge that drives my passion for technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl mr-4 backdrop-blur-sm">
                    <GraduationCap className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">Bachelor of Science in Computer Science</CardTitle>
                    <p className="text-lg text-gray-300">Air University, Islamabad</p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg">Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>September 2022 - June 2026</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Pursuing a comprehensive Computer Science degree with focus on software development, artificial
                    intelligence, and modern web technologies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Core Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coreSubjects.map((subject, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white transition-all"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
