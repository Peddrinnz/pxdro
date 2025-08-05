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
      "Mais do que facilitar tarefas, busco transformar realidades por meio da tecnologia. Meu propósito é criar soluções que unem inovação, acessibilidade e impacto não apenas resolvendo problemas, mas reimaginando o que é possível. Programar, para mim, é uma forma de provocar mudança, aproximar pessoas e construir um futuro mais inteligente e inclusivo.",
    "hero.cta.primary": "Ver mais",
    "hero.cta.secondary": "Contato",
    "about.title": "Sobre Mim",
    "about.description1":
      "Nasci em 2004, no estado de Mato Grosso do Sul, Brasil. Atualmente estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de Mato Grosso do Sul (IFMS).",
    "about.description2":
    "Iniciei minha jornada na área de tecnologia explorando diferentes nichos da programação, até me encontrar no desenvolvimento web. Além disso, tenho grande interesse por UI/UX design e criação de interfaces visuais atrativas.",
    "about.skills.title": "Soft Skills",
    "about.skills.skill1": "• Organização",
    "about.skills.skill2": "• Trabalho em equipe",
    "about.skills.skill3": "• Resolução de problemas",
    "about.skills.skill4": "• Criatividade",
    "about.skills.skill5": "• Adaptabilidade",
    "stacks.title": "Tecnologias",
    "projects.title": "Projetos",
    "projects.project": "Projeto",
    "projects.description": "Descrição do projeto desenvolvido com as melhores práticas e tecnologias modernas.",
    "footer.transformTitle": "Transforme sua ideia em algo real",
    "footer.transformDescription": "Gosto de transformar ideias em interfaces modernas, funcionais e com personalidade própria. Se você tem um projeto em mente ou quer tirar do papel com qualidade e criatividade, entre em contato.",
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
      "More than just making tasks easier, I seek to transform realities through technology. My purpose is to create solutions that unite innovation, accessibility and impact not just solving problems, but reimagining what's possible. Programming, for me, is a way to provoke change, bring people together and build a smarter and more inclusive future.",
    "hero.cta.primary": "Learn more",
    "hero.cta.secondary": "Contact",
    "about.title": "About Me",
    "about.description1":
    "I was born in 2004 in Mato Grosso do Sul, Brazil. I'm currently pursuing a degree in Systems Analysis and Development at the Federal Institute of Mato Grosso do Sul (IFMS).",
    "about.description2":
    "My technology journey started with exploring different programming domains, ultimately leading me to specialize in web development. I'm particularly passionate about UI/UX design and crafting visually engaging interfaces.",
    "about.skills.title": "Soft Skills",
    "about.skills.skill1": "• Organization",
    "about.skills.skill2": "• Teamwork",
    "about.skills.skill3": "• Problem Solving",
    "about.skills.skill4": "• Creativity",
    "about.skills.skill5": "• Adaptability",
    "stacks.title": "Technologies",
    "projects.title": "Projects",
    "projects.project": "Project",
    "projects.description": "Project description developed with best practices and modern technologies.",
    "footer.transformTitle": "Turn your idea into something real",
    "footer.transformDescription": "I enjoy transforming ideas into modern, functional interfaces with personality. If you have a project in mind or want to bring it to life with quality and creativity, get in touch.",
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