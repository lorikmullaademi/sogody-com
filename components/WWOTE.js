import React, { useState, useRef, useEffect } from "react"
import "../assets/style.css"
import { Row, Col } from "react-bootstrap"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import useDeviceCheck from "../deviceCheck"

export default function ({ data }) {
  const pageData = data?.Cards
  const servicesTechList = data
  const isMobile = useDeviceCheck("mobile")
  const isTablet = useDeviceCheck("tablet")

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const imageRefs = useRef([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      const maxScroll = scrollWidth - clientWidth
      const scrolledPercent = (scrollLeft / maxScroll) * 100
      setScrollProgress(scrolledPercent)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  if (!pageData) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="wwo-te scroll-show">
      <div className="d-flex desktop-row w-100 gap mb-4">
        <h2 className="title pt-0 flex-grow-1 text-left">
          {servicesTechList.title}
        </h2>
        <p className="subtitle m-0 flex-grow-1">{servicesTechList.subtitle}</p>
      </div>

      <div
        className={`cards-container ${isMobile ? "mobile-scroll" : ""}`}
        ref={containerRef}
      >
        <Row className="flex-nowrap">
          {pageData.map((cardData, index) => (
            <Col key={index}>
              <div
                className="solution-card text-center"
                style={{
                  borderLeft: index !== 0 ? "2px solid #e8e8e8" : "none",
                  marginBottom:
                    index === 4 || index === 5
                      ? "5.5rem"
                      : index === 1 || index === 2 || index === 3
                      ? "2rem"
                      : "0px",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="block-subtitle subtitle p-0">{cardData.title}</p>
                <p
                  className={`block-title break-text ${
                    !isMobile ? "px-5" : "mx-4"
                  } word-wrap-text`}
                >
                  {cardData.description}
                </p>
                <img
                  ref={el => (imageRefs.current[index] = el)}
                  src={
                    hoveredIndex === index && cardData.hoverImage?.asset
                      ? urlFor(cardData.hoverImage?.asset).url()
                      : urlFor(cardData.image?.asset).url()
                  }
                  alt={cardData.title}
                  className={`img-fluid img-set-height mt-2 w-100 ${
                    index === 2
                      ? "mt-4"
                      : index === 3 || index === 4
                      ? "mt-5"
                      : ""
                  }`}
                />
                {hoveredIndex === index && (
                  <div
                    className="hover-popup"
                    style={{
                      top:
                        imageRefs.current[index]?.offsetTop +
                        imageRefs.current[index]?.offsetHeight +
                        10 +
                        "px",
                      zIndex: 9999,
                    }}
                  >
                    <div className="bubble-pointer"></div>
                    <p className="subtitle m-0 p-0">
                      {cardData.popUpMessage || "Default pop-up message"}
                    </p>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
      {isTablet && (
        <div className="horizontal-scroll-progress-bar">
          <div
            className="horizontal-scroll-progress"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}
