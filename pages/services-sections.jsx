/* Sogody — Services page, 1:1 port of src/pages/services.js and its modules
   (servicesBanner, ServicesCategories, ServiceCategoryCard, OptimizedServices,
   PhotoGrid, BookMeetHomePage). Renders against the compiled repo SCSS.
   Content pulled verbatim from live sogody.com/services. */

const { ExploreLink: SvExplore, InitKoalendar: SvKoalendar, mapPath: svMap, SVG_WHITE_ARROW: SV_WHITE, autoplayVideoRef: svAutoplay } = window.SogodySrcKit;
const { SrcLayout: SvLayout } = window.SogodySrcShell;
const { useState: useStateSv, useEffect: useEffectSv, useRef: useRefSv } = React;

const SANITY = "https://cdn.sanity.io/images/3hfxs7a8/production";

/* ---- device check (mirrors deviceCheck.js) ---- */
function useDeviceCheckSv(kind = "mobile") {
  const query = kind === "tablet" ? "(max-width: 1023px)" : "(max-width: 767px)";
  const [match, setMatch] = useStateSv(() => window.matchMedia(query).matches);
  useEffectSv(() => {
    const mq = window.matchMedia(query);
    const h = (e) => setMatch(e.matches);
    setMatch(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [query]);
  return match;
}

/* ---- content (live sogody.com/services, Sanity CMS) ---- */
const SV_CATEGORIES_DATA = {
  mainTitle: ["To ensure your success, we tackle", "challenges with smart solutions."],
  subtitle: "We craft tailored digital solutions that solve challenges and unlock new opportunities.",
  buttonText: "Schedule an Audit Call",
  categories: [
    {
      category: "Domain-Specific Software Platforms",
      slug: "technology-engineering",
      keyPoints: ["Backend Development", "API Development", "Automation & Integration", "Data Engineering", "Cloud Solutions"],
      video: "https://files.sogody.co.uk/2025-04-16T14-17-11.207Z-Optimized_software-engineering-service-18.mp4",
      techSlider: [
        { techName: "Ruby", techDescription: "Programming Language", techIcon: `${SANITY}/9fb8e1ce723fcc3bd663479a61b1f302784313fc-148x148.webp` },
      ],
    },
    {
      category: "AI & Data Systems",
      slug: "ai-solutions",
      keyPoints: ["GPT & LLM features", "Recommendation engines", "Predictive analytics", "ML pipelines", "Intelligent automation"],
      video: "https://files.sogody.co.uk/2025-04-16T14-27-19.288Z-Optimized_ai-service-mobile-3.mp4",
      techSlider: [
        { techName: "TensorFlow", techDescription: "Machine Learning (ML) Frameworks", techIcon: `${SANITY}/1726b9a9167f66e4da9abd7e8b2e0536b0361320-64x67.webp` },
      ],
    },
    {
      category: "Human-AI Interfaces",
      slug: "customer-experience",
      keyPoints: ["UX/UI Design Optimization", "A/B Testing", "Customer Journey Mapping", "Feedback Analytics", "Data Management"],
      video: "https://files.sogody.co.uk/2025-04-16T14-15-36.459Z-Optimized_explore-our-services-12.mp4",
      techSlider: [
        { techName: "Adobe", techDescription: "Design & Multimedia Suite", techIcon: `${SANITY}/2ea3636a001e4a067f1a407fc977353adbbb97f4-36x35.webp` },
      ],
    },
  ],
};

/* ---- ServicesBanner (1:1 src/components/services/servicesBanner.js) ---- */
function SvServicesBanner() {
  const servicesList = [
    { name: "AI & Data Systems", href: "ai-solutions", style: { marginLeft: "50%" } },
    { name: "Human-AI Interfaces", href: "customer-experience", style: { marginLeft: "25%", marginTop: "5%" } },
    { name: "Domain-Specific Software Platforms", href: "technology-engineering", style: { marginLeft: "49%", marginTop: "5%" } },
  ];
  const [hoveredIndex, setHoveredIndex] = useStateSv(null);
  const isMobile = useDeviceCheckSv();
  const circleClasses = ["purple", "blue", "yellow"];
  const bannerGradients = [
    "linear-gradient(to bottom, #2a2a2a 0%, #625a2d 100%)",
    "linear-gradient(to bottom, #2a2a2a 0%, #267D5E 100%)",
    "linear-gradient(to bottom, #2a2a2a 0%, #40334b 100%)",
  ];

  if (isMobile) {
    return (
      <div className="banner-title text-center mobile-only">
        <h2 className="text-black text-left mt-4 line-height-40">
          Empowering Growth with Tailored <span className="green-gradient">Digital Solutions</span>
        </h2>
        <SvKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a meeting" href="/contact"></SvKoalendar>
      </div>
    );
  }

  return (
    <div className="services-page-banner scroll-show">
      <div className="d-flex flex-column align-items-center gap">
        <div
          className="banner-image justify-content-center align-items-start pt-4"
          style={{
            background: hoveredIndex !== null ? bannerGradients[hoveredIndex] : "linear-gradient(to bottom, #2c2e2c 0%, #213d37 100%)",
            transition: "linear-gradient 0.5s ease-in-out",
          }}
        >
          <div className="banner-title text-center">
            <h2 className="text-white">
              <span className="green">Empowering Growth</span> with <br /> Tailored Digital Solutions
            </h2>
          </div>

          <div className="d-flex flex-column align-items-start w-100 gap-3 position-absolute" style={{ top: "40%" }}>
            {servicesList.map((service, index) => (
              <a
                key={index}
                href={`service.html?slug=${service.href}`}
                className="service-item text-white py-1 px-2"
                style={{
                  cursor: "pointer",
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  zIndex: 2,
                  ...service.style,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="subtitle">{service.name}</span>
                <div className="mini-arrow-container">
                  <span className="navbar-arrow-rotation mini-arrow"><img src={SV_WHITE} alt="Arrow Icon" /></span>
                </div>
              </a>
            ))}
          </div>

          <div
            className={`green-circle position-absolute w-100 ${hoveredIndex !== null ? circleClasses[hoveredIndex] : ""}`}
            style={{
              backgroundImage: `url('${SANITY}/810c61daae7f2602f5e856da5e1b5df98394e8f0-2556x2723.webp')`,
              transform:
                hoveredIndex !== null
                  ? `translateX(-50%) rotate(${hoveredIndex === 0 || hoveredIndex === 2 ? "-90deg" : "90deg"})`
                  : "translateX(-50%) rotate(0deg)",
              transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

/* ---- ServiceCategoryCard (1:1 src/components/ServiceCategoryCard.js) ---- */
function SvServiceCategoryCard({ category }) {
  const [isVisible, setIsVisible] = useStateSv(false);
  const cardRef = useRefSv(null);
  const isMobile = useDeviceCheckSv("mobile");
  const isTablet = useDeviceCheckSv("tablet");
  const [activeTechIndex, setActiveTechIndex] = useStateSv(0);

  useEffectSv(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    /* manual fallback (mirrors SrcLayout's scroll-show fallback): IO callbacks
       can fail to fire inside preview iframes */
    const check = () => {
      const el = cardRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.1 && r.bottom > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", check);
      }
    };
    const t = setTimeout(check, 150);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
      clearTimeout(t);
      window.removeEventListener("scroll", check);
    };
  }, []);

  useEffectSv(() => {
    if (!category.techSlider || category.techSlider.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTechIndex((prev) => (prev + 1) % category.techSlider.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [category.techSlider]);

  const goTo = () => { window.location.href = `service.html?slug=${category.slug}`; };
  const activeTech = category.techSlider[activeTechIndex];

  return (
    <div
      ref={cardRef}
      className="service-category-card w-100"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
      }}
    >
      <div
        className={`card-content justify-content-between d-flex w-100 ${isMobile ? "p-4" : "p-5"}`}
        role="button"
        tabIndex={0}
        onClick={(e) => { if (!e.target.closest("a, button")) goTo(); }}
        onKeyDown={(e) => { if (e.key === "Enter" && !e.target.closest("a, button")) goTo(); }}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex flex-column justify-content-between max-width-50 small-desktop-width-55">
          <div className="category-header d-flex justify-content-between">
            <div className="category-title">
              <h2 className="smaller-title title mb-0 pt-0 text-left justify-content-start">{category.category}</h2>
            </div>
          </div>

          <div className="category-keypoints">
            <ul className={`keypoints-grid ${category.keyPoints.length === 3 || isMobile ? "three-items" : ""}`}>
              {category.keyPoints.map((point, index) => (
                <li key={index} className="subtitle mt-2">{point}</li>
              ))}
            </ul>
          </div>

          {!isTablet && <SvExplore to={`/services/${category.slug}/`} text="Explore more" />}
        </div>

        <div className="card-videos-grid d-flex">
          <video ref={svAutoplay} src={category.video} autoPlay loop muted playsInline className="video-wide" controls={false} style={{ pointerEvents: "none" }}></video>

          {category.techSlider.length > 0 && !isTablet && (
            <div>
              <div className="tech-slider-box p-2 d-flex flex-column mb-1">
                <p className="tech-title m-0 text-center subtitle w-75 mx-auto">Technologies we use:</p>
                <div className="tech-item-wrapper position-relative overflow-hidden">
                  <div key={activeTechIndex} className="tech-item fade-transition d-flex flex-column text-center">
                    <img src={activeTech.techIcon} alt={activeTech.techName} className="tech-icon mb-2" />
                    <p className="tech-name m-0 subtitle">{activeTech.techName}</p>
                    <p className="tech-description m-0 subtitle">{activeTech.techDescription}</p>
                  </div>
                </div>
              </div>
              <SvKoalendar showButton={true} blackButton={false} className="contact-us-link button-padding test" buttonText="Hire us" />
            </div>
          )}
        </div>

        {isTablet && (
          <React.Fragment>
            <div className="my-3">
              <SvKoalendar showButton={true} blackButton={false} className="contact-us-link button-padding" buttonText="Hire us" />
            </div>
            <SvExplore to={`/services/${category.slug}/`} text="Explore more" />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

/* ---- ServicesCategories (1:1 src/components/ServicesCategories.js) ---- */
function SvServicesCategories() {
  const isMobile = useDeviceCheckSv();
  const d = SV_CATEGORIES_DATA;
  return (
    <div className="services-categories">
      <div className="category-item">
        <div className="content-wrapper d-flex justify-content-between w-100 mb-3">
          <h1 className="title h2-styling">{d.mainTitle[0]} <br /> {d.mainTitle[1]}</h1>
          <span>
            <SvExplore openCalendar text={d.buttonText} />
            {!isMobile && <p className="subtitle">{d.subtitle}</p>}
          </span>
        </div>
        <div className="categories-list">
          {d.categories.map((category, i) => (
            <SvServiceCategoryCard key={i} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

window.SogodyServicesSections1 = { SvServicesBanner, SvServicesCategories, useDeviceCheckSv };
