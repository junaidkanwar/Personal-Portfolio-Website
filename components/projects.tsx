import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Code, ExternalLink, Rocket } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Code Arena",
      description: "A Tiered Progression Coding Competition Website with Static Code Analysis - Final Year Project",
      technologies: ["Web Development", "Static Code Analysis", "Competition Platform"],
      status: "In Development",
      type: "FYP",
      color: "from-purple-600 via-pink-600 to-red-500",
      glowColor: "shadow-purple-500/25",
    },
    {
      title: "Game Craft",
      description:
        "Gaming PC Components store built with MERN stack featuring product specs, filtering, and admin dashboard.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      type: "Web Application",
      color: "from-blue-600 via-cyan-500 to-teal-500",
      glowColor: "shadow-blue-500/25",
    },
    {
      title: "Home Cook",
      description: "Home-made food items delivery app with chef listings, order management, and payment simulation.",
      technologies: ["MERN Stack", "User Authentication", "Order Management"],
      type: "Web Application",
      color: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "shadow-emerald-500/25",
    },
    {
      title: "Flavour Fusion",
      description: "Restaurant Food Delivery App built with Flutter featuring restaurant listings and order tracking.",
      technologies: ["Flutter", "Cross-platform", "Mobile Development"],
      github: "https://github.com/junaidkanwar/Food_Delivery_App_Flutter",
      type: "Mobile App",
      color: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "shadow-orange-500/25",
    },
    {
      title: "2J Blogs",
      description: "Blogging Website built with Blazor .NET featuring user authentication and responsive UI.",
      technologies: ["Blazor", ".NET", "C#", "Web Development"],
      github: "https://github.com/junaidkanwar/BlogSite_Blazor",
      type: "Web Application",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      glowColor: "shadow-indigo-500/25",
    },
    {
      title: "Human vs AI Chess",
      description: "Chess game implementation with AI opponent developed in Jupyter notebook.",
      technologies: ["Python", "AI", "Game Development", "Jupyter"],
      github: "https://github.com/junaidkanwar/AI-Semester-Project",
      type: "AI Project",
      color: "from-gray-700 via-gray-800 to-black",
      glowColor: "shadow-gray-500/25",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-cyan-400 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my development projects spanning web applications, mobile apps, and AI implementations using
            various technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:shadow-2xl hover:${project.glowColor} transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:rotate-1 group`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                    {project.type}
                  </Badge>
                </div>
                {project.status && (
                  <Badge className={`w-fit bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                    {project.status}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.github && project.status !== "In Development" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/5 border-white/20 text-gray-400"
                      disabled
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Private
                    </Button>
                  )}
                  {project.status === "In Development" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/5 border-white/20 text-gray-300"
                      disabled
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
