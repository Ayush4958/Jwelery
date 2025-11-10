"use client"
import type React from "react"
import { motion } from "motion/react"

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isMobile,
  isOpen,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
  isMobile?: boolean
  isOpen?: boolean
}) => {
  return (
    <div onMouseEnter={() => !isMobile && setActive(item)} className="relative w-full md:w-auto">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-amber-900 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100 font-medium transition-colors py-2 md:py-0"
        onClick={() => isMobile && setActive(active === item ? null : item)}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className={
            isMobile ? "static mt-2" : "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
          }
        >
          {active === item && (
            <div
              className={`${isMobile ? "bg-amber-100 dark:bg-amber-900" : "bg-amber-50 dark:bg-amber-950"} backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-200 dark:border-amber-700 shadow-xl`}
            >
              <motion.div layout className={isMobile ? "w-full p-3" : "w-max h-full p-4"}>
                {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
  isMobile,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
  isMobile?: boolean
}) => {
  return (
    <nav
      onMouseLeave={() => !isMobile && setActive(null)}
      className={`${isMobile ? "flex flex-col space-y-2 w-full" : "relative rounded-full border border-amber-200 dark:border-amber-700 dark:bg-amber-950 bg-amber-50 shadow-lg flex justify-center space-x-12 px-28 py-6"}`}
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <a href={href} className="flex space-x-2 group">
      <img
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl group-hover:shadow-amber-200/50 transition-shadow"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-amber-900 dark:text-amber-100">{title}</h4>
        <p className="text-amber-700 text-sm max-w-[10rem] dark:text-amber-200">{description}</p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-100 transition-colors block py-1"
    >
      {children}
    </a>
  )
}