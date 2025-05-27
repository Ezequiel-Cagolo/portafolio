import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/bagde";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "CIDS - Centro de Investigación y Desarrollo de Software",
      location: "Córdoba, Argentina (En remoto)",
      period: "Noviembre 2024 - Actualidad",
      description:
              `Participación en el desarrollo y automatización de un ChatBot de atención al cliente, utilizando una arquitectura basada en microservicios. El Frontend está implementado con React, mientras que el Backend está desarrollado con Node.js, Python y Go, utilizando MongoDb como base de datos, Redis para almacenar conversaciones temporales, y está alojado en los servicios en la nube de AWS. Integrando distintos servicios para asegurar escalabilidad y eficiencia en las respuestas del bot.`,
      technologies: ["React", "Node.js", "AWS(CloudWatch)", "Docker", "Redis", "Python" , "MongoDB", "Express.js", "Git", "CSS"],
    },
    {
      title: "Analista IT",
      company: "Ciampagna S.A.",
      location: "Córdoba, Argentina (Presencial)",
      period: "Junio 2023 - Octubre 2024",
      description:
        `Desarrollo de soluciones para aplicaciones basadas en sistemas de información geográfica (GIS).
        Automatización de tareas rutinarias mediante scripts para backups y envío automático de correos.
        Participación en el despliegue de aplicaciones en servidores linux y en proyectos de desarrollo de software,
        colaborando en la recopilación y documentación de requisitos funcionales y técnicos.`,
      technologies: ["Python", "JavaScript", "Linux", "Software GIS", "QGIS", "Git", "Make"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en el mundo IT
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
