import React, { useState, useEffect } from "react"
import "../assets/scss/components/announcement-banner.scss"
import { useStaticQuery, graphql } from "gatsby"

const AnnouncementBanner = () => {
  const data = useStaticQuery(graphql`
    query AnnouncementBannerQuery {
      allSanityAnnouncementBanner {
        nodes {
          id
          title
          showOnAllPages
          hideBanner
        }
      }
    }
  `)

  const banner = data?.allSanityAnnouncementBanner?.nodes[0]
  const [isVisible, setIsVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Automatically hide the banner after 10 seconds
    const timer = setTimeout(() => {
      handleClose()
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const bannerPadding = document.querySelector(".banner-padding")
    if (bannerPadding && !banner.hideBanner) {
      bannerPadding.style.marginTop = isVisible ? "180px" : "120px"
    }

    return () => {
      if (bannerPadding && !banner.hideBanner) {
        bannerPadding.style.marginTop = "120px"
      }
    }
  }, [isVisible])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  if (!isVisible || !banner || banner.hideBanner) {
    return null
  }

  return (
    <div className={`announcement-banner ${isClosing ? "closing" : ""}`}>
      <p className="announcement-title mt-1">🚀 {banner.title}</p>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  )
}

export default AnnouncementBanner
