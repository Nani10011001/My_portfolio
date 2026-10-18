import { motion,useTransform,stagger, type MotionValue, type Variants } from "framer-motion"
import Navbar from "./Navbar"
import { ArrowDown } from "lucide-react";

 interface HerosectionScreenYProgressProps {
scrollYProgress: MotionValue<number>
    }
    const container: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren:stagger(0.3, { startDelay: 0.2 })
    },
  },
};

const child: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {

      type: "spring",
      
      bounce: 0.3,
      duration: 1.5,
    },
  },
};
const Herosection = ({
    scrollYProgress
}:HerosectionScreenYProgressProps) => {
   const scale = useTransform(scrollYProgress, [0,1],[1,0.8])
   const rotate = useTransform(scrollYProgress, [0,1],[0,-6])
  return (
    <motion.section
      style={{ scale: scale, rotate: rotate }}
      className="relative min-h-screen  flex flex-col bg-[#F7F6F2] items-center gap-45 sm:gap-34 md:gap-20 pb-10 px-4 sm:px-6"
    >
      <div className="relative z-10   w-full">
        <Navbar conatiner={container} childrens={child} />
      </div>
      {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ left: ["8%", "38%", "76%", "25%"], top: ["30%", "62%", "24%", "48%"] }}
          transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
          className="absolute h-40 w-40 rounded-full bg-black/50 blur-[55px] sm:h-56 sm:w-56"
        />
        <motion.div
          animate={{ left: ["72%", "46%", "14%", "61%"], top: ["22%", "54%", "68%", "34%"] }}
          transition={{ duration: 29, ease: "easeInOut", repeat: Infinity }}
          className="absolute h-36 w-36 rounded-full bg-black/50 blur-[55px] sm:h-52 sm:w-52"
        />
        <motion.div
          animate={{ left: ["34%", "68%", "52%", "12%"], top: ["72%", "38%", "18%", "56%"] }}
          transition={{ duration: 21, ease: "easeInOut", repeat: Infinity }}
          className="absolute h-32 w-32 rounded-full bg-black/50 blur-[50px] sm:h-44 sm:w-44"
        />
      </div> */}
      <div
     
      className="relative z-10   text-black text-center md:text-left">
        <motion.div
         variants={container}
           initial="offscreen"
            whileInView="onscreen"
        className="relative">
         
  
          <motion.p 
          variants={child}
             className="text-5xl text-center font-[Inter] flex flex-col  leading-[0.85] tracking-[-0.065em] font-extralight  uppercase sm:text-6xl md:text-8xl lg:text-9xl ">
          <span   className="font-[Inter] font-light">  AI ENGINEER</span>
          <span   className="lg:text-8xl font-extralight ">  &FUll-stack</span>
           <span   className="lg:text-8xl font-extralight"> BUILDER</span>
          </motion.p>
          <motion.p 
          variants={child}
           
          className="  text-[10px] text-center  sm:text-[12px] lg:text-[10px] tracking-[0.18rem] sm:tracking-[0.25rem] my-3 uppercase">
            building intelligent system & digital products
          </motion.p>
        </motion.div>
      </div>

      <div   className="relative px-2 z-10 w-full flex justify-center  md:items-center md:justify-between">
        <motion.div className="relative"
        variants={container}
          initial="offscreen"
            whileInView="onscreen">
          
        
        
          <motion.p 
          variants={child}
        
          className="text-xs hidden md:block md:text-sm lg:text-sm font-extralight">@{new Date().getFullYear()}</motion.p>
        </motion.div>
         <motion.div 
         variants={container}
          initial="offscreen"
            whileInView="onscreen"
         className="relative md:ml-30 flex flex-col items-center gap-1 text-center">
          <motion.p
          variants={child}
          initial={{
            y:-11
          }}
         animate={{ y: [ -5, 5, -5 ] }}
transition={{
  duration: 1.5,
  repeat: Infinity,
  ease: "easeInOut",
}}
          ><ArrowDown size={20} strokeWidth={2} /></motion.p>
          <motion.p variants={child} className="text-[10px] uppercase tracking-[0.18em]">scroll to explore</motion.p>
         </motion.div>
        <motion.div
            variants={container}
          initial="offscreen"
            whileInView="onscreen">
          <motion.p 
       variants={child}
          className=" hidden md:block font-extralight text-xs  sm:text-sm md:text-sm leading-relaxed">
            CHITTOOR, INDIA <br />
            /BUILDING SINCE 2024
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Herosection
