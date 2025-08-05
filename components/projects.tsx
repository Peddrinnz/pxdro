"use client"
import { useLanguage } from "@/hooks/use-language"
import { title } from "process"

const projects = [
  {
    id: 1,
    title: "TCC - Sistema KDÊ",
    description: "Sistema de inventário e localização de bens do IFMS com interface moderna e responsiva.",
    image: "/kde.png",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    demoUrl: "https://preview.viniccius.com.br",
    codeUrl: "https://github.com/Peddrinnz/tcc",
  },
  {
    id: 2,
    title: "Projeto em Java - Sistema de Biblioteca",
    description: "Sistema de gerenciamento de biblioteca com funcionalidades de empréstimo e devolução.",
    image: "/java_ui.png",
    tech: ["Java", "Docker", "Hibernate", "Swing UI"],
    demoUrl: "https://github.com/Peddrinnz/java_ui",
    codeUrl: "https://github.com/Peddrinnz/java_ui",
  },
  {
    id: 3,
    title: "Projeto em PHP - SIGINF",
    description: "Sistema interno da EMBRAPA para gerenciamento de informações de inventário.",
    image: "/siginf.png",
    tech: ["PHP", "MySQL", "CSS", "JavaScript", "HTML"],
    demoUrl: "https://github.com/Peddrinnz/siginf",
    codeUrl: "https://github.com/Peddrinnz/siginf",
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title">{t("projects.title")}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title || `Projeto ${project.id}`}
                className="project-image"
              />
              <div className="project-content">
                {project.title && <h3 className="project-title">{project.title}</h3>}
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-small btn-outline"
                    >
                      📚 Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-small btn-primary"
                    >
                      🔗 Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}