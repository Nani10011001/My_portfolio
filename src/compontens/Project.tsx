import { ExternalLink } from "lucide-react"
import frontendProject from "../assets/project-frontend-image.jpg"
import resumeAgentImage from "../assets/resumeAgentFrontImage.jpg"

const projects = [
  {
    title: "L'Agence website",
    image: frontendProject,
    alt: "L'Agence beauty and wellness website preview",
    technologies: ["React", "Tailwind", "Motion",],
    button:"Github",
    icon:ExternalLink,
    liveLink:"https://lagence-clone-web-five.vercel.app/",
    GithubLink:"https://github.com/Nani10011001/lagence_clone_web"
  },
  {
    title: "Resume Analysis",
    image: resumeAgentImage,
    alt: "ResumeAgent application preview",
    technologies: ["MERN Stack", ,"Python", "FastAPI", "Langgraph","Redis"],
    button:"Github",
    icon:ExternalLink,
    liveLink:"",
    GithubLink:"https://github.com/Nani10011001/Resume_analysis_Agent"

  },
]

const LetWork = () => {
  return (
    <section className="min-h-screen w-full  bg-primary px-4 py-12 text-black sm:px-6 sm:py-16 md:px-10 lg:px-14">
      <div className="flex items-start justify-between gap-2">
        <h2
          style={{ fontSize: "clamp(3.5rem, 16vw, 15rem)" }}
          className="whitespace-nowrap font-medium leading-[0.8] tracking-[-0.075em]"
        >
          Projects
        </h2>
        <p
          style={{ fontSize: "clamp(2.75rem, 13vw, 12rem)" }}
          className="shrink-0 whitespace-nowrap font-medium leading-[0.8] tracking-[-0.07em]"
        >
          {String(new Date().getFullYear()).slice(-2)}
        </p>
      </div>
      <div className="mt-30 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
       
          {
            projects.map((l,i)=>{
              const Icon = l.icon
              return <div key={i}  data-cursor-light className="relative z-100 flex h-full w-full flex-col gap-3 bg-[#1E1E1E] p-4">
<div className="h-[85%] w-full">
  <img src={l.image} alt={l.alt} className="h-full object-cover" />
</div>
<div className="flex justify-between">
  <div>
    <p className="text-white text-xl md:text-3xl ">{l.title}</p>
    <div className="text-white flex gap-4 my-3 items-center"><a className="text-xs border-2 border-white px-4 py-1 rounded-2xl" href={l.GithubLink}>{l.button}</a>
    <a aria-label={`${l.button} link`} href={l.liveLink}><Icon size={16} /></a>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="flex flex-col leading-5 text-gray-400">{l.technologies.map((l,i)=>{
      return <span className="text-xs md:text-sm" key={i}>{l}</span>
    })}</div>
    </div>
</div>
              </div>
            })
          }
          

          </div>
       
    </section>
  )
}

export default LetWork
