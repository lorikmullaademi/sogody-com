/* Sogody — Careers page, 1:1 port of src/pages/careers.js: careers-banner
   (heading + subtitle + wide image) + Open Positions grid (or empty-state
   role-banner) + ShareButtons. Renders against the compiled repo SCSS so the
   layout is pixel-for-pixel with live sogody.com/careers. */

const { SrcLayout: CLayout } = window.SogodySrcShell;
const { JOBS: C_JOBS, IMG: C_IMG } = window.SogodyData;
const { useState: useStateC } = React;

window.SOGODY_ACTIVE_NAV = "careers";

/* real network icons sourced from the repo (src/assets/images/networks/*) */

function fmtDate(iso) {
  const d = new Date(iso);
  const p = (n) => String(n).padStart(2, "0");
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
}

/* ---- ShareButtons (1:1 src/components/sharebuttons.js) ---- */
function ShareButtons({ shareText = "Share this job posting" }) {
  const [copied, setCopied] = useStateC(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent(url);
  const copy = () => {
    try { navigator.clipboard && navigator.clipboard.writeText(url); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div className="networks">
      <div className="container">
        <div className="our-networks"><p className="subtitle">{shareText}</p></div>
        <div className="row text-center share-networks-row">
          <div className="col-md-2 col-lg-2 d-flex justify-content-center">
            <a className="share-network" href={`mailto:?subject=${encodeURIComponent("Jobs at Sogody")}&body=${enc}`}>
              <img src="/assets/images/networks/email.svg" alt="Email" />
              <span className="subtitle p-0 green">Email</span>
            </a>
          </div>
          <div className="col-md-2 col-lg-2 d-flex justify-content-center">
            <a className="share-network" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`} target="_blank" rel="noreferrer">
              <img src="/assets/images/networks/linkedin.svg" alt="LinkedIn" />
              <span className="subtitle p-0 green">Share</span>
            </a>
          </div>
          <div className="col-md-2 col-lg-2 d-flex justify-content-center">
            <div className="share-network" onClick={copy} style={{ cursor: "pointer" }}>
              <img className="share-link-img" src="/assets/images/networks/share.svg" alt="Share link" />
              <span className="subtitle p-0 green">{copied ? "Link copied" : "Share link"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareersApp() {
  const jobs = window.SOGODY_CAREERS_EMPTY ? [] : C_JOBS;
  return (
    <CLayout>
      <div className="careers-banner scroll-show">
        <div className="container">
          <h1 className="banner-title">Build the Future with Us</h1>
          <p className="subtitle">At Sogody, we&rsquo;re passionate about crafting innovative digital solutions <br /> that drive success for our clients. If you&rsquo;re eager to make a tangible impact and <br /> grow alongside a dynamic team, explore our current opportunities.</p>
          <img src={C_IMG.careersBanner} alt="Careers Banner" />
        </div>
      </div>

      <div className="careers-positions scroll-show">
        <div className="container up-container">
          <div className="positions">
            {jobs.length === 0 ? (
              <div className="role-banner scroll-show" style={{ backgroundImage: `url(${C_IMG.careersRoleBanner})` }}>
                <div className="banner-content">
                  <h2 className="title">Sorry, there are no positions<br /> available at this time</h2>
                  <p className="subtitle">However, we are always keen to meet energetic and talented professionals <br /> who would like to join our team. If you wish to be considered for any future <br /> positions, please send your CV and/or a link to your portfolio at:</p>
                  <a href="mailto:careers@sogody.com" className="green">careers@sogody.com</a>
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex justify-content-between"><h2 className="title">Open Positions</h2></div>
                <div className="row">
                  {jobs.map((cr) => (
                    <div key={cr.slug} className="col-12 col-md-6 col-lg-6">
                      <div className="card career-card">
                        <a href={`/careers/${cr.slug}/`}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-12 left-col d-flex align-items-center justify-content-between">
                                <div>
                                  <h1 className="position-title">{cr.positionTitle}</h1>
                                  <p className="position-location m-0">
                                    {cr.location}{!cr.hideDate && cr.date && <span> - dl: {fmtDate(cr.date)}</span>}
                                  </p>
                                </div>
                                <img src="/assets/svgs/Arrow.svg" alt="arrow" className="rotating-arrow-icon" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <ShareButtons shareText="Share these job postings" />
          </div>
        </div>
      </div>
    </CLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CareersApp />);
