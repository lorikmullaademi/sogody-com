import React, { useState, useRef } from "react"
import Slider from "react-slick"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import "../assets/style.css"
import useDeviceCheck from "../deviceCheck"
import ExploreLink from "./ExploreLink"

export default function ({ data, responsiveImage = false }) {
  const Replay =
    "https://cdn.sanity.io/images/3hfxs7a8/production/601e4edd77931890b2f01d507f5edb2cbc41d2d4-88x88.webp"
  const Pause =
    "https://cdn.sanity.io/images/3hfxs7a8/production/570e76234b5cb899a27aeccb1811a9919afea8a6-85x84.webp"
  const pageData = data?.Cards
  if (!pageData) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    if (!source || typeof source._ref !== "string") {
      return { url: () => source }
    }
    return builder.image(source)
  }

  const isMobile = useDeviceCheck("mobile")
  const isTablet = useDeviceCheck("set-tablet")
  if (data?.showSingleCard) {
    const item = pageData[0]

    return (
      <div className="mshs-services d-flex flex-column container-mainbanner">
        <div
          className={`content-box d-flex flex-column p-4 ${
            item.isTextWhite ? "text-white" : ""
          }`}
          style={{
            backgroundImage: `url(${urlFor(
              responsiveImage
                ? item.bannerImage?.asset
                : isMobile && !responsiveImage
                ? item.mobileBannerImage?.asset
                : item.bannerImage?.asset
            ).url()})`,
          }}
        >
          <div className="d-flex align-items-center">
            {item.logoImage && (
              <img
                src={urlFor(item.logoImage?.asset).url()}
                alt="Logo"
                className="mr-2 mb-2 single-card-logo"
              />
            )}
            <p className="font-extended m-0">{item.btnText}</p>
          </div>
          {item.title && <p className="subtitle mt-0">{item.title}</p>}
          <p className={`subtitle m-0 mb-3 ${!isMobile ? "w-40" : ""}`}>
            {item.description}
          </p>
          <ExploreLink href={item.href} text="Visit site" openInNewTab />
        </div>
      </div>
    )
  }
  const [autoplay, setAutoplay] = useState(true)
  const sliderRef = useRef(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1.68,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    customPaging: i => (
      <div className="custom-dot">
        <span className="dot"></span>
      </div>
    ),
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: dots => (
      <div>
        <button
          type="button"
          className="autoplay-btn p-0 d-flex"
          onClick={toggleAutoplay}
        >
          {autoplay ? (
            <img src={Pause} alt="Pause" width={25} height={25} />
          ) : (
            <img src={Replay} alt="Replay" width={25} height={25} />
          )}
        </button>
        <ul className="slick-dots-inner p-3">
          {dots}
        </ul>
      </div>
    ),
  }

  const toggleAutoplay = () => {
    setAutoplay(prev => !prev)
    if (sliderRef.current) {
      autoplay ? sliderRef.current.slickPause() : sliderRef.current.slickPlay()
    }
  }

  return (
    <div className="mshs-services d-flex flex-column">
      {data?.title && <h2 className="title mb-5 container">{data?.title}</h2>}
      <div className="slider-wrapper">
        <Slider ref={sliderRef} {...sliderSettings} className="custom-slider">
          {pageData.map((item, index) => (
            <div key={index} className="slide-container">
              <div
                className={`content-box d-flex flex-column p-4 ${
                  item.isTextWhite ? "text-white" : ""
                }`}
                style={{
                  backgroundImage: `url(${urlFor(
                    responsiveImage
                      ? item.bannerImage?.asset
                      : isMobile && !responsiveImage
                      ? item.mobileBannerImage?.asset
                      : item.bannerImage?.asset
                  ).url()})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <div className="d-flex align-items-center">
                  {item.logoImage && (
                    <img
                      src={urlFor(item.logoImage?.asset).url()}
                      alt="Logo"
                      className="btn-logo-img mr-1"
                    />
                  )}
                  <p className="font-extended m-0">{item.btnText}</p>
                </div>
                {item.title && <p className="subtitle my-3">{item.title}</p>}
                <p className={`subtitle m-0 mb-2 ${!isMobile ? "w-40" : ""}`}>
                  {item.description}
                </p>
                {item.href && (
                  <ExploreLink href={item.href} text="View site" openInNewTab />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
