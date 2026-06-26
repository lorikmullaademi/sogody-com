import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProgressBar from "./ProgressBar"
import ExploreLink from "./ExploreLink"
import useDeviceCheck from "../deviceCheck"

const UpdatesSingle = () => {
  const data = useStaticQuery(graphql`
    query UpdatesSingleQuery {
      allSanityPage {
        nodes {
          modules {
            ... on SanityUpdatesSingle {
              slug
              title
              subtitle
              updates {
                _id
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
        }
      }
    }
  `)

  const [currentPath, setCurrentPath] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useDeviceCheck()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const currentUrlSegment = currentPath.split("/").filter(Boolean).pop()

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    const truncated = text.slice(0, maxLength)
    return `${truncated.trim()}...`
  }

  const modulesWithUpdates = data?.allSanityPage?.nodes
    .map(node => node.modules)
    .flat()
    .filter(
      module => module.slug === currentUrlSegment && module.updates?.length > 0
    )

  if (!modulesWithUpdates || modulesWithUpdates.length === 0) {
    console.error("No updates available")
    return <p>No updates available</p>
  }

  const updates = modulesWithUpdates[0].updates || []

  const currentUpdates = isMobile ? updates : updates.slice(0, 2)

  const totalSlides = currentUpdates.length
  const handleProgressComplete = () => {
    if (isMobile) {
      setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
    }
  }

  const updateToShow = isMobile ? currentUpdates[currentSlide] : null

  const formatTitleWithLineBreak = (title = "") => {
    const index = title.indexOf("\\n")
    if (index === -1) return title
    return (
      <>
        {title.slice(0, index)}
        <br />
        {" "}{title.slice(index + 2).trim()}
      </>
    )
  }

  return (
    <div className="updates-single-container">
      <div className="title-subtitle-row mb-2">
        <h2 className="title p-0 text-left">
          {formatTitleWithLineBreak(modulesWithUpdates[0].title)}
        </h2>
        <div
          className={`subtitle-div subtitle-end d-flex flex-column ${
            isMobile ? "flex-column-reverse" : ""
          }`}
        >
          <p className={`subtitle m-0 ${isMobile ? "mb-2" : ""}`}>
            {modulesWithUpdates[0].subtitle}
          </p>
          <ExploreLink to="/updates/" text="Explore All Insights" />
        </div>
      </div>

      <div className="updates-list">
        {isMobile ? (
          <div key={updateToShow._id} className="update-card">
            <div className="update-content-row py-1">
              <div className="update-text">
                <h2 className="title">
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
                  underlined={false}
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
            <div key={update._id} className="update-card">
              <div className="update-content-row py-3">
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
          duration={10000}
        />
      )}
    </div>
  )
}

export default UpdatesSingle
