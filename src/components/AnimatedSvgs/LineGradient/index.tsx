import { motion } from 'framer-motion'
import React from 'react'

interface LineGradientProps {
    svgDelay?: number
    pathDelay?: number
}
const LineGradient: React.FC<LineGradientProps> = ({ svgDelay, pathDelay }) => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 3,
            transition: { duration: 2, ease: 'easeInOut', delay: pathDelay }
        }
    }
    return (
        <motion.svg
            width="100%"
            height="100%"
            initial={{ opacity: 0, y: 10, scale: 0 }}
            animate={{
                opacity: [null, 1],
                y: [null, 0],
                scale: [null, 1],
                transition: {
                    delay: svgDelay
                }
            }}
            viewBox="0 0 324 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                animate="visible"
                initial="hidden"
                variants={pathVariants}
                d="M191.589 7.17545C118.307 7.17545 41.4668 14.1131 6.38388 18.2259C2.99201 18.6235 0 15.9817 0 12.5666C0 9.54554 2.34036 7.05539 5.35757 6.90294C39.9357 5.15576 111.001 1.77231 157.562 0.277794C205.757 -1.26919 285.905 4.01447 321.977 7.00619C323.139 7.10256 324 8.07177 324 9.23783C324 10.5259 322.92 11.5504 321.635 11.4645C304.579 10.3251 284.902 7.17545 191.589 7.17545Z"
                fill="url(#paint0_radial)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(224.5 -20.4998) rotate(157.095) scale(294.196 5016.82)"
                >
                    <stop stopColor="#EC4899" />
                    <stop offset="1" stopColor="#9452FF" stopOpacity="0.5" />
                </radialGradient>
            </defs>
        </motion.svg>
    )
}

export default LineGradient
