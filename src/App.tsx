import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState, type PointerEvent } from "react"
import Home from "./pages/Home.tsx"

function App() {
  const [showCursor, setShowCursor] = useState(false)
  const [cursorOverLightSurface, setCursorOverLightSurface] = useState(false)
  const rawCursorX = useMotionValue(0)
  const rawCursorY = useMotionValue(0)
  const cursorX = useSpring(rawCursorX, { stiffness: 350, damping: 32 })
  const cursorY = useSpring(rawCursorY, { stiffness: 350, damping: 32 })

  const moveCursor = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return

    rawCursorX.set(event.clientX)
    rawCursorY.set(event.clientY)
    setCursorOverLightSurface(
      event.target instanceof Element &&
        event.target.closest("footer, [data-cursor-light]") !== null,
    )
    setShowCursor(true)
  }

  return (
    <main onPointerMove={moveCursor} onPointerLeave={() => setShowCursor(false)}>
      <Home/>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 95px, rgba(0, 0, 0, 0.15) 96px)",
        }}
      />
      {showCursor && (
        <motion.div
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-[110] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            cursorOverLightSurface ? "bg-white" : "bg-black"
          }`}
          style={{ x: cursorX, y: cursorY }}
        />
      )}
    </main>
  )
}

export default App
