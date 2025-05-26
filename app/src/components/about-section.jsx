import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description: "Experiencia en frontend y backend para crear aplicaciones.",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas",
      description: "Enfoque innovador para resolver problemas complejos con elegancia.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva y comunicación clara en proyectos multidisciplinarios.",
    },
    {
      icon: Zap,
      title: "Aprendizaje Continuo",
      description: "Siempre actualizado con las últimas tecnologías y mejores prácticas.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre mí</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hola! Soy Ezequiel Cagnolo, tengo 25 años y soy un desarrollador Full Stack apasionado por crear aplicaciones web modernas y eficientes,
                además me encuentro estudiando (4to año) Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional de Córdoba.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando la mejor
                experiencia de usuario y las mejores prácticas de desarrollo.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
