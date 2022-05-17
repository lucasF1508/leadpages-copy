import React from 'react'

const SANITY_STUDIO_API_DATASET = process.env.SANITY_STUDIO_API_DATASET
const SANITY_STUDIO_PROJECT_NAME = process.env.SANITY_STUDIO_PROJECT_NAME

const Branding = (props) => (
  <div style={{ display: 'flex', flexFlow: 'column' }}>
    <span
      style={{
        fontSize: '1.25rem',
        fontWeight: '700',
      }}
    >
      {SANITY_STUDIO_PROJECT_NAME}
    </span>
    <span
      style={{
        fontSize: '0.5rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}
    >
      {SANITY_STUDIO_API_DATASET}
    </span>
  </div>
)

export default Branding
