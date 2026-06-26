/* Sogody — single case study template (mirrors templates/case-studies-template.js).
   Reads ?slug= and renders from SogodyData.CASE_STUDIES. Sticky image rail +
   content + "Visit Site"/"Next Project" cards + Schedule + Share. */
const { Header: CSHeader, Footer: CSFooter, ContactModal: CSModal } = window.SogodyShell;
const { ExploreLink: CSExplore, ContactButton: CSBtn } = window.SogodyKit;
const { ShareLinks: CSShare, PortableBody: CSBody, getSlug: csGetSlug } = window.SogodyPageKit;
const { CASE_STUDIES: CS_ALL, BOOKING_URL: CS_BOOK } = window.SogodyData;

function CaseStudyApp() {
  const slug = csGetSlug();
  const cs = CS_ALL.find((c) => c.slug === slug) || CS_ALL[0];
  const others = CS_ALL.filter((c) => c.slug !== cs.slug);
  const next = others[Math.floor(Math.random() * others.length)];

  return (
    <div className="layout-container single-sog-up">
      <CSHeader active="work" />
      <CSModal />
      <main>
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
      </main>
      <CSFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudyApp />);
