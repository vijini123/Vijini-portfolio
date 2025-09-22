
import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 h-1 w-full origin-left z-[60]"
    >
      <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(90deg, #e0edc3ff, #8c819eff)' }} />
    </motion.div>
  )
}
