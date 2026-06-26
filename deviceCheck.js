import { useState, useEffect } from "react"
import debounce from "lodash.debounce"

export default function useDeviceCheck(type = "mobile") {
  const [isDevice, setIsDevice] = useState(false)

  useEffect(() => {
    let mediaQuery

    if (type === "mobile") {
      mediaQuery = window.matchMedia("(max-width: 768px)")
    } else if (type === "tablet") {
      mediaQuery = window.matchMedia("(max-width: 1030px)")
    } else if (type === "small-mobile") {
      mediaQuery = window.matchMedia("(max-width: 600px)")
    } else if (type === "set-tablet") {
      mediaQuery = window.matchMedia(
        "(min-width: 769px) and (max-width: 1030px)"
      )
    }

    const handleResize = debounce(() => {
      setIsDevice(mediaQuery.matches)
    }, 200)

    handleResize()

    mediaQuery.addEventListener("change", handleResize)

    return () => {
      mediaQuery.removeEventListener("change", handleResize)
    }
  }, [type])

  return isDevice
}
