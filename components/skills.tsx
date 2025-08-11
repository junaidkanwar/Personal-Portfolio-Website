import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Users, Zap } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "C#", "JavaScript", "Python", "Java"],
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap 5", "Blazor"],
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express.js", "REST APIs", "EJS"],
      color: "from-cyan-500 to-cyan-600",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Cross-platform Development"],
      color: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "SQL Server", "SQL"],
      color: "from-rose-500 to-rose-600",
      iconBg: "bg-rose-500/20",
      iconColor: "text-rose-400",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Work", "Critical Thinking", "Self-Learning", "Time Management"],
      color: "from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-500/20",
      iconColor: "text-indigo-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various programming languages,
            frameworks, and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:border-purple-500/30 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg text-white group-hover:text-purple-300 transition-colors">
                  <div className={`p-3 rounded-xl ${category.iconBg} mr-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
