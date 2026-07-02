/* Sogody — Home page, 1:1 port of src/pages/index.js and its section
   components (MainBanner, WhereWeComeIn, Services, WhatWeBuild, CaseStudies,
   BookMeetHomePage, Updates). Renders against the compiled repo SCSS. */

const { ExploreLink, CircularButton, InitKoalendar, ClientsCarousel } = window.SogodySrcKit;
const { SrcLayout } = window.SogodySrcShell;
const { CLIENT_LOGOS, SERVICES, CASE_STUDIES, UPDATES } = window.SogodyData;
const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;

const HERO_VIDEO = "https://files.sogody.co.uk/2025-04-16T14-14-21.372Z-Optimized_home-banner.mp4";
const WWB_VIDEO = "https://files.sogody.co.uk/2026-01-14T13-44-03.809Z-sogody-video.mp4";

/* ---- MainBanner (1:1 src/components/MainBanner.js) ---- */
function MainBanner() {
  return (
    <div className="banner-padding text-center scroll-show">
      <div className="banner-styling">
        <h1 className="banner-title">Intelligence, Infrastructure, and Interfaces for the Next Generation of Products.</h1>
        <p className="subtitle container">We build the internal systems, AI engines, and human–AI interfaces that product teams rely on when off-the-shelf solutions don’t cut it.</p>
      </div>
      <div className="book-meeting d-flex justify-content-center">
        <div className="buttons">
          <InitKoalendar className="contact-us-link padding mob-width hover-state button-padding" showButton={true}>
            Schedule a Strategy Call
          </InitKoalendar>
          <ExploreLink to="/work/" text="Explore Our Work" />
        </div>
      </div>
      <div className="container-mainbanner banner-carousel-div">
        <video src={HERO_VIDEO} autoPlay loop muted playsInline controls={false} height="400px" className="border-radius" style={{ width: "100%", objectFit: "cover", pointerEvents: "none" }}></video>
        <ClientsCarousel data={{ title: "Trusted by:", clientsLogos: CLIENT_LOGOS }} />
      </div>
    </div>
  );
}

/* ---- WhereWeComeIn (1:1) ---- */
function WhereWeComeIn() {
  return (
    <section className="where-we-come-in-section">
      <div className="where-we-come-in-wrapper">
        <p className="where-we-come-in-text">
          <span className="where-we-come-in-label">This is where we come in.</span>
          <span className="where-we-come-in-text-strong">Modern product teams move fast but their systems don’t. Your product can only evolve as fast as the systems behind it.</span>
          <span className="where-we-come-in-text-light"> Most companies can ship features. Few can upgrade the infrastructure, intelligence, and decision layers that make those features possible, especially with AI reshaping how modern software works.</span>
        </p>
      </div>
    </section>
  );
}

/* ---- Services (1:1 src/components/Services.js) ---- */
function HomeServices() {
  const [hoveredService, setHoveredService] = useStateP(null);
  return (
    <div className="service service-has-padding">
      <div className="services-desktop-wrapper">
        <div className="services-desktop-box">
          <div className="services-desktop-intro">
            <div className="services-desktop-intro-group">
              <p className="services-eyebrow">We build the systems behind intelligent products.</p>
              <ExploreLink to="/work/" text="Explore Our Services" className="services-explore-link" />
            </div>
            <h4>Explore Our Main Services</h4>
          </div>
          <div className="services-desktop-cards">
            {SERVICES.slice(0, 3).map((service) => (
              <div className="service-col" key={service.slug} onMouseEnter={() => setHoveredService(service.slug)} onMouseLeave={() => setHoveredService(null)}>
                <a href={`/services/${service.slug}/`}>
                  <div className={`service-box ${service.slug} jumbotron`}>
                    <div className="service-content">
                      <div className="service-img">
                        <div className="service-img-ctn">
                          <div className="service-image image-bg" style={{ backgroundImage: `url(${service.img})` }}></div>
                          <div className="circular-parent">
                            <CircularButton isHovered={hoveredService === service.slug} variant="black" type="services" slug={service.slug} nested={true} />
                          </div>
                        </div>
                      </div>
                      <div className="service-text">
                        <h3 className="service-title">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- WhatWeBuild (1:1) ---- */
function WhatWeBuild() {
  const items = [
    { label: "01", title: "Internal decision engines", description: "Automating logic and choices behind key operations." },
    { label: "02", title: "AI-assisted workflows", description: "Streamlining tasks with embedded intelligence." },
    { label: "03", title: "Data extraction & enrichment systems", description: "Turning raw data into structured, usable input." },
    { label: "04", title: "Multi-tenant enterprise platforms", description: "Powering secure, scalable systems for multiple teams." },
    { label: "05", title: "Operational dashboards & insight layers", description: "Visualizing the metrics that drive decisions." },
    { label: "06", title: "Human–AI configuration tools", description: "Letting teams shape and refine AI behavior." },
  ];
  return (
    <section className="what-we-build-section">
      <div className="what-we-build-wrapper">
        <div className="what-we-build-header">
          <p className="what-we-build-eyebrow">What we build most often</p>
        </div>
        <div className="what-we-build-card">
          <div className="what-we-build-left">
            <video className="what-we-build-video" src={WWB_VIDEO} autoPlay loop muted playsInline />
          </div>
          <div className="what-we-build-right">
            {items.map((item) => (
              <div className="what-we-build-row" key={item.label}>
                <div className="what-we-build-row-index"><span>({item.label})</span></div>
                <div className="what-we-build-row-main"><h3 className="what-we-build-row-title">{item.title}</h3></div>
                <div className="what-we-build-row-description"><p>{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SogodyHomeSections1 = { MainBanner, WhereWeComeIn, HomeServices, WhatWeBuild };
