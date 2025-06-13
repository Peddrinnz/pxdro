"use client"
import { useLanguage } from "@/hooks/use-language"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t("hero.title")}</h1>
        <p className="hero-description">{t("hero.description")}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">{t("hero.cta.primary")}</button>
          <button className="btn btn-secondary">{t("hero.cta.secondary")}</button>
        </div>
      </div>
    </section>
  )
}