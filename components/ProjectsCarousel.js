import React, { useState, useRef, useMemo, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import { Container, Row, Col } from "react-bootstrap"
import SogodyGreySVG from "../assets/svgs/sogody-grey.svg"
import SogodyGreenSVG from "../assets/svgs/sogody-green.svg"

const SlideCard = React.memo(function SlideCard({ card }) {
  return (
    <div className="carousel-card">
      <div className="card-header">
        <div className="cardheader-1">
          <span className="year-label">{card.year}</span>
        </div>
        <div className="cardheader-2">
          <h3>{card.title}</h3>
          <p>
            {card.subtitle
              .split("Spell & Sell")
              .map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <React.Fragment key={i}>
                    {part}
                    <a
                      href="https://spellnsell.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1c9efc", textDecoration: "none" }}
                    >
                      Spell & Sell
                    </a>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
          </p>

          {card.highlight && (
            <Row className="stats-row">
              <Col xs={6} className="stats-card">
                <p>{card.highlight}</p>
              </Col>
            </Row>
          )}
        </div>
      </div>

      {card.image && (
        <img className="carousel-img" src={card.image.asset.url} alt={card.title} />
      )}
    </div>
  )
})

export default function ProjectsCarousel({ hasCustomContainer = null }) {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      allSanityCarouselCard {
        nodes {
          title
          subtitle
          year
          highlight
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `)

  const uniqueCards = useMemo(() => {
    const nodes = data.allSanityCarouselCard.nodes || []
		return nodes.filter(Boolean).sort((a, b) => (a.year || 0) - (b.year || 0))
  }, [data])

  const sliderRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeYear = uniqueCards[activeIndex]?.year ?? 2017

  const settings = {
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		afterChange: index => setActiveIndex(index),
	}

  const goToSlide = useCallback(
    (targetIndex) => {
      const slider = sliderRef.current
      if (!slider || uniqueCards.length === 0) return

      const lastIndex = uniqueCards.length - 1
      const clampedIndex = Math.max(0, Math.min(targetIndex, lastIndex))
      slider.slickGoTo(clampedIndex)
    },
    [uniqueCards.length]
  )

  const slides = useMemo(
    () => uniqueCards.map(card => <SlideCard key={card.year ?? card.title} card={card} />),
    [uniqueCards]
  )

  const content = (
    <>
      <h2 className="carousel-h2">
        Biggest Projects we <br /> Worked Through Years
      </h2>

      <Row className="year-svgs">
        {uniqueCards.map((card, index) => (
          <React.Fragment key={card.year ?? index}>
            <Col xs={3} className="year-svg">
              <div className="svg-container">
                <button className="year-icon-button" onClick={() => goToSlide(index)}>
                  <img
                    src={activeYear === card.year ? SogodyGreenSVG : SogodyGreySVG}
                    alt={`Year ${card.year}`}
                    className="year-svg-icon"
                  />
                </button>

                <div className={`year-label year ${activeYear === card.year ? "active" : ""}`}>
                  {card.year}
                </div>
              </div>
            </Col>

            {index < uniqueCards.length - 1 && (
              <div className="shared-line-container">
                <div
                  className="shared-line"
                  style={{
                    background: `linear-gradient(to right, #67BE83 ${
                      activeYear === card.year
                        ? "50%"
                        : index < activeIndex
                        ? "100%"
                        : "0%"
                    }, #d5d5d5 ${
                      activeYear === card.year
                        ? "50%"
                        : index < activeIndex
                        ? "100%"
                        : "0%"
                    })`,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </Row>

      <div className="swiper-nav-container">
        <button
          className="swiper-button-prev"
          onClick={() => goToSlide(activeIndex - 1)}
        />
        <button
          className="swiper-button-next"
          onClick={() => goToSlide(activeIndex + 1)}
        />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </>
  )

  return (
    <div className="projects scroll-show">
      <div className="carousel-container">
        {hasCustomContainer ? (
          <div className={hasCustomContainer}>{content}</div>
        ) : (
          <Container>{content}</Container>
        )}
      </div>
    </div>
  )
}
