'use client'

import clsx from "clsx"
import mobileBackgroundGradient from "@public/images/background-gradient-image.png"
import { motion } from "motion/react"
import Image from "@/components/Image"

const HeroHomeBackground = ({ className = ''}) => (
  <>
    <Image
      alt="Background gradient"
      className={clsx(className, 'sm:hidden')}
      hasPlaceholder={false}
      image={mobileBackgroundGradient}
      priority
      sizes='464px'
    />
    <svg className={clsx(className, 'max-sm:hidden')} fill="none" preserveAspectRatio="xMidYMid meet"  viewBox="0 0 2400 1789" xmlns="http://www.w3.org/2000/svg">
      <mask height="1222" id="b" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1222" x="1081" y="305">
        <circle cx="1692" cy="916" fill="url(#a)" r="611"/>
      </mask>
      <g filter="url(#c)" mask="url(#b)">
        <g clipPath="url(#d)">
          <foreignObject height="2016.12" transform="rotate(90 388 1304) scale(.611)" width="2016.12" x="-1008.06" y="-1008.06">
            <div style={{
              background: "conic-gradient(from 90deg, rgba(96,62,255,0) 0deg, #f4f6ff 86.4deg, #dad9ff 144deg, #ab7ff3 180deg, rgba(96,62,255,0.8) 252deg, rgba(96,62,255,0) 360deg)",
              height: "100%",
              opacity: 1,
              width: "100%",
            }} />
          </foreignObject>
        </g>
        <circle cx="1692" cy="916" r="611"/></g>
        <mask height="1222" id="f" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1222" x="97" y="305">
          <circle cx="611" cy="611" fill="url(#e)" r="611" transform="matrix(-1 0 0 1 1319 305)"/>
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <g clipPath="url(#h)">
            <foreignObject className='pin-gradient-left' height="2016.12" transform="matrix(0 .611 .611 0 708 916)" width="2016.12" x="-1008.06" y="-1008.06">
              <div
              style={{
                background: "conic-gradient(from 90deg, rgba(96,62,255,0) 0deg, #f4f6ff 86.4deg, #dad9ff 144deg, rgba(196,127,243,0.9) 180deg, rgba(96,62,255,0.9) 252deg, rgba(96,62,255,0) 360deg)",
                height: "100%",
                opacity: 1,
                width: "100%",}}
              />
            </foreignObject>
          </g>
          <circle cx="611" cy="611" r="611" transform="matrix(-1 0 0 1 1319 305)"/>
        </g>
        <g filter="url(#i)">
          <mask height="1222" id="k" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1320" x="540" y="305">
            <ellipse cx="1200" cy="916" fill="url(#j)" rx="659.578" ry="611"/>
          </mask>
        <g mask="url(#k)">
          <foreignObject  height="1719.16" width="1719.16" x="340.423" y="56.422">
            <div style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#l)",
              height: "100%",
              width: "100%",
            }} />
          </foreignObject>
          <g filter="url(#m)">
            <circle cx="1200" cy="916" fill="url(#n)" r="659.578"/>
          </g>
        </g>
      </g>
      <g filter="url(#o)">
        <mask height="1196" id="q" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1320" x="540" y="64">
          <ellipse cx="1200" cy="662" fill="url(#p)" rx="659.578" ry="598"/>
        </mask>
        <g mask="url(#q)">
          <foreignObject height="1691.09" width="1719.16" x="340.423" y="-183.544">
            <div style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#r)",
              height: "100%",
              width: "100%",
            }} />
            </foreignObject>
            <g filter="url(#s)">
              <ellipse cx="1200" cy="662" fill="url(#t)" rx="659.578" ry="645.544"/>
            </g>
          </g>
      </g>
      <g filter="url(#u)">
        <mask height="840" id="w" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="988" x="706" y="496">
          <ellipse cx="1200" cy="915.617" fill="url(#v)" rx="494" ry="419.617"/>
        </mask>
        <g mask="url(#w)">
          <foreignObject height="1305.96" width="1388" x="506.001" y="262.638">
            <div style={{
              backdropFilter: "blur(20px)",
              clipPath: "url(#x)",
              height: "100%",
              width: "100%",
            }} />
          </foreignObject>
          <g filter="url(#y)">
            <ellipse cx="1200" cy="915.617" fill="url(#z)" rx="494" ry="452.978"/>
          </g>
        </g>
      </g>
      <g filter="url(#A)">
        <ellipse cx="1200" cy="926.5" fill="url(#B)" rx="1166" ry="862.5"/>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(283.88428 533.90417 -539.58328 286.90394 1692 916)" gradientUnits="userSpaceOnUse" id="a" r="1">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(283.88428 533.90417 -539.58328 286.90394 611 611)" gradientUnits="userSpaceOnUse" id="e" r="1">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(306.4546 533.90435 -562.00353 322.5832 1200 916)" gradientUnits="userSpaceOnUse" id="j" r="1">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0 659.578 -865.763 0 1200 916)" gradientUnits="userSpaceOnUse" id="n" r="1">
          <stop offset=".196" stopColor="#fff"/>
          <stop offset=".298" stopColor="#F5F6FF"/>
          <stop offset=".4" stopColor="#DBD9FF"/>
          <stop offset=".669" stopColor="#AB7FF3"/>
          <stop offset="1" stopColor="#603EFF" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(306.45475 522.54423 -555.94842 326.0452 1200 662)" gradientUnits="userSpaceOnUse" id="p" r="1">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0 645.544 -865.763 0 1200 662)" gradientUnits="userSpaceOnUse" id="t" r="1">
          <stop offset=".196" stopColor="#fff"/>
          <stop offset=".298" stopColor="#F5F6FF"/>
          <stop offset=".4" stopColor="#DBD9FF"/>
          <stop offset="1" stopColor="#603EFF" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(229.5234 366.67024 -402.05708 251.6744 1200 915.617)" gradientUnits="userSpaceOnUse" id="v" r="1">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0 452.978 -648.425 0 1200 915.617)" gradientUnits="userSpaceOnUse" id="z" r="1">
          <stop offset=".196" stopColor="#fff"/>
          <stop offset=".298" stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>

        {/* <!-- Desktop vignette --> */}
          <motion.radialGradient
            animate={{
              gradientTransform: ['matrix(0 219.573 -626.027 0 1200 926.927)', 'matrix(0 433.573 -1166 0 1200 926.927)'],
            }}
            className={clsx('vignette-desktop')}
            cx="0"
            cy="0"
            gradientUnits="userSpaceOnUse"
            id="B"
            initial={{
              gradientTransform: 'matrix(0 219.573 -626.027 0 1200 926.927)'
            }}
            r='1'
            transition={{
              delay: 0.8,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.stop animate={{offset: [".249","0"] }} stopColor="#603EFF" stopOpacity="0"/>
            <motion.stop animate={{offset: [".4",".1"] }} stopColor="#603EFF" stopOpacity=".1"/>
            <motion.stop offset="1" stopColor="#111018"/>
          </motion.radialGradient>
        {/* <!-- Desktop vignette --> */}

        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1246" id="c" width="1246" x="1069" y="293">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="6"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1246" id="g" width="1246" x="85" y="293">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="6"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1302" id="i" width="1399.16" x="500.423" y="265">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="20"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1719.16" id="m" width="1719.16" x="340.423" y="56.422">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="100"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1276" id="o" width="1399.16" x="500.423" y="24">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="20"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1691.09" id="s" width="1719.16" x="340.423" y="-183.544">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="100"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="919.233" id="u" width="1068" x="666.001" y="456">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="20"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1305.96" id="y" width="1388" x="506.001" y="262.638">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="100"/>
        </filter>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1853" id="A" width="2460" x="-30" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_21062_61803" stdDeviation="32"/>
        </filter>

        <clipPath id="d">
          <circle cx="1692" cy="916" r="611"/>
        </clipPath>
        <clipPath id="h">
          <circle cx="611" cy="611" r="611" transform="matrix(-1 0 0 1 1319 305)"/>
        </clipPath>
        <clipPath id="l" transform="translate(-340.423 -56.422)">
          <circle cx="1200" cy="916" r="659.578"/>
        </clipPath>
        <clipPath id="r" transform="translate(-340.423 183.544)">
          <ellipse cx="1200" cy="662" rx="659.578" ry="645.544"/>
        </clipPath>
        <clipPath id="x" transform="translate(-506.001 -262.638)">
          <ellipse cx="1200" cy="915.617" rx="494" ry="452.978"/>
        </clipPath>
      </defs>
    </svg>
    </>
  )

export default HeroHomeBackground
