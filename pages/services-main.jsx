/* Sogody — Services page part 2: OptimizedServices, PhotoGrid,
   "unforgettable experiences" block, BookMeetHomePage — 1:1 ports —
   plus page composition (src/pages/services.js). */

const { ExploreLink: SpExplore, InitKoalendar: SpKoalendar, autoplayVideoRef: spAutoplay } = window.SogodySrcKit;
const { SrcLayout: SpLayout } = window.SogodySrcShell;
const { SvServicesBanner, SvServicesCategories, useDeviceCheckSv: useDevSp } = window.SogodyServicesSections1;
const { useState: useStateSp, useEffect: useEffectSp, useRef: useRefSp } = React;

/* ---- OptimizedServices (1:1 src/components/OptimizedServices.js) ---- */
function SpOptimizedServices({ title, subtitle }) {
  const cardsRef = useRefSp([]);
  const isMobile = useDevSp("mobile");
  const isTablet = useDevSp("tablet");
  const scrollContainerRef = useRefSp(null);
  const [scrollProgress, setScrollProgress] = useStateSp(0);

  useEffectSp(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;
    const cardHeights = cards.map((card) => card.offsetHeight);
    const maxHeight = Math.max(...cardHeights);
    cards.forEach((card) => { card.style.height = `${maxHeight}px`; });
  }, []);

  useEffectSp(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const handleScroll = () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      setScrollProgress(maxScrollLeft > 0 ? (scrollContainer.scrollLeft / maxScrollLeft) * 100 : 0);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { title: "Design / User-Centric Approach", subtitle: "We craft tailored digital experiences that align with your users’ needs and business goals." },
    { title: "Development / End-to-End Solutions", subtitle: "From architecture to launch, we manage the full development cycle for high-impact delivery." },
    { title: "Maintenance / Continuous Support", subtitle: "We provide ongoing technical support to ensure platform stability and long-term efficiency." },
    { title: "Insights / Data-Driven Decisions", subtitle: "Leverage data and experimentation to uncover user behavior and optimize performance." },
  ];

  return (
    <div className="optimized-services-banner scroll-show">
      <div
        className={`banner-image background-image-settings justify-content-center align-items-start ${isMobile ? "p-3" : "p-5"}`}
        style={{ backgroundImage: "url('https://cdn.sanity.io/images/3hfxs7a8/production/c56762ec5ff0a0bdafcfbc823c37e699dd802a6e-4580x2508.webp')" }}
      >
        <div className="content-wrapper d-flex justify-content-between w-100 mb-4">
          <h2 className="title pt-0 text-left m-0" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <span>
            <p className="subtitle mt-1">{subtitle}</p>
            <SpKoalendar variant="green-white" showButton={true} blackButton={false} className="contact-us-link button-padding" buttonText="Schedule an Audit Call" />
          </span>
        </div>

        <div className="cards-container d-flex justify-content-between w-100 mt-4" ref={scrollContainerRef}>
          {cards.map((card, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} className="service-card d-flex flex-column">
              <h3 className="card-title m-0">{card.title}</h3>
              <p className="subtitle mt-0">{card.subtitle}</p>
              <span className="card-index">0{index + 1}</span>
            </div>
          ))}
        </div>

        {isTablet && (
          <div className="horizontal-scroll-progress-bar mt-4 mb-3">
            <div className="horizontal-scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- PhotoGrid (1:1 src/components/PhotoGrid.js) ---- */
const SP_MEDIA = [
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/66b79267d3977e3bcf9e4eac81729759e308ffb9-1227x1435.webp", alt: "photo 1", column: 1, type: "image" },
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/5f45b3a37d99633fab06695d0aaf6a45376f6e87-1216x1428.webp", alt: "photo 2", column: 1, type: "image" },
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/492a0da25ab2f3b10b4f91629179c84a44b11f9b-1232x680.webp", alt: "photo 3", column: 2, type: "image" },
  { src: "https://files.sogody.co.uk/2025-04-18T11-48-33.797Z-Optimized_grid-4-1.mp4", alt: "video 4", column: 2, type: "video" },
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/2b2f6329bb6b9ce522f98e4f0926295999e2dde4-1212x1024.webp", alt: "photo 5", column: 2, type: "image" },
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/fc963ed714fd48d674d2bbc6b1c903928b88fd71-1227x1435.webp", alt: "photo 6", column: 3, type: "image" },
  { src: "https://cdn.sanity.io/images/3hfxs7a8/production/82b85f096cba3fcf6d4a1a21ea9def67aa26b1de-1220x1428.webp", alt: "photo 7", column: 3, type: "image" },
];

function SpPhotoGrid() {
  const columns = [[], [], []];
  SP_MEDIA.forEach((item) => { columns[item.column - 1].push(item); });
  return (
    <div className="row photo-grid mt-2">
      {columns.map((columnItems, index) => (
        <div key={index} className="col-6 col-md-4 col-lg-4 photo-column d-flex flex-column justify-content-end">
          {columnItems.map((item, idx) => (
            <div key={idx} className="photo">
              {item.type === "video"
                ? <video ref={spAutoplay} src={item.src} className="img-fluid" autoPlay loop muted playsInline controls={false} style={{ pointerEvents: "none" }}></video>
                : <img src={item.src} alt={item.alt} className="img-fluid" loading="lazy" />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---- BookMeetHomePage (1:1) ---- */
function SpBookMeet() {
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
            <SpKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting"></SpKoalendar>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Page composition (1:1 src/pages/services.js) ---- */
function ServicesPageApp() {
  return (
    <SpLayout>
      <div className="services-page">
        <div className="container-mainbanner">
          <SvServicesBanner />
          <SvServicesCategories />
          <SpOptimizedServices
            title="Optimized Services <br /> for Consistent Success"
            subtitle="Offering managed services with a flexible retainer mode—aligning costs with time for reliable support."
          />
        </div>
        <div className="container-services">
          <div className="desktop-width">
            <h2 className="title justify-content-start text-left">
              And in the end… it's all about <br /> creating unforgettable <br className="mobile-br" /> experiences
            </h2>
            <p className="subtitle">
              Delivering comprehensive digital solutions across software, AI, customer <br className="desktop-br" /> experience, and e-commerce to transform interactions into measurable growth.
            </p>
            <SpExplore to="/work/" />
          </div>
          <SpPhotoGrid />
          <SpBookMeet />
        </div>
      </div>
    </SpLayout>
  );
}

window.SOGODY_ACTIVE_NAV = "what we do";
ReactDOM.createRoot(document.getElementById("root")).render(<ServicesPageApp />);
