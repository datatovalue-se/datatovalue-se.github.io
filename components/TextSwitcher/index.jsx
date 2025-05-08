'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TextSwitcher({ texts }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 7000) // change text every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index} // key needs to be different for Framer Motion to recognize updates
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
