
import { motion, stagger, type Variants } from "framer-motion"
import {SkillDataset} from "../assets/SkillDataset" 
interface SkillDataSetInterface {
  id:number;
  category:string;
  title:string;
  skills:string[];

}
const Skill = () => {
/*   const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "end start"]
  })
    const scale = useTransform(scrollYProgress,[0,1],[1,0.8])8*/
  const skillsData: SkillDataSetInterface[] = SkillDataset as SkillDataSetInterface[]
 const container: Variants = {
    offscreen: {
  
      opacity:0
    },
    onscreen:{
  
      opacity:1,
      transition:{
        delayChildren:stagger(0.3,{startDelay:0.2})
      }
    }
  }
  const  child: Variants = {
    offscreen:{
      y:20,
      opacity:0
    },
    onscreen: {
      y:0,
      opacity:1,
      transition:{
        duration:0.8,
        delay:0.5,
        type:"spring"
      }
    }
  }
  return (
  <motion.section 
  
  className="bg-black px-4 py-14   sm:px-6 md:px-10 md:py-20">
    <motion.div
    variants={container}
    initial="offscreen"
    whileInView="onscreen"

    className="mx-auto max-w-6xl">
      <motion.p variants={child} className="text-xl font-extralight text-gray-400 uppercase  sm:text-2xl lg:text-3xl">
        02 / What I Work With
      </motion.p>

      <motion.h2 variants={child} className="my-5 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
        <span className="text-gray-400">Technical</span>{" "}
        <span className="text-[#F7F6F2]">Expertise.</span>
      </motion.h2>

      <motion.p variants={child} className="max-w-2xl text-sm leading-relaxed text-[#F7F6F2] sm:text-base lg:text-lg">
        Technologies I use to build intelligent applications and scalable
        backend systems.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:mt-14">
        {skillsData.map(({ id, category, title, skills }) => (
          <motion.div initial="offscreen" whileInView="onscreen" key={id} className="border-t border-black/20 py-6">
            <motion.p variants={child} className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {category}
            </motion.p>
            <motion.h3 variants={child} className="mt-1 text-lg font-bold text-[#F7F6F2] sm:text-xl">
              {title}
            </motion.h3>

            <motion.ul variants={child} className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <li key={`${skill}-${index}`} className="text-sm text-[#F7F6F2] sm:text-base">
                  {skill}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.section>
)
}

export default Skill
