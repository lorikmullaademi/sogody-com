/* Sogody — Work page, 1:1 port of src/pages/work.js: BannerWork (centered hero
   + Trusted-by carousel) + CaseStudiesLoad (filterable grid, 8 initial + Show
   More) + BookMeetHomePage. Renders against the compiled repo SCSS so the
   layout is pixel-for-pixel with live sogody.com/work. */

const { ExploreLink: WExplore, InitKoalendar: WKoalendar, ClientsCarousel: WCarousel } = window.SogodySrcKit;
const { SrcLayout: WLayout } = window.SogodySrcShell;
const { CASE_STUDIES: W_CS, CLIENT_LOGOS: W_LOGOS, IMG: W_IMG, CATEGORIES: W_CATS } = window.SogodyData;
const { useState: useStateW, useEffect: useEffectW } = React;

window.SOGODY_ACTIVE_NAV = "work";
const W_WHITE_ARROW = "assets/svgs/white-arrow.svg";

/* ---- BannerWork (1:1 src/components/BannerWork.js) ---- */
function WorkBanner({ title, subtitle, bgImage, buttonText = "Schedule an Audit Call" }) {
  return (
    <div className="container-mainbanner">
      <div
        className="banner-work text-white"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="row">
          <div className="col-12 banner-title">
            <h1 className="name mb-1 h2-styling">{title}</h1>
            <p className="subtitle margin-addition w-50">{subtitle}</p>
            <WKoalendar showButton={true} variant="green-white" className="contact-us-link button-padding" buttonText={buttonText} />
          </div>
        </div>
        <hr className="mx-5" style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }} />
        <WCarousel data={{ title: "Trusted by:", clientsLogos: W_LOGOS }} />
      </div>
    </div>
  );
}

/* ---- CaseStudiesLoad (1:1 src/components/CaseStudiesLoad.js, desktop grid) ---- */
function WorkCaseStudies({ caseStudies, linkPrefix = "case-study.html" }) {
  const [hovered, setHovered] = useStateW({});
  const [selected, setSelected] = useStateW("all");
  const [visible, setVisible] = useStateW(8);

  const catOrder = [W_CATS.software, W_CATS.ai, W_CATS.interfaces];
  const categories = catOrder.filter((c) => caseStudies.some((i) => i.category === c));
  const filtered = selected === "all" ? caseStudies : caseStudies.filter((i) => i.category === selected);

  useEffectW(() => { setVisible(8); }, [selected]);

  const rows = filtered.slice(0, visible);

  return (
    <div className="case-studies margin-bottom top-m">
      <div className="our-cs custom-case-studies scroll-show">
        <div className="filter-section d-flex">
          <span className={`filter-item ${selected === "all" ? "active" : ""}`} onClick={() => setSelected("all")}>
            Show all ({caseStudies.length})
          </span>
          {categories.map((c) => (
            <span key={c} className={`filter-item ${selected === c ? "active" : ""}`} onClick={() => setSelected(c)}>{c}</span>
          ))}
        </div>
        <WExplore openCalendar={true} text="Schedule an Audit Call" />
      </div>

      <div className="row justify-content-start">
        {rows.map((item, index) => (
          <div key={item.slug} className="col-12 col-md-4 col-lg-3 cs-column load-column-height">
            <a href={`${linkPrefix}?slug=${item.slug}`} className="d-block h-100">
              <div
                className={`${item.slug} active-cs-link h-100 card`}
                onMouseEnter={() => setHovered((p) => ({ ...p, [index]: true }))}
                onMouseLeave={() => setHovered((p) => ({ ...p, [index]: false }))}
              >
                <div className="card-body">
                  <div className="both-images h-100 cs-class">
                    <img className="cs-img h-100" src={item.img} alt="cs img" style={{ maxWidth: "100%", objectFit: "cover" }} />
                    {hovered[index] && (
                      <div
                        className="hover-overlay d-flex justify-content-end align-items-end p-2 text-white"
                        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#2b2b2b", color: "white", display: "flex" }}
                      >
                        <h2 className="hover-title p-2 mb-0">{item.shortTitle || item.title}</h2>
                      </div>
                    )}
                    {item.csBtn && (
                      <div className="transparent-container p-3">
                        <div className="transparent-button d-flex px-2">
                          <span className="subtitle text-uppercase text-white p-0 pt-1 d-flex m-0 align-items-center">{item.csBtn}</span>
                          <span><img src={W_WHITE_ARROW} alt="White arrow" /></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="preview-section justify-content-center my-5">
          <button onClick={() => setVisible(visible + 4)} className="d-flex align-items-center contact-us-link button-padding">Show More</button>
        </div>
      )}
    </div>
  );
}

/* ---- BookMeetHomePage (1:1 src/components/BookMeetHomePage.js) ---- */
function WorkBookMeet() {
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
            <WKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting"></WKoalendar>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkApp() {
  return (
    <WLayout>
      <div className="work">
        <WorkBanner
          title="Our Work: Innovation in Action"
          subtitle="We partner with global innovators to deliver cutting-edge digital solutions. Explore our diverse projects that showcase our commitment to excellence."
          bgImage={W_IMG.workBanner}
        />
        <div className="container-mainbanner updates2">
          <WorkCaseStudies caseStudies={W_CS} linkPrefix="case-study.html" />
        </div>
        <WorkBookMeet />
      </div>
    </WLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WorkApp />);
