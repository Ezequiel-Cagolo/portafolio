"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import ContactForm from "../components/contact-form"
import ProjectCard from "../components/project-card"
import TechStack from "../components/tech-stack"
import AboutSection from "../components/about-section"
import ExperienceSection from "../components/experience-section"
import { ThemeToggle } from "../components/theme-toggle"

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <a className="flex items-center space-x-2" href="#home">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">Ezequiel Cagolo</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-primary">
                Sobre mí
              </button>
              <button onClick={() => scrollToSection("experience")} className="transition-colors hover:text-primary">
                Experiencia
              </button>
              <button onClick={() => scrollToSection("projects")} className="transition-colors hover:text-primary">
                Proyectos
              </button>
              <button onClick={() => scrollToSection("contact")} className="transition-colors hover:text-primary">
                Contacto
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download className="h-4 w-4 mr-2" />
              CV
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  👋 ¡Hola! Bienvenido a mi espacio digital
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Ezequiel Cagnolo
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
                  Desarrollador Full-Stack | Estudiante avanzado de Ingeniería en Sistemas de Información
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("projects")}>
                  Ver mis proyectos
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => scrollToSection("contact")}>
                  Contactar
                </Button>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/ezequiel-cagolo" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ezequiel-cagnolo-4a549b25b/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="mailto:ezequiel.cagolo@gmail.com">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Tech Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Tecnologías</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Herramientas y tecnologías que he utilizado para crear soluciones innovadoras
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Proyectos Destacados</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Una selección de mis trabajos más recientes y significativos (En desarrollo)
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Buscador de Películas"
                description="Aplicación web para buscar y explorar películas utilizando una API"
                image="/peliculas.png"
                demoLink="https://ezequiel-cagolo.github.io/Buscador-de-peliculas/"
                codeLink="https://github.com/Ezequiel-Cagolo/Buscador-de-peliculas"
                tags={["React", "Vite", "API"]}
              />
              <ProjectCard
                title="Python FastAPI CRUD"
                description="API RESTful para operaciones CRUD con FastAPI y MongoDB."
                image=""
                demoLink=""
                codeLink=""
                tags={["Python", "MongoDB", "FastAPI", "REST"]}
              />
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Ver todos los proyectos
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">¿Trabajamos juntos?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground">© 2025 Ezequiel Cagnolo. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:underline underline-offset-4">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:underline underline-offset-4">
              Proyectos
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:underline underline-offset-4">
              Contacto
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm hover:underline underline-offset-4">
              Experiencia
            </button>
          </nav>
        </div>
      </footer>
    </div>
  )
}
