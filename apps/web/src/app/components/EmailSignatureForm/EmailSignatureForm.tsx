'use client'

import { useState, useEffect } from 'react'
import './EmailSignatureForm.css'

interface SignatureData {
  firstName: string
  lastName: string
  jobTitle: string
  department: string
  companyName: string
  phone: string
  email: string
  website: string
  linkedin: string
  twitter: string
  facebook: string
  instagram: string
  address: string
  profilePhoto: File | null
  profilePhotoUrl: string
  companyLogo: File | null
  companyLogoUrl: string
  template: 'classic' | 'compact' | 'minimal'
  brandColor: string
  fontFamily: string
  fontSize: 'small' | 'medium' | 'large'
}

export default function EmailSignatureForm() {
  const [signatureData, setSignatureData] = useState<SignatureData>({
    firstName: 'John',
    lastName: 'Smith',
    jobTitle: 'Marketing Manager',
    department: 'Marketing',
    companyName: 'Leadpages',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@leadpages.com',
    website: 'https://www.leadpages.com',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    address: '',
    profilePhoto: null,
    profilePhotoUrl: '',
    companyLogo: null,
    companyLogoUrl: '',
    template: 'classic',
    brandColor: '#603EFF',
    fontFamily: 'Inter (Modern)',
    fontSize: 'medium',
  })

  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadType, setUploadType] = useState<'profile' | 'logo' | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [panelWidth, setPanelWidth] = useState(480)
  const [isResizing, setIsResizing] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [savedSignature, setSavedSignature] = useState<any>(null)
  const [sessionId, setSessionId] = useState<string>('')
  const [isCreating, setIsCreating] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailForSubmission, setEmailForSubmission] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showToast, setShowToast] = useState<{ type: 'copy' | 'download' | null; message: string }>({ type: null, message: '' })
  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [expandedClient, setExpandedClient] = useState<string | null>(null)
  const [error, setError] = useState<{ title: string; message: string } | null>(null)

  const colorPresets = [
    '#603EFF', // Purple
    '#2563EB', // Blue
    '#10B981', // Green
    '#EF4444', // Red
    '#F97316', // Orange
    '#EC4899', // Pink
    '#14B8A6', // Teal
    '#6366F1', // Indigo
  ]

  const fontOptions = [
    'Inter (Modern)',
    'Georgia (Classic)',
    'Arial (Simple)',
    'Helvetica (Clean)',
    'Times New Roman (Traditional)',
  ]

  const handleInputChange = (field: keyof SignatureData, value: string | File | null) => {
    setSignatureData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleImageUpload = (file: File, type: 'profile' | 'logo') => {
    // Convert file to base64 to avoid blob URL issues
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      if (type === 'profile') {
        setSignatureData((prev) => ({
          ...prev,
          profilePhoto: file,
          profilePhotoUrl: base64String,
        }))
      } else {
        setSignatureData((prev) => ({
          ...prev,
          companyLogo: file,
          companyLogoUrl: base64String,
        }))
      }
      setShowUploadModal(false)
      setUploadType(null)
    }
    reader.readAsDataURL(file)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'logo') => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file, type)
    }
  }

  const handleDrop = (e: React.DragEvent, type: 'profile' | 'logo') => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file, type)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => {
    setDragActive(false)
  }

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
  }

  useEffect(() => {
    if (!isResizing) return

    const handleResize = (e: MouseEvent) => {
      e.preventDefault()
      const container = document.querySelector('.email-signature-form-container') as HTMLElement
      if (!container) return
      
      const containerRect = container.getBoundingClientRect()
      const newWidth = e.clientX - containerRect.left
      
      if (newWidth >= 300 && newWidth <= 800) {
        setPanelWidth(newWidth)
      }
    }

    const handleResizeEnd = () => {
      setIsResizing(false)
    }

    document.addEventListener('mousemove', handleResize)
    document.addEventListener('mouseup', handleResizeEnd)
    document.body.classList.add('resizing')

    return () => {
      document.removeEventListener('mousemove', handleResize)
      document.removeEventListener('mouseup', handleResizeEnd)
      document.body.classList.remove('resizing')
    }
  }, [isResizing])

  // Generate or retrieve sessionId on mount and load existing data if available
  useEffect(() => {
    // Try to get sessionId from URL or localStorage, otherwise generate new one
    const urlParams = new URLSearchParams(window.location.search)
    const urlSessionId = urlParams.get('sessionId')
    const storedSessionId = localStorage.getItem('emailSignatureSessionId')
    const existingSessionId = urlSessionId || storedSessionId
    
    let finalSessionId: string
    if (existingSessionId) {
      finalSessionId = existingSessionId
    } else {
      finalSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
      localStorage.setItem('emailSignatureSessionId', finalSessionId)
    }
    
    setSessionId(finalSessionId)
    
    // Try to load existing signature data
    const loadSignatureData = async () => {
      try {
        const response = await fetch(`/api/signatures/${finalSessionId}`)
        if (response.ok) {
          const data = await response.json()
          if (data.signature?.signatureData) {
            const parsedData = JSON.parse(data.signature.signatureData)
            // Map the loaded data back to the form state
            setSignatureData((prev) => ({
              ...prev,
              firstName: parsedData.firstName || prev.firstName,
              lastName: parsedData.lastName || prev.lastName,
              jobTitle: parsedData.jobTitle || prev.jobTitle,
              department: parsedData.department || prev.department,
              companyName: parsedData.company || prev.companyName,
              phone: parsedData.phone || prev.phone,
              email: parsedData.email || prev.email,
              website: parsedData.website || prev.website,
              address: parsedData.address || prev.address,
              linkedin: parsedData.linkedin || prev.linkedin,
              twitter: parsedData.twitter || prev.twitter,
              facebook: parsedData.facebook || prev.facebook,
              instagram: parsedData.instagram || prev.instagram,
              profilePhotoUrl: parsedData.profileImageUrl || prev.profilePhotoUrl,
              companyLogoUrl: parsedData.companyLogoUrl || prev.companyLogoUrl,
              template: (parsedData.template as 'classic' | 'compact' | 'minimal') || prev.template,
              brandColor: parsedData.primaryColor || prev.brandColor,
              fontFamily: parsedData.fontFamily || prev.fontFamily,
              fontSize: (parsedData.fontSize as 'small' | 'medium' | 'large') || prev.fontSize,
            }))
          }
        }
      } catch (error) {
        // Ignore errors - it's expected on first visit
        console.log('No existing signature data found')
      }
    }
    
    loadSignatureData()
  }, [])

  // Generate HTML content from signature data
  const generateHTMLContent = (data: SignatureData): string => {
    const fullName = `${data.firstName} ${data.lastName}`.trim() || 'Your Name'
    const fontFamilyName = data.fontFamily.split(' ')[0]
    const fontSizeValue = data.fontSize === 'small' ? '13px' : data.fontSize === 'medium' ? '14px' : '15px'
    
    // Build social links
    const socialLinks = []
    if (data.linkedin) socialLinks.push({ name: 'LinkedIn', url: data.linkedin })
    if (data.twitter) socialLinks.push({ name: 'Twitter', url: data.twitter })
    if (data.facebook) socialLinks.push({ name: 'Facebook', url: data.facebook })
    if (data.instagram) socialLinks.push({ name: 'Instagram', url: data.instagram })

    // Helper to format website URL
    const formatWebsite = (url: string) => {
      if (!url) return ''
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      return `https://${url}`
    }

    if (data.template === 'minimal') {
      let html = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamilyName}, sans-serif; font-size: ${fontSizeValue}; color: #333333; line-height: 1.6; max-width: 600px;">\n  <tr>\n    <td>\n      <table cellpadding="0" cellspacing="0" border="0">\n        <tr><td style="font-size: 16px; font-weight: bold; padding-bottom: 4px;">${fullName}</td></tr>\n`
      
      if (data.jobTitle || data.companyName) {
        html += `        <tr><td style="color: #666666; padding-bottom: 8px;">${data.jobTitle || ''}${data.jobTitle && data.companyName ? ' at ' : ''}${data.companyName || ''}</td></tr>\n`
      }
      
      if (data.email || data.phone || data.website) {
        html += `        <tr><td style="color: #555555;">\n`
        if (data.email) {
          html += `          <a href="mailto:${data.email}" style="color: ${data.brandColor}; text-decoration: none;">${data.email}</a>`
        }
        if (data.email && data.phone) {
          html += `\n           | `
        }
        if (data.phone) {
          html += `<a href="tel:${data.phone}" style="color: #555555; text-decoration: none;">${data.phone}</a>`
        }
        if ((data.email || data.phone) && data.website) {
          html += `\n           | `
        }
        if (data.website) {
          html += `<a href="${formatWebsite(data.website)}" style="color: ${data.brandColor}; text-decoration: none;">${data.website}</a>`
        }
        html += `\n        </td></tr>\n`
      }
      
      if (socialLinks.length > 0) {
        html += `        <tr><td style="padding-top: 12px;">\n`
        socialLinks.forEach((social) => {
          html += `          <a href="${social.url}" style="display: inline-block; margin-right: 12px; padding: 6px 12px; background-color: ${data.brandColor}; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 600;">${social.name}</a>`
        })
        html += `\n        </td></tr>\n`
      }
      
      html += `      </table>\n    </td>\n  </tr>\n</table>`
      return html
    }
    
    if (data.template === 'compact') {
      let html = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamilyName}, sans-serif; font-size: ${fontSizeValue}; color: #333333; max-width: 600px;">\n  <tr>\n    <td>\n      <table cellpadding="0" cellspacing="0" border="0">\n        <tr><td style="padding-bottom: 4px;">\n          <strong style="color: ${data.brandColor};">${fullName}</strong>`
      
      if (data.jobTitle) {
        html += `\n           | ${data.jobTitle}`
      }
      if (data.companyName) {
        html += `\n           | ${data.companyName}`
      }
      
      html += `\n        </td></tr>\n`
      
      if (data.email || data.phone || data.website) {
        html += `        <tr><td style="color: #555555;">\n`
        if (data.email) {
          html += `          <a href="mailto:${data.email}" style="color: ${data.brandColor}; text-decoration: none;">${data.email}</a>`
        }
        if (data.email && data.phone) {
          html += `\n           | `
        }
        if (data.phone) {
          html += `<a href="tel:${data.phone}" style="color: #555555; text-decoration: none;">${data.phone}</a>`
        }
        if ((data.email || data.phone) && data.website) {
          html += `\n           | `
        }
        if (data.website) {
          html += `<a href="${formatWebsite(data.website)}" style="color: ${data.brandColor}; text-decoration: none;">${data.website}</a>`
        }
        html += `\n        </td></tr>\n`
      }
      
      if (socialLinks.length > 0) {
        html += `        <tr><td style="padding-top: 12px;">\n`
        socialLinks.forEach((social) => {
          html += `          <a href="${social.url}" style="display: inline-block; margin-right: 12px; padding: 6px 12px; background-color: ${data.brandColor}; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 600;">${social.name}</a>`
        })
        html += `\n        </td></tr>\n`
      }
      
      html += `      </table>\n    </td>\n  </tr>\n</table>`
      return html
    }
    
    // Classic template
    if (data.template === 'classic') {
      let html = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamilyName}, sans-serif; font-size: ${fontSizeValue}; color: #333333; max-width: 600px;">\n  <tr>\n    <td style="border-right: 2px solid ${data.brandColor}; padding-right: 15px; vertical-align: top; width: 120px;">\n`
      
      if (data.profilePhotoUrl) {
        html += `      <img src="${data.profilePhotoUrl}" alt="Profile" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;" />\n`
      } else {
        html += `      \n      \n`
      }
      
      html += `    </td>\n    <td style="padding-left: 15px; vertical-align: top;">\n      <div style="font-size: 20px; font-weight: bold; color: ${data.brandColor}; margin-bottom: 4px;">${fullName}</div>\n`
      
      if (data.jobTitle) {
        html += `      <div style="font-size: 14px; color: #666666; margin-bottom: 2px;">${data.jobTitle}</div>\n`
      }
      if (data.department) {
        html += `      <div style="font-size: 14px; color: #666666; margin-bottom: 4px;">${data.department}</div>\n`
      }
      if (data.companyName) {
        html += `      <div style="font-weight: 600; margin-top: 6px; margin-bottom: 10px;">${data.companyName}</div>\n`
      }
      
      if (data.email || data.phone || data.website || data.address) {
        html += `      <table cellpadding="0" cellspacing="0" border="0" style="color: #555555;">\n`
        if (data.email) {
          html += `        <tr><td style="padding: 2px 0;">E: <a href="mailto:${data.email}" style="color: ${data.brandColor}; text-decoration: none;">${data.email}</a></td></tr>\n`
        }
        if (data.phone) {
          html += `        <tr><td style="padding: 2px 0;">P: <a href="tel:${data.phone}" style="color: #555555; text-decoration: none;">${data.phone}</a></td></tr>\n`
        }
        if (data.website) {
          html += `        <tr><td style="padding: 2px 0;">W: <a href="${formatWebsite(data.website)}" style="color: ${data.brandColor}; text-decoration: none;">${formatWebsite(data.website)}</a></td></tr>\n`
        }
        if (data.address) {
          html += `        <tr><td style="padding: 6px 0 0 0;">${data.address}</td></tr>\n`
        }
        html += `      </table>\n`
      }
      
      if (socialLinks.length > 0) {
        html += `      <div style="margin-top: 12px;">\n`
        socialLinks.forEach((social) => {
          html += `        <a href="${social.url}" style="display: inline-block; margin-right: 12px; padding: 6px 12px; background-color: ${data.brandColor}; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 600;">${social.name}</a>`
        })
        html += `\n      </div>\n`
      }
      
      html += `    </td>\n  </tr>\n</table>`
      return html
    }
    
    // Fallback
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamilyName}, sans-serif; font-size: ${fontSizeValue}; color: #333333; line-height: 1.6; max-width: 600px;">\n  <tr>\n    <td>${fullName}</td>\n  </tr>\n</table>`
  }

  const handleCreateSignature = () => {
    // Show email modal first
    setShowEmailModal(true)
  }

  const handleEmailModalContinue = async () => {
    // Validate email
    if (!emailForSubmission || !emailForSubmission.includes('@')) {
      alert('Please enter a valid email address')
      return
    }

    setIsProcessing(true)

    try {
      // Step 1: Submit to HubSpot
      const submitResponse = await fetch('/api/hubspot/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailForSubmission }),
      })

      if (!submitResponse.ok) {
        throw new Error('Failed to submit to HubSpot')
      }

      // Step 2: Email capture
      await fetch('/api/analytics/email-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailForSubmission,
          timestamp: Date.now(),
        }),
      })

      // Step 3: Generate HTML and save signature
      const htmlContent = generateHTMLContent(signatureData)
      
      // Prepare signature data for saving
      const signatureDataToSave = {
        firstName: signatureData.firstName,
        lastName: signatureData.lastName,
        jobTitle: signatureData.jobTitle,
        department: signatureData.department,
        company: signatureData.companyName,
        phone: signatureData.phone,
        email: signatureData.email,
        website: signatureData.website,
        address: signatureData.address,
        linkedin: signatureData.linkedin,
        twitter: signatureData.twitter,
        facebook: signatureData.facebook,
        instagram: signatureData.instagram,
        profileImageUrl: signatureData.profilePhotoUrl,
        companyLogoUrl: signatureData.companyLogoUrl,
        template: signatureData.template,
        primaryColor: signatureData.brandColor,
        fontFamily: signatureData.fontFamily,
        fontSize: signatureData.fontSize,
      }

      const saveResponse = await fetch('/api/signatures/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          htmlContent,
          signatureData: JSON.stringify(signatureDataToSave),
        }),
      })

      const saveData = await saveResponse.json()

      if (saveData.success) {
        setSavedSignature(saveData.signature)
        setShowEmailModal(false)
        setIsProcessing(false)
        setShowSuccessModal(true)
      } else {
        throw new Error('Failed to save signature')
      }
    } catch (error: any) {
      console.error('Error creating signature:', error)
      alert('Failed to create signature. Please try again.')
      setIsProcessing(false)
    }
  }

  const handleClearAll = () => {
    setSignatureData({
      firstName: '',
      lastName: '',
      jobTitle: '',
      department: '',
      companyName: '',
      phone: '',
      email: '',
      website: '',
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: '',
      address: '',
      profilePhoto: null,
      profilePhotoUrl: '',
      companyLogo: null,
      companyLogoUrl: '',
      template: 'classic',
      brandColor: '#603EFF',
      fontFamily: 'Inter (Modern)',
      fontSize: 'medium',
    })
  }

  return (
    <div className="email-signature-form-page">
      <div className="email-signature-form-container">
        {/* Left Panel - Form */}
        <div className="email-signature-form-panel" style={{ width: `${panelWidth}px` }}>
          <div className="form-header">
            <h1>Create Professional Email Signatures in Minutes</h1>
            <p>Choose a template, customize your details, and export perfect HTML for Gmail, Outlook, and Apple Mail.</p>
          </div>

          {/* Details Section */}
          <div className="form-section">
            <div className="form-section-header">
              <span className="section-number">1</span>
              <div>
                <h2>Details</h2>
                <p>Your contact information</p>
              </div>
            </div>

            <div className="form-group">
              <label>
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={signatureData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
              />
            </div>

            <div className="form-group">
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={signatureData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Smith"
              />
            </div>

            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                value={signatureData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                placeholder="Marketing Manager"
              />
            </div>

            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                value={signatureData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                placeholder="Marketing"
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                value={signatureData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Leadpages"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={signatureData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={signatureData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john.smith@leadpages.com"
              />
            </div>

            <div className="form-group">
              <label>Website URL</label>
              <input
                type="url"
                value={signatureData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://www.leadpages.com"
              />
            </div>

            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                value={signatureData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div className="form-group">
              <label>X / Twitter</label>
              <input
                type="url"
                value={signatureData.twitter}
                onChange={(e) => handleInputChange('twitter', e.target.value)}
                placeholder="https://twitter.com/username"
              />
            </div>

            <div className="form-group">
              <label>Facebook</label>
              <input
                type="url"
                value={signatureData.facebook}
                onChange={(e) => handleInputChange('facebook', e.target.value)}
                placeholder="https://facebook.com/username"
              />
            </div>

            <div className="form-group">
              <label>Instagram</label>
              <input
                type="url"
                value={signatureData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
                placeholder="https://instagram.com/username"
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                value={signatureData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="123 Main Street&#10;Minneapolis, MN 55401"
                rows={3}
              />
            </div>
          </div>

          {/* Images Section */}
          <div className="form-section">
            <div className="form-section-header">
              <span className="section-number">2</span>
              <div>
                <h2>Images</h2>
                <p>Profile photo & company logo</p>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="images-subsection">
              <h3>Profile Photo</h3>
              <div className="images-grid">
                <div className="image-upload-card">
                  <div
                    className="image-preview-area"
                    onDrop={(e) => handleDrop(e, 'profile')}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    {signatureData.profilePhotoUrl ? (
                      <img src={signatureData.profilePhotoUrl} alt="Profile" className="uploaded-image" />
                    ) : (
                      <div className="image-placeholder">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    className="btn-upload"
                    onClick={() => {
                      setUploadType('profile')
                      setShowUploadModal(true)
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12V4M4 8L8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Upload Image
                  </button>
                  <div className="upload-divider">OR</div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      value={signatureData.profilePhotoUrl && !signatureData.profilePhotoUrl.startsWith('data:') ? signatureData.profilePhotoUrl : ''}
                      onChange={(e) => handleInputChange('profilePhotoUrl', e.target.value)}
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>
                <div className="image-tips-card">
                  <div className="tips-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Tips for Best Results</h4>
                  <ul>
                    <li>Use a professional headshot</li>
                    <li>Square images work best (200×200px)</li>
                    <li>JPG or PNG format recommended</li>
                    <li>Host on a reliable image service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="images-subsection">
              <h3>Company Logo</h3>
              <div className="images-grid">
                <div className="image-upload-card">
                  <div
                    className="image-preview-area"
                    onDrop={(e) => handleDrop(e, 'logo')}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    {signatureData.companyLogoUrl ? (
                      <img src={signatureData.companyLogoUrl} alt="Logo" className="uploaded-image" />
                    ) : (
                      <div className="image-placeholder">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    className="btn-upload"
                    onClick={() => {
                      setUploadType('logo')
                      setShowUploadModal(true)
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12V4M4 8L8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Upload Logo
                  </button>
                  <div className="upload-divider">OR</div>
                  <div className="form-group">
                    <label>Logo URL</label>
                    <input
                      type="url"
                      value={signatureData.companyLogoUrl && !signatureData.companyLogoUrl.startsWith('data:') ? signatureData.companyLogoUrl : ''}
                      onChange={(e) => handleInputChange('companyLogoUrl', e.target.value)}
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
                <div className="image-tips-card">
                  <div className="tips-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Logo Guidelines</h4>
                  <ul>
                    <li>Use transparent PNG for best results</li>
                    <li>Horizontal logos work best</li>
                    <li>Maximum width: 200-250px</li>
                    <li>Ensure high resolution for clarity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Templates Section */}
          <div className="form-section">
            <div className="form-section-header">
              <span className="section-number">3</span>
              <div>
                <h2>Templates</h2>
                <p>Choose your layout style</p>
              </div>
            </div>

            <div className="templates-container">
              <h3>Choose Your Template</h3>
              <p>Select a signature layout that best represents your professional brand</p>

              <div className="templates-grid">
                <div
                  className={`template-card ${signatureData.template === 'classic' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('template', 'classic')}
                >
                  {signatureData.template === 'classic' && (
                    <div className="template-checkmark">✓</div>
                  )}
                  <h4>Classic</h4>
                  <p>Traditional layout with contact details on the right</p>
                  <div className="template-preview">
                    <div className="preview-box classic-preview">
                      <div className="preview-avatar-wrapper">
                        <div className="preview-avatar"></div>
                      </div>
                      <div className="preview-divider"></div>
                      <div className="preview-text">
                        <div className="preview-name">John Doe</div>
                        <div>Marketing Manager</div>
                        <div>E: john@example.com</div>
                        <div>P: (555) 123-4567</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`template-card ${signatureData.template === 'compact' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('template', 'compact')}
                >
                  {signatureData.template === 'compact' && (
                    <div className="template-checkmark">✓</div>
                  )}
                  <h4>Compact</h4>
                  <p>Space-efficient layout perfect for mobile</p>
                  <div className="template-preview">
                    <div className="preview-box compact-preview">
                      <div>
                        <span className="preview-name">John Doe</span>
                        <span> | Marketing Manager | Acme Corp</span>
                      </div>
                      <div>john@example.com | (555) 123-4567</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`template-card ${signatureData.template === 'minimal' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('template', 'minimal')}
                >
                  {signatureData.template === 'minimal' && (
                    <div className="template-checkmark">✓</div>
                  )}
                  <h4>Minimal</h4>
                  <p>Simple text-based signature with subtle styling</p>
                  <div className="template-preview">
                    <div className="preview-box minimal-preview">
                      <div className="preview-name">John Doe</div>
                      <div>Marketing Manager at Acme Corp</div>
                      <div>john@example.com | (555) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Styles Section */}
          <div className="form-section">
            <div className="form-section-header">
              <span className="section-number">4</span>
              <div>
                <h2>Styles</h2>
                <p>Colors, fonts & sizing</p>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="styles-subsection">
              <h3>Brand Colors</h3>
              <div className="styles-card">
                <div className="color-presets-group">
                  <label>Color Presets</label>
                  <div className="color-presets">
                    {colorPresets.map((color) => (
                      <button
                        key={color}
                        className={`color-preset ${signatureData.brandColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleInputChange('brandColor', color)}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="custom-color-group">
                  <label>Custom Color</label>
                  <div className="custom-color-input">
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: signatureData.brandColor }}
                    />
                    <input
                      type="text"
                      value={signatureData.brandColor}
                      onChange={(e) => handleInputChange('brandColor', e.target.value)}
                      placeholder="#603EFF"
                      pattern="^#[0-9A-Fa-f]{6}$"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="styles-subsection">
              <h3>Typography</h3>
              <div className="styles-card">
                <div className="font-family-group">
                  <label>Font Family</label>
                  <select
                    value={signatureData.fontFamily}
                    onChange={(e) => handleInputChange('fontFamily', e.target.value)}
                  >
                    {fontOptions.map((font) => (
                      <option key={font} value={font}>
                        {font}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="font-size-group">
                  <label>Font Size</label>
                  <div className="font-size-options">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <label key={size} className="radio-option">
                        <input
                          type="radio"
                          name="fontSize"
                          value={size}
                          checked={signatureData.fontSize === size}
                          onChange={(e) => handleInputChange('fontSize', e.target.value as 'small' | 'medium' | 'large')}
                        />
                        <span className="radio-label">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="styles-subsection">
              <h3>Preview</h3>
              <div className="styles-card">
                <div
                  className="style-preview-text"
                  style={{
                    color: signatureData.brandColor,
                    fontFamily: signatureData.fontFamily.split(' ')[0],
                    fontSize:
                      signatureData.fontSize === 'small'
                        ? '0.875rem'
                        : signatureData.fontSize === 'medium'
                        ? '1rem'
                        : '1.125rem',
                  }}
                >
                  Sample Text in Your Selected Style
                </div>
                <div className="style-preview-description">
                  This is how your signature text will appear with the current font and size settings.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resize Handle */}
        <div
          className="resize-handle"
          onMouseDown={handleResizeStart}
        >
          <div className="resize-handle-line"></div>
        </div>

        {/* Right Panel - Preview */}
        <div className="email-signature-preview-panel">
          <div className="preview-header">
            <h2>Live Preview</h2>
            <div className="preview-actions">
              <button className="btn-clear" onClick={handleClearAll}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4.5 4.5A4.75 4.75 0 0 1 12 6.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 4.25L12 6.25L10 6.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 11.5A4.75 4.75 0 0 1 4 9.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 11.75L4 9.75L6 9.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Clear all input fields
              </button>
              <button className="btn-create" onClick={handleCreateSignature} disabled={isCreating}>
                {isCreating ? 'Creating...' : 'Create signature'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="preview-email-window">
            <div className="email-window-header">
              <div className="window-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="email-window-body">
              <div className="email-to">
                To: <span className="recipient-tag">Your Recipient</span>
              </div>
              <div className="email-subject">Subject: Check out my new Email Signature</div>
              <div className="email-body-lines">
                <div className="email-line"></div>
                <div className="email-line"></div>
                <div className="email-line"></div>
              </div>
              <div className="email-signature-preview">
                <SignaturePreview data={signatureData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="upload-modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
            <div className="upload-modal-header">
              <button className="btn-modal-cancel" onClick={() => setShowUploadModal(false)}>
                Cancel
              </button>
              <div className="upload-modal-title">1 file selected</div>
              <button className="btn-modal-close" onClick={() => setShowUploadModal(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div
              className={`upload-modal-content ${dragActive ? 'drag-active' : ''}`}
              onDrop={(e) => {
                handleDrop(e, uploadType!)
                setShowUploadModal(false)
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleFileInput(e, uploadType!)
                }}
              />
              <div className="upload-dropzone">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Drop files here or <label htmlFor="file-upload" className="upload-link">browse files</label></p>
              </div>
            </div>
            <div className="upload-modal-footer">
              <button
                className="btn-upload-file"
                onClick={() => {
                  document.getElementById('file-upload')?.click()
                }}
              >
                Upload 1 file
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="email-modal-overlay" onClick={() => setShowEmailModal(false)}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <button className="email-modal-close" onClick={() => setShowEmailModal(false)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <h2>Your Free Email Signature is Almost Ready</h2>
            <p>
              We're committed to your privacy. Leadpages uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#9061EE', textDecoration: 'underline' }}>
                Privacy Policy
              </a>
              .
            </p>
            <div className="email-modal-form">
              <label htmlFor="email-input">Email Address</label>
              <input
                id="email-input"
                type="email"
                value={emailForSubmission}
                onChange={(e) => setEmailForSubmission(e.target.value)}
                placeholder="john@example.com"
                className="email-modal-input"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isProcessing) {
                    handleEmailModalContinue()
                  }
                }}
              />
              <button className="btn-continue" onClick={handleEmailModalContinue} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && savedSignature && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button className="success-modal-close" onClick={() => setShowSuccessModal(false)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <h2>Your Signature Is Ready!</h2>
            <p>Copy, download, or add to your email client</p>
            
            <div className="success-modal-actions">
              <button 
                className="btn-copy-html"
                onClick={async () => {
                  try {
                    if (!savedSignature || !savedSignature.htmlContent) {
                      setError({ title: 'Copy failed', message: 'No signature content available. Please create a signature first.' })
                      setTimeout(() => setError(null), 5000)
                      return
                    }
                    await navigator.clipboard.writeText(savedSignature.htmlContent)
                    setShowToast({ type: 'copy', message: 'Copied!' })
                    setTimeout(() => setShowToast({ type: null, message: '' }), 3000)
                  } catch (err: any) {
                    setError({ 
                      title: 'Copy failed', 
                      message: err?.message || 'Could not copy to clipboard. Please try again.' 
                    })
                    setTimeout(() => setError(null), 5000)
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.5 3.5H3.5C2.67 3.5 2 4.17 2 5v7.5c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V10.5M5.5 3.5c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5M5.5 3.5V2c0-.83.67-1.5 1.5-1.5H11c.83 0 1.5.67 1.5 1.5v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copy HTML
              </button>
              <button 
                className="btn-download-html"
                onClick={() => {
                  try {
                    if (!savedSignature || !savedSignature.htmlContent) {
                      setError({ title: 'Download failed', message: 'No signature content available. Please create a signature first.' })
                      setTimeout(() => setError(null), 5000)
                      return
                    }
                    const blob = new Blob([savedSignature.htmlContent], { type: 'text/html' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'signature.html'
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                    URL.revokeObjectURL(url)
                    setShowToast({ type: 'download', message: 'Downloaded!' })
                    setTimeout(() => setShowToast({ type: null, message: '' }), 3000)
                  } catch (err: any) {
                    setError({ 
                      title: 'Download failed', 
                      message: err?.message || 'Could not download HTML file. Please try again.' 
                    })
                    setTimeout(() => setError(null), 5000)
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 11V1M8 11L4 7M8 11L12 7M2 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download .html
              </button>
            </div>

            <div className="more-download-options-container">
              <button 
                className="more-download-options" 
                onClick={(e) => {
                  e.preventDefault()
                  setShowMoreOptions(!showMoreOptions)
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 11V1M8 11L4 7M8 11L12 7M2 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                More Download Options
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 'auto', transform: showMoreOptions ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showMoreOptions && (
                <div className="more-download-options-dropdown">
                  <button 
                    className="download-option-item"
                    onClick={() => {
                      try {
                        if (!savedSignature) {
                          setError({ title: 'Export failed', message: 'No signature available. Please create a signature first.' })
                          setTimeout(() => setError(null), 5000)
                          return
                        }
                        const parsedData = JSON.parse(savedSignature.signatureData)
                        const fullName = `${parsedData.firstName || ''} ${parsedData.lastName || ''}`.trim()
                        
                        let textContent = ''
                        if (fullName) textContent += `${fullName}\n\n`
                        if (parsedData.jobTitle) textContent += `${parsedData.jobTitle}\n\n`
                        if (parsedData.department) textContent += `${parsedData.department}\n\n`
                        if (parsedData.company) textContent += `${parsedData.company}\n\n`
                        if (parsedData.email) textContent += `Email: ${parsedData.email}\n`
                        if (parsedData.website) textContent += `Website: ${parsedData.website}\n`
                        if (parsedData.address) textContent += `Address: ${parsedData.address}\n`
                        if (parsedData.linkedin || parsedData.twitter || parsedData.facebook || parsedData.instagram) {
                          textContent += '\n\n'
                          if (parsedData.linkedin) textContent += `LinkedIn: ${parsedData.linkedin}\n`
                          if (parsedData.twitter) textContent += `Twitter: ${parsedData.twitter}\n`
                          if (parsedData.facebook) textContent += `Facebook: ${parsedData.facebook}\n`
                          if (parsedData.instagram) textContent += `Instagram: ${parsedData.instagram}\n`
                        }
                        
                        const blob = new Blob([textContent], { type: 'text/plain' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'signature.txt'
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                        setShowToast({ type: 'download', message: 'Exported as plain text' })
                        setTimeout(() => setShowToast({ type: null, message: '' }), 3000)
                      } catch (err: any) {
                        setError({ 
                          title: 'Export failed', 
                          message: err?.message || 'Could not generate plain text file. Please try again.' 
                        })
                        setTimeout(() => setError(null), 5000)
                      }
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Plain Text (.txt)
                  </button>
                  <button 
                    className="download-option-item"
                    onClick={() => {
                      try {
                        if (!savedSignature) {
                          setError({ title: 'Export failed', message: 'No signature available. Please create a signature first.' })
                          setTimeout(() => setError(null), 5000)
                          return
                        }
                        const parsedData = JSON.parse(savedSignature.signatureData)
                        const fullName = `${parsedData.firstName || ''} ${parsedData.lastName || ''}`.trim()
                        
                        // Build SVG content
                        let yPos = 20
                        const lineHeight = 20
                        const spacing = 24
                        const fontSize = 14
                        const color = parsedData.primaryColor || '#14b8a6'
                        
                        // Calculate total height
                        let totalHeight = 20
                        if (fullName) totalHeight += spacing
                        if (parsedData.jobTitle) totalHeight += spacing
                        if (parsedData.department) totalHeight += spacing
                        if (parsedData.company) totalHeight += spacing
                        if (parsedData.email) totalHeight += lineHeight
                        if (parsedData.website) totalHeight += lineHeight
                        if (parsedData.address) totalHeight += lineHeight
                        if (parsedData.linkedin || parsedData.twitter || parsedData.facebook || parsedData.instagram) {
                          totalHeight += spacing
                          if (parsedData.linkedin) totalHeight += lineHeight
                          if (parsedData.twitter) totalHeight += lineHeight
                          if (parsedData.facebook) totalHeight += lineHeight
                          if (parsedData.instagram) totalHeight += lineHeight
                        }
                        totalHeight += 20
                        
                        // Escape XML special characters
                        const escapeXml = (str: string) => {
                          return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
                        }
                        
                        let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .name { font-family: Arial, sans-serif; font-size: ${fontSize + 2}px; font-weight: bold; fill: ${color}; }
    .text { font-family: Arial, sans-serif; font-size: ${fontSize}px; fill: #333333; }
    .label { font-family: Arial, sans-serif; font-size: ${fontSize}px; fill: #333333; }
  </style>
`
                        
                        if (fullName) {
                          svgContent += `  <text x="0" y="${yPos}" class="name">${escapeXml(fullName)}</text>\n`
                          yPos += spacing
                        }
                        
                        if (parsedData.jobTitle) {
                          svgContent += `  <text x="0" y="${yPos}" class="text">${escapeXml(parsedData.jobTitle)}</text>\n`
                          yPos += spacing
                        }
                        
                        if (parsedData.department) {
                          svgContent += `  <text x="0" y="${yPos}" class="text">${escapeXml(parsedData.department)}</text>\n`
                          yPos += spacing
                        }
                        
                        if (parsedData.company) {
                          svgContent += `  <text x="0" y="${yPos}" class="text">${escapeXml(parsedData.company)}</text>\n`
                          yPos += spacing
                        }
                        
                        if (parsedData.email) {
                          svgContent += `  <text x="0" y="${yPos}" class="label">Email: <tspan fill="${color}">${escapeXml(parsedData.email)}</tspan></text>\n`
                          yPos += lineHeight
                        }
                        
                        if (parsedData.website) {
                          svgContent += `  <text x="0" y="${yPos}" class="label">Website: <tspan fill="${color}">${escapeXml(parsedData.website)}</tspan></text>\n`
                          yPos += lineHeight
                        }
                        
                        if (parsedData.address) {
                          svgContent += `  <text x="0" y="${yPos}" class="label">Address: ${escapeXml(parsedData.address)}</text>\n`
                          yPos += lineHeight
                        }
                        
                        if (parsedData.linkedin || parsedData.twitter || parsedData.facebook || parsedData.instagram) {
                          yPos += spacing
                          if (parsedData.linkedin) {
                            svgContent += `  <text x="0" y="${yPos}" class="label">LinkedIn: <tspan fill="${color}">${escapeXml(parsedData.linkedin)}</tspan></text>\n`
                            yPos += lineHeight
                          }
                          if (parsedData.twitter) {
                            svgContent += `  <text x="0" y="${yPos}" class="label">Twitter: <tspan fill="${color}">${escapeXml(parsedData.twitter)}</tspan></text>\n`
                            yPos += lineHeight
                          }
                          if (parsedData.facebook) {
                            svgContent += `  <text x="0" y="${yPos}" class="label">Facebook: <tspan fill="${color}">${escapeXml(parsedData.facebook)}</tspan></text>\n`
                            yPos += lineHeight
                          }
                          if (parsedData.instagram) {
                            svgContent += `  <text x="0" y="${yPos}" class="label">Instagram: <tspan fill="${color}">${escapeXml(parsedData.instagram)}</tspan></text>\n`
                          }
                        }
                        
                        svgContent += `</svg>`
                        
                        const blob = new Blob([svgContent], { type: 'image/svg+xml' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'signature.svg'
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                        setShowToast({ type: 'download', message: 'Exported as SVG' })
                        setTimeout(() => setShowToast({ type: null, message: '' }), 3000)
                      } catch (err: any) {
                        setError({ 
                          title: 'Export failed', 
                          message: err?.message || 'Could not generate SVG file. Please try again.' 
                        })
                        setTimeout(() => setError(null), 5000)
                      }
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 6L8 9L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    SVG Image (.svg)
                  </button>
                  <button 
                    className="download-option-item"
                    onClick={async () => {
                      try {
                        if (!savedSignature) {
                          setError({ title: 'Export failed', message: 'No signature available. Please create a signature first.' })
                          setTimeout(() => setError(null), 5000)
                          return
                        }
                        
                        const parsedData = JSON.parse(savedSignature.signatureData)
                        // Generate QR code data - using the HTML content or a URL
                        const qrData = savedSignature.htmlContent || window.location.href
                        
                        // Use QR code API to generate the image
                        const qrSize = 512
                        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
                        
                        // Fetch the QR code image
                        const response = await fetch(qrUrl)
                        if (!response.ok) {
                          throw new Error('Failed to generate QR code')
                        }
                        
                        const blob = await response.blob()
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'signature-qr.png'
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                        setShowToast({ type: 'download', message: 'Exported as QR code' })
                        setTimeout(() => setShowToast({ type: null, message: '' }), 3000)
                      } catch (err: any) {
                        setError({ 
                          title: 'Export failed', 
                          message: err?.message || 'Could not generate QR code. Please try again.' 
                        })
                        setTimeout(() => setError(null), 5000)
                      }
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="4" y="4" width="2" height="2" fill="currentColor"/>
                      <rect x="7" y="4" width="2" height="2" fill="currentColor"/>
                      <rect x="10" y="4" width="2" height="2" fill="currentColor"/>
                      <rect x="4" y="7" width="2" height="2" fill="currentColor"/>
                      <rect x="7" y="7" width="2" height="2" fill="currentColor"/>
                      <rect x="10" y="7" width="2" height="2" fill="currentColor"/>
                      <rect x="4" y="10" width="2" height="2" fill="currentColor"/>
                      <rect x="7" y="10" width="2" height="2" fill="currentColor"/>
                      <rect x="10" y="10" width="2" height="2" fill="currentColor"/>
                    </svg>
                    QR Code (.png)
                  </button>
                </div>
              )}
            </div>

            <div className="add-to-email-section">
              <h3>ADD TO EMAIL</h3>
              <div className="email-client-accordions">
                {[
                  { id: 'gmail', name: 'Gmail', instructions: [
                    'Open Gmail Settings (gear icon) → See all settings',
                    'Scroll to "Signature" section',
                    'Click "Create new" and paste your HTML (Ctrl+V or Cmd+V)',
                    'Scroll down and click "Save Changes"'
                  ]},
                  { id: 'outlook', name: 'Outlook', instructions: [
                    'Click File → Options → Mail → Signatures',
                    'Click "New" to create a new signature',
                    'Paste your HTML in the editor (Ctrl+V or Cmd+V)',
                    'Click "OK" to save'
                  ]},
                  { id: 'apple-mail', name: 'Apple Mail', instructions: [
                    'Open Mail → Settings → Signatures',
                    'Click "+" to create a new signature',
                    'Paste your HTML (Cmd+V)',
                    'Close settings - signature is auto-saved'
                  ]},
                  { id: 'yahoo', name: 'Yahoo', instructions: [
                    'Click Settings (gear icon) → More Settings → Writing email',
                    'Find "Signature" section',
                    'Paste your HTML (Ctrl+V or Cmd+V)',
                    'Click "Save" at the top'
                  ]},
                  { id: 'other', name: 'Other', instructions: [
                    'Open your email client\'s settings/preferences',
                    'Look for "Signature" or "Email Signature" section',
                    'Paste the HTML code (Ctrl+V or Cmd+V)',
                    'Save your changes'
                  ]}
                ].map((client) => (
                  <div key={client.id} className="email-client-accordion">
                    <button
                      className="email-client-accordion-header"
                      onClick={() => setExpandedClient(expandedClient === client.id ? null : client.id)}
                    >
                      <span>{client.name}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: expandedClient === client.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {expandedClient === client.id && (
                      <div className="email-client-instructions">
                        <ol>
                          {client.instructions.map((instruction, idx) => (
                            <li key={idx}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      {showToast.type && (
        <div className={`toast-notification toast-${showToast.type}`}>
          <div className="toast-content">
            <strong>{showToast.message}</strong>
            {showToast.type === 'copy' && <span>Paste into your email client in 2 clicks.</span>}
            {showToast.type === 'download' && (
              <span>
                {showToast.message === 'Exported as plain text' 
                  ? 'Your signature has been downloaded as a text file.'
                  : showToast.message === 'Exported as SVG'
                  ? 'Your signature has been downloaded as an SVG image.'
                  : showToast.message === 'Exported as QR code'
                  ? 'Your signature has been downloaded as a QR code image.'
                  : showToast.message === 'Downloaded!'
                  ? 'Your signature has been saved as signature.html.'
                  : 'Your signature has been downloaded.'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error Banner */}
      {error && (
        <div className="error-banner">
          <div className="error-banner-content">
            <strong>{error.title}</strong>
            <span>{error.message}</span>
          </div>
          <button 
            className="error-banner-close"
            onClick={() => setError(null)}
            aria-label="Close error"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

function SignaturePreview({ data }: { data: SignatureData }) {
  const fullName = `${data.firstName} ${data.lastName}`.trim() || 'Your Name'
  
  // Build contact info line
  const contactParts = []
  if (data.email) contactParts.push(data.email)
  if (data.phone) contactParts.push(data.phone)
  if (data.website) contactParts.push(data.website)
  const contactLine = contactParts.join(' | ')

  // Build social media buttons
  const socialLinks = []
  if (data.linkedin) socialLinks.push({ name: 'LinkedIn', url: data.linkedin })
  if (data.twitter) socialLinks.push({ name: 'Twitter', url: data.twitter })
  if (data.facebook) socialLinks.push({ name: 'Facebook', url: data.facebook })
  if (data.instagram) socialLinks.push({ name: 'Instagram', url: data.instagram })

  const fontFamilyName = data.fontFamily.split(' ')[0]
  const fontSizeValue =
    data.fontSize === 'small' ? '0.875rem' : data.fontSize === 'medium' ? '1rem' : '1.125rem'

  return (
    <div
      className={`signature-preview signature-${data.template}`}
      style={{
        fontFamily: fontFamilyName,
        fontSize: fontSizeValue,
      }}
    >
      {data.template === 'classic' && (
        <div className="signature-classic">
          <div className="signature-avatar">
            {data.profilePhotoUrl ? (
              <img src={data.profilePhotoUrl} alt="Profile" className="avatar-image" />
            ) : (
              <div className="avatar-placeholder"></div>
            )}
          </div>
          <div className="signature-content">
            <div className="signature-header-row">
              <div className="signature-name" style={{ color: data.brandColor }}>
                {fullName}
              </div>
              {data.companyLogoUrl && (
                <img src={data.companyLogoUrl} alt="Company Logo" className="signature-logo" />
              )}
            </div>
            {data.jobTitle && <div>{data.jobTitle}</div>}
            {data.department && <div>{data.department}</div>}
            {data.companyName && <div>{data.companyName}</div>}
            {data.email && <div>E: {data.email}</div>}
            {data.phone && <div>P: {data.phone}</div>}
            {data.website && <div>W: {data.website}</div>}
            {data.address && <div>{data.address}</div>}
            {socialLinks.length > 0 && (
              <div className="signature-social-buttons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-button"
                    style={{ backgroundColor: data.brandColor }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {data.template === 'compact' && (
        <div className="signature-compact">
          <div className="signature-compact-header">
            <div>
              <span className="signature-name" style={{ color: data.brandColor }}>
                {fullName}
              </span>
              {data.jobTitle && <span> | {data.jobTitle}</span>}
              {data.companyName && <span> | {data.companyName}</span>}
            </div>
            {data.companyLogoUrl && (
              <img src={data.companyLogoUrl} alt="Company Logo" className="signature-logo-small" />
            )}
          </div>
          {(data.email || data.phone || data.website) && (
            <div className="signature-contact">
              {data.email && <a href={`mailto:${data.email}`} style={{ color: data.brandColor }}>{data.email}</a>}
              {data.email && data.phone && <span> | </span>}
              {data.phone && <a href={`tel:${data.phone}`}>{data.phone}</a>}
              {(data.email || data.phone) && data.website && <span> | </span>}
              {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" style={{ color: data.brandColor }}>{data.website}</a>}
            </div>
          )}
          {socialLinks.length > 0 && (
            <div className="signature-social-buttons">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} className="social-button" target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {data.template === 'minimal' && (
        <div className="signature-minimal">
          <div className="signature-minimal-header">
            <div className="signature-name" style={{ color: data.brandColor }}>
              {fullName}
            </div>
            {data.companyLogoUrl && (
              <img src={data.companyLogoUrl} alt="Company Logo" className="signature-logo-small" />
            )}
          </div>
          {data.jobTitle && (
            <div>
              {data.jobTitle}
              {data.companyName && ` at ${data.companyName}`}
            </div>
          )}
          {(data.email || data.phone || data.website) && (
            <div>
              {data.email && <a href={`mailto:${data.email}`} style={{ color: data.brandColor }}>{data.email}</a>}
              {data.email && data.phone && <span> | </span>}
              {data.phone && <a href={`tel:${data.phone}`}>{data.phone}</a>}
              {(data.email || data.phone) && data.website && <span> | </span>}
              {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" style={{ color: data.brandColor }}>{data.website}</a>}
            </div>
          )}
          {socialLinks.length > 0 && (
            <div className="signature-social-buttons">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} className="social-button" target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

