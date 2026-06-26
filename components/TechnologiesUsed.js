import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import useDeviceCheck from "../deviceCheck"
import "../assets/scss/components/technologies-used.scss"

export default function ({ data }) {
  const pageData = data?.Cards
  const technologiesUsed = data
  const isMobile = useDeviceCheck("mobile")
  const isTablet = useDeviceCheck("tablet")

  if (!pageData) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="technologies-used d-flex flex-column align-items-center scroll-show my-3">
      <h2
        className={`title ${
          !isMobile || !isTablet ? "w-50 text-center mb-2" : "text-left"
        }`}
      >
        {technologiesUsed.title}
      </h2>

      <div className="services-digital-experiences mt-4">
        <Row className="g-4">
          {pageData.map((card, index) => (
            <Col key={index} xs={6} sm={6} md={2}>
              <div className="services-digital-experience d-flex flex-column justify-content-center p-3">
                <div
                  className="services-digital-experience-image"
                  style={{
                    backgroundImage: `url(${urlFor(card?.image.asset).url()})`,
                  }}
                ></div>

                <div className="text-center gap d-flex flex-column">
                  <h2 className="block-title p-0 m-0">{card?.title}</h2>
                  <p className="subtitle m-0">{card?.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
