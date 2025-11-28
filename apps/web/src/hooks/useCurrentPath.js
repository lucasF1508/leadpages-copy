import { useEffect, useState } from 'react'

/**
 * Hook to safely get the current path
 * Works by reading from window.location when available (client-side)
 * @returns {string} Current path or empty string if not available
 */
export const useCurrentPath = () => {
  const [path, setPath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const [currentPath] = window.location.pathname.split(/[?#]/)
      setPath(currentPath || '')
    }
  }, [])

  return path
}

