import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import { PortableText } from "@portabletext/react"
import "../assets/scss/components/testimonials.scss"
import useDeviceCheck from "../deviceCheck"

const TestimonialsCarousel = ({ carouselTitle = "Testimonials" }) => {
  const data = useStaticQuery(query)
  const {
    allSanityTestimonials: { nodes: posts },
  } = data

  const [expandedIndex, setExpandedIndex] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useDeviceCheck()

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    focusOnSelect: false,
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next)
    },
  }

  const myPortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="description">{children}</p>,
      h2: ({ children }) => <h2 className="heading2">{children}</h2>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value?.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const maxCharCount = 220

  const progress = ((currentSlide + 1) / posts.length) * 100

  return (
    <div className="testimonials-carousel scroll-show mb-3 pt-0">
      <div className="carousel-container">
        <div className="content-wrapper desktop-row d-flex justify-content-between w-100 mb-4">
          <h2 className="carousel-title mb-0 w-100 justify-content-start" dangerouslySetInnerHTML={{__html: carouselTitle}} />
        </div>
        <div className="carousel-slider-wrapper">
          <Slider {...settings}>
            {posts.map((post, index) => {
              const description = post._rawDescription
                ? post._rawDescription[0].children[0].text
                : ""

              const isLongText = description.length > maxCharCount
              const truncatedText = isLongText
                ? description.substring(0, maxCharCount) + "..."
                : description

              const displayDescription =
                expandedIndex === index
                  ? post._rawDescription
                  : [
                      {
                        _type: "block",
                        children: [
                          {
                            _type: "span",
                            text: truncatedText,
                          },
                        ],
                      },
                    ]

              return (
                <div key={index} className="carousel-card">
                  <div className="card-content">
                    <div className="testimonial-img-container">
                      <img
                        className="testimonial-image"
                        src={post.image?.asset?.url}
                        alt={post.name}
                      />

                      <div className="tst-text-mobile">
                        <p className="username green mobile-only">
                          {post.name}
                        </p>
                        <p className="position subtitle mobile-only">
                          {post.position}, {post.company}
                        </p>
                      </div>
                    </div>

                    <div className="tst-text d-flex flex-column">
                      <div
                        className="description"
                        style={{
                          maxHeight: isLongText
                            ? expandedIndex === index
                              ? "none"
                              : "150px"
                            : "none",
                          overflow: "hidden",
                          transition: "max-height 0.3s ease-out",
                          cursor: isLongText ? "pointer" : "default",
                        }}
                        onClick={() => isLongText && toggleExpand(index)}
                      >
                        <PortableText
                          value={displayDescription}
                          components={myPortableTextComponents}
                        />
                      </div>
                      <div>
                        <p className="username green desktop-only">
                          {post.name}
                        </p>
                        <p className="position subtitle desktop-only">
                          {post.position}, {post.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        {isMobile && (
          <div className="horizontal-scroll-progress-bar mt-4">
            <div
              className="horizontal-scroll-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialsCarousel

export const query = graphql`
  {
    allSanityTestimonials(sort: { fields: _updatedAt }) {
      nodes {
        position
        name
        company
        image {
          asset {
            url
          }
        }
        _rawDescription
      }
    }
  }
`
