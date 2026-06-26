/* Sogody — shared shell: Header (desktop mega-dropdown + mobile menu + sliding
   indicator), Footer, and the Contact modal. Mirrors src/components/Header.js,
   Footer.js and ContactUs.js. window.SogodyShell */

const { useState: useStateShell, useEffect: useEffectShell, useRef: useRefShell } = React;
const { ContactButton, ARROW_DOWN, LOGO } = window.SogodyKit;
const { NAV, SERVICES, BOOKING_URL } = window.SogodyData;

/* ---------- Header ----------
   Unified site nav: every page renders the SAME header as the homepage by
   delegating to SrcHeader (components/src-header.jsx, the faithful repo mirror).
   A KoalendarSidebar is also mounted so the nav's "Contact Us" opens the same
   booking sidebar as the homepage. This replaces the older lighter `sg-navbar`
   recreation so the top menu is 100% consistent across the whole site.

   Requires components/src-kit.jsx + components/src-header.jsx to be loaded
   before shell.jsx (added to every page's HTML). */
function Header({ active = "" }) {
  const SrcHeader = window.SogodySrcHeader && window.SogodySrcHeader.SrcHeader;
  const KoalendarSidebar = window.SogodySrcKit && window.SogodySrcKit.KoalendarSidebar;
  if (!SrcHeader) {
    console.error("[shell] SrcHeader missing — load components/src-kit.jsx and components/src-header.jsx before components/shell.jsx");
    return null;
  }
  return (
    <>
      <SrcHeader active={active} />
      {KoalendarSidebar && <KoalendarSidebar />}
    </>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-block">
            <p className="title-white bolder-font"><a href="#" onClick={(e) => { e.preventDefault(); window.SogodyOpenContact && window.SogodyOpenContact(); }}>General Enquiries</a></p>
            <p className="title-white bolder-font"><a href="careers.html">Careers</a></p>
          </div>
          <div className="footer-block">
            <p className="title-gray"><a href="privacy.html">Privacy</a></p>
            <p className="title-gray"><a href="terms.html">Terms</a></p>
          </div>
          <div className="footer-block">
            <p className="title-gray">+383 49 460 555</p>
            <p className="title-gray"><a href="https://maps.app.goo.gl/ZEHEmCnksmfbmTTe6" target="_blank" rel="noreferrer">Prishtina, Kosovo</a></p>
          </div>
          <div className="footer-block">
            <p className="title-gray">+44 20 8133 3315</p>
            <p className="title-gray"><a href="https://maps.app.goo.gl/KrzqzpbgdJtJ121C6" target="_blank" rel="noreferrer">London, United Kingdom</a></p>
          </div>
          <div className="footer-block">
            <p className="title-gray"><a href="mailto:info@sogody.com">info@sogody.com</a></p>
            <div className="social-icons">
              <a href="https://www.facebook.com/sogodycom/" target="_blank" rel="noreferrer"><img src="assets/icons/social/facebook.svg" alt="Facebook" /></a>
              <a href="https://www.instagram.com/sogodycom/" target="_blank" rel="noreferrer"><img src="assets/icons/social/instagram.svg" alt="Instagram" /></a>
              <a href="https://www.linkedin.com/company/sogody" target="_blank" rel="noreferrer"><img src="assets/icons/social/linkedin.svg" alt="LinkedIn" /></a>
              <a href="https://bsky.app/profile/sogody.bsky.social" target="_blank" rel="noreferrer"><img src="assets/icons/social/bluesky.svg" alt="Bluesky" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="title-gray">© 2026 Sogody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Contact modal (mirrors ContactUs.js) ---------- */
function ContactModal() {
  const [open, setOpen] = useStateShell(false);
  const [sent, setSent] = useStateShell(false);
  const [form, setForm] = useStateShell({ name: "", email: "", company: "", message: "", budget: "" });

  useEffectShell(() => {
    window.SogodyOpenContact = () => { setOpen(true); setSent(false); };
    return () => { delete window.SogodyOpenContact; };
  }, []);

  useEffectShell(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const budgets = ["< $25k", "$25k – $50k", "$50k – $100k", "$100k +"];

  if (!open) return null;
  return (
    <div className="contact-modal-overlay" onClick={() => setOpen(false)}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" aria-label="Close" onClick={() => setOpen(false)}>
          <img src="assets/icons/close.svg" alt="" />
        </button>
        <div className="contact-modal-grid">
          <div className="contact-modal-left">
            <h2>Let's build something that converts.</h2>
            <p>Tell us about your product and where off-the-shelf stops working. We'll get back within one business day.</p>
            <div className="contact-modal-meta">
              <a href="mailto:info@sogody.com">info@sogody.com</a>
              <span>Prishtina, Kosovo · London, UK</span>
            </div>
          </div>
          <div className="contact-modal-right">
            {sent ? (
              <div className="contact-sent">
                <h3>Thank you.</h3>
                <p>Your message is on its way — we'll be in touch shortly.</p>
                <ContactButton onClick={() => setOpen(false)}>Close</ContactButton>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <label>Name<input required value={form.name} onChange={set("name")} placeholder="Your name" /></label>
                <label>Work email<input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" /></label>
                <label>Company<input value={form.company} onChange={set("company")} placeholder="Company" /></label>
                <label>Estimated budget
                  <div className="budget-chips">
                    {budgets.map((b) => (
                      <button type="button" key={b} className={`budget-chip ${form.budget === b ? "active" : ""}`}
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}>{b}</button>
                    ))}
                  </div>
                </label>
                <label>What are you building?<textarea required rows="4" value={form.message} onChange={set("message")} placeholder="A few sentences about your project" /></label>
                <button type="submit" className="contact-us-link contact-submit"><span className="c-us">Send message</span></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

window.SogodyShell = { Header, Footer, ContactModal };
