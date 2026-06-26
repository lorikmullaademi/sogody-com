import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { sanityClient } from "../../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import ProgressBar from "../ProgressBar"
import useDeviceCheck from "../../deviceCheck"
import InitKoalendar from "../init-koalendar"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ({ data }) {
  const pageData = data?.Cards
  const servicesTechList = data
  const isMobile = useDeviceCheck()

  if (!pageData) return null

  const builder = imageUrlBuilder(sanityClient)
  const urlFor = source => builder.image(source)

  const [currentIndex, setCurrentIndex] = useState(0)
  const representativeCard = pageData[pageData.length - 1]

  const handleProgressComplete = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % (pageData.length - 1))
  }

  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    swipe: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    afterChange: index => setCurrentIndex(index),
  }

  return (
    <div className="services-technologies-list d-flex flex-column align-items-center">
      <h2 className="title mb-4 pt-3">{servicesTechList.title}</h2>

      {!isMobile && (
        <div className="services-digital-experiences mt-4">
          <Row className="g-4">
            {pageData.map(
              (card, index) =>
                index !== pageData.length - 1 && (
                  <Col key={index} xs={12} sm={8} md={4}>
                    <div className="services-digital-experience d-flex flex-column h-100 justify-content-between">
                      <div
                        className="services-digital-experience-image"
                        style={{
                          backgroundImage: `url(${urlFor(
                            card?.image?.asset
                          ).url()})`,
                          opacity: 0.65,
                        }}
                      ></div>
                      <div className="px-4 pb-2">
                        <h2 className="block-title p-0 mb-2 d-flex justify-content-start">
                          {card?.title}
                        </h2>
                        <p className="subtitle">{card?.description}</p>
                      </div>
                    </div>
                  </Col>
                )
            )}
            <Col xs={12} sm={8} md={4}>
              <div
                className="services-digital-experience last-card pb-3 align-items-end d-flex"
                style={{
                  backgroundImage: `url(${urlFor(
                    representativeCard?.image?.asset
                  ).url()})`,
                }}
              >
                <div className="px-4 pb-3">
                  <h2 className="block-title last-card-title p-0 mb-2 d-flex justify-content-start">
                    {representativeCard?.title}
                  </h2>
                  <p className="subtitle last-card-description mt-0 mb-5">
                    {representativeCard?.description}
                  </p>
                  <InitKoalendar
                    showButton={true}
                    variant="green-black"
                    className="contact-us-link button-padding"
                    buttonText="Set up a Meeting"
                    iframeSrc={representativeCard?.href}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}

      {isMobile && (
        <>
          <div className="services-digital-experiences w-100 my-4">
            <Slider {...sliderSettings}>
              {pageData.slice(0, pageData.length - 1).map((card, index) => (
                <div
                  key={index}
                  className="services-digital-experience px-4 pb-2"
                >
                  <div
                    className="services-digital-experience-image"
                    style={{
                      backgroundImage: `url(${
                        card?.image?.asset
                          ? urlFor(card?.image?.asset).url()
                          : "https://via.placeholder.com/150"
                      })`,
                    }}
                  ></div>
                  <h2 className="block-title p-0 mb-2 d-flex justify-content-start">
                    {card?.title}
                  </h2>
                  <p className="subtitle">{card?.description}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="progress-bar-main-container">
            <ProgressBar
              key={currentIndex}
              onComplete={handleProgressComplete}
              duration={5000}
            />
          </div>

          <div className="services-digital-experiences w-100 my-4">
            <div
              className="services-digital-experience representative-mobile last-card pb-3 align-items-end d-flex"
              style={{
                backgroundImage: `url(${urlFor(
                  representativeCard?.image?.asset
                ).url()})`,
              }}
            >
              <div className="px-4 pb-2">
                <h2 className="block-title last-card-title p-0 mb-2 d-flex justify-content-start">
                  {representativeCard?.title}
                </h2>
                <p className="subtitle last-card-description mt-0 mb-5">
                  {representativeCard?.description}
                </p>
                <InitKoalendar
                  showButton={true}
                  variant="green-black"
                  className="contact-us-link button-padding"
                  buttonText="Set up a Meeting"
                  iframeSrc={representativeCard?.href}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
