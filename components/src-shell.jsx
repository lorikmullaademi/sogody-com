/* Sogody — 1:1 port of src/components/Footer.js + Layout.js scroll-show
   observer. window.SogodySrcShell */

const { useEffect: useEffectF } = React;
const { KoalendarSidebar: FSidebar } = window.SogodySrcKit;

function SrcFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-block">
            <p className="title-white bolder-font"><a href="/contact/">General Enquiries</a></p>
            <p className="title-white bolder-font"><a href="/careers/">Careers</a></p>
          </div>
          <div className="footer-block">
            <p className="title-gray"><a href="/privacy/">Privacy</a></p>
            <p className="title-gray"><a href="/terms/">Terms</a></p>
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
              <a href="https://www.facebook.com/sogodycom/" target="_blank" rel="noreferrer"><img src="/assets/images/social-icons/facebook.svg" alt="Facebook" /></a>
              <a href="https://www.instagram.com/sogodycom/" target="_blank" rel="noreferrer"><img src="/assets/images/social-icons/instagram.svg" alt="Instagram" /></a>
              <a href="https://www.linkedin.com/company/sogody" target="_blank" rel="noreferrer"><img src="/assets/images/social-icons/linkedin.svg" alt="LinkedIn" /></a>
              <a href="https://bsky.app/profile/sogody.bsky.social" target="_blank" rel="noreferrer"><img src="/assets/images/social-icons/bluesky.svg" alt="Bluesky" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="title-gray">&copy; {year} Sogody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* Layout (1:1 src/components/Layout.js — scroll-show IntersectionObserver) */
function SrcLayout({ children, hideFooter = false }) {
  useEffectF(() => {
    const elements = document.querySelectorAll(".scroll-show");
    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      elements.forEach((el) => observer.observe(el));
    }
    /* Fallback for sandboxed-iframe environments where IntersectionObserver
       and window scroll events don't fire: poll scroll position and reveal
       elements in view. Matches the live site's visible end state. */
    const reveal = () => {
      document.querySelectorAll(".scroll-show:not(.show)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.1 && r.bottom > 0) el.classList.add("show");
      });
    };
    const t = setTimeout(reveal, 300);
    const poll = setInterval(() => {
      if (!document.querySelector(".scroll-show:not(.show)")) { clearInterval(poll); return; }
      reveal();
    }, 250);
    return () => {
      if (observer) observer.disconnect();
      clearTimeout(t);
      clearInterval(poll);
    };
  }, []);

  const ShellHeader = window.SogodyShell && window.SogodyShell.Header;
  const ShellModal = window.SogodyShell && window.SogodyShell.ContactModal;
  const SrcHeader = window.SogodySrcHeader && window.SogodySrcHeader.SrcHeader;
  return (
    <div className="layout-container">
      {ShellHeader
        ? <ShellHeader active={window.SOGODY_ACTIVE_NAV || ""} />
        : <SrcHeader active={window.SOGODY_ACTIVE_NAV || ""} />}
      {ShellModal && <ShellModal />}
      <div>{children}</div>
      {!hideFooter && <SrcFooter />}
      <FSidebar />
    </div>
  );
}

window.SogodySrcShell = { SrcFooter, SrcLayout };
