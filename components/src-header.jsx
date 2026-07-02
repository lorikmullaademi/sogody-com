/* Sogody — 1:1 port of src/components/Header.js (desktop-focused; mobile menu
   uses same classes). Bootstrap 4 navbar markup as rendered by react-bootstrap.
   window.SogodySrcHeader */

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;
const { mapPath: hMap, InitKoalendar: HInitKoalendar, openKoalendarSidebar: hOpenSidebar, SVG_DOWN_ARROW: H_ARROW } = window.SogodySrcKit;

/* ServicesDropdown (1:1 src/components/ServicesDropdown.js) */
function ServicesDropdown({ showDropdown, services }) {
  return (
    <div className="service-nav nav-item dropdown">
      <a aria-haspopup="true" aria-expanded={showDropdown} id="collasible-nav-dropdown" className="dropdown-toggle nav-link" role="button" href="#">Services</a>
      {showDropdown && (
        <div aria-labelledby="collasible-nav-dropdown" className="dropdown-menu show">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column dropdown-left-side dropdown-inner-styling">
              <a href="/services/">
                <p className="header-service-title mb-2">
                  All Solutions
                  <span className="mini-arrow-container less-padding mr-2" style={{ display: "inline-block" }}>
                    <span className="mini-arrow mini-arrow-right"><img src={H_ARROW} alt="Arrow Icon" /></span>
                  </span>
                </p>
              </a>
              {services.map((service) => (
                <a className={`service-item-navbar ${service.slug} dropdown-item`} href={hMap(`/services/${service.slug}/`)} key={service.slug}>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    {service.img && (
                      <div className="nav-service-logo-ctn me-2">
                        <img className="nav-service-logo" src={service.img} alt="Logo" />
                      </div>
                    )}
                    <div className="header-service-title m-0 w-100 d-flex justify-content-between align-items-center ml-2">
                      <span className="inner-service-title">{service.title}</span>
                      <div className="mini-arrow-container less-padding">
                        <span className="mini-arrow mini-arrow-right"><img src={H_ARROW} alt="Arrow Icon" /></span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ContactNav (1:1 src/components/NavbarContactComponent.js — Nav inside Navbar renders .navbar-nav) */
function ContactNav() {
  return (
    <div className="contact-div navbar-nav">
      <div className="nav-contact">
        <button className="contact-us-link pt-0" onClick={hOpenSidebar}>
          <span className="c-us">Contact Us</span>
        </button>
      </div>
    </div>
  );
}

/* Header (1:1 src/components/Header.js) */
function SrcHeader({ active = "" }) {
  const NAV_LINKS = ["what we do", "work", "updates", "careers", "company"];
  const services = window.SogodyData.SERVICES;
  const navRef = useRefH(null);
  const itemRefs = useRefH([]);
  const [hoverPosition, setHoverPosition] = useStateH({ left: null, width: null });
  const [sliderPosition, setSliderPosition] = useStateH(0);
  const [sliderWidth, setSliderWidth] = useStateH(0);
  const [menuShow, setMenuShow] = useStateH(false);
  const [showDropdown, setShowDropdown] = useStateH(false);
  const [showServices, setShowServices] = useStateH(false); /* mobile "what we do" drill-in */
  const [isMobile, setIsMobile] = useStateH(false);
  const [isAtTop, setIsAtTop] = useStateH(true);

  /* Lock the page behind the floating mobile menu so the dimmed backdrop doesn't
     scroll. Mirrors src/components/Header.js. */
  const setBodyLock = (lock) => {
    if (lock) {
      const y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.dataset.scrollY = String(y);
    } else {
      const y = document.body.dataset.scrollY || "0";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, parseInt(y, 10));
    }
  };
  const openMenu = () => { setMenuShow(true); if (isMobile) setBodyLock(true); };
  const closeMenu = () => { setMenuShow(false); setShowServices(false); if (isMobile) setBodyLock(false); };
  const toggleMenu = () => { if (menuShow) closeMenu(); else openMenu(); };

  useEffectH(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onResize = () => setIsMobile(mq.matches);
    onResize();
    mq.addEventListener("change", onResize);
    return () => mq.removeEventListener("change", onResize);
  }, []);

  useEffectH(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffectH(() => {
    const navItems = ["what we do", "work", "updates", "careers", "company"];
    const index = navItems.indexOf(active);
    const measure = () => {
      if (index !== -1 && itemRefs.current[index] && navRef.current) {
        const itemRect = itemRefs.current[index].getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setSliderPosition(itemRect.left - navRect.left);
        setSliderWidth(itemRect.width);
      }
    };
    measure();
    /* re-measure once webfonts load — item widths change with font metrics */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const t = setTimeout(measure, 400);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, [active]);

  const handleMouseMove = (index) => {
    if (!navRef.current || !itemRefs.current[index]) return;
    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = itemRefs.current[index].getBoundingClientRect();
    setHoverPosition({ left: itemRect.left - navRect.left, width: itemRect.width });
  };
  const handleMouseLeave = () => setHoverPosition({ left: null, width: null });

  return (
    <React.Fragment>
    {isMobile && menuShow && (
      <div className="mobile-nav-overlay scrollable-nav" onClick={closeMenu} />
    )}
    <div className="header-wrapper fixed-top">
      <nav className={`test navbar navbar-expand-lg navbar-light ${!isMobile ? "bg-light" : ""} fixed-top`} onMouseLeave={() => { if (!isMobile) setShowDropdown(false); }}>
        <div className={`header-container ${!isMobile && isAtTop ? "pt-active" : "pt-inactive"} container`}>
          <div className={`logo-hamburger-div ${menuShow ? "logo-hamburger-div-opened" : "logo-hamburger-div-closed"}`}>
            <a className="navbar-brand" href="/">
              <img width="130.77" height="40" src="/assets/images/logo_sogody.png" alt="Sogody logo" />
            </a>
            <div className="mobile-menu-box">
              <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className={`p-0 m-0 navbar-toggler ${menuShow ? "" : "collapsed"}`} onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className={`navbar-collapse collapse ${menuShow ? "show" : ""}`} id="responsive-navbar-nav">
            <div className="mobile-nav-content">
              <div className="mr-auto navbar-nav"></div>
              <div className="drop-main navbar-nav">
                <div className="navbar-inner-div" ref={navRef} onMouseLeave={handleMouseLeave}>
                  <div className="nav-slider" style={{
                    left: hoverPosition.left !== null ? `${hoverPosition.left}px` : `${sliderPosition}px`,
                    width: hoverPosition.width !== null ? `${hoverPosition.width}px` : `${sliderWidth}px`,
                    transition: "left 0.3s ease, width 0.3s ease",
                  }}></div>
                  <div className="navbar-nav">
                    {NAV_LINKS.map((link, index) => {
                      const isWhatWeDo = index === 0;
                      /* On mobile, tapping "What we do" drills into the services
                         sub-view: the other links hide and this item becomes "Go Back". */
                      const drilled = isMobile && showServices;
                      const itemClass = drilled && !isWhatWeDo
                        ? "hidden-nav-link nav-item"
                        : `nav-item-services nav-item${drilled && isWhatWeDo ? " mobile-goback" : ""}`;
                      return (
                        <div
                          key={link}
                          ref={(el) => (itemRefs.current[index] = el)}
                          onMouseMove={() => handleMouseMove(index)}
                          onMouseLeave={handleMouseLeave}
                          onMouseEnter={() => { if (!isMobile && isWhatWeDo) setShowDropdown(true); }}
                          className={itemClass}
                        >
                          <a
                            className={`nav-link nav-link-black ${active === link && !isWhatWeDo ? "active" : ""}`}
                            href={isWhatWeDo && isMobile ? "#" : isWhatWeDo ? "/services/" : hMap(`/${link}/`)}
                            aria-expanded={isWhatWeDo ? (isMobile ? showServices : showDropdown) : undefined}
                            onClick={(e) => {
                              if (isWhatWeDo && isMobile) { e.preventDefault(); setShowServices((v) => !v); }
                              else if (isMobile) { closeMenu(); }
                            }}
                          >
                            <span className="d-flex align-items-center">
                              {isWhatWeDo ? (drilled ? "Go Back" : "What we do") : link.charAt(0).toUpperCase() + link.slice(1)}
                            </span>
                            {isWhatWeDo && (
                              <div className="mini-arrow-container">
                                <span className={`mini-arrow ${isMobile && !showServices ? "navbar-arrow-rotation" : ""} ${drilled ? "rotated" : ""}`}>
                                  <img src={H_ARROW} alt="Arrow Icon" />
                                </span>
                              </div>
                            )}
                          </a>
                        </div>
                      );
                    })}

                    {isMobile && showServices && (
                      <div className="services-nav-items w-100 d-flex flex-column">
                        {services.map((service) => (
                          <div key={service.slug} className="service-item-nav nav-item">
                            <a
                              href={hMap(`/services/${service.slug}/`)}
                              className="service-nav-link d-flex w-100 align-items-center"
                              onClick={() => closeMenu()}
                            >
                              <img src={service.img} alt={service.title} className="service-nav-image" />
                              <p className="nav-link nav-link-black my-0 pr-0">{service.title}</p>
                              <div className="mini-arrow-container">
                                <span className="mini-arrow navbar-arrow-rotation"><img src={H_ARROW} alt="Arrow Icon" /></span>
                              </div>
                            </a>
                          </div>
                        ))}
                        <a href="/services/" className="mobile-all-solutions" onClick={() => closeMenu()}>
                          <p className="nav-link nav-link-black mb-0">
                            All Solutions
                            <span className="mini-arrow-container">
                              <span className="mini-arrow navbar-arrow-rotation"><img src={H_ARROW} alt="Arrow Icon" /></span>
                            </span>
                          </p>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                {isMobile && (
                  <div className="mt-3">
                    <HInitKoalendar className="contact-us-link padding mob-width hover-state button-padding" showButton={true}>
                      Set up a Meeting
                    </HInitKoalendar>
                  </div>
                )}
                <ContactNav />
              </div>
              {!isMobile && <ServicesDropdown showDropdown={showDropdown} services={services} />}
            </div>
          </div>
        </div>
      </nav>
    </div>
    </React.Fragment>
  );
}

window.SogodySrcHeader = { SrcHeader, ServicesDropdown, ContactNav };
