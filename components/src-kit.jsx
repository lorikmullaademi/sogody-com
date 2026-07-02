/* Sogody — 1:1 ports of src/components leaf components (ExploreLink,
   CircularButton, ClientsCarousel, InitKoalendar, KoalendarSidebar).
   DOM structure and class names mirror the repo exactly so the compiled
   SCSS applies pixel-for-pixel. window.SogodySrcKit */

const { useState: useStateK, useEffect: useEffectK } = React;

const SVG_GREEN_ARROW = "/assets/svgs/Arrow.svg";
const SVG_BLACK_ARROW = "/assets/svgs/black-arrow.svg";
const SVG_WHITE_ARROW = "/assets/svgs/white-arrow.svg";
const SVG_DOWN_ARROW = "/assets/svgs/down-arrow.svg";

/* Gatsby route normalizer — canonical root-absolute URLs with trailing slash
   (e.g. /work/, /work/<slug>/). Root-absolute so links resolve correctly from
   nested pages like /updates/<slug>/; vercel.json rewrites map the detail
   routes onto their .html templates. */
function mapPath(to) {
  if (!to || to === "#") return "#";
  if (/^(https?:|mailto:|tel:|#)/.test(to)) return to;
  let m;
  if (to === "/") return "/";
  if ((m = to.match(/^\/(services|work|updates|careers)\/([^/?#]+)\/?$/))) return `/${m[1]}/${m[2]}/`;
  if ((m = to.match(/^\/([\w-]+)\/?$/))) return `/${m[1]}/`;
  return to;
}

/* ---- Koalendar sidebar open/close (mirrors KoalendarSidebarContext) ---- */
function openKoalendarSidebar() {
  window.dispatchEvent(new CustomEvent("sogody:sidebar", { detail: true }));
}
function closeKoalendarSidebar() {
  window.dispatchEvent(new CustomEvent("sogody:sidebar", { detail: false }));
}
function useKoalendarOpen() {
  const [open, setOpen] = useStateK(false);
  useEffectK(() => {
    const h = (e) => setOpen(e.detail);
    window.addEventListener("sogody:sidebar", h);
    return () => window.removeEventListener("sogody:sidebar", h);
  }, []);
  return open;
}

/* ---- ExploreLink (1:1 src/components/ExploreLink.js) ---- */
function ExploreLink({ to, href, underlined = true, text = "Explore Our Work", openInNewTab = false, className = "", openCalendar = false }) {
  const [hovered, setHovered] = useStateK(false);
  const commonProps = {
    className: "explore-link green-hover",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    "aria-label": text,
  };
  const content = (
    <>
      <span className={`text-padding d-flex align-items-center explore-link-text ${underlined ? "underlined" : ""} ${className}`}>{text}</span>
      <span className="arrow-icon arrow-span-styling">
        <img src={hovered ? SVG_GREEN_ARROW : SVG_BLACK_ARROW} alt="Arrow Icon" />
      </span>
    </>
  );
  if (to) return <a href={mapPath(to)} {...commonProps}>{content}</a>;
  if (href) return <a href={href} target={openInNewTab ? "_blank" : "_self"} rel={openInNewTab ? "noopener noreferrer" : undefined} {...commonProps}>{content}</a>;
  if (openCalendar) return <button type="button" {...commonProps} className={commonProps.className + " explore-button"} onClick={openKoalendarSidebar}>{content}</button>;
  return null;
}

/* ---- CircularButton (1:1 src/components/CircularButton.js) ---- */
function CircularButton({ isHovered, type, slug, variant = "default", onClick, rotated = false, nested = false }) {
  let url = "#";
  if (slug) {
    url = type === "custom" ? slug
      : type === "work" ? `/work/${slug}/`
      : type === "services" ? `/services/${slug}/`
      : `/updates/${slug}/`;
    url = mapPath(url);
  }
  const handleClick = (e) => {
    if (onClick) { e.preventDefault(); onClick(e); }
  };
  const img =
    variant === "green-black" || variant === "green-white"
      ? (isHovered ? SVG_WHITE_ARROW : SVG_GREEN_ARROW)
      : variant === "black"
        ? (isHovered ? SVG_GREEN_ARROW : SVG_WHITE_ARROW)
        : (isHovered ? SVG_WHITE_ARROW : SVG_BLACK_ARROW);
  const Tag = nested ? "span" : "a";
  return (
    <Tag href={nested ? undefined : (slug ? url : "#")} className={`circular-btn-container circular-custom ${variant}`} onClick={handleClick} style={nested ? { display: "inline-block" } : undefined}>
      <div className={`circular-btn circular-btn-default ${variant} ${isHovered ? "hovered" : ""}`}>
        <span className="arrow-icon" style={{ transform: rotated ? "rotate(40deg)" : "none" }}>
          <img src={img} alt="Arrow Icon" />
        </span>
      </div>
    </Tag>
  );
}

/* ---- InitKoalendar (1:1 src/components/init-koalendar.js) ---- */
function InitKoalendar({ buttonText, className, children, showButton = false, href, variant = "green-black", blackButton = false }) {
  const [isHovered, setIsHovered] = useStateK(false);
  const handleClick = (event) => {
    if (!href) {
      if (event) event.preventDefault();
      openKoalendarSidebar();
    }
  };
  return (
    <div className="d-flex init-circular-div">
      {showButton && (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ marginRight: "-35px" }}>
          <CircularButton rotated={true} variant={variant} onClick={handleClick} isHovered={isHovered} />
        </div>
      )}
      <a
        href={href}
        className={`${className} ${blackButton ? "black-button" : ""} d-flex align-items-center justify-content-center`}
        onClick={href ? undefined : handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonText}
        {children}
      </a>
    </div>
  );
}

/* ---- ClientsCarousel (1:1 src/components/ClientsCarousel.js) ---- */
function ClientsCarousel({ data }) {
  if (!data || !data.clientsLogos || data.clientsLogos.length === 0) {
    return <div>No client logos available.</div>;
  }
  return (
    <div className="clients-carousel">
      <div className="carousel-container">
        <div className="title-wrapper">
          <p className="title-styling subtitle">{data.title}</p>
        </div>
        <div className="carousel-slider-wrapper">
          <div className="logo-slider">
            <div className="slider-track">
              {data.clientsLogos.map((logo, index) => (
                <div key={index} className="logo-item"><img src={logo} alt={`Client logo ${index + 1}`} /></div>
              ))}
              {data.clientsLogos.map((logo, index) => (
                <div key={`clone-${index}`} className="logo-item"><img src={logo} alt={`Client logo ${index + 1}`} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Cal.com inline embed (mirrors src/components/CalEmbed.js via official embed.js) ---- */
function ensureCalLoaded() {
  if (window.Cal) return;
  /* official cal.com embed snippet */
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  window.Cal("init", { origin: "https://cal.com" });
}

function CalEmbed() {
  const ref = React.useRef(null);
  useEffectK(() => {
    ensureCalLoaded();
    window.Cal("inline", {
      elementOrSelector: ref.current,
      calLink: "sogody/30min",
      config: { theme: "light", layout: "month_view" },
    });
    window.Cal("ui", { theme: "light", layout: "month_view" });
  }, []);
  return (
    <div className="cal-wrap">
      <div className="cal-embed" ref={ref} style={{ width: "100%", height: "100%", overflow: "auto" }}></div>
    </div>
  );
}

/* ---- KoalendarSidebar (1:1 src/components/KoalendarSidebar.js) ---- */
function KoalendarSidebar() {
  const isOpen = useKoalendarOpen();
  useEffectK(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="koalendar-sidebar-overlay" role="dialog" aria-modal="true" onClick={closeKoalendarSidebar}>
      <aside className="koalendar-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="koalendar-sidebar-header">
          <p>Contact</p>
          <button className="koalendar-close-btn" onClick={closeKoalendarSidebar}>
            <img src="/assets/images/close-button.svg" alt="Close Koalendar" />
          </button>
        </div>
        <div className="koalendar-sidebar-content">
          <CalEmbed />
        </div>
      </aside>
    </div>
  );
}

/* Autoplay fix: React sets the muted PROPERTY but not the ATTRIBUTE, so
   browsers can block autoplay. Ref callback forces muted + play(). */
function autoplayVideoRef(el) {
  if (!el) return;
  el.muted = true;
  el.defaultMuted = true;
  el.setAttribute("muted", "");
  const p = el.play();
  if (p && p.catch) p.catch(() => {});
}

window.SogodySrcKit = {
  mapPath, ExploreLink, CircularButton, InitKoalendar, ClientsCarousel, KoalendarSidebar,
  openKoalendarSidebar, closeKoalendarSidebar, autoplayVideoRef,
  SVG_GREEN_ARROW, SVG_BLACK_ARROW, SVG_WHITE_ARROW, SVG_DOWN_ARROW,
};
