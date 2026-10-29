import { useScroll } from "framer-motion"
import { useRef } from "react"
import Lenis from "lenis"
import { useEffect } from "react"
import Herosection from "../compontens/Herosection"
import SubHero from "../compontens/SubHero"
import Skill from "../compontens/Skill"
import Ideas from "../compontens/Ideas"
import FooterAnimate from "../compontens/FooterAnimate"
import LetWork from "../compontens/Project"
import PageReveal from "../compontens/PageReveal"
const Home = () => {
     const container = useRef(null)
  const {scrollYProgress} = useScroll(
    {
        target:container
    }
  )
       useEffect(()=>{
  const lenraf = new Lenis()
  function raf(time:number){
    lenraf.raf(time)
    requestAnimationFrame(raf)

  }
  requestAnimationFrame(raf)
    },[])
  return (
    <section ref={container} className="relative h-[200vh] bg-primary">
     <section id="Home">
    <PageReveal/>
      <Herosection scrollYProgress={scrollYProgress}/>
      </section> 
     
   <section id="About me">
      <SubHero scrollYProgress={scrollYProgress}/>
   </section>
     <Ideas/>
    <Skill />
    <section id="Projects">
      <LetWork/>
    </section>
<section id="Contact">
      <FooterAnimate/>
</section>
  
    </section>
  )
}

export default Home
