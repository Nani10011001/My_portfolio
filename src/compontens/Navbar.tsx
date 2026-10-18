
import type { Variants } from 'framer-motion';
import { Ellipsis, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

interface animationProperties {
  conatiner: Variants;
  childrens: Variants;
}

const menuItems = ['Home','About me','Projects', 'Contact'];

const Navbar = ({ conatiner, childrens }: animationProperties) => {
  const [isActive, setIsActive] = useState(false);
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
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      variants={conatiner}
      className="w-full px-4 sm:px-0"
    >
      <motion.nav
        variants={childrens}
        className="relative flex h-14 w-full items-center justify-between px-4 sm:px-5"
      >
        <span className="hidden tracking-[0.18rem] uppercase text-black/80 md:block md:text-xs">
          open for opportunities
          <br />
          Ai/Backend/full-stack
        </span>

        <span  className="mr-8 text-sm uppercase font-extralight text-black md:mr-48">
          Nani
        </span>

        <div className="relative">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() =>{ 
              setIsActive((prev) => !prev)
              


            }
          
          }
            className="flex h-10 w-10 items-center justify-center  cursor-pointer  text-black  transition hover:scale-105 "
          >
            {isActive ? <X size={18} /> : <Ellipsis size={18} />}
          </button>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
className="absolute right-0 top-full z-50 mt-2
w-40 md:w-52 max-w-[calc(100vw-2rem)] h-auto
overflow-hidden rounded-2xl border border-black/10
bg-[#F7F6F2] p-3 shadow-lg backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1 md:gap-2">
                  {menuItems.map((item) => (
                    <button
                    onClick={()=>{
                      scrollSection(item)
                      setIsActive(false)
                    }}
                    
                      key={item}
                      type="button"
                      className="rounded-xl  px-3 py-2 text-left text-xs font-light uppercase tracking-[0.2rem] text-black/80 transition cursor-pointer hover:bg-black hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
