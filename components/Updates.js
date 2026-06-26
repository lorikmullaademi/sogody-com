import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProgressBar from "./ProgressBar"
import ExploreLink from "./ExploreLink"
import useDeviceCheck from "../deviceCheck"

import "../assets/scss/components/updates-single.scss"
const Updates = () => {
  const data = useStaticQuery(graphql`
    query UpdatesSingleQuery22 {
      allSanityUpdates(sort: { order: DESC, fields: upDate }) {
        nodes {
          id
          upTitle
          upSlug
          upDescription {
            children {
              text
            }
          }
          upImage {
            asset {
              url
            }
          }
        }
      }
    }
  `)

  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useDeviceCheck()

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength).trim()}...`
  }

  const updates = data?.allSanityUpdates?.nodes || []
  const currentUpdates = isMobile ? updates : updates.slice(0, 2)
  const totalSlides = currentUpdates.length

  const handleProgressComplete = () => {
    if (isMobile) {
      setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
    }
  }

  const updateToShow = isMobile ? currentUpdates[currentSlide] : null

  return (
    <div className="updates-single-container homepage-updates">
      <div className="title-subtitle-row mb-3">
        <h2 className="title p-0 text-left">
          How We See the Future of Product, AI, and Engineering
        </h2>
        <div
          className={`subtitle-div d-flex flex-column`}
        >
          <ExploreLink to="/updates/" text="Explore Our Thinking" />
          <p className={`subtitle m-0 ${isMobile ? "mb-2" : ""}`}>
            Discover how our thinking drive real success.
          </p>
        </div>
      </div>

      <div className="updates-list">
        {isMobile ? (
          <div key={updateToShow.id} className="update-card">
            <div className="update-content-row py-3">
              <div className="update-text">
                <h2 className="title w-100">
                  {truncateText(updateToShow.upTitle, 80)}
                </h2>
                <p className="subtitle">
                  {truncateText(
                    updateToShow.upDescription?.[0]?.children?.[0]?.text ||
                    "No description available",
                    90
                  )}
                </p>
                <ExploreLink
                  to={`/updates/${updateToShow.upSlug}/`}
                  text="Explore more"
                />
              </div>
              {updateToShow.upImage?.asset?.url && (
                <div
                  className="update-image"
                  style={{
                    backgroundImage: `url(${updateToShow.upImage.asset.url})`,
                  }}
                ></div>
              )}
            </div>
          </div>
        ) : (
          currentUpdates.map(update => (
            <div key={update.id} className="update-card">
              <div className="update-content-row py-2">
                <div className="update-text">
                  <h2 className="title">{truncateText(update.upTitle, 80)}</h2>
                  <p className="subtitle">
                    {truncateText(
                      update.upDescription?.[0]?.children?.[0]?.text ||
                      "No description available",
                      90
                    )}
                  </p>
                  <ExploreLink
                    to={`/updates/${update.upSlug}/`}
                    text="Explore more"
                    underlined={false}
                  />
                </div>
                {update.upImage?.asset?.url && (
                  <div
                    className="update-image"
                    style={{
                      backgroundImage: `url(${update.upImage.asset.url})`,
                    }}
                  ></div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {isMobile && totalSlides > 1 && (
        <ProgressBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onComplete={handleProgressComplete}
          duration={5000}
        />
      )}
    </div>
  )
}

export default Updates
