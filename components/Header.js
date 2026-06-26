import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import "../assets/bootstrap.min.css"
import { useLocation } from "@reach/router"
import arrow from "../assets/svgs/down-arrow.svg"
import ContactNav from "./NavbarContactComponent"
import ServicesDropdown from "./ServicesDropdown"
import CircularButton from "./CircularButton"
import AnnouncementBanner from "./AnnouncementBanner"
import InitKoalendar from "./init-koalendar"

const Header = ({ bannerData, setShowAnnouncement }) => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [hoverPosition, setHoverPosition] = useState({
    left: null,
    width: null,
  })
  const navRef = useRef(null)
  const itemRefs = useRef([])
  const [menuShow, setMenuShow] = useState(false)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const pathLocation = useLocation()
  const pathName = pathLocation.pathname.substring(1).slice(0, -1)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [activeLink, setActiveLink] = useState(pathName)
  const [isMobile, setIsMobile] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showAnnouncement, setShowAnnouncementState] = useState(null)

  const [showServices, setShowServices] = useState(false)
  const [showNavLinks, setShowNavLinks] = useState(true)
  const handleAnnouncementClose = () => {
    setShowAnnouncementState(false)
    setShowAnnouncement(false)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const handleResize = () => setIsMobile(mediaQuery.matches)

    handleResize()
    mediaQuery.addEventListener("change", handleResize)

    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = index => {
    const navRect = navRef.current.getBoundingClientRect()
    const itemRect = itemRefs.current[index].getBoundingClientRect()
    const offset = itemRect.left - navRect.left

    setHoverPosition({ left: offset, width: itemRect.width })
  }

  const handleMouseLeave = () => {
    setHoverPosition({ left: null, width: null })
  }

  useEffect(() => {
    const navItems = [
      "services",
      "work",
      "updates",
      "careers",
      "company",
      "contact",
    ]
    const index = navItems.indexOf(activeLink)
    if (index !== -1 && itemRefs.current[index]) {
      const itemRect = itemRefs.current[index].getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      const offset = itemRect.left - navRect.left
      setSliderPosition(offset)
      setSliderWidth(itemRect.width)
    }
  }, [activeLink, sliderWidth])

  const data = useStaticQuery(query)
  const {
    allSanityServices: { nodes: services },
  } = data
  const showOnAllPages =
    data?.allSanityAnnouncementBanner?.nodes[0]?.showOnAllPages || false

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showOnAllPages) {
        setShowAnnouncementState(true)
      } else {
        setShowAnnouncementState(pathLocation.pathname === "/")
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [pathLocation.pathname, showOnAllPages])

  const handleWhatWeDoClick = index => {
    setShowServices(!showServices)
    setShowNavLinks(index !== 0 ? !showNavLinks : showNavLinks)
  }

  const closeMobileMenu = () => {
    setMenuShow(false)
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.left = ""
    document.body.style.right = ""
  }


  return (
    <>
      {isMobile && menuShow && (
        <div
          className="mobile-nav-overlay scrollable-nav"
          onClick={() => {
            closeMobileMenu()
          }}
        />
      )}
      <div className="header-wrapper fixed-top">
        {showAnnouncement === true && (
          <AnnouncementBanner onClose={handleAnnouncementClose} />
        )}
        <Navbar
          className={`${bannerData && "spacing"} ${isCollapsing ? "collapsing" : ""
            } ${!showAnnouncement ? "fixed-top" : ""} test`}
          expanded={menuShow}
          collapseOnSelect
          expand="lg"
          bg={!isMobile ? "light" : undefined}
          variant="light"
          onMouseLeave={() => {
            if (!isMobile) setShowDropdown(false)
          }}
        >
          <Container
            className={`header-container ${!isMobile && isAtTop ? "pt-active" : "pt-inactive"
              }`}
          >
            <div className={`logo-hamburger-div ${menuShow ? 'logo-hamburger-div-opened' : 'logo-hamburger-div-closed'}`}>
              <Navbar.Brand as={Link} to="/" state={{ fromHeader: true }}>
                <Image
                  width="130.77"
                  height="40"
                  src={require("../assets/images/logo_sogody.png").default}
                  alt="Sogody logo"
                />
              </Navbar.Brand>
              <div className="mobile-menu-box">
                <Navbar.Toggle
                  className="p-0 m-0"
                  aria-controls="responsive-navbar-nav"
                  onClick={() => {
                    const newState = !menuShow
                    setMenuShow(newState)

                    if (
                      typeof window !== "undefined" &&
                      window.innerWidth <= 1023
                    ) {
                      if (newState) {
                        const scrollY = window.scrollY
                        document.body.style.position = "fixed"
                        document.body.style.top = `-${scrollY}px`
                        document.body.style.left = "0"
                        document.body.style.right = "0"
                        document.body.dataset.scrollY = scrollY
                      } else {
                        const scrollY = document.body.dataset.scrollY || 0
                        document.body.style.position = ""
                        document.body.style.top = ""
                        document.body.style.left = ""
                        document.body.style.right = ""
                        window.scrollTo(0, parseInt(scrollY, 10))
                      }
                    }
                  }}
                />
              </div>
            </div>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={`${menuShow ? "collapsing" : ""}`}
            >
              <div className="mobile-nav-content">
                <Nav className="mr-auto"></Nav>
                <Nav className="drop-main">
                  <div
                    className="navbar-inner-div"
                    ref={navRef}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="nav-slider"
                      style={{
                        left:
                          hoverPosition.left !== null
                            ? `${hoverPosition.left}px`
                            : `${sliderPosition}px`,
                        width:
                          hoverPosition.width !== null
                            ? `${hoverPosition.width}px`
                            : `${sliderWidth}px`,
                        transition: "left 0.3s ease, width 0.3s ease",
                      }}
                    ></div>
                    <Nav>
                      {[
                        "what we do",
                        "work",
                        "updates",
                        "careers",
                        "company",
                      ].map((link, index) => (
                        <Nav.Item
                          key={link}
                          ref={el => (itemRefs.current[index] = el)}
                          onMouseMove={() => handleMouseMove(index)}
                          onMouseLeave={handleMouseLeave}
                          onMouseEnter={() => {
                            if (!isMobile && index === 0) setShowDropdown(true)
                          }}
                          onClick={() => {
                            if (index === 0 && isMobile) {
                              handleWhatWeDoClick(index)
                            } else {
                              setActiveLink(link)
                            }
                          }}
                          className={`${showServices && index !== 0
                              ? "hidden-nav-link"
                              : "nav-item-services"
                            } ${showServices && index === 0 ? "bg-color-grey" : ""
                            }`}
                        >
                          <Link
                            className={`nav-link nav-link-black ${activeLink === link && index !== 0 ? "active" : ""
                              }`}
                            to={
                              index === 0 && isMobile
                                ? "#"
                                : index === 0
                                  ? "/services/"
                                  : `/${link}/`
                            }
                            onClick={e => {
                              if (index === 0 && isMobile) {
                                e.preventDefault()
                                handleWhatWeDoClick(index)
                              } else if (isMobile) {
                                closeMobileMenu()
                              }
                            }}
                            onMouseEnter={() => setHoveredLink(link)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <span
                              className={`d-flex align-items-center ${isMobile ? "pt-1" : ""
                                }`}
                            >
                              {index === 0
                                ? showServices
                                  ? "Go Back"
                                  : "What we do"
                                : link.charAt(0).toUpperCase() + link.slice(1)}
                            </span>
                            {index === 0 && (
                              <div className="mini-arrow-container">
                                <span
                                  className={`mini-arrow ${isMobile && !showServices
                                      ? "navbar-arrow-rotation"
                                      : ""
                                    } ${showServices && isMobile ? "rotated" : ""
                                    }`}
                                >
                                  <img src={arrow} alt="Arrow Icon" />
                                </span>
                              </div>
                            )}
                          </Link>
                        </Nav.Item>
                      ))}

                      {showServices && (
                        <div className="services-nav-items w-100 d-flex flex-column">
                          {services.map((service, idx) => (
                            <Nav.Item key={idx} className="service-item-nav">
                              <Link
                                to={`/services/${service.slug}/`}
                                className="service-nav-link d-flex w-100 align-items-center"
                                onClick={() => closeMobileMenu()}
                              >
                                <Image
                                  src={service.image.asset.url}
                                  alt={service.title}
                                  className="service-nav-image"
                                />
                                <p
                                  className={`nav-link nav-link-black my-0 pr-0 ${isMobile ? "pt-2" : ""
                                    }`}
                                >
                                  {service.title}
                                </p>
                                <div className="mini-arrow-container">
                                  <span className="mini-arrow navbar-arrow-rotation">
                                    <img src={arrow} alt="Arrow Icon" />
                                  </span>
                                </div>
                              </Link>
                            </Nav.Item>
                          ))}
                          <Link to="/services/"
                            onClick={() => closeMobileMenu()}
                          >
                            <p className="nav-link nav-link-black mb-0">
                              All Solutions
                              <div className="mini-arrow-container">
                                <span className="mini-arrow navbar-arrow-rotation">
                                  <img
                                    src={arrow}
                                    alt="Arrow Icon"
                                    className="mr-2"
                                  />
                                </span>
                              </div>
                            </p>
                          </Link>
                        </div>
                      )}
                    </Nav>
                  </div>
                  {isMobile && (
                    <div className="mt-3">
                      <InitKoalendar
                        className="contact-us-link padding mob-width hover-state button-padding"
                        showButton={true}
                        iframeSrc="https://cal.com/sogody/30min"
                      >
                        Set up a Meeting
                      </InitKoalendar>
                    </div>
                  )}
                  <ContactNav />
                </Nav>
                {!isMobile && (
                  <ServicesDropdown
                    showDropdown={showDropdown}
                    services={services}
                  />
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header

export const query = graphql`
  {
    allSanityServices(
      sort: { fields: _updatedAt }
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
        hide
      }
    }
    allSanityCareers {
      nodes {
        date
        hideDate
      }
      totalCount
    }
    allSanityAnnouncementBanner {
      nodes {
        showOnAllPages
      }
    }
  }
`
