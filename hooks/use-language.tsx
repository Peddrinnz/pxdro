"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.stacks": "Stacks",
    "nav.projects": "Projetos",
    "hero.title": "Olá Sou o Pedro, desenvolvedor front-end.",
    "hero.description":
      "Mais do que facilitar tarefas, busco transformar realidades por meio da tecnologia. Meu propósito é criar soluções que unem inovação, acessibilidade e impacto — não apenas resolvendo problemas, mas reimaginando o que é possível. Programar, para mim, é uma forma de provocar mudança, aproximar pessoas e construir um futuro mais inteligente e inclusivo.",
    "hero.cta.primary": "Ver mais",
    "hero.cta.secondary": "Contato",
    "about.title": "Sobre Mim",
    "about.description1":
      "Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com foco em React e Next.js, desenvolvo aplicações modernas e responsivas.",
    "about.description2":
      "Sempre em busca de novos desafios e aprendizados, acredito que a tecnologia pode transformar vidas e criar um impacto positivo no mundo.",
    "about.skills.title": "Principais Habilidades",
    "stacks.title": "Tecnologias",
    "projects.title": "Projetos",
    "projects.project": "Projeto",
    "projects.description": "Descrição do projeto desenvolvido com as melhores práticas e tecnologias modernas.",
    "footer.transformTitle": "Transforme sua ideia em algo real",
    "footer.transformDescription": "Gosto de transformar ideias em interfaces modernas, funcionais e com personalidade própria. Se você tem um projeto em mente ou quer tirar do papel com qualidade e criatividade, entre em contato - podemos criar algo juntos.",
    "footer.resumeButton": "Meu currículo",
    "footer.copyright": "Todos os direitos reservados",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.stacks": "Stacks",
    "nav.projects": "Projects",
    "hero.title": "Hi, I'm Pedro, a front-end developer.",
    "hero.description":
      "More than just making tasks easier, I seek to transform realities through technology. My purpose is to create solutions that unite innovation, accessibility and impact — not just solving problems, but reimagining what's possible. Programming, for me, is a way to provoke change, bring people together and build a smarter and more inclusive future.",
    "hero.cta.primary": "Learn more",
    "hero.cta.secondary": "Contact",
    "about.title": "About Me",
    "about.description1":
      "I'm a front-end developer passionate about creating incredible digital experiences. With a focus on React and Next.js, I develop modern and responsive applications.",
    "about.description2":
      "Always looking for new challenges and learning opportunities, I believe that technology can transform lives and create a positive impact in the world.",
    "about.skills.title": "Main Skills",
    "stacks.title": "Technologies",
    "projects.title": "Projects",
    "projects.project": "Project",
    "projects.description": "Project description developed with best practices and modern technologies.",
    "footer.transformTitle": "Turn your idea into something real",
    "footer.transformDescription": "I enjoy transforming ideas into modern, functional interfaces with personality. If you have a project in mind or want to bring it to life with quality and creativity, get in touch - we can create something together.",
    "footer.resumeButton": "My resume",
    "footer.copyright": "All rights reserved",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}