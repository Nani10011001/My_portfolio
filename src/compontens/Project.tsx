import frontendProject from "../assets/project-frontend-image.jpg"
import resumeAgentImage from "../assets/resumeAgentFrontImage.jpg"

const projects = [
  {
    title: "L'Agence website",
    image: frontendProject,
    alt: "L'Agence beauty and wellness website preview",
    technologies: ["Next.js", "Tailwind", "Motion", "WebGL"],
  },
  {
    title: "Resume Analysis",
    image: resumeAgentImage,
    alt: "ResumeAgent application preview",
    technologies: ["React", "Python", "FastAPI", "AI agents"],
  },
]

const LetWork = () => {
  return (
    <section className="min-h-screen w-full bg-primary px-4 py-12 text-black sm:px-6 sm:py-16 md:px-10 lg:px-14">
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
      <div className="mt-10 gird grid-cols-1 md:grid-cols-2">
       
          {
            
          }
          

          </div>
       
    </section>
  )
}

export default LetWork
