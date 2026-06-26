/* Sogody — shared presentational primitives, mirrored 1:1 from the live repo
   (src/components/*). Attached to window.SogodyKit so every page can use them.
   Asset paths are root-relative ("assets/...") so they resolve from any page
   HTML file sitting at the project root. */

const { useState, useEffect, useRef } = React;

const ARROW_BLACK = "assets/icons/black-arrow.svg";
const ARROW_WHITE = "assets/icons/white-arrow.svg";
const ARROW_GREEN = "assets/icons/arrow.svg";
const ARROW_DOWN = "assets/icons/down-arrow.svg";
const LOGO = "assets/logos/logo_sogody.png";

/* ExploreLink — mirrors src/components/ExploreLink.js */
function ExploreLink({ to = "#", text = "Explore Our Work", underlined = true, className = "", tone = "black" }) {
  const [hovered, setHovered] = useState(false);
  const restSrc = tone === "green" ? ARROW_GREEN : ARROW_BLACK;
  return (
    <a href={to} className="explore-link green-hover" aria-label={text}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className={`text-padding explore-link-text ${underlined ? "underlined" : ""} ${className}`}>{text}</span>
      <span className="arrow-icon arrow-span-styling">
        <img src={hovered ? ARROW_GREEN : restSrc} alt="" />
      </span>
    </a>
  );
}

/* CircularButton — mirrors src/components/CircularButton.js */
function CircularButton({ variant = "black", isHovered = false, direction = "right" }) {
  const src = isHovered ? ARROW_GREEN : ARROW_WHITE;
  return (
    <div className="circular-btn-container">
      <div className={`circular-btn circular-btn-default ${variant} dir-${direction} ${isHovered ? "hovered" : ""}`}>
        <span className="arrow-icon"><img src={src} alt="" /></span>
      </div>
    </div>
  );
}

/* Contact / booking pill button — mirrors InitKoalendar's rendered button.
   Clicking opens the in-page contact modal (window.SogodyOpenContact) unless an
   explicit href is given. */
function ContactButton({ children, href, className = "", onClick }) {
  const handle = (e) => {
    if (onClick) return onClick(e);
    if (!href && window.SogodyOpenContact) { e.preventDefault(); window.SogodyOpenContact(); }
  };
  return (
    <a className={`contact-us-link ${className}`} href={href || "#"} onClick={handle}
      target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}>
      <span className="c-us">{children}</span>
    </a>
  );
}

/* ClientsCarousel — mirrors src/components/ClientsCarousel.js (infinite marquee) */
function ClientsCarousel({ title, logos }) {
  return (
    <div className="clients-carousel">
      <div className="carousel-container">
        <div className="title-wrapper">
          <p className="title-styling subtitle">{title}</p>
        </div>
        <div className="carousel-slider-wrapper">
          <div className="logo-slider">
            <div className="slider-track">
              {logos.map((src, i) => (
                <div key={i} className="logo-item"><img src={src} alt={`Client logo ${i + 1}`} /></div>
              ))}
              {logos.map((src, i) => (
                <div key={`c-${i}`} className="logo-item"><img src={src} alt={`Client logo ${i + 1}`} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SogodyKit = {
  ExploreLink, CircularButton, ContactButton, ClientsCarousel,
  ARROW_BLACK, ARROW_WHITE, ARROW_GREEN, ARROW_DOWN, LOGO,
};
