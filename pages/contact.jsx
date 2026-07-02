/* Sogody — Contact page (mirrors src/pages/contact.js): heading + assurances +
   contact form + FAQ (with CEO LinkedIn card) + offices + testimonials. */
const { Header: CTHeader, Footer: CTFooter, ContactModal: CTModal } = window.SogodyShell;
const { ContactButton: CTBtn } = window.SogodyKit;
const { FAQ: CTFaq, BookMeet: CTBook } = window.SogodyPageKit;
const { FAQS: CT_FAQS, OFFICES: CT_OFFICES, TESTIMONIALS: CT_TEST, BOOKING_URL: CT_BOOK } = window.SogodyData;
const { useState: useCT } = React;

function ContactForm() {
  const [sent, setSent] = useCT(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="contact-sent">
        <h3>Thank you.</h3>
        <p>Your message is on its way — we’ll respond within 24 hours.</p>
      </div>
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Name<input required placeholder="Your name" /></label>
      <label>Work email<input required type="email" placeholder="you@company.com" /></label>
      <label>Company<input placeholder="Company" /></label>
      <label>What are you building?<textarea required rows="4" placeholder="A few sentences about your project"></textarea></label>
      <button type="submit" className="contact-us-link contact-submit"><span className="c-us">Send message</span></button>
    </form>
  );
}

function ContactApp() {
  const [hover, setHover] = useCT(false);
  return (
    <div className="layout-container">
      <CTHeader active="" />
      <CTModal />
      <main>
        <div className="contact-page">
          <h1 className="h2-styling">Let’s Connect and Create Together</h1>
          <div className="contact-assurances">
            <div className="contact-assurance"><img src="/assets/icons/check.svg" alt="" /><p>We’ll respond within 24 hours.</p></div>
            <div className="contact-assurance"><img src="/assets/icons/check.svg" alt="" /><p>We’ll sign an NDA if requested.</p></div>
            <div className="contact-assurance"><img src="/assets/icons/check.svg" alt="" /><p>Assign you to product specialists.</p></div>
          </div>

          <div className="contact-form-card"><ContactForm /></div>

          <div className="faq-container">
            <div className="contact-linkedin-card">
              <div className="author-row">
                <div className="author-image" style={{ background: "#67be83" }}></div>
                <div>
                  <div className="author-name">Lorik Mullaademi</div>
                  <div className="author-role">CEO @ Sogody</div>
                </div>
              </div>
              <p className="quote">“Have more questions or just curious about future possibilities? Feel free to connect with me on LinkedIn.”</p>
              <a className="linkedin-btn" href="https://www.linkedin.com/in/lorikmullaademi/" target="_blank" rel="noreferrer"
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                Connect on LinkedIn <img src="/assets/icons/social/linkedin.svg" alt="" />
              </a>
            </div>
            <CTFaq faqs={CT_FAQS} />
          </div>

          <div className="offices">
            <h2>Our Office Locations</h2>
            <div className="office-grid">
              {CT_OFFICES.map((o, i) => (
                <div className="office-card" key={i}>
                  <div className="office-map" style={{ backgroundImage: `url(${o.image})` }}></div>
                  <div className="office-body">
                    <h3>{o.city}</h3>
                    <a href={o.mapLink} target="_blank" rel="noreferrer">{o.address}</a>
                    <a href={`tel:${o.phoneRaw}`}>{o.phone}</a>
                    <a href={`mailto:${o.email}`}>{o.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials">
            <h2>What Our Partners Say</h2>
            <div className="testimonial-grid">
              {CT_TEST.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <p>“{t.quote}”</p>
                  <div className="t-author">{t.author}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CTFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
