/* Sogody — single case study template. Reads ?slug= from SogodyData.CASE_STUDIES.
   Renders the modern banded narrative layout when the entry has a `modern`
   block; otherwise falls back to the classic sticky-rail layout. Wrapped in the
   site's shared shell (header / contact modal / footer). */
const { Header: CSHeader, Footer: CSFooter, ContactModal: CSModal } = window.SogodyShell;
const { ExploreLink: CSExplore, ContactButton: CSBtn } = window.SogodyKit;
const { ShareLinks: CSShare, PortableBody: CSBody, getSlug: csGetSlug, BookMeet: CSBookMeet } = window.SogodyPageKit;
const { CASE_STUDIES: CS_ALL, BOOKING_URL: CS_BOOK } = window.SogodyData;

/* Inline up-right arrow that inherits text color (currentColor) — visible on
   both light and dark backgrounds, nudges on hover via the parent. */
function CSArrowUR({ className = "" }) {
  return (
    <svg className={`cs-ur ${className}`} width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 11.5L11.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 4.5H11.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Inline left chevron for the breadcrumb (currentColor). */
function CSChevL() {
  return (
    <svg className="cs-chev" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Renders a modern figure as a <video> (with poster) when the figure carries a
   `video` source, otherwise as an <img>. Used for the hero and inline band media
   so video-led case studies (e.g. Knorr) show their R2 clips, not just images. */
function CSFigure({ figure, alt, variant = "inline" }) {
  if (!figure) return null;
  return (
    <figure className={`cs-figure cs-figure--${variant}`}>
      {figure.video ? (
        <video
          src={figure.video}
          poster={figure.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <img src={figure.src} alt={alt} loading="lazy" />
      )}
      {figure.caption ? <figcaption className="cs-figcaption">{figure.caption}</figcaption> : null}
    </figure>
  );
}

/* ---------------- Modern banded layout ---------------- */
function ModernCaseStudy({ cs, next }) {
  const m = cs.modern;
  const heroFig = m.heroVideo
    ? { video: m.heroVideo, poster: m.heroPoster, caption: m.heroCaption }
    : (!m.noHero ? { src: m.heroImage || cs.img, caption: m.heroCaption } : null);
  return (
    <div className="cs-modern">
      <div className="cs-wrap cs-crumb">
        <a href="work.html"><CSChevL />Work / Case studies</a>
      </div>

      {/* hero */}
      <header className="cs-wrap cs-hero">
        {m.eyebrow ? <p className="cs-eyebrow">{m.eyebrow}</p> : null}
        <h1>{cs.title}</h1>
        {m.subtitle ? <p className="cs-hero-sub">{m.subtitle}</p> : null}
        {(m.partner || (m.links && m.links.length)) ? (
        <div className="cs-hero-meta">
          {m.partner ? (
            <div className="cs-partner">
              <div className="cs-partner-badge">{m.partner.initials}</div>
              <div className="cs-partner-txt">
                <p className="cs-partner-k">In partnership with</p>
                <a className="cs-partner-n" href={m.partner.url} target="_blank" rel="noreferrer">
                  {m.partner.name}<CSArrowUR />
                </a>
                <p className="cs-partner-d">{m.partner.desc}</p>
              </div>
            </div>
          ) : null}
          {m.links && m.links.length ? (
            <div className="cs-store-links">
              {m.links.map((l) => (
                <a key={l.label} className="cs-store-pill" href={l.url} target="_blank" rel="noreferrer">
                  {l.label}<CSArrowUR />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        ) : null}
      </header>

      {/* hero — video (with poster) or image; skipped for logo-only stories via noHero */}
      {heroFig ? (
        <div className="cs-wrap" style={{ paddingBottom: "20px" }}>
          <CSFigure figure={heroFig} alt={cs.title} variant="hero" />
        </div>
      ) : null}

      {/* the problem / vision */}
      {m.problem ? (
        <section className="cs-band cs-band--lilac">
          <div className="cs-wrap">
            <p className="cs-eyebrow">{m.problem.eyebrow}</p>
            <h2 className="cs-h">{m.problem.heading}</h2>
            <p className="cs-lead">{m.problem.body}</p>
            {m.problem.stats ? (
              <div className="cs-stats">
                {m.problem.stats.map((s, i) => (
                  <div className="cs-stat" key={i}>
                    <p className="cs-stat-big">{s.big}</p>
                    <p className="cs-stat-small">{s.small}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {m.problem.figure ? <CSFigure figure={m.problem.figure} alt={m.problem.heading} /> : null}
          </div>
        </section>
      ) : null}

      {/* the solution / steps */}
      {m.solution ? (
        <section className="cs-band">
          <div className="cs-wrap">
            <p className="cs-eyebrow">{m.solution.eyebrow}</p>
            <h2 className="cs-h">{m.solution.heading}</h2>
            <p className="cs-lead">{m.solution.body}</p>
            {m.solution.figure ? <CSFigure figure={m.solution.figure} alt={m.solution.heading} /> : null}
            <div className="cs-steps">
              {m.solution.steps.map((st, i) => (
                <article className="cs-step" key={i}>
                  <div className="cs-step-aside">
                    <p className="cs-step-label">{st.label}</p>
                    <h3 className="cs-step-title">{st.title}</h3>
                    {st.tag ? <span className="cs-step-tag">{st.tag}</span> : null}
                  </div>
                  <div className="cs-step-body">
                    {st.paras.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* the output */}
      {m.output ? (
        <section className="cs-band cs-band--mint">
          <div className="cs-wrap">
            <p className="cs-eyebrow">{m.output.eyebrow}</p>
            <h2 className="cs-h">{m.output.heading}</h2>
            <p className="cs-lead">{m.output.body}</p>
            <div className="cs-outlist">
              {m.output.items.map((it, i) => (
                <div className="cs-out" key={i}>
                  <div className="cs-out-n">{it.n}</div>
                  <div>
                    <h3 className="cs-out-title">{it.title}</h3>
                    <p className="cs-out-desc">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {m.output.figure ? <CSFigure figure={m.output.figure} alt={m.output.heading} /> : null}
          </div>
        </section>
      ) : null}

      {/* what comes next */}
      {m.next ? (
        <section className="cs-band cs-band--green">
          <div className="cs-wrap">
            <p className="cs-eyebrow">{m.next.eyebrow}</p>
            <h2 className="cs-h">{m.next.heading}</h2>
            <div className="cs-checks">
              {m.next.checks.map((c, i) => (
                <div className="cs-check" key={i}>
                  <span className="cs-check-mark"><img src="/assets/icons/check.svg" alt="" /></span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            {m.next.closing ? <p className="cs-next-closing">{m.next.closing}</p> : null}
            {m.next.figure ? <CSFigure figure={m.next.figure} alt={m.next.heading} /> : null}
          </div>
        </section>
      ) : null}

      {/* next project — prominent full-width card */}
      {next ? (
        <section className="cs-band cs-band--pad-sm cs-nextband">
          <div className="cs-wrap">
            <p className="cs-eyebrow">Keep exploring</p>
            <a className="cs-nextcard" href={`case-study.html?slug=${next.slug}`}>
              <div className="cs-nextcard-img" style={{ backgroundImage: `url(${next.img})` }}></div>
              <div className="cs-nextcard-body">
                <p className="cs-nextcard-k">Next project</p>
                <h3 className="cs-nextcard-title">{next.shortTitle || next.title}</h3>
                {next.category ? <span className="cs-nextcard-tag">{next.category}</span> : null}
              </div>
              <span className="cs-nextcard-go"><CSArrowUR /></span>
            </a>
          </div>
        </section>
      ) : null}

      {/* share — prominent row */}
      <section className="cs-shareband">
        <div className="cs-wrap">
          <div className="cs-share-inner">
            <p className="cs-share-title">Found this useful? Share it.</p>
            <CSShare text="Share this case study" />
          </div>
        </div>
      </section>

      {/* closing CTA — shared BookMeet component, consistent with other pages */}
      <CSBookMeet
        title="Not there yet?"
        description="Unsure with your needs? Or if you have any questions, book a call with us — we’d be happy to explore how we can create a plan that fits you perfectly."
        button="Schedule an Audit Call"
      />
    </div>
  );
}

/* ---------------- Classic layout (fallback) ---------------- */
function ClassicCaseStudy({ cs, next }) {
  return (
    <div className="single-update-container">
      <div className="main-content-container">
        <div className="updates-images">
          <div className="cs-logo" style={{ backgroundImage: `url(${cs.img})` }}></div>
          <div className="next-cards-row">
            {cs.visitSiteUrl ? (
              <div className="next-update-card">
                <img className="next-img" src={cs.img} alt={cs.title} />
                <CSExplore to={cs.visitSiteUrl} text="Visit Site" />
              </div>
            ) : null}
            {next ? (
              <div className="next-update-card">
                <img className="next-img" src={next.img} alt={next.title} />
                <CSExplore to={`case-study.html?slug=${next.slug}`} text="Next Project" />
              </div>
            ) : null}
          </div>
        </div>
        <div className="single-up-content">
          <div>
            {cs.category ? <span className="category-tag">{cs.category}</span> : null}
            <h1 className="title">{cs.title}</h1>
          </div>
          <div className="single-update">
            <CSBody blocks={cs.body} />
            <h2 className="heading2">Not there yet?</h2>
            <p className="up-paragraph">Unsure with your needs? Or if you have any questions, book a call with us. We’d be happy to explore how we can create a plan that fits you perfectly.</p>
          </div>
          <div className="share-article">
            <CSBtn href={CS_BOOK} className="button-padding">Schedule an Audit Call</CSBtn>
            <CSShare text="Share this case study" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyApp() {
  const slug = csGetSlug();
  const cs = CS_ALL.find((c) => c.slug === slug) || CS_ALL[0];
  const others = CS_ALL.filter((c) => c.slug !== cs.slug && c.modern);
  const pool = others.length ? others : CS_ALL.filter((c) => c.slug !== cs.slug);
  const next = pool[0];

  return (
    <div className={`layout-container${cs.modern ? "" : " single-sog-up"}`}>
      <CSHeader active="work" />
      <CSModal />
      <main>
        {cs.modern ? <ModernCaseStudy cs={cs} next={next} /> : <ClassicCaseStudy cs={cs} next={next} />}
      </main>
      <CSFooter />
    </div>
  );
}
window.SOGODY_ACTIVE_NAV = "work";
ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudyApp />);
