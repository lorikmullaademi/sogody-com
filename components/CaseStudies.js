import React, { useMemo, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import greenArrow from "../assets/svgs/Arrow.svg"
import blackArrow from "../assets/svgs/black-arrow.svg"
import whiteArrow from "../assets/svgs/white-arrow.svg"
import "../assets/style.css"
import "swiper/css"

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const data = useStaticQuery(query)
  const {
    allSanityCaseStudies: { nodes: cstudies },
  } = data
  const slides = useMemo(() => cstudies.slice(0, 4), [cstudies])
  const initialSlide = useMemo(
    () => Math.max(1, Math.ceil(slides.length / 2)),
    [slides.length]
  )

  return (
    <div className="case-studies container mt-5 mx-auto scroll-show">
      <div className="case-studies-wrapper">
        <div className="our-cs-header">
          <div className="our-cs-title">
            <h2>Explore Our Work</h2>
          </div>
          <div className="our-cs-content">
            <p className="our-cs-description">
              Browse the type of work Sogody repeatedly does for brands and
              large multi-national enterprises, organizations and governments.
            </p>
            <Link
              to="/work/"
              className="explore-link green-hover"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-padding underlined">Explore Our Work</span>
              <span className="arrow-icon arrow-span-styling">
                <img
                  src={hoveredIndex === 0 ? greenArrow : blackArrow}
                  alt="Arrow Icon"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="case-studies-scroll-wrapper">
        <Swiper
          spaceBetween={32}
          slidesPerView={"auto"}
          centeredSlides={slides.length > 1}
          centeredSlidesBounds
          initialSlide={initialSlide}
          className="case-studies-swiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { spaceBetween: 16 },
            768: { spaceBetween: 32 },
          }}
        >
          {slides.map((cs, index) => (
            <SwiperSlide key={cs.id} className="case-study-slide">
              <Link
                to={`/work/${cs.csSlug}/`}
                className="case-study-card-link"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="case-study-card-item">
                  <div className="case-study-card-image">
                    <img
                      src={cs.csTopImage?.asset?.url || cs.csImage?.asset?.url}
                      alt={cs.csTitle}
                    />
                  </div>
                  <div className="case-study-card-overlay">
                    <h3 className="case-study-card-title">
                      {cs.shortTitle || cs.csTitle}
                    </h3>
                    <div className="circular-btn-container overlay-btn">
                      <div
                        className={`circular-btn black ${
                          hoveredIndex === index + 1 ? "hovered" : ""
                        }`}
                      >
                        <span className="arrow-icon">
                          <img
                            src={
                              hoveredIndex === index + 1
                                ? greenArrow
                                : whiteArrow
                            }
                            alt="Arrow Icon"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allSanityCaseStudies(
      # filter: {
      #   csSlug: {
      #     in: [
      #       "transforming-cheils-experimentation-program"
      #       "creating-a-digital-experience-for-knorr"
      #       "revamping-diggs"
      #       "tweetpeek-ai-powered-twitter-growth-and-insights"
      #     ]
      #   }
      # }
      sort: { fields: _createdAt, order: DESC }
      limit: 4
    ) {
      nodes {
        id
        csSlug
        csTitle
        shortTitle
        bannerVideoR2 {
          asset {
            fileURL
          }
        }
        mobileVideoR2 {
          asset {
            fileURL
            title
          }
        }
        csTopImage {
          asset {
            url
          }
        }
        csImage {
          asset {
            url
          }
        }
        categoryTag {
          _id
          tag
        }
      }
    }
  }
`
