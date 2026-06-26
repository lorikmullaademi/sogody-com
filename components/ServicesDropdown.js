import React from "react"
import { Link } from "gatsby"
import { NavDropdown } from "react-bootstrap"
import arrow from "../assets/svgs/down-arrow.svg"

const ServicesDropdown = ({ showDropdown, services }) => {
  const partners = [
    "Adobe",
    "Google",
    "Optimizely",
    "Shopify",
    "Netlify",
    "AWS",
  ]

  return (
    <NavDropdown
      className="service-nav"
      title="Services"
      id="collasible-nav-dropdown"
      show={showDropdown}
    >
      <div className="d-flex flex-row">
        <div className="d-flex flex-column dropdown-left-side dropdown-inner-styling">
          <Link to="/services/">
            <p className="header-service-title mb-2">
              All Solutions
              <div className="mini-arrow-container less-padding mr-2">
                <span className="mini-arrow mini-arrow-right">
                  <img src={arrow} alt="Arrow Icon" />
                </span>
              </div>
            </p>
          </Link>
          {services.map(service => (
            <NavDropdown.Item
              className={`service-item-navbar ${service.slug}`}
              href={`/services/${service.slug}/`}
              key={service.slug}
            >
              <div className="d-flex align-items-center justify-content-between w-100">
                {service?.image && (
                  <div className="nav-service-logo-ctn me-2">
                    <img
                      className="nav-service-logo"
                      src={service?.image?.asset?.url}
                      alt="Logo"
                    />
                  </div>
                )}
                <div className="header-service-title m-0 w-100 d-flex justify-content-between align-items-center ml-2">
                  <span className="inner-service-title">{service.title}</span>
                  <div className="mini-arrow-container less-padding">
                    <span className="mini-arrow mini-arrow-right">
                      <img src={arrow} alt="Arrow Icon" />
                    </span>
                  </div>
                </div>
              </div>
            </NavDropdown.Item>
          ))}
        </div>

        {/* <div className="d-flex flex-column dropdown-inner-styling">
          <p className="text-left m-0 mb-2">Our Partners</p>
          {partners.map((partner, index) => (
            <div
              className="partner-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <p className="header-service-title p-0 m-0">{partner}</p>
            </div>
          ))}
        </div> */}
      </div>
    </NavDropdown>
  )
}

export default ServicesDropdown
