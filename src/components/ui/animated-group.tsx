'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: {
    container?: {
      hidden?: Record<string, any>
      visible?: Record<string, any>
    }
    item?: {
      hidden?: Record<string, any>
      visible?: Record<string, any>
    }
  }
}

export function AnimatedGroup({
  children,
  className,
  variants,
  ...props
}: AnimatedGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants?.container}
      className={cn('', className)}
      {...props}>
      {children}
    </motion.div>
  )
} 