import React from 'react'
import { useRouter } from 'next/router'
import { styled } from '@design'
import useScrollToHash from '@hooks/useScrollToHash'
import { m as motion, AnimatePresence } from 'framer-motion'

const $LayoutContainer = styled(motion.div, {
  w: '100%',
})

const LayoutContainer = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const [url] = asPath.split('#')

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() => {
        useScrollToHash(asPath, 500)
      }}
    >
      <$LayoutContainer
        layout="position"
        key={url}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0,
          },
        }}
        {...props}
      >
        {children}
      </$LayoutContainer>
    </AnimatePresence>
  )
}

export default LayoutContainer
