import React, { useState } from "react"
import { Link } from "gatsby"
import whiteArrow from "../../assets/svgs/white-arrow.svg"
import InitKoalendar from "../init-koalendar"
import Services from "../../components/Services"
import useDeviceCheck from "../../deviceCheck"

export default function ({ highlightedHeading, hasServicesPadding = true }) {
  const servicesList = [
    { name: "AI & Data Systems", href: "ai-solutions", style: { marginLeft: '50%' } },
    { name: "Human-AI Interfaces", href: "customer-experience", style: { marginLeft: '25%', marginTop: '5%' } },
    { name: "Domain-Specific Software Platforms", href: "technology-engineering", style: { marginLeft: '49%', marginTop: '5%' } },
    // { name: "E-commerce", href: "e-commerce" },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const isMobile = useDeviceCheck()
  const circleClasses = ["purple", "blue", "yellow"] // removed "dark-green"
  const bannerGradients = [
    "linear-gradient(to bottom, #2a2a2a 0%, #625a2d 100%)",
    "linear-gradient(to bottom, #2a2a2a 0%, #267D5E 100%)",
    "linear-gradient(to bottom, #2a2a2a 0%, #40334b 100%)",
    // "linear-gradient(to bottom, #2a2a2a 0%, #0e617c 100%)",
  ]

  return (
    <>
      {isMobile ? (
        <>
          <div className="banner-title text-center mobile-only">
            <h2 className="text-black text-left mt-4 line-height-40">
              Empowering Growth with Tailored{" "}
              <span className="green-gradient">Digital Solutions</span>
            </h2>
            {highlightedHeading && <span> {highlightedHeading} </span>}
          </div>
          <InitKoalendar
            showButton={true}
            className="contact-us-link button-padding"
            buttonText="Set up a meeting"
            href="/contact"
          ></InitKoalendar>
          <Services showServicesTitle={false} hasPadding={hasServicesPadding} />
        </>
      ) : (
        <div className="services-page-banner scroll-show">
          <div className="d-flex flex-column align-items-center gap">
            <div
              className="banner-image justify-content-center align-items-start pt-4"
              style={{
                background:
                  hoveredIndex !== null
                    ? bannerGradients[hoveredIndex]
                    : "linear-gradient(to bottom, #2c2e2c 0%, #213d37 100%)",
                transition: "linear-gradient 0.5s ease-in-out",
              }}
            >
              <div className="banner-title text-center">
                <h2 className="text-white">
                  <span className="green">Empowering Growth</span> with <br />{" "}
                  Tailored Digital Solutions
                </h2>
                {highlightedHeading && <span> {highlightedHeading} </span>}
              </div>

              <div
                className="d-flex flex-column align-items-start w-100 gap-3 position-absolute"
                style={{ top: "40%" }}
              >
                {servicesList.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.href}/`}
                    className="service-item text-white py-1 px-2"
                    style={{
                      cursor: "pointer",
                      opacity:
                        hoveredIndex !== null && hoveredIndex !== index
                          ? 0.5
                          : 1,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      zIndex: 2,
                      ...service.style,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="subtitle">{service.name}</span>
                    <div className="mini-arrow-container">
                      <span className="navbar-arrow-rotation mini-arrow">
                        <img src={whiteArrow} alt="Arrow Icon" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div
                className={`green-circle position-absolute w-100 ${
                  hoveredIndex !== null ? circleClasses[hoveredIndex] : ""
                }`}
                style={{
                  backgroundImage: `url('https://cdn.sanity.io/images/${process.env.GATSBY_SANITY_PROJECT_ID}/${process.env.GATSBY_SANITY_DATASET}/810c61daae7f2602f5e856da5e1b5df98394e8f0-2556x2723.webp')`,

                  transform:
                    hoveredIndex !== null
                      ? `translateX(-50%) rotate(${
                          hoveredIndex === 0 || hoveredIndex === 2
                            ? "-90deg"
                            : "90deg"
                        })`
                      : "translateX(-50%) rotate(0deg)",
                  transition:
                    "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
