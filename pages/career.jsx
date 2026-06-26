/* Sogody — single career/job template (mirrors templates/career-template.js).
   Reads ?slug=, renders job details, accordions, and an apply form posting to
   the real endpoint (https://apply.sogody.com/). */
const { Header: CRHeader, Footer: CRFooter, ContactModal: CRModal } = window.SogodyShell;
const { JOBS: CR_JOBS, IMG: CR_IMG } = window.SogodyData;
const { useState: useCR } = React;

function Accordion({ title, children, defaultOpen }) {
  const [open, setOpen] = useCR(!!defaultOpen);
  return (
    <div className={`job-accordion ${open ? "open" : ""}`}>
      <button className="acc-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="faq-icon"><img src="assets/icons/close.svg" alt="" /></span>
      </button>
      <div className="acc-body-wrap"><div className="acc-body">{children}</div></div>
    </div>
  );
}

function ApplyForm({ position }) {
  const [status, setStatus] = useCR("Apply");
  const [result, setResult] = useCR(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Applying...");
    const form = new FormData(e.target);
    form.append("position", position);
    fetch("https://apply.sogody.com/", { method: "POST", body: form })
      .then((r) => { if (!r.ok) throw new Error(); return r; })
      .then(() => { setResult("Your application has been successfully submitted. If selected for an interview, you should hear back from our team."); setStatus("Apply"); e.target.reset(); })
      .catch(() => { setResult("An error occurred. Please try again."); setStatus("Apply Again!"); });
  };
  return (
    <form className="apply-form" onSubmit={onSubmit}>
      <div className="row2">
        <input name="firstname" placeholder="First name" required />
        <input name="lastname" placeholder="Last name" required />
      </div>
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="about" rows="3" placeholder="Describe Yourself"></textarea>
      <input name="portfoliolinks" placeholder="Link to Your Portfolio" />
      <label className="upload-btn">
        <img src="assets/icons/arrow-up-right.svg" alt="" /> Upload CV
        <input type="file" name="cv" accept="application/pdf,application/msword" style={{ display: "none" }} />
      </label>
      <button type="submit" className="contact-us-link apply-btn"><span className="c-us">{status}</span></button>
      {result ? <p className="career-result" style={{ marginTop: "8px", color: "#67be83" }}>{result}</p> : null}
    </form>
  );
}

function CareerApp() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || (CR_JOBS[0] && CR_JOBS[0].slug);
  const job = CR_JOBS.find((j) => j.slug === slug) || CR_JOBS[0];

  if (!job) {
    return (
      <div className="layout-container">
        <CRHeader active="careers" /><CRModal />
        <main><div className="careers-positions"><h2 className="title">Position not found</h2><a className="green" href="careers.html">Back to careers</a></div></main>
        <CRFooter />
      </div>
    );
  }

  return (
    <div className="layout-container">
      <CRHeader active="careers" />
      <CRModal />
      <main>
        <div className="career-job-banner">
          <p className="banner-title">Apply as a {job.positionTitle}</p>
          <p className="subtitle">{job.hideDate ? "" : `Deadline: ${job.date}`}</p>
          <img src={CR_IMG.careersBanner} alt={job.positionTitle} />
        </div>
        <div className="single-career-content">
          <div className="details-card">
            <div className="job-details-flex">
              {job.location ? <div className="detail-item"><span className="detail-item-title green">LOCATION</span><p>{job.location}</p></div> : null}
              {job.workModel ? <div className="detail-item"><span className="detail-item-title green">WORK MODEL</span><p>{job.workModel}</p></div> : null}
              {job.experience ? <div className="detail-item"><span className="detail-item-title green">EXPERIENCE</span><p>{job.experience}</p></div> : null}
            </div>
          </div>
          {job.intro ? <div className="career-introduction"><p className="cr-paragraph">{job.intro}</p></div> : null}
          {(job.accordions || []).map((a, i) => (
            <Accordion key={i} title={a.title} defaultOpen={i === 0}>
              {a.body.map((p, j) => <p className="cr-paragraph" key={j}>{p}</p>)}
            </Accordion>
          ))}
          <Accordion title="Apply now">
            <p className="cr-paragraph">Want to join the like-minded people at Sogody? Use the fields below to let us know more about you and please attach a CV in English and a link to your portfolio.</p>
            <ApplyForm position={job.positionTitle} />
          </Accordion>
        </div>
      </main>
      <CRFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<CareerApp />);
