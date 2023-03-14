import React from 'react'
import dynamic from 'next/dynamic'
import Modal, { ModalProvider, ModalLink } from '@components/Modal'
import NextLink from 'next/link'
import { m as motion } from 'framer-motion'
import { styled } from '@design'
import { link as linkTokens } from '@design/tokens/link'
import { FiChevronRight as InternalIcon } from '@react-icons/all-files/fi/FiChevronRight'
import { FiDownload as DownloadIcon } from '@react-icons/all-files/fi/FiDownload'
import { FiExternalLink as ExternalIcon } from '@react-icons/all-files/fi/FiExternalLink'
import { FiMaximize2 as ModalIcon } from '@react-icons/all-files/fi/FiMaximize2'
import { MdPlayArrow as VideoIcon } from '@react-icons/all-files/md/MdPlayArrow'

export const $Link = styled(motion.a, linkTokens)

const internalIconStyles = {
  variants: {
    linkStyle: {
      button: {
        h: 18,
        w: 18,
      },
      buttonInverse: {
        h: 18,
        w: 18,
        c: '$primary',
      },
      ghost: {
        h: 18,
        w: 18,
      },
      text: {
        h: 15,
        w: 15,
      },
    },
  },
  defaultVariants: {
    linkStyle: 'text',
  },
}

const Icons = {
  internal: styled(InternalIcon, internalIconStyles),
  leadpagesTrigger: styled(InternalIcon, internalIconStyles),
  external: styled(ExternalIcon),
  download: styled(DownloadIcon),
  modal: styled(ModalIcon),
  video: styled(VideoIcon),
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
    hasIcon: hasIconOrg,
    disabled,
    popUpId,
    leadpagesDomain,
    dataGtm,
    ariaLabel: ariaLabelOrg,
    ...props
  },
  ref
) => {
  if (!url && !['modal', 'video', 'leadpagesTrigger'].includes(condition))
    return null
  const { Modal: ModalComponent = () => null, modalKey, modalCss } = props
  const Icon = Icons[icon || condition]
  const ariaLabel =
    ariaLabelOrg ||
    (children instanceof String && children?.toString()) ||
    label
  const hasIcon = hasIconOrg && Icon

  if (disabled) {
    return (
      <$Link
        as="span"
        ref={ref}
        data-gtm={dataGtm}
        aria-label={ariaLabel}
        {...props}
        disabled
      >
        {children || label}
        {hasIcon && <Icon />}
      </$Link>
    )
  }

  if (condition === 'leadpagesTrigger' && (!popUpId || !leadpagesDomain)) {
    return null
  }

  switch (condition) {
    case 'internal':
      return (
        <NextLink href={`${url}${hasHash && hash ? `#${hash}` : ''}`} passHref>
          <$Link ref={ref} data-gtm={dataGtm} aria-label={ariaLabel} {...props}>
            {children || label}
            {hasIcon && <Icon linkStyle={props?.linkStyle} />}
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
          data-gtm={dataGtm}
          aria-label={ariaLabel}
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
            data-gtm={dataGtm}
            aria-label={ariaLabel}
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
    case 'leadpagesTrigger':
      return (
        <$Link
          ref={ref}
          rel={rel}
          data-leadbox-popup={popUpId}
          data-leadbox-domain={leadpagesDomain}
          data-gtm={dataGtm}
          aria-label={ariaLabel}
          {...props}
        >
          {children || label}
          {hasIcon && <Icon linkStyle={props?.linkStyle} />}
        </$Link>
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
            data-gtm={dataGtm}
            aria-label={ariaLabel}
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
