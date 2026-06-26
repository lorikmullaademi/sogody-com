/* Sogody — Company page (mirrors src/pages/company.js): banner + intro text +
   photo gallery + CEO quote + staff grid + testimonials + BookMeet. */
const { Header: COHeader, Footer: COFooter, ContactModal: COModal } = window.SogodyShell;
const { BookMeet: COBook } = window.SogodyPageKit;
const { COMPANY_BANNERS: CO_BANNERS, TESTIMONIALS: CO_TEST } = window.SogodyData;

function CompanyApp() {
  const gallery = CO_BANNERS;
  return (
    <div className="layout-container">
      <COHeader active="company" />
      <COModal />
      <main>
        <div className="container-company">
          <div className="company-intro">
            <h2>We’re a digital engineering company building <span className="green">high-performing platforms, AI systems and human–AI interfaces</span> for global brands — proving that locally produced experiences can have worldwide appeal.</h2>
          </div>

          <div className="company-gallery">
            {gallery.map((src, i) => (
              <div className={`gallery-item ${i % 5 === 0 ? "wide" : ""}`} key={i} style={{ backgroundImage: `url(${src})` }}></div>
            ))}
          </div>

          <div className="ceo-quote">
            <blockquote>“Our team is made up of passionate individuals motivated by a singular goal: to prove that locally produced experiences can have a worldwide appeal.”</blockquote>
            <div className="ceo-name">Lorik Mullaademi</div>
            <div className="ceo-role">CEO &amp; Co-Founder @ Sogody</div>
          </div>

          <div className="testimonials">
            <h2>Take a Look at What Our Clients Say</h2>
            <div className="testimonial-grid">
              {CO_TEST.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <p>“{t.quote}”</p>
                  <div className="t-author">{t.author}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              ))}
            </div>
          </div>

          <COBook />
        </div>
      </main>
      <COFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<CompanyApp />);
