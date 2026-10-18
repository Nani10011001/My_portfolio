import { motion, stagger, type Variants } from "framer-motion"
import {  ArrowUp } from "lucide-react"
import { useNavigate, type NavigateFunction } from 'react-router-dom';
const Footer = () => {
  const container: Variants = {
    offscreen: {
  
      opacity:0
    },
    onscreen:{
  
      opacity:1,
      transition:{
        delayChildren:stagger(0.3, { startDelay: 0.2 })
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
        duration:1,
        delay:0.5,
        type:"spring"
      }
    }
  }
    const navigate:NavigateFunction = useNavigate()
const scrollSection = (id:string)=>{

  const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
  console.log("el value: ",el)
if(el){
  el.scrollIntoView({behavior:"smooth",block:"start"})
  return
}
navigate("/")
setTimeout(()=>{
const el2 = document.getElementById(id)
el2?.scrollIntoView({behavior:"smooth",block:"start"})
console.log("el2 value: ",el2)
},200)
}
  return (
    <motion.footer
     
      
      className=" h-[100vh]  overflow-hidden  bg-black p-6 font-display md:p-10"
    >
      <div className="flex flex-col gap-40 md:gap-30">
        <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"

        className="flex justify-between items-center mt-6 ">
          <motion.p variants={child} className="text-[#F7F6F2]  text-xs sm:text-xs md:text-sm lg:text-sm">@{new Date().getFullYear()}</motion.p>
          <motion.p variants={child} className="flex gap-4 items-center text-[#F7F6F2] uppercase text-xs sm:text-xs md:text-sm lg:text-sm"> back to top <button onClick={()=>scrollSection("Home")} className="bg-gray-400 cursor-pointer hover:bg-gray-300 transition-all text-[#F7F6F2] px-3 py-3 rounded-full hover:text-black"><ArrowUp size={14}/></button></motion.p>
        </motion.div>
      <motion.div 
       variants={container}
        initial="offscreen"
        whileInView="onscreen"
      className="flex flex-col gap-10 items-start ">
<motion.div
 variants={container}
        initial="offscreen"
        whileInView="onscreen"
className="">      
   <motion.p variants={child}  className="text-xs md:text-sm text-[#F7F6F2]">
  
  OPEN TO EXCITING OPPORTUNITIES.</motion.p></motion.div>
        <motion.p  variants={child} className=" text-gray-400 text-3xl leading-[0.9]
           sm:text-5xl whitespace-nowrap scale-y-200  md:text-6xl lg:text-8xl uppercase">Let's work <span className="text-[#F7F6F2]">together</span></motion.p>
      </motion.div>
      <div className="grid w-full px grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 ">
       <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
       className="flex flex-wrap gap-3">
        {
          [{text:"Get in touch",
            textLink: "mailto:nani901422@gmail.com"
          },
              {
                text:"Github",
                textLink:"https://github.com/Nani10011001"
              },
             {
              text: "LinkedIn",
              textLink:"https://www.linkedin.com/in/r-nani-271b27264/"
             },
            {
              text:  "Resume",
              textLink:""
            },].map((context: {text:string,textLink:string},i:number)=>{
                return <motion.a
                href={context.textLink}
                variants={child}
                whileHover={{y:-5, transition:{
                  duration:0.3,
                  ease:"easeInOut"
                  
                }}} whileTap={{y:0}} key={i} className="text-black  shadow-2xl shadow-white bg-[#F7F6F2] min-w-[4.6rem] flex justify-center items-center min-h-[2rem] md:min-w-[5rem] md:min-h-[2rem]  rounded-2xl text-xs cursor-pointer hover:bg-neutral-300 hover-text-white border border-neutral-300 shadow-sm">{context.text}</motion.a>
              })
        }
      </motion.div>
      <motion.div 
       variants={container}
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.p
        variants={child}
        className="text-white text-xs md:text-sm lg:text-md"><span className="text-gray-400">Designed and developed by:</span> Nanikumar</motion.p>
      </motion.div>
      </div>
      
      </div>
    </motion.footer>
  )
}

export default Footer
