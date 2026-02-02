'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          minHeight: '100vh', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          margin: 0,
          padding: 0
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, marginBottom: '1rem' }}>
            Something went wrong!
          </h2>
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#9333ea',
              color: '#fff',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
