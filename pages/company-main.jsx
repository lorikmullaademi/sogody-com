/* Sogody — Company page, 1:1 port of src/pages/company.js: BannerCompany (video
   hero) + SogodyText ("Our Story") + MSHS banner gallery + ProjectsCarousel
   ("Biggest Projects… Through Years" timeline) + CEOQuote + CompanyStaff
   ("The Faces of Sogody") + Testimonials + BookMeetHomePage. Renders against the
   compiled repo SCSS so the layout is pixel-for-pixel with live /company. */

const { ExploreLink: CoExplore, InitKoalendar: CoKoalendar } = window.SogodySrcKit;
const { SrcLayout: CoLayout } = window.SogodySrcShell;
const { COMPANY_BANNERS: CO_BANNERS } = window.SogodyData;
const { useState: useStateCo, useEffect: useEffectCo, useRef: useRefCo } = React;

window.SOGODY_ACTIVE_NAV = "company";
const S = (f) => "https://cdn.sanity.io/images/3hfxs7a8/production/" + f;
const CO_VIDEO = "https://files.sogody.co.uk/2025-07-21T11-20-44.200Z-Optimized_Sogody.mp4";
const CO_YOUTUBE = "https://www.youtube.com/watch?v=YDI2BWHLsNQ";
/* CEO photo. When Sanity is removed, save this asset to assets/images/ceo-lorik.webp
   and set CO_CEO_IMG = "/assets/images/ceo-lorik.webp". */
const CO_CEO_IMG = "https://cdn.sanity.io/images/3hfxs7a8/production/533c401f6ba32987e61aaff1b01e5c40589c48f4-1164x1544.webp";

/* ---- Projects timeline content (sorted by year asc, mirrors carouselCard) ---- */
const CO_PROJECTS = [
  { year: 2017, title: "The Beginning of Sogody", highlight: "Foundation", subtitle: "What started as an idea quickly became an agile company working with some of the world\u2019s largest brands.", image: S("611b9cd5d1dfb8722e1b9effefb1d447213cc072-5288x3523.webp") },
  { year: 2019, title: "A Major Milestone", highlight: "Breakthrough", subtitle: "We signed our first large contract with Cheil + Samsung, contributing to their D2C growth program and solidifying our role as a trusted partner in digital innovation.", image: S("18c85ba5ea815489372ab8096ddbcbf7fbf552f7-6325x4313.webp") },
  { year: 2020, title: "Expanding Our Reach", highlight: "Growth", subtitle: "We began working with FMCG giant Unilever on their D2C program, further establishing our expertise in large-scale digital commerce and consumer engagement.", image: S("64617b811b491c7a898f7103b51a673931d47f1a-6434x4289.webp") },
  { year: 2023, title: "Expanding Our Vision", highlight: "New Chapter", subtitle: "We launched Spell & Sell, our e-commerce-focused brand, dedicated to helping businesses build, optimize, and scale their digital storefronts with cutting-edge solutions.", image: S("b774de6b2dabb0fdd1a768bc635b9bb3fa817fb8-1448x996.webp") },
  { year: 2024, title: "Pioneering AI Innovation", highlight: "Breakthrough", subtitle: "Our R&D team developed and successfully exited two AI products, Replix.ai and TweetPeek.ai, marking a new era of innovation and growth in AI-driven solutions.", image: S("31fdf5065dc13394afcc4605c339fa73a5657766-3840x1904.webp") },
  { year: 2025, title: "AI-First Future", highlight: "New Beginnings", subtitle: "Our R&D team spun off as AldAstra, embarking on a new mission to build cutting-edge AI-driven products and push the boundaries of innovation.", image: S("7adeef3563659a616d7370e06342bfee6f78dd0a-1448x996.webp") },
];

