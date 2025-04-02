'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Reveal = ({ children, width = '100%', height = '100%' }) => {
  const ref = useRef(null, { triggerOnce: true })
  const isInView = useInView(ref)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
    // else {
    //   mainControls.start('hidden')
    // }
  }, [isInView, mainControls])

  return (
    <div
      ref={ref}
      // style={{ position: 'relative', width, height, overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        initial='hidden'
        // whileInView="visible" // om den ska animeras om varje gång man scrollar förbi
        animate={mainControls}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
