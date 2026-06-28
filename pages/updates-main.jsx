/* Sogody — Updates page, 1:1 port of src/pages/updates.js: BannerWork (centered
   hero + Trusted-by carousel) + CaseStudiesLoad type="updates" (filterable grid,
   image + circular button + title below, 8 initial + Show More) +
   BookMeetHomePage. Renders against the compiled repo SCSS so the layout is
   pixel-for-pixel with live sogody.com/updates. */

const { ExploreLink: UExplore, InitKoalendar: UKoalendar, ClientsCarousel: UCarousel, CircularButton: UCircular } = window.SogodySrcKit;
const { SrcLayout: ULayout } = window.SogodySrcShell;
const { UPDATES: U_LIST, CLIENT_LOGOS: U_LOGOS, IMG: U_IMG } = window.SogodyData;
const { useState: useStateU, useEffect: useEffectU } = React;

window.SOGODY_ACTIVE_NAV = "updates";

/* ---- BannerWork (1:1 src/components/BannerWork.js) ---- */
function UpdatesBanner({ title, subtitle, bgImage, buttonText = "Schedule an Audit Call" }) {
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
            <UKoalendar showButton={true} variant="green-white" className="contact-us-link button-padding" buttonText={buttonText} />
          </div>
        </div>
        <hr className="mx-5" style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }} />
        <UCarousel data={{ title: "Trusted by:", clientsLogos: U_LOGOS }} />
      </div>
    </div>
  );
}

/* ---- CaseStudiesLoad, type="updates" (1:1 src/components/CaseStudiesLoad.js) ---- */
function UpdatesGrid({ updates, linkPrefix = "update.html" }) {
  const [hovered, setHovered] = useStateU({});
  const [selected, setSelected] = useStateU("all");
  const [visible, setVisible] = useStateU(8);

  /* categories in first-appearance order (mirrors Array.from(new Set(...))) */
  const categories = Array.from(new Set(updates.map((i) => i.category).filter(Boolean)));
  const filtered = selected === "all" ? updates : updates.filter((i) => i.category === selected);

  useEffectU(() => { setVisible(8); }, [selected]);

  const rows = filtered.slice(0, visible);

  return (
    <div className="case-studies margin-bottom top-m">
      <div className="our-cs custom-case-studies scroll-show">
        <div className="filter-section d-flex">
          <span className={`filter-item ${selected === "all" ? "active" : ""}`} onClick={() => setSelected("all")}>
            Show all ({updates.length})
          </span>
          {categories.map((c) => (
            <span key={c} className={`filter-item ${selected === c ? "active" : ""}`} onClick={() => setSelected(c)}>{c}</span>
          ))}
        </div>
        <UExplore openCalendar={true} text="Schedule an Audit Call" />
      </div>

      <div className="row justify-content-start">
        {rows.map((item, index) => (
          <div key={item.slug} className="col-12 col-md-4 col-lg-3 cs-column update-cs-column">
            <a href={`${linkPrefix}?slug=${item.slug}`} className="d-block">
              <div
                className={`${item.slug} active-cs-link card`}
                onMouseEnter={() => setHovered((p) => ({ ...p, [index]: true }))}
                onMouseLeave={() => setHovered((p) => ({ ...p, [index]: false }))}
              >
                <div className="card-body">
                  <div className="both-images">
                    <img className="cs-img" src={item.img} alt="updates img" style={{ maxWidth: "100%", maxHeight: "252px", width: "100%", objectFit: "cover" }} />
                    <UCircular isHovered={hovered[index]} type="updates" slug={item.slug} nested={true} />
                  </div>
                  <div className="cs-title"><p>{item.title}</p></div>
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
function UpdatesBookMeet() {
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
            <UKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting"></UKoalendar>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdatesApp() {
  return (
    <ULayout>
      <div className="up-final">
        <UpdatesBanner
          title="Stay Updated With Sogody"
          subtitle="Get the latest insights, trends, and innovations shaping the future of digital, AI, and e-commerce."
          bgImage={U_IMG.workBanner}
        />
        <div className="updates2 margin-bottom">
          <div className="container-mainbanner">
            <UpdatesGrid updates={U_LIST} linkPrefix="update.html" />
          </div>
          <UpdatesBookMeet />
        </div>
      </div>
    </ULayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<UpdatesApp />);
