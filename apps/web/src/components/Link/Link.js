import React from 'react'
import { styled } from '@design'
import { link as linkTokens } from '@design/tokens/link'
import { FiChevronRight as InternalIcon } from '@react-icons/all-files/fi/FiChevronRight'
import { FiDownload as DownloadIcon } from '@react-icons/all-files/fi/FiDownload'
import { FiExternalLink as ExternalIcon } from '@react-icons/all-files/fi/FiExternalLink'
import { FiMaximize2 as ModalIcon } from '@react-icons/all-files/fi/FiMaximize2'
import { MdPlayArrow as VideoIcon } from '@react-icons/all-files/md/MdPlayArrow'
import { m as motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { scrollToHash } from '@hooks/useScrollToHash'
import { useCurrentPath } from '@hooks/useCurrentPath'
import { normalizeUrl } from '@lib/utils/normalizeUrl'
import Modal, { ModalLink, ModalProvider } from '@components/Modal'
import SignUpWithEmailFieldLink from './SignUpWithEmailFieldLink'

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
  external: styled(InternalIcon, internalIconStyles),
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
    icon,
    hasHash,
    hash,
    scrollOffset = 0,
    hasIcon: hasIconOrg,
    disabled,
    popUpId,
    leadpagesDomain,
    dataGtm,
    ariaLabel: ariaLabelOrg,
    video,
    _type,
    ...props
  },
  ref
) => {
  const ariaLabel =
    ariaLabelOrg ||
    (children instanceof String && children?.toString()) ||
    label

  if (_type === 'signUp') {
    return (
      <SignUpWithEmailFieldLink
        aria-label={ariaLabel}
        data-gtm={dataGtm}
        hasIcon={hasIconOrg}
        label={label}
        ref={ref}
        {...props}
      />
    )
  }

  if (!url && !['leadpagesTrigger', 'modal', 'video'].includes(condition))
    return null
  const { Modal: ModalComponent = () => null, modalKey, modalCss } = props
  const Icon = Icons[icon || condition]
  const hasIcon = hasIconOrg && Icon && props?.linkStyle !== 'none'
  
  // Safely get current path (works with both Pages Router and App Router)
  const path = useCurrentPath()
  
  // Normalizar URLs para comparación y uso (solo si existen)
  const normalizedPath = path ? normalizeUrl(path) : path
  const normalizedUrl = url ? normalizeUrl(url) : url
  const _condition = normalizedPath && normalizedUrl && normalizedPath === normalizedUrl && hasHash ? 'hash' : condition
  const Element = props?.linkStyle === 'none' ? 'a' : $Link

  if (disabled) {
    return (
      <Element
        aria-label={ariaLabel}
        as="span"
        data-gtm={dataGtm}
        ref={ref}
        {...props}
        disabled
      >
        {children || label}
        {hasIcon && <Icon />}
      </Element>
    )
  }

  if (condition === 'leadpagesTrigger' && (!popUpId || !leadpagesDomain)) {
    return null
  }

  switch (_condition) {
    case 'internal':
      if (!children && !label) {
        return null
      }

      // Preserve URL parameters (like XID) when navigating
      const preserveParams = (url) => {
        if (typeof window === 'undefined') return url
        const currentParams = new URLSearchParams(window.location.search)
        if (currentParams.toString()) {
          const separator = url.includes('?') ? '&' : '?'
          return `${url}${separator}${currentParams.toString()}`
        }
        return url
      }

      const finalUrl = preserveParams(`${normalizedUrl}${hasHash && hash ? `#${hash}` : ''}`)

      return (
        <NextLink
          href={finalUrl}
          legacyBehavior
          passHref
        >
          <Element
            aria-label={ariaLabel}
            data-gtm={dataGtm}
            ref={ref}
            {...props}
          >
            {children || label}
            {hasIcon && <Icon linkStyle={props?.linkStyle} />}
          </Element>
        </NextLink>
      )
    case 'hash':
      return (
        <Element
          href={`${hasHash && hash ? `#${hash}` : ''}`}
          ref={ref}
          {...props}
          onClick={(e) => {
            e.preventDefault()
            scrollToHash(hash, scrollOffset)
          }}
        >
          {children || label}
          {hasIcon && <Icon />}
        </Element>
      )
    case 'external':
    case 'download':
      return (
        <Element
          aria-label={ariaLabel}
          data-gtm={dataGtm}
          download={condition === 'download'}
          href={url}
          ref={ref}
          rel={rel}
          target={target ? '_blank' : undefined}
          {...props}
        >
          {children || label}
          {hasIcon && <Icon />}
        </Element>
      )
    case 'modal':
      return (
        <ModalProvider>
          <ModalLink
            aria-label={ariaLabel}
            component={$Link}
            data-gtm={dataGtm}
            href={`#${modalKey}`}
            modalKey={modalKey}
            ref={ref}
            rel={rel}
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
        <Element
          aria-label={ariaLabel}
          data-gtm={dataGtm}
          data-leadbox-domain={leadpagesDomain}
          data-leadbox-popup={popUpId}
          ref={ref}
          rel={rel}
          {...props}
        >
          {children || label}
          {hasIcon && <Icon linkStyle={props?.linkStyle} />}
        </Element>
      )
    case 'video':
      return (
        <ModalProvider>
          <ModalLink
            aria-label={ariaLabel}
            component={$Link}
            data-gtm={dataGtm}
            href={`#${modalKey || 'video'}`}
            modalKey={modalKey || 'video'}
            ref={ref}
            rel={rel}
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
              type="static"
              video={video}
              videoControls={{ muted: false, controls: true, loop: false }}
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
export { DownloadIcon, ExternalIcon, InternalIcon, ModalIcon, VideoIcon }
