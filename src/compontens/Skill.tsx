import { useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import {
  SiReact,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiLangchain,
  SiLanggraph,
  
 
} from "react-icons/si"

const skills = [
  { name: "React", Icon: SiReact },

  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
  { name: "Figma", Icon: SiFigma },
  { name: "GitHub", Icon: SiGithub },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgresSql", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Langgraph", Icon: SiLanggraph },
]

const Skill = () => {
  const container = useRef<HTMLElement | null>(null)
  const [activeSkill, setActiveSkill] = useState(0)
  const isSmallScreen = useMediaQuery({ maxWidth: 639 })
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!isSmallScreen) return

    const index = Math.min(
      skills.length - 1,
      Math.floor(progress * skills.length),
    )
    setActiveSkill(index)
  })

  return (
    <section ref={container} className="min-h-screen bg-primary px-5 py-12 sm:px-8 sm:py-16 md:px-10">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-wide text-black sm:mb-12 sm:text-sm">
        My tech stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, Icon }, index) => {
          const isActive = isSmallScreen && activeSkill === index

          return (
            <div
              key={name}
              title={name}
              data-cursor-light
              className={`group flex aspect-[1.25] min-h-28 cursor-pointer items-center justify-center transition-colors duration-300 sm:min-h-36 md:min-h-40 ${
                isActive ? "bg-black" : "bg-transparent hover:bg-black"
              }`}
            >
              <Icon
                aria-label={name}
                className={`h-10 w-10 transition-colors duration-300 sm:h-12 sm:w-12 md:h-14 md:w-14 ${
                  isActive ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skill
