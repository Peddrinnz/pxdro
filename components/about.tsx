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
              <li className="skill1">{t("about.skills.skill1")}</li>
              <li className="skill2">{t("about.skills.skill2")}</li>
              <li className="skill3">{t("about.skills.skill3")}</li>
              <li className="skill4">{t("about.skills.skill4")}</li>
              <li className="skill5">{t("about.skills.skill5")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}