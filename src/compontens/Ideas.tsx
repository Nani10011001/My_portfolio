
import { useRef,useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

const ideaText = `AI-powered applications and scalable backend
systems designed to solve real problems,
simplify complexity, and turn ambitious ideas
into useful products.`.split(" ");



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
      className="relative h-[200vh] bg-primary"
    >
      <div className="sticky top-0 flex h-screen items-center
        justify-center px-5 sm:px-10">
        <p className="max-w-5xl text-center text-2xl
          leading-snug tracking-tight sm:text-3xl
          lg:text-4xl">
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