/* ---- Team (mirrors companyTeam) ---- */
const CO_STAFF = [
  { n: "Lorik Mullaademi", t: "Chief Executive Officer", i: "702473dbd929e12827fc320f837a7d1c1d98bc9f-482x513.webp" },
  { n: "Tomor Pupovci", t: "Chief Technology Officer", i: "a57d9082414239b5a5e3be1606545f15a8043416-816x865.webp" },
  { n: "Diell\u00ebza Galica", t: "", i: "f917d2d942c8ca959b56e42134338f26830589fa-816x865.webp" },
  { n: "Synim Selimi", t: "", i: "0304786b2eca9f1d9f2b800509d0ed1745b33e56-816x868.webp" },
  { n: "Agon Ramizi", t: "", i: "e5e9efc5b848b27d6da2b436a78071da69ec2205-812x868.webp" },
  { n: "Egzona Lipovica", t: "", i: "7d5315dcf9e611c300e274c7f6d8b339a0ae7dbe-816x868.webp" },
  { n: "Rron Lamoja", t: "", i: "be82f569f9631835cccf87b81f02da1eac693605-816x871.webp" },
  { n: "Artira Ferati", t: "", i: "4fdb717189bdd37a621a608bf848a2fcd0ceb3fd-816x871.webp" },
  { n: "Arbenita Maloku", t: "", i: "1a223be3ac7273d10f7a85245b8f49639703fee6-812x871.webp" },
  { n: "Arbena Musa", t: "", i: "0af1b7f197874de2b4cbd4f4711977eea56657cb-816x871.webp" },
  { n: "Bled Kastrati", t: "", i: "d2f3dd154eb96ad2f7af59c39b114b9ae12d76bf-816x871.webp" },
  { n: "Ymer Ilazi", t: "", i: "6fc097a9d8d7e5dd75d68c93fe73c6163d6125a5-816x871.webp" },
  { n: "Dardan Asllani", t: "", i: "a6918fb4511fcd8768d350020f54745e9e467730-816x871.webp" },
  { n: "Q\u00ebndresa Braha", t: "", i: "85082d05112cced30cd9753876ed9ae61d96a0cd-816x871.webp" },
  { n: "Elona Zeqiri", t: "", i: "31fd005d5992705b81c4ee896a9a339e3375e642-816x871.webp" },
  { n: "Urim Elezi", t: "", i: "485077c7d30406276eaa97af3cab321f17ae5ce1-816x871.webp" },
  { n: "Blina Hakuli", t: "", i: "139581bda394419db731093ec79248ee3d989ee5-841x871.webp" },
  { n: "Lidra Kamberi", t: "", i: "0318287cd7cc5360b83f5aef0c902e22e9ff2d52-816x871.webp" },
  { n: "F\u00ebll\u00ebnza Burrniku", t: "", i: "5fa8e5a6734c5d62ee4cf7126e3b7ca495b02100-816x871.webp" },
  { n: "Planeta Maloku", t: "", i: "45ac7e5d4a8bacd6754fa727cef75e842b161e7e-816x871.webp" },
  { n: "Ylber Galica", t: "", i: "79680f7b27a76f17527287e003d8a8fdf38795f8-816x871.webp" },
  { n: "Adenita Luta", t: "", i: "2ad7a57bc3a5d8d88e1a36394afc787ab985483b-816x871.webp" },
  { n: "Rina Rexhepi", t: "", i: "c71d73f0a0a8b7b7ab9153515d2ae69c61fb1138-816x871.webp" },
  { n: "Adhuresa Sylejmani", t: "", i: "19623526d0c668a7d3553c10c8d5cff369af5892-816x871.webp" },
  { n: "Tron Baraku", t: "", i: "a2b282580ed441205d622d4e0ad7a1c86be45177-816x871.webp" },
  { n: "Vineta Leci", t: "", i: "a22cceaadaa33252cced0ef497b24e8c25f90875-816x871.webp" },
  { n: "Lorik Shabani", t: "", i: "173e7f5f2e966a3dac885853c8360c3f0670074a-816x871.webp" },
  { n: "Edber Vu\u00e7it\u00ebrna", t: "", i: "d7921f13decbe4e2f1f49fb9fa03828addef2a74-510x544.png" },
  { n: "Bislim Ademi", t: "", i: "c52e1e59372666e7ef8aa59f9d443af6b29f7626-510x544.png" },
  { n: "Viola Kryeziu", t: "", i: "0ba68d3c4cedb358376915995fe296ccbe50a8f5-612x653.png" },
  { n: "Andi Basha", t: "", i: "95be6d959219fa964874dfb3e79189363609d397-612x653.png" },
  { n: "Donjet Dana", t: "", i: "527167d99b3ee192e323287a9dc411696616780b-612x653.png" },
  { n: "Aldi Krasniqi", t: "", i: "28b60bc0e0f5cdb8d529af5f730e2bd2112f770d-612x653.png" },
  { n: "Melisa Kololli", t: "", i: "44b918e47b63c8b5743f51b2344a42d770dae4da-816x871.png" },
  { n: "Arb\u00ebresha Hodolli", t: "", i: "7fa076b5196a0f006f7ca64ea697a3fe5154bb6d-816x871.png" },
  { n: "Ibrahim Salihi", t: "", i: "271469c1470b53eb6bf7f06b76ec5070b155e45a-816x871.png" },
  { n: "Olsa Domi", t: "", i: "e61799e352f6d27e6dcee4083738b4ca296e8eb2-816x871.png" },
];

