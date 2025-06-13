"use client"
import { useLanguage } from "@/hooks/use-language"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title">{t("about.title")}</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">{t("about.description1")}</p>
            <p className="about-text">{t("about.description2")}</p>
          </div>
          <div className="skills-card">
            <h3 className="skills-title">{t("about.skills.title")}</h3>
            <ul className="skills-list">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Node.js</li>
              <li>• Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}