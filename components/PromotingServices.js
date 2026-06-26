import React, { useState } from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import greenArrow from "../assets/svgs/Arrow.svg"
import CircularButton from "./CircularButton"
import useDeviceCheck from "../deviceCheck"

export default function ({ data }) {
  const pageData = data?.Cards
  const promotingServices = data

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [openCardIndex, setOpenCardIndex] = useState(0)
  const isMobile = useDeviceCheck()

  if (!pageData) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  const handleCardToggle = index => {
    if (isMobile) {
      setOpenCardIndex(openCardIndex === index ? null : index)
    }
  }

  return (
    <div className="promoting-services-container d-flex flex-column align-items-start mt-5 scroll-show">
      <h2 className="title text-center pb-4">{promotingServices.title}</h2>
      {promotingServices.subtitle && (
        <p className="subtitle text-center gap">{promotingServices.subtitle}</p>
      )}

      <div className="promoting-services">
        <Row className="gap">
          {pageData.map((pageData, index) => (
            <Col xs={12} md={6} key={index}>
              <div className="promoting-services-column">
                <Link
                  to={`/services/${pageData?.href}/`}
                  className="services-digital-experience"
                  onClick={e => {
                    if (isMobile && openCardIndex !== index) {
                      e.preventDefault()
                      handleCardToggle(index)
                    }
                  }}
                >
                  {!isMobile || openCardIndex === index ? (
                    <div
                      className="promoting-services-image"
                      style={{
                        backgroundImage: `url(${urlFor(
                          pageData.image.asset
                        ).url()})`,
                      }}
                    >
                      <div
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <CircularButton
                          isHovered={hoveredIndex === index}
                          type="services"
                          slug={pageData?.href}
                        />
                      </div>
                    </div>
                  ) : null}

                  <div
                    className={`px-3 border-radius32 ${
                      isMobile && openCardIndex !== index
                        ? "bg-grey p-3"
                        : "pt-3 bg-white"
                    }`}
                  >
                    <h2
                      className={`block-title p-0 d-flex justify-content-start ${
                        isMobile && openCardIndex !== index ? "mb-0" : "mb-2"
                      }`}
                    >
                      {pageData.title}
                    </h2>

                    {isMobile ? (
                      openCardIndex === index ? (
                        <>
                          <p className="subtitle">{pageData.description}</p>
                          <Link
                            to={`/services/${pageData?.href}/`}
                            className="d-flex service-btn green dark-green-hover px-3"
                          >
                            Visit {pageData.title}{" "}
                            <span className="arrow-icon">
                              <img src={greenArrow} alt="Arrow Icon" />
                            </span>
                          </Link>
                        </>
                      ) : (
                        <div
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <CircularButton
                            isHovered={hoveredIndex === index}
                            type="services"
                            slug={pageData?.href}
                          />
                        </div>
                      )
                    ) : null}

                    {!isMobile && (
                      <>
                        <p className="subtitle">{pageData.description}</p>
                        <Link
                          to={`/services/${pageData?.href}/`}
                          className="d-flex service-btn green dark-green-hover px-3"
                        >
                          Visit {pageData.title}{" "}
                          <span className="arrow-icon">
                            <img src={greenArrow} alt="Arrow Icon" />
                          </span>
                        </Link>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
