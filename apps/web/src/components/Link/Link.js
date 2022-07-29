import React from 'react'
import Modal, { ModalProvider, ModalLink } from '@components/Modal'
import NextLink from 'next/link'
import { m } from 'framer-motion'
import { styled } from '@design'
// import { link as linkTokens } from '@design/tokens/link'
import { FiArrowRight as InternalIcon } from '@react-icons/all-files/fi/FiArrowRight'
import { FiDownload as DownloadIcon } from '@react-icons/all-files/fi/FiDownload'
import { FiExternalLink as ExternalIcon } from '@react-icons/all-files/fi/FiExternalLink'
import { FiMaximize2 as ModalIcon } from '@react-icons/all-files/fi/FiMaximize2'

export const $Link = styled(m.a, {}) // Removing R&P base styles for migration. TODO: Reimplement `linkTokens`.

const Link = ({
  children,
  condition = 'external',
  url,
  label,
  target,
  rel = 'noopener noreferrer',
  page,
  hasIcon,
  ...props
}) => {
  if (!url && condition !== 'modal') return null
  const { Modal: ModalComponent = () => null, modalKey, modalCss } = props

  switch (condition) {
    case 'internal':
      return (
        <NextLink href={url} passHref>
          <$Link {...props}>
            {children || label}
            {hasIcon && <InternalIcon />}
          </$Link>
        </NextLink>
      )
    case 'external':
    case 'download':
      return (
        <$Link
          download={condition === 'download'}
          href={url}
          target={target ? '_blank' : undefined}
          rel={rel}
          {...props}
        >
          {children || label}
          {hasIcon && condition === 'download' && <DownloadIcon />}
          {hasIcon && condition === 'external' && <ExternalIcon />}
        </$Link>
      )
    case 'modal':
      return (
        <ModalProvider>
          <ModalLink
            href={`#${modalKey}`}
            modalKey={modalKey}
            component={$Link}
            rel={rel}
            {...props}
          >
            {children || label}
            {hasIcon && <ModalIcon />}
          </ModalLink>
          <Modal css={modalCss} modalKey={modalKey}>
            <ModalComponent />
          </Modal>
        </ModalProvider>
      )
    default:
      console.error("Link wasn't provided a condition: ", props)
      return null
  }
}

export default Link
export { InternalIcon, DownloadIcon, ExternalIcon, ModalIcon }
