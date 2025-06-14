"use client"
import { useLanguage } from "@/hooks/use-language"
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react"
import { FaLanguage } from 'react-icons/fa'

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">PE</div>
          <span className="logo-text">Pedro Ernesto</span>
        </div>

        <nav className="nav">
          <a href="#inicio" onClick={(e) => {
            e.preventDefault()
            scrollToSection('inicio')
          }}>{t("nav.home")}</a>
          
          <a href="#sobre" onClick={(e) => {
            e.preventDefault()
            scrollToSection('sobre')
          }}>{t("nav.about")}</a>
          
          <a href="#stacks" onClick={(e) => {
            e.preventDefault()
            scrollToSection('stacks')
          }}>{t("nav.stacks")}</a>
          
          <a href="#projetos" onClick={(e) => {
            e.preventDefault()
            scrollToSection('projetos')
          }}>{t("nav.projects")}</a>
        </nav>

        <div className="header-controls">
          <button onClick={toggleTheme} className="btn">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} className="btn">
            <FaLanguage size={20} /> {language.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  )
}