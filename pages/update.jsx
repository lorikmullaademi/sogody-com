/* Sogody — single update/article template (mirrors templates/updates-template.js).
   Reads ?slug= and renders from SogodyData.UPDATES. Sticky image + "Next Update"
   card + content + Share. */
const { Header: UPHeader, Footer: UPFooter, ContactModal: UPModal } = window.SogodyShell;
const { ExploreLink: UPExplore } = window.SogodyKit;
const { ShareLinks: UPShare, PortableBody: UPBody, getSlug: upGetSlug } = window.SogodyPageKit;
const { UPDATES: UP_ALL } = window.SogodyData;

function UpdateApp() {
  const slug = upGetSlug();
  const up = UP_ALL.find((u) => u.slug === slug) || UP_ALL[0];
  const others = UP_ALL.filter((u) => u.slug !== up.slug);
  const next = others[Math.floor(Math.random() * others.length)];

  return (
    <div className="layout-container single-sog-up">
      <UPHeader active="updates" />
      <UPModal />
      <main>
        <div className="single-update-container">
          <div className="main-content-container">
            <div className="updates-images">
              <div className="cs-logo" style={{ backgroundImage: `url(${up.img})` }}></div>
              {next ? (
                <div className="next-update-card" style={{ backgroundImage: `url(${next.img})`, backgroundSize: "cover", minHeight: "180px", justifyContent: "flex-end" }}>
                  <UPExplore to={`update.html?slug=${next.slug}`} text="Next Update" />
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
      </main>
      <UPFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UpdateApp />);
