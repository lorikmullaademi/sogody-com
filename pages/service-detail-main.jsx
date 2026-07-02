/* Sogody — single service detail page, 1:1 port of the live
   sogody.com/services/<slug>/ module stack: ServicesBannerTech hero,
   ClientsCarousel, capabilities (servicesTechList), process steps,
   TechnologiesUsed, Platforms carousel (MSHS), ProjectDetails,
   single-card promo (MSHS), UpdatesSingle fallback, BookMeet. */

const { ExploreLink: SdExplore, InitKoalendar: SdKoalendar, ClientsCarousel: SdCarousel, autoplayVideoRef: sdAutoplay } = window.SogodySrcKit;
const { SrcLayout: SdLayout } = window.SogodySrcShell;
const { CLIENT_LOGOS: SD_LOGOS } = window.SogodyData;
const SD_ALL = window.SogodyServiceDetailData;
const SD_ILLO = window.SogodyServiceIllustrations || {};
const { useState: useStateSd, useEffect: useEffectSd, useRef: useRefSd } = React;

/* Section headings come either as a single string or a 2-part [line1, line2]
   array (the live CMS varies per page) — render both cleanly. */
function sdTitle(t) {
  /* keep a real space between the two halves so the title still reads correctly
     when the <br> is hidden on smaller viewports (e.g. .sd-tech-heading br) */
  return Array.isArray(t) ? <React.Fragment>{t[0]}{" "}<br />{t[1]}</React.Fragment> : t;
}

/* ---- Hero (servicesBannerTech): dark banner card, copy left, video right,
        divider + trusted-by inside ---- */
function SdHero({ hero }) {
  return (
    <div className="sd-container scroll-show">
      <div className="sd-banner">
        <div className="sd-banner-top">
          <div className="sd-banner-copy">
            <h1><span className="green">{hero.titleGreen}</span>{hero.titleRest}</h1>
            <p className="subtitle">{hero.sub}</p>
            <SdKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Schedule an Audit Call" />
          </div>
          <div className="sd-banner-media">
            <video ref={sdAutoplay} src={hero.video} poster={hero.poster} autoPlay loop muted playsInline controls={false} style={{ pointerEvents: "none" }}></video>
          </div>
        </div>
        <hr className="sd-banner-divider" />
        <ClientsRow />
      </div>
    </div>
  );
}
function ClientsRow() {
  return <SdCarousel data={{ title: "Trusted by:", clientsLogos: SD_LOGOS }} />;
}

/* ---- Optional intro: single centered paragraph below the hero (only rendered
        when a slug supplies `intro`) ---- */
function SdIntro({ intro }) {
  return (
    <div className="sd-intro scroll-show">
      <p>{intro}</p>
    </div>
  );
}

