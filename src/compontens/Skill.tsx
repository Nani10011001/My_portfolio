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
  { name: "React", Icon: SiReact, url: "https://react.dev/" },
  { name: "TypeScript", Icon: SiTypescript, url: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, url: "https://tailwindcss.com/" },
  { name: "Vercel", Icon: SiVercel, url: "https://vercel.com/" },
  { name: "Figma", Icon: SiFigma, url: "https://www.figma.com/" },
  { name: "GitHub", Icon: SiGithub, url: "https://github.com/" },
  { name: "Node.js", Icon: SiNodedotjs, url: "https://nodejs.org/" },
  { name: "Python", Icon: SiPython, url: "https://www.python.org/" },
  { name: "FastAPI", Icon: SiFastapi, url: "https://fastapi.tiangolo.com/" },
  { name: "MongoDB", Icon: SiMongodb, url: "https://www.mongodb.com/" },
  { name: "PostgresSql", Icon: SiPostgresql, url: "https://www.postgresql.org/" },
  { name: "Redis", Icon: SiRedis, url: "https://redis.io/" },
  { name: "LangChain", Icon: SiLangchain, url: "https://www.langchain.com/" },
  { name: "Langgraph", Icon: SiLanggraph, url: "https://www.langchain.com/langgraph" },
]

const Skill = () => {
  const container = useRef<HTMLElement | null>(null)
  const [activeSkill, setActiveSkill] = useState(0)
  const isSmallScreen = useMediaQuery({ maxWidth: 639 })
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
// use scroll to track the postion and change the icons thing based on it index

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!isSmallScreen) return

    const index = Math.min(
      skills.length - 1,
      Math.floor(progress * skills.length),
    )
    setActiveSkill(index)
  })

  return (
    <section ref={container} className="min-h-screen bg-primary px-4 py-12 sm:px-8 sm:py-16 md:px-10">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-wide text-black sm:mb-12 sm:text-sm">
        My tech stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, Icon, url }, index) => {
          const isActive = isSmallScreen && activeSkill === index

          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              data-cursor-light
              className={`group flex aspect-[1.25] min-h-28 cursor-pointer items-center justify-center transition-colors duration-700 ease-in-out sm:min-h-36 md:min-h-40 ${
                isActive ? "bg-black" : "bg-transparent hover:bg-black"
              }`}
            >
              <Icon
                aria-hidden="true"
                className={`h-10 w-10 transition-colors duration-700 ease-in-out sm:h-12 sm:w-12 sm:duration-300 md:h-14 md:w-14 ${
                  isActive ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Skill
