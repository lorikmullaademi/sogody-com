import { graphql, useStaticQuery } from "gatsby"
import React, { useRef, useState } from "react"
import { Card } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"

SwiperCore.use([Autoplay, Pagination, Navigation])

export default function () {
  const data = useStaticQuery(query)
  const {
    allSanityCompanyTeam: { nodes: sgd },
  } = data

  const swiperRef = useRef(null)

  // Swiper settings
  const swiperSettings = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },
    navigation: false,
    centeredSlides: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        centeredSlides: false,
      },
    },
  }

  const [hoveredPrev, setHoveredPrev] = useState(false)
  const [hoveredNext, setHoveredNext] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleSlideChange = swiper => {
    const total = swiper.slides.length - swiper.params.slidesPerView
    const progress = (swiper.realIndex / total) * 100
    setScrollProgress(progress)
  }

  return (
    <div className="sogody-staff">
      <div className="d-flex">
        <h2 className="scroll-show mb-5">The Faces <br className="desktop-br" /> of Sogody</h2>
        <div className="swiper-nav-container">
          <button
            className={`swiper-button-prev ${hoveredPrev ? "hovered" : ""}`}
            onClick={() => swiperRef.current.swiper.slidePrev()}
            onMouseEnter={() => setHoveredPrev(true)}
            onMouseLeave={() => setHoveredPrev(false)}
          />
          <button
            className={`swiper-button-next ${hoveredNext ? "hovered" : ""}`}
            onClick={() => swiperRef.current.swiper.slideNext()}
            onMouseEnter={() => setHoveredNext(true)}
            onMouseLeave={() => setHoveredNext(false)}
          />
        </div>
      </div>
      <Swiper
        {...swiperSettings}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
      >
        {sgd.map((sgd, index) => (
          <SwiperSlide key={index}>
            <Card className="employee-card">
              <Card.Body>
                <img
                  className="employee-img"
                  src={sgd.image.asset.url}
                  alt="Staff img"
                />
                <Card.Text className="card-text">
                  <p className="name">{sgd.employeeName}</p>
                  <p className="title">{sgd.employeeTitle}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="horizontal-scroll-progress-bar w-75 mx-auto">
        <div
          className="horizontal-scroll-progress"
          style={{
            width: `${scrollProgress}%`,
            height: "4px",
            background: "#67be83",
          }}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allSanityCompanyTeam(sort: { fields: _updatedAt }) {
      nodes {
        employeeTitle
        employeeName
        image {
          asset {
            url
          }
        }
      }
    }
  }
`
