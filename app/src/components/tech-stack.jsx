import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/bagde"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Vite"],
    color: "bg-blue-500/10 text-blue-700 border-blue-200",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
    color: "bg-green-500/10 text-green-700 border-green-200",
  },
  {
    category: "Base de Datos",
    skills: ["PostgreSQL", "SQL", "MongoDB", "Redis"],
    color: "bg-purple-500/10 text-purple-700 border-purple-200",
  },
  {
    category: "DevOps & Herramientas",
    skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Figma", "Postman", "Jira"],
    color: "bg-orange-500/10 text-orange-700 border-orange-200",
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="h-2 w-2 rounded-full bg-primary mr-3"></span>
            {tech.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {tech.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className={`px-3 py-1 text-sm font-medium transition-colors hover:shadow-sm ${tech.color}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
