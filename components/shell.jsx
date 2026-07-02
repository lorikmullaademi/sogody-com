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
/* Unified site footer: every page renders the SAME footer as the homepage by
   delegating to SrcFooter (components/src-shell.jsx, the faithful repo mirror).
   This replaces the older lighter recreation so the footer is 100% consistent
   across the whole site. Requires components/src-kit.jsx + components/src-shell.jsx
   to be loaded before shell.jsx (added to every page's HTML). */
function Footer() {
  const SrcFooter = window.SogodySrcShell && window.SogodySrcShell.SrcFooter;
  if (!SrcFooter) {
    console.error("[shell] SrcFooter missing — load components/src-kit.jsx and components/src-shell.jsx before components/shell.jsx");
    return null;
  }
  return <SrcFooter />;
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
          <img src="/assets/icons/close.svg" alt="" />
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
