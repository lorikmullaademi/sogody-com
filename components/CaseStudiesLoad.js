import React, { useState, useEffect } from "react"
import { Row, Col, Card } from "react-bootstrap"
import { Link } from "gatsby"
import { SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "../assets/scss/components/case-studies-load.scss"
import useDeviceCheck from "../deviceCheck"
import ExploreLink from "./ExploreLink"
import whiteArrow from "../assets/svgs/white-arrow.svg"
import CircularButton from "./CircularButton"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CaseStudiesLoad({
  caseStudies,
  title,
  linkPrefix,
  type = "cs",
  showMore = true,
}) {
  const [hoveredLoadMore, setHoveredLoadMore] = useState(false)
  const [hoveredIndexes, setHoveredIndexes] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visibleRows, setVisibleRows] = useState(4)
  const isMobile = useDeviceCheck()
  const [scrollProgress, setScrollProgress] = useState(0) // Track scroll progress

  const categories = Array.from(
    new Set(caseStudies.flatMap(item => item.categoryTag?.map(tag => tag.tag)))
  )

  const filteredList =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter(item =>
          item.categoryTag?.some(tag => tag.tag === selectedCategory)
        )

  const firstThree = filteredList.slice(0, 5)
  const remainingCases = filteredList.slice(5)

  const createRows = () => {
    return filteredList.map(item => ({ ...item, colSize: 3 }))
  }

  useEffect(() => {
    setVisibleRows(8)
  }, [selectedCategory])

  const rowsToDisplay = showMore
    ? createRows().slice(0, visibleRows)
    : createRows()

  const handleHoverStart = index => {
    setHoveredIndexes(prev => ({ ...prev, [index]: true }))
  }

  const handleHoverEnd = index => {
    setHoveredIndexes(prev => ({ ...prev, [index]: false }))
  }
  const handleSlideChange = swiper => {
    const totalSlides = remainingCases.length
    const currentSlide = swiper.realIndex + 1
    setScrollProgress((currentSlide / totalSlides) * 100)
  }
  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    centerMode: true,
    centerPadding: "20px",
    afterChange: current => {
      const totalSlides = remainingCases.length
      setScrollProgress(((current + 1) / totalSlides) * 75)
    },
  }
  return (
    <div className="case-studies margin-bottom top-m">
      <div className="our-cs custom-case-studies scroll-show">
        <div className="filter-section d-flex">
          <span
            className={`filter-item ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            Show all ({caseStudies.length})
          </span>
          {categories.map(category => (
            <span
              key={category}
              className={`filter-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
        {!isMobile && (
          <ExploreLink openCalendar={true} text="Schedule an Audit Call" />
        )}
      </div>

      {!isMobile && (
        <Row className="justify-content-start">
          {rowsToDisplay.map((item, index) => (
            <Col
              key={item.id}
              xs={12}
              md={4}
              lg={3}
              className="cs-column load-column-height"
            >
              <Link
                to={`${linkPrefix}/${
                  item[`${type === "cs" ? "csSlug" : "upSlug"}`]
                }/`}
              >
                <Card
                  className={`${item[`${type}Slug`]} active-cs-link ${
                    type === "cs" ? "h-100" : ""
                  }`}
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={() => handleHoverEnd(index)}
                >
                  <Card.Body>
                    <div
                      className={`both-images h-100 ${
                        type === "cs" ? "cs-class" : ""
                      }`}
                    >
                      <img
                        className="cs-img h-100"
                        src={
                          type === "cs"
                            ? item.csIntroImage?.asset?.url ||
                              item.csImage?.asset?.url
                            : item.upImage?.asset?.url
                        }
                        alt={`${type} img`}
                        style={{
                          maxWidth: "100%",
                          objectFit: "cover",
                          ...(type !== "cs" && { maxHeight: "252px" }),
                        }}
                      />
                      {type === "cs" && hoveredIndexes[index] && (
                        <div
                          className="hover-overlay d-flex justify-content-end align-items-end p-2 text-white"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "#2b2b2b",
                            color: "white",
                            display: "flex",
                          }}
                        >
                          <h2 className="hover-title p-2 mb-0">
                            {item.shortTitle || item.csTitle}
                          </h2>
                        </div>
                      )}
                      {type !== "cs" && (
                        <CircularButton
                          isHovered={hoveredIndexes[index]}
                          type={type}
                          slug={item[`${type === "cs" ? "csSlug" : "upSlug"}`]}
                        />
                      )}
                      {type === "cs" && item.csBtn && (
                        <div className="transparent-container p-3">
                          <div className="transparent-button d-flex px-2">
                            <span className="subtitle text-uppercase text-white p-0 pt-1 d-flex m-0 align-items-center">
                              {item.csBtn}
                            </span>
                            <span>
                              <img src={whiteArrow} alt="White arrow" />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    {type !== "cs" && (
                      <Card.Text className="cs-title">
                        <p>{item.upTitle}</p>
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}

      {isMobile && (
        <>
          <Row>
            {firstThree.map((item, index) => (
              <Col key={item.id} xs={12} className="cs-column">
                <Link
                  to={`${linkPrefix}/${
                    item[`${type === "cs" ? "csSlug" : "upSlug"}`]
                  }/`}
                >
                  <Card
                    className={`${item[`${type}Slug`]} active-cs-link`}
                    onMouseEnter={() => handleHoverStart(index)}
                    onMouseLeave={() => handleHoverEnd(index)}
                  >
                    <Card.Body>
                      <div className="both-images h-100">
                        <img
                          className="cs-img h-100"
                          src={
                            type === "cs"
                              ? item.csIntroImage?.asset?.url ||
                                item.csImage?.asset?.url
                              : item.upImage?.asset?.url
                          }
                          alt={`${type} img`}
                          style={{
                            maxWidth: "100%",
                            objectFit: "cover",
                            ...(type !== "cs" && { maxHeight: "252px" }),
                          }}
                        />
                        {type !== "cs" && (
                          <CircularButton
                            isHovered={hoveredIndexes[index]}
                            type={type}
                            slug={
                              item[`${type === "cs" ? "csSlug" : "upSlug"}`]
                            }
                          />
                        )}
                        {type === "cs" && item.csBtn && (
                          <div className="transparent-container p-3">
                            <div className="transparent-button d-flex px-2">
                              <span className="subtitle text-uppercase text-white p-0 pt-1 d-flex m-0 align-items-center">
                                {item.csBtn}
                              </span>
                              <span>
                                <img src={whiteArrow} alt="White Arrow" />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      {type !== "cs" && (
                        <Card.Text className="cs-title">
                          <h3>{item.upTitle}</h3>
                        </Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          {remainingCases.length > 0 && (
            <>
              <h2 className="title justify-content-start mt-4 mb-3 explore-more-title">
                Explore more
              </h2>
              <Slider
                {...mobileSliderSettings}
                onSlideChange={handleSlideChange}
              >
                {remainingCases.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <Col xs={12} className="cs-column p-0">
                      <Link
                        to={`${linkPrefix}/${
                          item[`${type === "cs" ? "csSlug" : "upSlug"}`]
                        }/`}
                      >
                        <Card
                          className={`${item[`${type}Slug`]} active-cs-link`}
                          onMouseEnter={() => handleHoverStart(index)}
                          onMouseLeave={() => handleHoverEnd(index)}
                        >
                          <Card.Body>
                            <div className="both-images h-100">
                              <img
                                className="cs-img h-100"
                                src={
                                  type === "cs"
                                    ? item.csIntroImage?.asset?.url ||
                                      item.csImage?.asset?.url
                                    : item.upImage?.asset?.url
                                }
                                alt={`${type} img`}
                                style={{
                                  maxWidth: "100%",
                                  objectFit: "cover",
                                  ...(type !== "cs" && { maxHeight: "252px" }),
                                }}
                              />
                              {type !== "cs" && (
                                <CircularButton
                                  isHovered={hoveredIndexes[index]}
                                  type={type}
                                  slug={
                                    item[
                                      `${type === "cs" ? "csSlug" : "upSlug"}`
                                    ]
                                  }
                                />
                              )}
                              {type === "cs" && item.csBtn && (
                                <div className="transparent-container p-3">
                                  <div className="transparent-button d-flex px-2">
                                    <span className="subtitle text-uppercase text-white p-0 pt-1 d-flex m-0 align-items-center">
                                      {item.csBtn}
                                    </span>
                                    <span>
                                      <img src={whiteArrow} alt="White Arrow" />
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                            {type !== "cs" && (
                              <Card.Text className="cs-title">
                                <h3>{item.upTitle}</h3>
                              </Card.Text>
                            )}
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  </SwiperSlide>
                ))}
              </Slider>
              <div className="horizontal-scroll-progress-bar w-75 mx-auto">
                <div
                  className="horizontal-scroll-progress"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
            </>
          )}
        </>
      )}

      {showMore && !isMobile && visibleRows < createRows().length && (
        <div className="preview-section justify-content-center my-5">
          <button
            onClick={() => setVisibleRows(visibleRows + 4)}
            onMouseEnter={() => setHoveredLoadMore(true)}
            onMouseLeave={() => setHoveredLoadMore(false)}
            className="d-flex align-items-center contact-us-link button-padding"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  )
}
