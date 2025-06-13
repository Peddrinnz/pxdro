"use client"
import { useLanguage } from "@/hooks/use-language"

const projects = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    tech: ["TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Firebase", "Styled Components"],
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
                alt={`${t("projects.project")} ${project.id}`}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">
                  {t("projects.project")} {project.id}
                </h3>
                <p className="project-description">{t("projects.description")}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <button className="btn-small btn-outline">📚 Code</button>
                  <button className="btn-small btn-primary">🔗 Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
