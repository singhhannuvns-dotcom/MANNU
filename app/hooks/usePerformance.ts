'use client'

import { useEffect, useState } from 'react'

export function usePerformance() {
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    // Check device capabilities
    const checkPerformance = () => {
      // Check CPU cores
      const cpuCores = navigator.hardwareConcurrency || 2
      
      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory || 4
      
      // Check connection type (if available)
      const connection = (navigator as any).connection
      const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g'
      
      // Determine if device is low-end
      const lowEnd = cpuCores <= 2 || deviceMemory <= 2 || isSlowConnection
      
      setIsLowEnd(lowEnd)
    }

    checkPerformance()
  }, [])

  return { isLowEnd }
}

