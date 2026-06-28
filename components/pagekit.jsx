/* Sogody — shared page building blocks reused across listing pages and
   templates: BannerWork hero, BookMeet CTA, the filterable case-study / updates
   grid, and the FAQ accordion. Mirrors src/components/BannerWork.js,
   CaseStudiesLoad.js, BookMeetHomePage.js and FAQ.js. window.SogodyPageKit */

const { useState: usePK, useEffect: useEffectPK } = React;
const { ExploreLink: PKExplore, CircularButton: PKCircle, ContactButton: PKBtn, ClientsCarousel: PKCarousel } = window.SogodyKit;
const { BOOKING_URL: PK_BOOKING, CLIENT_LOGOS: PK_LOGOS } = window.SogodyData;

/* slug param helper for templates */
function getSlug() {
  const p = new URLSearchParams(window.location.search);
  return p.get("slug") || "";
}

/* ---------- BannerWork: full-bleed hero used by Work & Updates ---------- */
function BannerWork({ title, subtitle, bgImage, buttonText = "Schedule an Audit Call", showCarousel = true }) {
  return (
    <div className="container-mainbanner">
      <div className="banner-work text-white" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="banner-work-row">
          <div className="banner-work-title">
            <h1 className="name h2-styling">{title}</h1>
            <p className="subtitle margin-addition">{subtitle}</p>
            <InitKoalendar href={PK_BOOKING} variant="green-white" className="contact-us-link padding mob-width hover-state button-padding" showButton={true}>
              {buttonText}
            </InitKoalendar>
          </div>
        </div>
        <hr className="banner-work-divider" />
        {showCarousel && <PKCarousel title="Trusted by:" logos={PK_LOGOS} />}
      </div>
    </div>
  );
}

/* ---------- BookMeet CTA (mirrors BookMeetHomePage) ---------- */
function BookMeet({ title = "Speak to a Technical Lead", description = "Join our CTO, for a 30-minute call to explore how Sogody can unlock new digital projects for your brand.", button = "Set up a Meeting" }) {
  return (
    <div className="cta-meet">
      <div className="cta-meet-container">
        <div className="cta-meet-content">
          <div className="cta-meet-content-column"><h2 className="cta-meet-content--title">{title}</h2></div>
          <div className="cta-meet-content-column"><p className="cta-meet-content--description">{description}</p></div>
          <div className="cta-meet-content-column"><PKBtn href={PK_BOOKING}>{button}</PKBtn></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Filterable grid (mirrors CaseStudiesLoad) ----------
   type "cs": case-study cards (image + overlay tag, hover dark title)
   type "updates": update cards (image + circular btn + title below) */
function ContentGrid({ items, type = "cs", linkBase, initial = 8, step = 4 }) {
  const [selected, setSelected] = usePK("all");
  const [visible, setVisible] = usePK(initial);
  const [hover, setHover] = usePK(null);

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean)));
  const filtered = selected === "all" ? items : items.filter((i) => i.category === selected);
  const shown = filtered.slice(0, visible);

  useEffectPK(() => { setVisible(initial); }, [selected]);

  return (
    <div className="case-studies-load margin-bottom">
      <div className="our-cs custom-case-studies">
        <div className="filter-section">
          <span className={`filter-item ${selected === "all" ? "active" : ""}`} onClick={() => setSelected("all")}>
            Show all ({items.length})
          </span>
          {categories.map((c) => (
            <span key={c} className={`filter-item ${selected === c ? "active" : ""}`} onClick={() => setSelected(c)}>{c}</span>
          ))}
        </div>
        <PKExplore to={PK_BOOKING} text="Schedule an Audit Call" />
      </div>

      <div className="cs-grid">
        {shown.map((item, i) => (
          <a key={item.slug} className="cs-grid-link" href={`${linkBase}?slug=${item.slug}`}
            onMouseEnter={() => setHover(item.slug)} onMouseLeave={() => setHover(null)}>
            {type === "cs" ? (
              <div className="cs-card">
                <div className="cs-card-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                {item.csBtn && (
                  <div className="cs-card-tag">
                    <span>{item.csBtn}</span>
                    <span className="cs-card-tag-arrow"><img src="assets/icons/white-arrow.svg" alt="" /></span>
                  </div>
                )}
                <div className={`cs-card-hover ${hover === item.slug ? "show" : ""}`}>
                  <h2>{item.shortTitle || item.title}</h2>
                </div>
              </div>
            ) : (
              <div className="update-card-grid">
                <div className="update-card-img" style={{ backgroundImage: `url(${item.img})` }}>
                  <div className="update-card-circle"><PKCircle variant="black" isHovered={hover === item.slug} /></div>
                </div>
                <p className="update-card-title">{item.title}</p>
              </div>
            )}
          </a>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="preview-section">
          <button className="contact-us-link button-padding show-more-btn" onClick={() => setVisible(visible + step)}>
            <span className="c-us">Show More</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- FAQ accordion (mirrors FAQ.js) ---------- */
function FAQ({ faqs }) {
  const [open, setOpen] = usePK(0);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span>
            <span className="faq-icon"><img src="assets/icons/close.svg" alt="" /></span>
          </button>
          <div className="faq-a-wrap"><div className="faq-a"><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}

/* ---------- ShareLinks (mirrors ShareLinks.js) ---------- */
function ShareLinks({ text = "Share this article", url }) {
  const link = url || (typeof window !== "undefined" ? window.location.href : "");
  const enc = encodeURIComponent(link);
  return (
    <div className="share-links">
      <span className="share-label">{text}</span>
      <div className="share-icons">
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn"><img src="assets/icons/social/linkedin.svg" alt="LinkedIn" /></a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><img src="assets/icons/social/facebook.svg" alt="Facebook" /></a>
      </div>
    </div>
  );
}

/* ---------- PortableBody: renders the body block array from data ---------- */
function PortableBody({ blocks = [] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 className="heading2" key={i}>{b.text}</h2>;
        if (b.type === "h3") return <h3 className="heading3" key={i}>{b.text}</h3>;
        if (b.type === "img") return <img className="update-cnt-image" src={b.src} alt={b.alt || ""} key={i} />;
        if (b.type === "ul") return <ul className="ul-list" key={i}>{b.items.map((it, j) => <li key={j}><p className="up-paragraph">{it}</p></li>)}</ul>;
        return <p className="up-paragraph" key={i}>{b.text}</p>;
      })}
    </>
  );
}

window.SogodyPageKit = { BannerWork, BookMeet, ContentGrid, FAQ, ShareLinks, PortableBody, getSlug };
