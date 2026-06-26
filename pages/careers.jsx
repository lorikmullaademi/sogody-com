/* Sogody — Careers page (mirrors src/pages/careers.js): banner + open
   positions grid (or empty-state role banner) + share. */
const { Header: CHeader, Footer: CFooter, ContactModal: CModal } = window.SogodyShell;
const { ShareLinks: CShare } = window.SogodyPageKit;
const { JOBS: C_JOBS, IMG: C_IMG } = window.SogodyData;

function CareersApp() {
  const open = C_JOBS;
  return (
    <div className="layout-container">
      <CHeader active="careers" />
      <CModal />
      <main>
        <div className="careers-banner">
          <h1 className="banner-title">Build the Future with Us</h1>
          <p className="subtitle">At Sogody, we’re passionate about crafting innovative digital solutions that drive success for our clients. If you’re eager to make a tangible impact and grow alongside a dynamic team, explore our current opportunities.</p>
          <img src={C_IMG.careersBanner} alt="Careers banner" />
        </div>
        <div className="careers-positions">
          {open.length === 0 ? (
            <div className="role-banner" style={{ backgroundImage: `url(${C_IMG.careersRoleBanner})` }}>
              <h2 className="title">Sorry, there are no positions available at this time</h2>
              <p className="subtitle">However, we are always keen to meet energetic and talented professionals who would like to join our team. If you wish to be considered for any future positions, please send your CV and/or a link to your portfolio at:</p>
              <a href="mailto:careers@sogody.com" className="green">careers@sogody.com</a>
            </div>
          ) : (
            <>
              <h2 className="title">Open Positions</h2>
              <div className="positions-grid">
                {open.map((cr) => (
                  <a key={cr.slug} className="career-card" href={`career.html?slug=${cr.slug}`}>
                    <div>
                      <h3 className="position-title">{cr.positionTitle}</h3>
                      <p className="position-location">{cr.location}</p>
                    </div>
                    <img src="assets/icons/arrow.svg" alt="" className="rotating-arrow-icon" />
                  </a>
                ))}
              </div>
            </>
          )}
          <div style={{ marginTop: "48px" }}>
            <CShare text="Share these job postings" />
          </div>
        </div>
      </main>
      <CFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<CareersApp />);
