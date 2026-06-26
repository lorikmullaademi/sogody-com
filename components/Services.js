import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Jumbotron } from "react-bootstrap"
import "../assets/style.css"
import CircularButton from "./CircularButton"
import ExploreLink from "./ExploreLink"

export default function Services({ showServicesTitle = true, hasPadding = true }) {
  const data = useStaticQuery(query)
  const {
    allSanityServices: { nodes: services },
  } = data

  const [hoveredService, setHoveredService] = useState(null)

  return (
    <div className={`service ${hasPadding ? 'service-has-padding' : ''}`}>
      <div className="services-desktop-wrapper">
        <div className="services-desktop-box">
          {/* LEFT COLUMN */}
          <div className="services-desktop-intro">
            <div className="services-desktop-intro-group">
              <p className="services-eyebrow">
                We build the systems behind
                intelligent products.
              </p>
              <ExploreLink to="/work/" text="Explore Our Services" className="services-explore-link"/>
            </div>
            <h4>Explore Our Main Services</h4>
          </div>

          {/* RIGHT COLUMN */}
          <div className="services-desktop-cards">
            {services.slice(0, 3).map(service => {
              if (service?.hide) return null

              return (
                <div className="service-col" key={service.id} onMouseEnter={() => setHoveredService(service.id)} onMouseLeave={() => setHoveredService(null)}>
                  <Link to={`/services/${service.slug}/`}>
                    <Jumbotron
                      className={`service-box ${service.slug}`}
                    >
                      <div className="service-content">
                        <div className="service-img">
                          <div className="service-img-ctn">
                            <div
                              className={`service-image image-bg`}
                              style={{
                                backgroundImage:`url(${service?.image?.asset?.url})`,
                              }}
                            >
                            </div>

                            <div className="circular-parent">
                              <CircularButton
                                isHovered={hoveredService === service.id}
                                variant="black"
                                type="services"
                                slug={service.slug}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="service-text">
                          <h3 className="service-title">{service.title}</h3>
                        </div>
                      </div>
                    </Jumbotron>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allSanityServices(
      sort: { fields: _updatedAt, order: ASC }
      filter: { hide: { ne: true } }
    ) {
      nodes {
        id
        title
        slug
        image {
          asset {
            url
          }
        }
        # hoverVideoR2 {
        #   asset {
        #     fileURL
        #   }
        # }
        hide
      }
    }
  }
`
