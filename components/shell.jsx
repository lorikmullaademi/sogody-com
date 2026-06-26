/* Sogody — shared shell: Header (desktop mega-dropdown + mobile menu + sliding
   indicator), Footer, and the Contact modal. Mirrors src/components/Header.js,
   Footer.js and ContactUs.js. window.SogodyShell */

const { useState: useStateShell, useEffect: useEffectShell, useRef: useRefShell } = React;
const { ContactButton, ARROW_DOWN, LOGO } = window.SogodyKit;
const { NAV, SERVICES, BOOKING_URL } = window.SogodyData;

/* ---------- Services mega-dropdown (desktop) ---------- */
function ServicesDropdown({ show }) {
  return (
    <div className={`service-nav-dropdown ${show ? "show" : ""}`}>
      <div className="dropdown-left-side dropdown-inner-styling">
        <a href="services.html">
          <p className="header-service-title all-solutions mb-2">
            All Solutions
            <span className="mini-arrow-container less-padding"><span className="mini-arrow mini-arrow-right"><img src={ARROW_DOWN} alt="" /></span></span>
          </p>
        </a>
        {SERVICES.map((s) => (
          <a className={`service-item-navbar ${s.slug}`} href={`service.html?slug=${s.slug}`} key={s.slug}>
            <div className="service-item-navbar-inner">
              <div className="nav-service-logo-ctn"><img className="nav-service-logo" src={s.img} alt="" /></div>
              <div className="header-service-title service-item-row">
                <span className="inner-service-title">{s.title}</span>
                <span className="mini-arrow-container less-padding"><span className="mini-arrow mini-arrow-right"><img src={ARROW_DOWN} alt="" /></span></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ active = "" }) {
  const [isMobile, setIsMobile] = useStateShell(false);
  const [menuShow, setMenuShow] = useStateShell(false);
  const [showServices, setShowServices] = useStateShell(false);   // mobile accordion
  const [showDropdown, setShowDropdown] = useStateShell(false);   // desktop dropdown
  const [hover, setHover] = useStateShell({ left: null, width: null });
  const [slider, setSlider] = useStateShell({ left: 0, width: 0 });
  const [atTop, setAtTop] = useStateShell(true);
  const navRef = useRefShell(null);
  const itemRefs = useRefShell([]);

  useEffectShell(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const on = () => setIsMobile(mq.matches);
    on(); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffectShell(() => {
    const on = () => setAtTop(window.scrollY === 0);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  // position the active-pill slider under the current page
  useEffectShell(() => {
    const idx = NAV.findIndex((n) => n.key === active);
    if (idx > 0 && itemRefs.current[idx] && navRef.current) {
      const ir = itemRefs.current[idx].getBoundingClientRect();
      const nr = navRef.current.getBoundingClientRect();
      setSlider({ left: ir.left - nr.left, width: ir.width });
    }
  }, [active, isMobile]);

  const onMove = (i) => {
    if (!navRef.current || !itemRefs.current[i]) return;
    const ir = itemRefs.current[i].getBoundingClientRect();
    const nr = navRef.current.getBoundingClientRect();
    setHover({ left: ir.left - nr.left, width: ir.width });
  };
  const onLeaveItems = () => setHover({ left: null, width: null });

  const closeMobile = () => {
    setMenuShow(false);
    document.body.style.position = ""; document.body.style.top = "";
    const y = document.body.dataset.scrollY || 0;
    if (y) window.scrollTo(0, parseInt(y, 10));
  };
  const toggleMobile = () => {
    const next = !menuShow;
    setMenuShow(next);
    if (next) {
      const y = window.scrollY;
      document.body.dataset.scrollY = y;
      document.body.style.top = `-${y}px`;
      document.body.style.position = "fixed";
    } else { closeMobile(); }
  };

  const sliderLeft = hover.left !== null ? hover.left : slider.left;
  const sliderWidth = hover.width !== null ? hover.width : slider.width;

  return (
    <>
      {isMobile && menuShow && <div className="mobile-nav-overlay" onClick={closeMobile} />}
      <div className="header-wrapper fixed-top">
        <div className={`sg-navbar ${menuShow ? "menu-open" : ""}`}
          onMouseLeave={() => { if (!isMobile) setShowDropdown(false); }}>
          <div className={`header-container ${!isMobile && atTop ? "pt-active" : "pt-inactive"}`}>
            <div className="logo-hamburger-div">
              <a className="navbar-brand" href="index.html">
                <img width="130.77" height="40" src={LOGO} alt="Sogody logo" />
              </a>
              <button className={`navbar-toggle ${menuShow ? "open" : ""}`} aria-label="Menu" onClick={toggleMobile}>
                <span></span><span></span><span></span>
              </button>
            </div>

            <div className={`navbar-collapse ${menuShow ? "open" : ""}`}>
              <div className="mobile-nav-content">
                <div className="drop-main">
                  <div className="navbar-inner-div" ref={navRef} onMouseLeave={onLeaveItems}>
                    {(!isMobile) && (
                      <div className="nav-slider" style={{ left: sliderLeft + "px", width: sliderWidth + "px",
                        opacity: sliderWidth ? 1 : 0, transition: "left .3s ease, width .3s ease, opacity .3s ease" }} />
                    )}
                    <div className="nav-items-row">
                      {NAV.map((n, i) => {
                        const isWWD = i === 0;
                        const hiddenOnAccordion = showServices && !isWWD;
                        return (
                          <div key={n.key}
                            ref={(el) => (itemRefs.current[i] = el)}
                            onMouseMove={() => !isMobile && onMove(i)}
                            onMouseEnter={() => { if (!isMobile && isWWD) setShowDropdown(true); }}
                            className={`nav-item-services ${hiddenOnAccordion ? "hidden-nav-link" : ""} ${showServices && isWWD ? "bg-color-grey" : ""}`}>
                            <a className={`nav-link nav-link-black ${active === n.key && !isWWD ? "active" : ""}`}
                              href={isWWD && isMobile ? "#" : n.to}
                              onClick={(e) => {
                                if (isWWD && isMobile) { e.preventDefault(); setShowServices((v) => !v); }
                                else if (isMobile) { closeMobile(); }
                              }}>
                              <span className="nav-link-label">
                                {isWWD ? (showServices ? "Go Back" : n.label) : n.label}
                              </span>
                              {isWWD && (
                                <span className="mini-arrow-container">
                                  <span className={`mini-arrow ${isMobile && !showServices ? "navbar-arrow-rotation" : ""} ${showServices && isMobile ? "rotated" : ""}`}>
                                    <img src={ARROW_DOWN} alt="" />
                                  </span>
                                </span>
                              )}
                            </a>
                          </div>
                        );
                      })}

                      {/* mobile services accordion */}
                      {showServices && (
                        <div className="services-nav-items">
                          {SERVICES.map((s) => (
                            <a key={s.slug} href={`service.html?slug=${s.slug}`} className="service-nav-link" onClick={closeMobile}>
                              <img src={s.img} alt="" className="service-nav-image" />
                              <p className="nav-link nav-link-black my-0">{s.title}</p>
                              <span className="mini-arrow-container"><span className="mini-arrow navbar-arrow-rotation"><img src={ARROW_DOWN} alt="" /></span></span>
                            </a>
                          ))}
                          <a href="services.html" onClick={closeMobile}>
                            <p className="nav-link nav-link-black mb-0 all-solutions-mobile">All Solutions
                              <span className="mini-arrow-container"><span className="mini-arrow navbar-arrow-rotation"><img src={ARROW_DOWN} alt="" /></span></span>
                            </p>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {isMobile && (
                    <div className="mobile-cta"><ContactButton href={BOOKING_URL}>Set up a Meeting</ContactButton></div>
                  )}
                  <div className="nav-contact"><ContactButton>Contact Us</ContactButton></div>
                </div>

                {!isMobile && <ServicesDropdown show={showDropdown} />}
              </div>
            </div>
          </div>
        </div>
      </div>
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
