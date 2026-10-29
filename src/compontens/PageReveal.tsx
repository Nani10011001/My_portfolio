import {motion} from "framer-motion"

const PageReveal = () => {
  const greeting = "welcome to my".split(" ")
  const portfolioLetter = "p o r t f o l i o".split(" ")

  return (
    <motion.section
    initial={{
      y:0,
     
    }}
    whileInView={{
      y:"-100%",

     transition:{
      delay:2,
      duration:2,
       ease:[0.76,0,0.24,1]
     }
    }}
    
    className="fixed inset-0 z-100 flex min-h-screen w-full items-center justify-center overflow-hidden bg-primary px-4 text-black">
      <div className="relative -translate-y-[7vh] aspect-[613/320] w-[min(88vw,613px)]">
        <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 613 320" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M343.43 0.946594L211.961 45.7305M211.961 45.7305L48.0813 101.554C47.343 101.806 46.7317 102.335 46.377 103.03L11.5661 171.181C11.4757 171.357 11.3979 171.562 11.3441 171.753C-11.2168 252.017 4.32688 163.5 46.2967 288.549C46.6688 289.657 47.674 290.531 48.8359 290.662L298.591 318.908C298.816 318.934 299.044 318.934 299.27 318.908L546.131 290.596C546.96 290.501 547.711 290.065 548.206 289.393L611.425 203.492C612.294 202.311 612.183 200.676 611.162 199.624L548.012 134.546C547.632 134.154 547.151 133.873 546.622 133.734L211.961 45.7305ZM211.961 45.7305L142.43 27.4466" stroke-width="2" stroke="black"/>
</svg>


        <p className="absolute left-[18%] top-[37%] z-10 -rotate-2 whitespace-nowrap text-[clamp(1rem,4vw,2rem)]  font-euro leading-3
        ">
         {
          greeting.map((c:string,i:number)=>{
            return <motion.span
            initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1,
              
            }}
            transition={{
              staggerChildren:0.2,
              delay:0.1*i,
              duration:0.5,
              type:"spring"
            }}
            key={i}>{c}{" "}</motion.span>
          })
         }
        </p>
        <h1 className="absolute left-[15%] top-[39%] z-10 whitespace-nowrap text-[clamp(2.5rem,11vw,6rem)] font-italy leading-none tracking-[-0.04em]">
        {
          portfolioLetter.map((l:string,i:number)=>{
            
            return <motion.span
            key={i}
             initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1,
              
            }}
            transition={{
              staggerChildren:0.2,
              delay:0.2*i,
              duration:1.25,
              type:"spring"
            }}
            >{l}</motion.span>
          })
        }
        </h1>
      </div>

      <p className="absolute bottom-[15%] right-[10%] md:bottom-[8%] md:right-[8%] text-right font-hand text-lg leading-tight sm:text-xl">
        Nani Kumar
        <br />
        And
        <br />
        Full stack ai engineer
      </p>
    </motion.section>
  )
}

export default PageReveal
