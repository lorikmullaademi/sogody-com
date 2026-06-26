/* Sogody — Home page part 2: CaseStudies (Swiper), BookMeetHomePage,
   Updates — 1:1 ports — plus page composition. */

const { ExploreLink: PExplore, mapPath: pMap, SVG_GREEN_ARROW: P_GREEN, SVG_BLACK_ARROW: P_BLACK, SVG_WHITE_ARROW: P_WHITE, InitKoalendar: PInitKoalendar } = window.SogodySrcKit;
const { SrcLayout: PLayout } = window.SogodySrcShell;
const { CASE_STUDIES: P_CS, UPDATES: P_UP } = window.SogodyData;
const { useState: useStateP2, useEffect: useEffectP2, useRef: useRefP2 } = React;

/* ---- CaseStudies (1:1 src/components/CaseStudies.js, Swiper via CDN) ---- */
function HomeCaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useStateP2(null);
  const swiperRef = useRefP2(null);
  const slides = P_CS.slice(0, 4);
  const initialSlide = Math.max(1, Math.ceil(slides.length / 2));

  useEffectP2(() => {
    if (!window.Swiper || !swiperRef.current) return;
    const sw = new window.Swiper(swiperRef.current, {
      spaceBetween: 32,
      slidesPerView: "auto",
      centeredSlides: slides.length > 1,
      centeredSlidesBounds: true,
      initialSlide,
      autoplay: { delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: { 0: { spaceBetween: 16 }, 768: { spaceBetween: 32 } },
    });
    return () => sw.destroy(true, true);
  }, []);

  return (
    <div className="case-studies container mt-5 mx-auto scroll-show">
      <div className="case-studies-wrapper">
        <div className="our-cs-header">
          <div className="our-cs-title"><h2>Explore Our Work</h2></div>
          <div className="our-cs-content">
            <p className="our-cs-description">Browse the type of work Sogody repeatedly does for brands and large multi-national enterprises, organizations and governments.</p>
            <a href="work.html" className="explore-link green-hover" onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
              <span className="text-padding underlined">Explore Our Work</span>
              <span className="arrow-icon arrow-span-styling">
                <img src={hoveredIndex === 0 ? P_GREEN : P_BLACK} alt="Arrow Icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="case-studies-scroll-wrapper">
        <div className="swiper case-studies-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((cs, index) => (
              <div className="swiper-slide case-study-slide" key={cs.slug}>
                <a href={`case-study.html?slug=${cs.slug}`} className="case-study-card-link"
                  onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
                  <div className="case-study-card-item">
                    <div className="case-study-card-image">
                      <img src={cs.img} alt={cs.title} />
                    </div>
                    <div className="case-study-card-overlay">
                      <h3 className="case-study-card-title">{cs.shortTitle || cs.title}</h3>
                      <div className="circular-btn-container overlay-btn">
                        <div className={`circular-btn black ${hoveredIndex === index + 1 ? "hovered" : ""}`}>
                          <span className="arrow-icon">
                            <img src={hoveredIndex === index + 1 ? P_GREEN : P_WHITE} alt="Arrow Icon" />
                          </span>
                        </div>
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

/* ---- BookMeetHomePage (1:1) ---- */
function BookMeetHomePage() {
  return (
    <div className="cta-meet">
      <div className="cta-meet-container">
        <div className="cta-meet-content">
          <div className="cta-meet-content-column">
            <h2 className="cta-meet-content--title">Speak to a Technical Lead</h2>
          </div>
          <div className="cta-meet-content-column">
            <p className="cta-meet-content--description">Join our CTO, for a 30-minute call to explore how Sogody can unlock new digital projects for your brand.</p>
          </div>
          <div className="cta-meet-content-column">
            <PInitKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting"></PInitKoalendar>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Updates (1:1 src/components/Updates.js, desktop variant) ---- */
function HomeUpdates() {
  const truncate = (t, n) => (t.length <= n ? t : `${t.slice(0, n).trim()}...`);
  const updates = P_UP.slice(0, 2);
  return (
    <div className="updates-single-container homepage-updates">
      <div className="title-subtitle-row mb-3">
        <h2 className="title p-0 text-left">How We See the Future of Product, AI, and Engineering</h2>
        <div className="subtitle-div d-flex flex-column">
          <PExplore to="/updates/" text="Explore Our Thinking" />
          <p className="subtitle m-0">Discover how our thinking drive real success.</p>
        </div>
      </div>
      <div className="updates-list">
        {updates.map((update) => (
          <div key={update.slug} className="update-card">
            <div className="update-content-row py-2">
              <div className="update-text">
                <h2 className="title">{truncate(update.title, 80)}</h2>
                <p className="subtitle">{truncate(update.desc || "", 90)}</p>
                <PExplore to={`/updates/${update.slug}/`} text="Explore more" underlined={false} />
              </div>
              {update.img && (
                <div className="update-image" style={{ backgroundImage: `url(${update.img})` }}></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Page composition (1:1 src/pages/index.js) ---- */
function HomeApp() {
  const { MainBanner, WhereWeComeIn, HomeServices, WhatWeBuild } = window.SogodyHomeSections1;
  return (
    <PLayout>
      <MainBanner />
      <WhereWeComeIn />
      <HomeServices />
      <WhatWeBuild />
      <HomeCaseStudies />
      <BookMeetHomePage />
      <div className="updates-contaniner"><HomeUpdates /></div>
    </PLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
