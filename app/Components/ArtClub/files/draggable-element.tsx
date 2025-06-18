"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface DraggableElementProps {
  children: React.ReactNode
}

export default function DraggableElement({ children }: DraggableElementProps) {
  const [isDraggable, setIsDraggable] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  // Only enable dragging on larger screens
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDraggable(window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return (
    <div ref={constraintsRef} className="relative">
      {isDraggable ? (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05, zIndex: 10 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}
