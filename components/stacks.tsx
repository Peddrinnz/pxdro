"use client"
import { useLanguage } from "@/hooks/use-language"

const stacks = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "📚" },
]

export function Stacks() {
  const { t } = useLanguage()

  return (
    <section id="stacks" className="section">
      <div className="section-content">
        <h2 className="section-title">{t("stacks.title")}</h2>
        <div className="stacks-grid">
          {stacks.map((stack) => (
            <div key={stack.name} className="stack-card">
              <div className="stack-icon">{stack.icon}</div>
              <h3 className="stack-name">{stack.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}