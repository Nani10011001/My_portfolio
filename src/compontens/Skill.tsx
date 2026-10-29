import {
  SiReact,
 
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiLangchain,
 
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
  { name: "LangChain", Icon: SiLangchain },
]

const Skill = () => {
  return (
    <section className="min-h-screen bg-primary px-5 py-12 sm:px-8 sm:py-16 md:px-10">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-wide text-white sm:mb-12 sm:text-sm">
        My tech stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            title={name}
            data-cursor-light
            className="group flex aspect-[1.25] min-h-28 cursor-pointer items-center justify-center bg-transparent transition-colors duration-300 hover:bg-black sm:min-h-36 md:min-h-40"
          >
            <Icon
              aria-label={name}
              className="h-10 w-10 text-black transition-colors duration-300 group-hover:text-white sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
