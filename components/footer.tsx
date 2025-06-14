"use client"
import { useLanguage } from "@/hooks/use-language"
import { FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">{t("footer.transformTitle")}</h3>
        
        <p className="footer-description">
          {t("footer.transformDescription")}
        </p>

        <div className="social-links">
          <a href="mailto:pedroesnarriaga@gmail.com" aria-label="Email">
            <Mail />
          </a>
          <a href="https://github.com/Peddrinnz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href="https://linkedin.com/in/pedroernesto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="https://instagram.com/Peddrinnz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram />
          </a>
        </div>

        <a href="/curriculo.pdf" download className="resume-button">
          <FileText className="icon" />
          <span>{t("footer.resumeButton")}</span>
        </a>

        <div className="copyright">
          <span>© {new Date().getFullYear()} Pedro Ernesto</span>
          <span className="separator">•</span>
          <span>{t("footer.copyright")}</span>
        </div>
      </div>
    </footer>
  )
}