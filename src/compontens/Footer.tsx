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
if(el){
  el.scrollIntoView({behavior:"smooth",block:"start"})
  return
}
navigate("/")
setTimeout(()=>{
const el2 = document.getElementById(id)
el2?.scrollIntoView({behavior:"smooth",block:"start"})
},200)
}
  return (
    <motion.footer
      className="flex h-screen min-h-[560px] flex-col justify-between overflow-hidden bg-black text-white px-6 py-8 font-bold text-black sm:px-10 sm:py-10 lg:px-16 lg:py-12"
    >
        <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="flex items-center justify-between">
          <motion.p variants={child} className="text-xs sm:text-sm">© {new Date().getFullYear()}</motion.p>
          <motion.div variants={child} className="flex items-center gap-4 text-xs uppercase sm:text-sm">
            <span>Back to top</span>
            <button aria-label="Back to top" onClick={()=>scrollSection("Home")} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-neutral-600">
              <ArrowUp size={16}/>
            </button>
          </motion.div>
        </motion.div>

      <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-4 py-8"
      >
        <motion.p variants={child} className="text-xs font-medium uppercase sm:text-sm">
          OPEN TO EXCITING OPPORTUNITIES.
        </motion.p>
        <motion.p variants={child} className="whitespace-nowrap text-[clamp(2.5rem,13vw,11rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-neutral-200">
          Let's work
        </motion.p>
      </motion.div>

      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
       <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
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
                  
                }}} whileTap={{y:0}} key={i} className="flex min-h-10 min-w-24 items-center justify-center rounded-full border bg-[#F7F6F2] border-[#F7F6F2] px-5 text-xs uppercase text-black transition-colors hover:bg-neutral-100">{context.text}</motion.a>
              })
        }
      </motion.div>
      <motion.div 
       variants={container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <motion.p
        variants={child}
        className="text-xs font-medium text-white sm:text-right sm:text-sm"><span>Designed and developed by:</span> <span className="text-[#F7F6F2]">Nanikumar</span></motion.p>
      </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