/* ---- Testimonials (mirrors testimonials) ---- */
const CO_TST = [
  { name: "James Day", position: "COO", company: "Old Gold Racing", image: S("42cff6b48a2fba5da3e2bc1e2beddae2270a055f-477x477.png"), text: "Sogody\u2019s flexibility and knowhow has been fundamental in allowing us to build a product that delights the customers we serve. I\u2019ve worked with Sogody\u2019s leadership team in a variety of capacities since their inception and they consistently deliver." },
  { name: "Laura Robinson", position: "CEO", company: "Web and Flo", image: S("63ba73466b1814e5f4ebbcd54d9726a2b2889251-118x118.png"), text: "I worked with Sogody for almost 2 years during my time as Head of CRO at Brainlabs. They were professional, understood the complexities of each client and were flexible as we scaled our needs. Their in-house specialists are excellent." },
  { name: "Ahmed Musa", position: "Performance Lead", company: "Cheil UK & EO", image: S("54e567f24d05d7dba889e55748d8bc4903ec5488-118x118.webp"), text: "Sogody has been an essential part of my team and a partner who has really allowed us to scale. We have experienced 3x growth in a short period and through Sogody, I have been able to deliver at pace and without sacrificing quality." },
  { name: "Casimir Rob", position: "Founder", company: "Every", image: S("52f3b8ed38e988ff68762d763e9d8e1adff3e901-122x126.webp"), text: "Very reliable partner\u2014responsive, structured, and a pleasure to work with. We truly enjoy collaborating with the Sogody team. Great things ahead! The quality of work is superb, and it\u2019s clear that experts are behind it." },
];

const SVG_GREY = "/assets/svgs/sogody-grey.svg";
const SVG_GREEN = "/assets/svgs/sogody-green.svg";

