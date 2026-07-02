/* Sogody — single update/article template (mirrors templates/updates-template.js).
   Reads ?slug= and renders from SogodyData.UPDATES. Entries with a structured
   `article` block render the minimal editorial layout (typography-first,
   drop cap, pull-quote, breakout image); others fall back to the classic
   sticky-image layout. */
const { Header: UPHeader, Footer: UPFooter, ContactModal: UPModal } = window.SogodyShell;
const { ExploreLink: UPExplore } = window.SogodyKit;
const { ShareLinks: UPShare, PortableBody: UPBody, getSlug: upGetSlug } = window.SogodyPageKit;
const { UPDATES: UP_ALL } = window.SogodyData;

/* ---------------- Minimal editorial layout ---------------- */
function EditorialArticle({ up, next }) {
  const a = up.article;
  return (
    <div className="up-article">
      <div className="ua-col ua-head">
        <a className="ua-back" href="updates.html">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All updates
        </a>
        <h1 className="ua-title">{up.title}</h1>
        <div className="ua-byline">
          <div className="ua-avatar">{a.author.initials}</div>
          <div>
            <p className="ua-by-name">{a.author.name}</p>
            <p className="ua-by-meta">
              <span>{a.author.role}</span>
              {a.dateLabel ? <span>{a.dateLabel}</span> : null}
              {a.readingTime ? <span>{a.readingTime}</span> : null}
            </p>
          </div>
        </div>
      </div>

      <article className="ua-col ua-body">
        {a.blocks.map((b, i) => {
          if (b.type === "h2") return <h2 className="ua-h2" key={i}>{b.text}</h2>;
          if (b.type === "lead") return <p className="ua-lead" key={i}>{b.text}</p>;
          if (b.type === "quote") return (
            <blockquote className="ua-quote" key={i}>
              <p>{b.text}</p>
              {b.cite ? <cite>{b.cite}</cite> : null}
            </blockquote>
          );
          if (b.type === "list") return (
            <ul className="ua-list" key={i}>
              {b.items.map((it, j) => <li key={j}><strong>{it.strong}</strong>{it.text}</li>)}
            </ul>
          );
          if (b.type === "image") return (
            <figure className="ua-figure" key={i}>
              <img src={b.src} alt={b.caption || ""} loading="lazy" />
              {b.caption ? <figcaption className="ua-figcaption">{b.caption}</figcaption> : null}
            </figure>
          );
          return <p key={i}>{b.text}</p>;
        })}

        <div className="ua-foot">
          <UPShare text="Share this article" />
        </div>
      </article>

      {next ? (
        <a className="ua-next" href={`/updates/${next.slug}/`}>
          <p className="ua-next-k">Next update</p>
          <div className="ua-next-card">
            <div className="ua-next-img" style={{ backgroundImage: `url(${next.img})` }}></div>
            <div className="ua-next-body">
              <h3 className="ua-next-title">{next.title}</h3>
              {next.desc ? <p className="ua-next-desc">{next.desc}</p> : null}
              <span className="ua-next-cta">Read article
                <span className="ua-next-arrow"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </span>
            </div>
          </div>
        </a>
      ) : null}
    </div>
  );
}

/* ---------------- Classic layout (fallback) ---------------- */
function ClassicUpdate({ up, next }) {
  return (
    <div className="single-update-container">
      <div className="main-content-container">
        <div className="updates-images">
          <div className="cs-logo" style={{ backgroundImage: `url(${up.img})` }}></div>
          {next ? (
            <div className="next-update-card" style={{ backgroundImage: `url(${next.img})`, backgroundSize: "cover", minHeight: "180px", justifyContent: "flex-end" }}>
              <UPExplore to={`/updates/${next.slug}/`} text="Next Update" />
            </div>
          ) : null}
        </div>
        <div className="single-up-content">
          <div>
            {up.category ? <span className="category-tag">{up.category}</span> : null}
            <h1 className="title">{up.title}</h1>
          </div>
          <div className="single-update">
            <UPBody blocks={up.body} />
          </div>
          <div className="share-article">
            <UPShare text="Share this article" />
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateApp() {
  const slug = upGetSlug();
  const up = UP_ALL.find((u) => u.slug === slug) || UP_ALL[0];
  const others = UP_ALL.filter((u) => u.slug !== up.slug);
  const next = others[0];

  return (
    <div className="layout-container single-sog-up">
      <UPHeader active="updates" />
      <UPModal />
      <main>
        {up.article ? <EditorialArticle up={up} next={next} /> : <ClassicUpdate up={up} next={next} />}
      </main>
      <UPFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UpdateApp />);
