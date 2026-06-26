import React, { useState, useEffect } from "react"

const ProgressBar = ({ onComplete, duration = 3000, className = "" }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (onComplete) onComplete()
          clearInterval(progressInterval)
          return 0
        }
        return prev + 100 / (duration / 30)
      })
    }, 30)

    return () => {
      clearInterval(progressInterval)
    }
  }, [duration, onComplete])

  return (
    <div className={`progress-bar-container ${className}`}>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
