
import { useRef,useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

const ideaText = `Most of my work happens behind the scenes — designing systems, solving problems, and refining ideas until they work in the real world. I bring AI engineering, backend development, and frontend design together to build thoughtful, functional products, 
from the underlying logic to the final user experience.`.split(" ");



const Ideas = () => {
  const container = useRef<HTMLElement>(null);
const [revealed, setRevealed] = useState<boolean>(false);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) {
      setRevealed(true);
    }
  });
const Word = ({
  word,
  index,
  total,
  progress,
  revealed
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
    revealed: boolean;
}) => {
  const start = index / total;
  const end = start + 1 / total;

  const color = useTransform(
    progress,
    [start, end],
    ["#c9c9c9", "#171717"]
  );

  return (
    <motion.span style={{ color: revealed ? "#171717" : color }}>
      {word}{" "}
    </motion.span>
  );
};

  return (
    <section
      ref={container}
      className="relative ideas h-[200vh] bg-primary"
    >
      <div className="sticky top-0 flex h-screen items-center
        justify-center px-4 sm:px-10">
        <p className="max-w-5xl  text-center text-center text-md
          leading-snug tracking-tight 
          md:text-xl">
            <p className="text-3xl  md:text-4xl uppercase tracking-wide  my-3 font-bold">how i work ?</p>
          From ideas to intelligent products. I build{" "}
          {ideaText.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={ideaText.length}
              progress={scrollYProgress}
              revealed={revealed}
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default Ideas;
