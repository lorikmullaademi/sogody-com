import React, { useState, useEffect, useRef } from "react"
import { Accordion, Card } from "react-bootstrap"
import up from "../assets/svgs/green-arrow-up.svg"
import Slider from "react-slick"
import useDeviceCheck from "../deviceCheck"
const FAQ = ({ faqs, toggleIcon, isToggled }) => {
  const [open, setOpen] = useState({ [faqs?.[0]?.question]: true })
  const [hoveredPrev, setHoveredPrev] = useState(false)
  const [hoveredNext, setHoveredNext] = useState(false)
  const sliderRef = useRef(null)
  const iconSrc = toggleIcon || up
  const isMobile = useDeviceCheck()
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <>
      {isMobile && isToggled ? (
        <div className="faq-slider-wrapper">
          <Slider ref={sliderRef} {...sliderSettings}>
            {faqs.map((faq, index) => (
              <div style={{ margin: "auto", width: "100%" }} key={faq.question}>
                <div className="faq-content">
                  <Accordion defaultActiveKey={index === 0 ? "0" : null}>
                    <Card style={{ width: "100%" }}>
                      <div className="faq-number d-none">
                        <h2 className="title faq-title green">
                          {String(index + 1).padStart(2, "0")}
                        </h2>
                      </div>

                      <Accordion.Toggle
                        as={Card.Body}
                        eventKey="0"
                        onClick={() =>
                          setOpen({
                            ...open,
                            [faq.question]: !open[faq.question],
                          })
                        }
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p className="question" style={{ margin: 0 }}>
                            {faq.question}
                          </p>
                        </div>
                        <p className="answer">{faq.answer}</p>
                      </Accordion.Toggle>
                    </Card>
                  </Accordion>
                </div>
              </div>
            ))}
          </Slider>

          <div className="swiper-nav-container">
            <button
              className={`swiper-button-prev ${hoveredPrev ? "hovered" : ""}`}
              onClick={() => sliderRef.current.slickPrev()}
              onMouseEnter={() => setHoveredPrev(true)}
              onMouseLeave={() => setHoveredPrev(false)}
            ></button>
            <button
              className={`swiper-button-next ${hoveredNext ? "hovered" : ""}`}
              onClick={() => sliderRef.current.slickNext()}
              onMouseEnter={() => setHoveredNext(true)}
              onMouseLeave={() => setHoveredNext(false)}
            ></button>
          </div>
        </div>
      ) : (
        faqs.map((faq, index) => (
          <div style={{ margin: "auto", width: "100%" }} key={faq.question}>
            <div className="faq-content">
              <Accordion defaultActiveKey={index === 0 ? "0" : null}>
                <Card style={{ width: "100%" }}>
                  <div className="faq-number d-none">
                    <h2 className="title faq-title green">
                      {String(index + 1).padStart(2, "0")}
                    </h2>
                  </div>

                  <Accordion.Toggle
                    className="d-flex flex-column"
                    as={Card.Body}
                    eventKey="0"
                    onClick={() =>
                      setOpen({ ...open, [faq.question]: !open[faq.question] })
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="question" style={{ margin: 0 }}>
                        {faq.question}
                      </p>
                      <span className="q-icon">
                        <img
                          src={iconSrc}
                          alt="Arrow"
                          style={{
                            transition: "transform 0.3s ease-in-out",
                            transform: open[faq.question]
                              ? "rotate(180deg)"
                              : "rotate(44deg)",
                          }}
                        />
                      </span>
                    </div>

                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: open[faq.question] ? "500px" : "0",
                        transition:
                          "max-height 0.8s ease-in-out, padding 0.2s ease-in-out",
                        paddingTop: open[faq.question] ? "5px" : "0",
                        paddingBottom: open[faq.question] ? "5px" : "0",
                      }}
                    >
                      {open[faq.question] && (
                        <p className="answer">{faq.answer}</p>
                      )}
                    </div>
                  </Accordion.Toggle>
                </Card>
              </Accordion>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default FAQ
