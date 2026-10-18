import type {  MotionValue, Variants } from "framer-motion"
import {motion, useScroll, useTransform} from "framer-motion"
import NaniImg from "../assets/Nani-p1.jpeg"
import { useRef } from "react"

interface subHeroScrollYProgressProps {
    scrollYProgress: MotionValue<number>
}
const imageVarient:Variants = {
  offscreen:{
    x:70,
    opacity:0
  },
  onscreen: {
    x:0,
    opacity:1,
    transition:{
      duration:1.4,
      type:"tween",
      delay:0.5
    }
  }
}
const container: Variants = {
      offscreen: {
        opacity:0

      },
      onscreen: {
        opacity:1,
        transition:{
          staggerChildren:0.4
        }
      }
    }
    const child: Variants = {
      offscreen: {
        y:-30,
        opacity:0,
       
      },
      onscreen: {
      y: 0,
      opacity:1,
     
      transition: {
      delay:0.4,
        bounce:0.3,
        type:"spring",
        duration:1
      }
      }
    }
const introduction: string[] = "I'm Nani Kumar — a GenAI-focused software engineer building intelligent applications across AI, backend systems, and modern web experiences.".split(" ")
const SubHero = ({scrollYProgress}:subHeroScrollYProgressProps) => {
  const scale = useTransform(scrollYProgress,[0,1],[0.8,1])
  const rotate = useTransform(scrollYProgress,[0,1],[-6, 0])
  const ref = useRef(null);

const { scrollYProgress:scrollYProgressImage } = useScroll({
  target: ref,
  offset: ["start 0.8", "end start"],
});

const scaleImage = useTransform(
  scrollYProgressImage,
  [0, 0.4, 0.7, 1],
  [0.8, 1, 1.05, 0.9]
);

const yImage = useTransform(
  scrollYProgressImage,
  [0, 1],
  [100, -100]
);
  return (
    <motion.section
   
      style={{ scale: scale, rotate: rotate }}
      className="bg-black w-full px-4 py-14 sm:px-6 md:px-10 md:py-20 z-10 min-h-screen"
    >
      <motion.div
     initial="offscreen"
    whileInView="onscreen"
    variants={container}
    viewport={{
      margin:"-40px"
    }}
      className="mx-auto max-w-6xl">
        <motion.div variants={child} className="text-3xl sm:text-4xl font-bold text-gray-400">
         01 / About me
        </motion.div>

        <div  className="mt-8 md:mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div
           initial="offscreen"
    whileInView="onscreen"
    variants={container}
          className="w-full md:max-w-2xl text-center md:text-left">
            <motion.p variants={child} className="text-3xl sm:text-4xl text-shadow-2xs text-shadow-black md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              WHO
              <br />
              I AM
            </motion.p>

            <div className="mt-5 w-full max-w-2xl">
              <p className="   text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                {
                  introduction.map((context:string,i:number)=>{
                    return <motion.span
                    key={i}
                    initial={{
                      opacity:0
                    }}
                    whileInView={{
                      opacity:1
                      
                    }}
                    viewport={{
                      margin:"-40px"
                    }}
                    transition={{delay:i * 0.07}}
                    >{context}{" "}</motion.span>
                  })
                }
              </p>
            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          className="flex justify-center md:justify-end w-full md:w-auto">
            <motion.img
              src={NaniImg}
              style={{y:yImage,scale:scaleImage}}
              alt="Nani"
              className="w-full max-w-[260px] sm:max-w-[300px] h-[320px] sm:h-[380px] md:h-[420px] object-cover rounded-2xl shadow-xl shadow-slate-900/40"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default SubHero
