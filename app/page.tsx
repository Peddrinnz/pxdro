import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Stacks } from "@/components/stacks"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Footer />
    </main>
  )
}