/* ---- BannerCompany (1:1) ---- */
function CoBanner() {
  const vref = useRefCo(null);
  const [muted, setMuted] = useStateCo(true);
  useEffectCo(() => { if (vref.current) { vref.current.muted = true; const p = vref.current.play(); if (p && p.catch) p.catch(() => {}); } }, []);
  const toggle = () => { if (vref.current) { vref.current.muted = !vref.current.muted; setMuted(vref.current.muted); } };
  return (
    <>
      <div className="banner-company video-wrapper">
        <video ref={vref} src={CO_VIDEO} autoPlay loop muted playsInline className="border-radius" height={500} style={{ width: "100%", objectFit: "cover", borderRadius: "20px" }}></video>
        <div className="mute-toggle" onClick={toggle} style={{ position: "absolute", right: "44px", bottom: "36px", cursor: "pointer", color: "#fff" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"></path>{muted ? <><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></> : <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>}</svg>
        </div>
      </div>
    </>
  );
}

/* ---- SogodyText / Our Story (1:1) ---- */
function CoStory() {
  return (
    <div className="sogody-text">
      <div className="title-container scroll-show"><h2 className="story-title">Our Story</h2></div>
      <div className="content-container">
        <p className="title">Sogody is a digital experiences company helping organizations establish highly effective engineering solutions, e-commerce and experimentation programmes that deliver exceptional results for the business and its customers.</p>
        <CoKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Work with us" />
      </div>
    </div>
  );
}

/* ---- MSHS banner gallery (1:1, centered auto-slider) ---- */
function CoGallery() {
  const ref = useRefCo(null);
  const [playing, setPlaying] = useStateCo(true);
  const [idx, setIdx] = useStateCo(0);
  const stepOf = (el) => { const c = el.querySelector(".slide-container"); return c ? c.getBoundingClientRect().width : 400; };
  const onScroll = () => { const el = ref.current; if (!el) return; setIdx(Math.round(el.scrollLeft / stepOf(el))); };
  const goTo = (i) => { const el = ref.current; if (!el) return; el.scrollTo({ left: i * stepOf(el), behavior: "smooth" }); };
  useEffectCo(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const el = ref.current; if (!el) return;
      const next = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5 ? 0 : Math.round(el.scrollLeft / stepOf(el)) + 1;
      el.scrollTo({ left: next * stepOf(el), behavior: "smooth" });
    }, 2600);
    return () => clearInterval(id);
  }, [playing]);
  return (
    <div className="mshs-services d-flex flex-column">
      <div className="slider-wrapper">
        <div className="custom-slider co-gallery-track" ref={ref} onScroll={onScroll}>
          {CO_BANNERS.map((src, i) => (
            <div className="slide-container" key={i}>
              <div className="content-box" style={{ backgroundImage: `url(${src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "#f0f0f0" }}></div>
            </div>
          ))}
        </div>
        <div className="co-gallery-controls">
          <button type="button" className="co-pause" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
            {playing
              ? <span className="co-pause-ico"><i></i><i></i></span>
              : <span className="co-play-ico"></span>}
          </button>
          <div className="co-dots-pill">
            {CO_BANNERS.map((_, i) => (
              <button key={i} className={`co-dot ${i === idx ? "active" : ""}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- ProjectsCarousel timeline (1:1) ---- */
function CoProjects() {
  const [idx, setIdx] = useStateCo(0);
  const cards = CO_PROJECTS;
  const activeYear = cards[idx].year;
  const card = cards[idx];
  const go = (t) => setIdx(Math.max(0, Math.min(t, cards.length - 1)));
  return (
    <div className="projects scroll-show">
      <div className="carousel-container">
        <div className="container-company">
          <h2 className="carousel-h2">Biggest Projects we <br /> Worked Through Years</h2>
          <div className="row year-svgs">
            {cards.map((c, i) => (
              <React.Fragment key={c.year}>
                <div className="col-3 year-svg">
                  <div className="svg-container">
                    <button className="year-icon-button" onClick={() => go(i)}>
                      <img src={activeYear === c.year ? SVG_GREEN : SVG_GREY} alt={`Year ${c.year}`} className="year-svg-icon" />
                    </button>
                    <div className={`year-label year ${activeYear === c.year ? "active" : ""}`}>{c.year}</div>
                  </div>
                </div>
                {i < cards.length - 1 && (
                  <div className="shared-line-container">
                    <div className="shared-line" style={{ background: `linear-gradient(to right, #67BE83 ${i < idx ? "100%" : "0%"}, #d5d5d5 ${i < idx ? "100%" : "0%"})` }}></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="swiper-nav-container">
            <button className="swiper-button-prev" onClick={() => go(idx - 1)}></button>
            <button className="swiper-button-next" onClick={() => go(idx + 1)}></button>
          </div>
          <div className="carousel-card" key={card.year}>
            <div className="card-header">
              <div className="cardheader-1"><span className="year-label">{card.year}</span></div>
              <div className="cardheader-2">
                <h3>{card.title}</h3>
                <p>{card.subtitle.split("Spell & Sell").map((part, i, arr) => i < arr.length - 1 ? <React.Fragment key={i}>{part}<a href="https://spellnsell.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1c9efc", textDecoration: "none" }}>Spell & Sell</a></React.Fragment> : <React.Fragment key={i}>{part}</React.Fragment>)}</p>
                {card.highlight && (<div className="row stats-row"><div className="col-6 stats-card"><p>{card.highlight}</p></div></div>)}
              </div>
            </div>
            {card.image && <img className="carousel-img" src={card.image} alt={card.title} />}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- CEOQuote (1:1) ---- */
function CoCeo() {
  return (
    <div className="ceo-quote-container">
      <div className="image-container">
        <div className="image-wrapper w-75" style={{ backgroundImage: `url(${CO_CEO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      </div>
      <div className="text-container">
        <div className="small-text-container"><p className="small-text subtitle smaller2 mb-1">Lorik Mullaademi / CEO of Sogody</p></div>
        <div className="main-text"><p>&ldquo;At Sogody, we&rsquo;re driven by a passion for innovation and a commitment to our clients&rsquo; success. We don&rsquo;t just build systems or design interfaces&mdash;we create solutions that empower businesses and deliver meaningful results.&rdquo;</p></div>
        <CoKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting" />
      </div>
    </div>
  );
}

/* ---- CompanyStaff (1:1, horizontal scroll) ---- */
function CoStaff() {
  const ref = useRefCo(null);
  const drag = useRefCo({ active: false, startX: 0, startLeft: 0 });
  const [prog, setProg] = useStateCo(0);
  const [dragging, setDragging] = useStateCo(false);
  const scroll = (dir) => { const el = ref.current; if (!el) return; const card = el.querySelector(".employee-card"); const step = card ? (card.getBoundingClientRect().width + 20) : 240; el.scrollBy({ left: dir * step, behavior: "smooth" }); };
  const onScroll = () => { const el = ref.current; if (!el) return; const max = el.scrollWidth - el.clientWidth; setProg(max > 0 ? el.scrollLeft / max : 0); };
  /* grab-and-pan the staff photos to scroll horizontally (mouse/trackpad drag);
     touch keeps native swipe scrolling */
  const onPointerDown = (e) => {
    const el = ref.current; if (!el) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft };
    setDragging(true);
    el.style.scrollSnapType = "none"; /* free-pan immediately; snap re-enables on release */
    if (el.setPointerCapture) { try { el.setPointerCapture(e.pointerId); } catch (_) {} }
  };
  const onPointerMove = (e) => {
    const el = ref.current; if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => { const el = ref.current; if (!drag.current.active) return; drag.current.active = false; setDragging(false); if (el) el.style.scrollSnapType = ""; };
  return (
    <div className="sogody-staff">
      <h2 className="scroll-show"><span className="staff-line">The Faces</span><span className="staff-line">of Sogody</span></h2>
      <div className="swiper-nav-container">
        <button className="swiper-button-prev" onClick={() => scroll(-1)} aria-label="Previous"></button>
        <button className="swiper-button-next" onClick={() => scroll(1)} aria-label="Next"></button>
      </div>
      <div
        className={`co-staff-track${dragging ? " dragging" : ""}`}
        ref={ref}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {CO_STAFF.map((s, i) => (
          <div className="card employee-card" key={i}>
            <div className="card-body">
              <img className="employee-img" src={S(s.i)} alt="Staff img" draggable={false} />
              <div className="card-text">
                <p className="name">{s.n}</p>
                {s.t && <p className="title">{s.t}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="co-staff-progress">
        <span className="co-staff-progress-fill" style={{ transform: "scaleX(" + (0.12 + prog * 0.88) + ")" }}></span>
      </div>
    </div>
  );
}

/* ---- Testimonials (1:1, 2-up auto-slider) ---- */
function CoTestimonials() {
  const ref = useRefCo(null);
  useEffectCo(() => {
    const id = setInterval(() => {
      const el = ref.current; if (!el) return;
      const card = el.querySelector(".carousel-card");
      const step = card ? (card.getBoundingClientRect().width + 14) : 400;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: step, behavior: "smooth" });
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="testimonials-carousel scroll-show mb-3 pt-0">
      <div className="carousel-container">
        <div className="content-wrapper desktop-row d-flex justify-content-between w-100 mb-4">
          <h2 className="carousel-title mb-0 w-100 justify-content-start" dangerouslySetInnerHTML={{ __html: "Take a Look at What <br class='desktop-br'/> Our Clients Say" }}></h2>
        </div>
        <div className="carousel-slider-wrapper">
          <div className="co-tst-track" ref={ref}>
            {CO_TST.map((p, i) => (
              <div key={i} className="carousel-card">
                <div className="card-content">
                  <div className="testimonial-img-container">
                    <img className="testimonial-image" src={p.image} alt={p.name} />
                  </div>
                  <div className="tst-text d-flex flex-column">
                    <div className="description"><p className="description">{p.text}</p></div>
                    <div>
                      <p className="username green desktop-only">{p.name}</p>
                      <p className="position subtitle desktop-only">{p.position} {p.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- BookMeetHomePage (1:1) ---- */
function CoBookMeet() {
  return (
    <div className="cta-meet">
      <div className="cta-meet-container">
        <div className="cta-meet-content">
          <div className="cta-meet-content-column"><h2 className="cta-meet-content--title">Speak to a Technical Lead</h2></div>
          <div className="cta-meet-content-column"><p className="cta-meet-content--description">Join our CTO for a 30-minute call to explore how Sogody can unlock new digital projects for your brand.</p></div>
          <div className="cta-meet-content-column"><CoKoalendar showButton={true} className="contact-us-link button-padding" buttonText="Set up a Meeting" /></div>
        </div>
      </div>
    </div>
  );
}

function CompanyApp() {
  return (
    <CoLayout>
      <div className="company">
        <CoBanner />
        <div className="container-company"><CoStory /></div>
        <CoGallery />
        <CoProjects />
        <div className="container-company">
          <CoCeo />
          <CoStaff />
          <CoTestimonials />
          <CoBookMeet />
        </div>
      </div>
    </CoLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CompanyApp />);
