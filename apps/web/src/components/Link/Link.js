import React from 'react'
import dynamic from 'next/dynamic'
import Modal, { ModalProvider, ModalLink } from '@components/Modal'
import NextLink from 'next/link'
import { m as motion } from 'framer-motion'
import { styled } from '@design'
import { link as linkTokens } from '@design/tokens/link'
import { FiArrowRight as InternalIcon } from '@react-icons/all-files/fi/FiArrowRight'
import { FiDownload as DownloadIcon } from '@react-icons/all-files/fi/FiDownload'
import { FiExternalLink as ExternalIcon } from '@react-icons/all-files/fi/FiExternalLink'
import { FiMaximize2 as ModalIcon } from '@react-icons/all-files/fi/FiMaximize2'
import { MdPlayArrow as VideoIcon } from '@react-icons/all-files/md/MdPlayArrow'

export const $Link = styled(motion.a, linkTokens)

const Icons = {
  internal: InternalIcon,
  external: ExternalIcon,
  download: DownloadIcon,
  modal: ModalIcon,
  video: VideoIcon,
}

const Video = dynamic(() => import('@components/Video'))

const Link = (
  {
    children,
    condition,
    url,
    label,
    target,
    rel = 'noopener noreferrer',
    page,
    icon,
    hasHash,
    hash,
    hasIcon,
    disabled,
    ...props
  },
  ref
) => {
  if (!url && !['modal', 'video'].includes(condition)) return null
  const { Modal: ModalComponent = () => null, modalKey, modalCss } = props
  const Icon = Icons[icon || condition]

  if (disabled) {
    return (
      <$Link as="span" ref={ref} {...props} disabled>
        {children || label}
        {hasIcon && <Icon />}
      </$Link>
    )
  }

  switch (condition) {
    case 'internal':
      return (
        <NextLink href={`${url}${hasHash && hash ? `#${hash}` : ''}`} passHref>
          <$Link ref={ref} hasIcon={hasIcon} {...props}>
            {children || label}
            {hasIcon && <Icon />}
          </$Link>
        </NextLink>
      )
    case 'external':
    case 'download':
      return (
        <$Link
          ref={ref}
          download={condition === 'download'}
          href={url}
          target={target ? '_blank' : undefined}
          rel={rel}
          hasIcon={hasIcon}
          {...props}
        >
          {children || label}
          {hasIcon && <Icon />}
        </$Link>
      )
    case 'modal':
      return (
        <ModalProvider>
          <ModalLink
            ref={ref}
            href={`#${modalKey}`}
            modalKey={modalKey}
            component={$Link}
            rel={rel}
            hasIcon={hasIcon}
            {...props}
          >
            {children || label}
            {hasIcon && <Icon />}
          </ModalLink>
          <Modal css={modalCss} modalKey={modalKey}>
            <ModalComponent />
          </Modal>
        </ModalProvider>
      )
    case 'video':
      return (
        <ModalProvider>
          <ModalLink
            ref={ref}
            href={`#${modalKey || 'video'}`}
            modalKey={modalKey || 'video'}
            component={$Link}
            rel={rel}
            hasIcon={hasIcon}
            {...props}
          >
            {children || label}
            {hasIcon && <Icon style={{ marginLeft: '-0.25rem' }} />}
          </ModalLink>
          <Modal
            css={{
              py: '0',
              ...modalCss,
            }}
            modalKey={modalKey || 'video'}
          >
            <Video
              video={props.video}
              videoControls={{ muted: false, controls: true, loop: false }}
              type="static"
            />
          </Modal>
        </ModalProvider>
      )
    default:
      console.error("Link wasn't provided a condition: ", props)
      return null
  }
}

export default React.forwardRef(Link)
export { InternalIcon, DownloadIcon, ExternalIcon, ModalIcon, VideoIcon }