/* ---- Capabilities: centered heading, 3x2 grid, dark CTO card last ---- */
function SdCapabilities({ caps }) {
  return (
    <div className="sd-caps scroll-show">
      <h2 className="sd-caps-heading">{sdTitle(caps.title)}</h2>
      <div className="sd-caps-grid">
        {caps.cards.map((card, index) => (
          <div className="sd-cap-card" key={index}>
            <div className={`sd-cap-card-img${card.illo ? " has-illo" : ""}`} style={card.img ? { backgroundImage: `url(${card.img})` } : undefined}>
              {card.illo && SD_ILLO[card.illo] && SD_ILLO[card.illo]()}
            </div>
            <div className="sd-cap-card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
        <div className="sd-cta-cell">
          <div className="sd-cta-card">
            <div>
              {caps.rep.avatar && <img src={caps.rep.avatar} alt={caps.rep.title} className="sd-cta-card-avatar" />}
            </div>
            <div>
              <p className="sd-cta-card-name">{caps.rep.title}</p>
              <p className="sd-cta-card-line">{caps.rep.description}</p>
            </div>
          </div>
          <SdKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting" />
        </div>
      </div>
    </div>
  );
}

/* ---- Process (1:1 WWOTE / wwo-te): title left + subtitle right, 5 columns
        divided by hairlines, pills staggered in pairs, styled hover bubble ---- */
function SdProcess({ process }) {
  const [hovered, setHovered] = useStateSd(null);
  const imgMt = [8, 8, 24, 48, 48, 24];   // mt-2 / mt-2 / mt-4 / mt-5 / mt-5 / mt-4 (6th step)
  const cardMb = [0, 32, 32, 32, 88, 88]; // 0 / 2rem / 2rem / 2rem / 5.5rem / 5.5rem
  return (
    <div className="wwo-te scroll-show">
      <div className="d-flex desktop-row w-100 gap mb-4">
        <h2 className="title pt-0 flex-grow-1 text-left">{process.title}</h2>
        <p className="subtitle m-0 flex-grow-1">{process.sub}</p>
      </div>
      <div className="cards-container">
        <div className="row flex-nowrap">
          {process.steps.map((step, i) => (
            <div className="col" key={i}>
              <div
                className="solution-card text-center"
                style={{ borderLeft: i !== 0 ? "2px solid #e8e8e8" : "none", marginBottom: `${cardMb[i]}px` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className="block-subtitle subtitle p-0">Step {i + 1}</p>
                <p className="block-title break-text word-wrap-text">{step.label}</p>
                <div className="sd-pill-wrap" style={{ marginTop: `${imgMt[i]}px` }}>
                  <img src={step.img} alt="" className="img-fluid img-set-height w-100" loading="lazy" />
                  {hovered === i && step.popup && (
                    <div className="hover-popup" style={{ top: "calc(100% + 12px)" }}>
                      <div className="bubble-pointer"></div>
                      <p className="subtitle m-0 p-0">{step.popup}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Technologies: page-wide wave band, small white cards ---- */
function SdTechnologies({ tech }) {
  return (
    <div className="section-technologies-used">
      <div className="sd-tech scroll-show">
        <h2 className="sd-tech-heading">{sdTitle(tech.title)}</h2>
        <div className="sd-tech-grid">
          {tech.cards.map((card, index) => (
            <div className="sd-tech-card" key={index}>
              {card.img
                ? <img src={card.img} alt={card.title} />
                : <span className="sd-tech-mono" aria-hidden="true">{card.mono || card.title.slice(0, 2)}</span>}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Platforms carousel — full-width scroll-snap gallery (mirrors the
        Company page CoGallery: big centered card, loop, floating controls) ---- */
function SdPlatforms({ platforms }) {
  const ref = useRefSd(null);
  const [playing, setPlaying] = useStateSd(true);
  const [idx, setIdx] = useStateSd(0);
  const PAUSE = "https://cdn.sanity.io/images/3hfxs7a8/production/570e76234b5cb899a27aeccb1811a9919afea8a6-85x84.webp";
  const REPLAY = "https://cdn.sanity.io/images/3hfxs7a8/production/601e4edd77931890b2f01d507f5edb2cbc41d2d4-88x88.webp";

  const stepOf = (el) => { const c = el.querySelector(".slide-container"); return c ? c.getBoundingClientRect().width + 24 : 400; };
  const onScroll = () => { const el = ref.current; if (!el) return; setIdx(Math.round(el.scrollLeft / stepOf(el))); };
  const goTo = (i) => { const el = ref.current; if (!el) return; el.scrollTo({ left: i * stepOf(el), behavior: "smooth" }); };

  useEffectSd(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const el = ref.current; if (!el) return;
      const next = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5 ? 0 : Math.round(el.scrollLeft / stepOf(el)) + 1;
      el.scrollTo({ left: next * stepOf(el), behavior: "smooth" });
    }, 2600);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="mshs-services d-flex flex-column scroll-show">
      <h2 className="title mb-5 container">{platforms.title}</h2>
      <div className="slider-wrapper sd-slider-wrapper">
        <div className="custom-slider sd-gallery-track" ref={ref} onScroll={onScroll}>
          {platforms.cards.map((item, i) => (
            <div key={i} className="slide-container sd-slide">
              <div
                className={`content-box d-flex flex-column p-4${item.textWhite ? " text-white" : ""}`}
                style={item.bg ? { backgroundImage: `url(${item.bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "#f0f0f0" } : undefined}
              >
                <div className="d-flex align-items-center">
                  <img src={item.logo} alt="Logo" className="btn-logo-img mr-1" />
                  <p className="font-extended m-0">{item.name}</p>
                </div>
                <p className="subtitle my-3">{item.tagline}</p>
                <p className="subtitle m-0 mb-2 w-40">{item.description}</p>
                <SdExplore href={item.href} text="View site" openInNewTab />
              </div>
            </div>
          ))}
        </div>
        <div className="sd-slider-controls">
          <button type="button" className="autoplay-btn p-0 d-flex" onClick={() => setPlaying((p) => !p)}>
            <img src={playing ? PAUSE : REPLAY} alt={playing ? "Pause" : "Replay"} width="25" height="25" />
          </button>
          <ul className="sd-dots">
            {platforms.cards.map((_, i) => (
              <li key={i} className={i === idx ? "active" : ""}><button type="button" onClick={() => goTo(i)}></button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---- ProjectDetails (1:1 components/ProjectDetails.js) ---- */
function SdProjectDetails({ pd }) {
  const LINKEDIN = "/assets/images/social-icons/linkedin-black.svg";
  return (
    <div className="project-details d-flex flex-column align-items-center scroll-show mt-5 mb-3 py-3">
      <div className="row w-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-around gap">
          <img src={pd.logo} alt="Project Logo" className="project-logo" />
          <div className="d-flex gap-3">
            <p className="founded-year d-flex flex-column m-0 mr-5"><span>Founded</span> <span className="subtitle m-0">{pd.founded}</span></p>
            <p className="partners d-flex flex-column m-0"><span>Partners</span> <span className="subtitle m-0">{pd.partners}</span></p>
          </div>
          <p className="intro-description m-0">{pd.intro}</p>
          <div className="d-flex">
            <a href={pd.linkedinHref} target="_blank" rel="noopener noreferrer">
              <img src={LINKEDIN} alt="LinkedIn Logo" className="social-icon mr-3" />
            </a>
            <SdExplore href={pd.websiteHref} openInNewTab text="Visit site" />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          <p className="invested-description d-flex flex-column m-0"><span>Why we invested</span> <span className="subtitle mt-1">{pd.investedDescription}</span></p>
          <img src={pd.image} alt="Project Main" className="main-image mt-3" />
        </div>
      </div>
    </div>
  );
}

/* ---- Single-card promo (managedSharedServices showSingleCard) ---- */
function SdPromo({ promo }) {
  return (
    <div className="mshs-services d-flex flex-column container-mainbanner scroll-show">
      <div className="content-box d-flex flex-column p-4">
        <div className="d-flex align-items-center">
          <img src={promo.logo} alt="Logo" className="mr-2 mb-2 single-card-logo" />
          <p className="font-extended m-0">{promo.btnText}</p>
        </div>
        <p className="subtitle m-0 mb-3 w-40">{promo.description}</p>
        <SdExplore href={promo.href} text="Visit site" openInNewTab />
      </div>
    </div>
  );
}

/* ---- Updates (updatesSingle, homepage-updates layout) ---- */
function SdUpdates({ updates }) {
  return (
    <div className="updates-single-container homepage-updates">
      <div className="title-subtitle-row mb-3">
        <h2 className="title p-0 text-left">How We See the Future of Product, AI, and Engineering</h2>
        <div className="subtitle-div d-flex flex-column">
          <SdExplore to="/updates/" text="Explore All Insights" />
          <p className="subtitle m-0">Discover how our thinking drive real success.</p>
        </div>
      </div>
      <div className="updates-list">
        {updates.map((update, i) => (
          <div key={i} className="update-card">
            <div className="update-content-row py-2">
              <div className="update-text">
                <h2 className="title">{update.title}</h2>
                <p className="subtitle">{update.desc}</p>
                <SdExplore to="/updates/" text="Explore more" underlined={false} />
              </div>
              <div className="update-image" style={{ backgroundImage: `url(${update.img})` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- BookMeet (1:1) ---- */
function SdBookMeet() {
  return (
    <div className="cta-meet">
      <div className="cta-meet-container">
        <div className="cta-meet-content">
          <div className="cta-meet-content-column"><h2 className="cta-meet-content--title">Speak to a Technical Lead</h2></div>
          <div className="cta-meet-content-column"><p className="cta-meet-content--description">Join our CTO, for a 30-minute call to explore how Sogody can unlock new digital projects for your brand.</p></div>
          <div className="cta-meet-content-column">
            <SdKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting"></SdKoalendar>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Page composition ---- */
function ServiceDetailApp() {
  const params = new URLSearchParams(window.location.search);
  const slug = window.SD_SLUG || params.get("slug") || "technology-engineering";
  const sd = SD_ALL[slug] || SD_ALL["technology-engineering"];
  document.title = sd.metaTitle;

  return (
    <SdLayout>
      <div className="service-detail-page container-mainbanner" data-sd-theme={sd.theme || "tech"}>
        <SdHero hero={sd.hero} />
        {sd.intro && <SdIntro intro={sd.intro} />}
        <SdCapabilities caps={sd.caps} />
        <SdProcess process={sd.process} />
        <SdTechnologies tech={sd.tech} />
        {sd.platforms && <SdPlatforms platforms={sd.platforms} />}
        {sd.projectDetails && <SdProjectDetails pd={sd.projectDetails} />}
        {sd.promo && <SdPromo promo={sd.promo} />}
        {sd.updates && <SdUpdates updates={sd.updates} />}
        <SdBookMeet />
      </div>
    </SdLayout>
  );
}

window.SOGODY_ACTIVE_NAV = "what we do";
ReactDOM.createRoot(document.getElementById("root")).render(<ServiceDetailApp />);
