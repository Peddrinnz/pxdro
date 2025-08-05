"use client"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from 'react'
import { FaJava, FaPhp,  FaFigma, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiDocker, SiGit, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const stacks = [
  { name: "React", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} />, shortName: "Next" },
  { name: "TypeScript", icon: <SiTypescript size={24} />, shortName: "TS" },
  { name: "JavaScript", icon: <SiJavascript size={24} />, shortName: "JS" },
  { name: "Node", icon: <FaNodeJs size={24} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={24} />, shortName: "Tail" },
  { name: "Git", icon: <SiGit size={24} /> },
  { name: "Figma", icon: <FaFigma size={24} /> },
  { name: "Java", icon: <FaJava size={24} /> },
  { name: "PHP", icon: <FaPhp size={24} /> },
  { name: "Docker", icon: <SiDocker size={24} /> },
]

export function Stacks() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <section id="stacks" className="section relative">
      <div className="section-content">
        <h2 className="section-title">{t("stacks.title")}</h2>

        <div className="pb-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {stacks.map((stack) => (
              <SwiperSlide key={stack.name}>
                <div className="stack-card">
                  <div className="stack-icon">{stack.icon}</div>
                  <h3 className="stack-name">
                    {isMobile && stack.shortName ? stack.shortName : stack.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}