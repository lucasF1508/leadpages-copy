import React from 'react'
import Media from '../Media'
import { SocialMediaProps } from './SocialMedia.types'

type Props = SocialMediaProps

const SocialMedia: React.FC<Props> = ({ heading, icons, buttonText, buttonUrl, buttonLogo }) => {
  if (!icons || icons.length === 0) return null

  const getIconComponent = (platform: string) => {
    const iconStyle = {
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      backgroundColor: '#1a1a1a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }

    // Iconos simplificados - puedes reemplazarlos con SVGs reales después
    switch (platform) {
      case 'facebook':
        return <div style={iconStyle}>f</div>
      case 'linkedin':
        return <div style={iconStyle}>in</div>
      case 'instagram':
        return <div style={iconStyle}>📷</div>
      case 'youtube':
        return <div style={iconStyle}>▶</div>
      case 'pinterest':
        return <div style={iconStyle}>P</div>
      case 'twitter':
      case 'x':
        return <div style={iconStyle}>X</div>
      default:
        return <div style={iconStyle}>?</div>
    }
  }

  return (
    <section 
      className="px-4 md:px-[353px]" 
      style={{ 
        backgroundColor: '#0F0F0F',
        paddingTop: '24px',
        paddingBottom: '24px',
        maxWidth: '1440px',
        margin: '0 auto',
        marginBottom: '32px'
      }}
    >
      <div className="flex flex-col items-center" style={{ gap: '30px' }}>
        {/* Heading */}
        <h2 
          style={{
            fontFamily: 'var(--font-roc-grotesk-variable, serif)',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1.2',
            letterSpacing: '0px',
            textAlign: 'center',
            color: 'white',
            margin: 0
          }}
        >
          {heading}
        </h2>

        {/* Social Media Icons */}
        <div 
          style={{
            display: 'flex',
            gap: '35.73px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icons.map((icon) => (
            <a 
              key={icon._key} 
              href={icon.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {getIconComponent(icon.platform)}
            </a>
          ))}
        </div>

        {/* Button Container */}
        {(buttonText || buttonLogo || buttonUrl) && (
          <a
            href={buttonUrl || '#'}
            style={{
              width: 'auto',
              height: 'auto',
              paddingTop: '18px',
              paddingRight: '28px',
              paddingBottom: '18px',
              paddingLeft: '28px',
              backgroundColor: '#302E3C',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {/* Logo */}
            <div style={{ width: '32px', height: '32px', flexShrink: 0 }}>
              {buttonLogo ? (
                // prefer simple img when src provided
                ('src' in (buttonLogo as any) ? (
                  <img
                    src={(buttonLogo as any).src}
                    alt={(buttonLogo as any).alt || ''}
                    width={(buttonLogo as any).width || 32}
                    height={(buttonLogo as any).height || 32}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }}
                  />
                ) : (
                  <Media
                    media={{ condition: 'image', image: buttonLogo }}
                    sizes="32px"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }}
                  />
                ))
              ) : (
                <span
                  aria-hidden
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #C47FF3 0%, #5B3DF5 100%)',
                  }}
                />
              )}
            </div>
            
            {/* Button Text */}
            {buttonText && (
              <span
                style={{
                  fontFamily: 'var(--font-roc-grotesk-variable, serif)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  lineHeight: '1.2',
                  color: 'white',
                  whiteSpace: 'nowrap'
                }}
              >
                {buttonText}
              </span>
            )}
          </a>
        )}
      </div>
    </section>
  )
}

export default SocialMedia
