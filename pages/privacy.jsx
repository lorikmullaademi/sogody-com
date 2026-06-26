/* Sogody — Privacy (mirrors src/pages/privacy.js). Banner greens capitalized
   words; content rendered as portable-text-like sections.
   Legal copy is the verbatim live text from sogody.com/privacy (content pass). */
const { Header: PHeader, Footer: PFooter, ContactModal: PModal } = window.SogodyShell;

function GreenTitle({ text }) {
  return (
    <h1 className="banner-title">
      {text.split(" ").map((w, i) => /^[A-Z]/.test(w)
        ? <span key={i} className="green">{w} </span>
        : <span key={i}>{w} </span>)}
    </h1>
  );
}

const SECTIONS = [
  { h: "Privacy Policy", p: [
    "At Sogody, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website, www.sogody.com (the \u201cSite\u201d).",
    "By using the Site, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our policies and practices, do not use the Site.",
    "Sogody is compliant with the General Data Protection Regulation (GDPR).",
  ] },
  { h: "Information We Collect", p: ["We collect information about you in the following ways:"], ul: [
    "Information you provide to us: We collect information that you provide to us when you fill out forms or contact us through the Site. This may include your name, email address, phone number, and any other information you choose to provide.",
    "Information we collect automatically: We use Google Analytics and Hotjar to collect information about your use of the Site, including the pages you visit and the actions you take. We also use tracking pixels to collect information about your use of the Site. This information may include your IP address, browser type, and device type.",
  ] },
  { h: "How We Use Your Information", p: ["We use the information we collect about you for the following purposes:"], ul: [
    "To respond to your inquiries and provide customer service.",
    "To improve the Site and our services.",
    "To communicate with you about our products and services.",
  ] },
  { h: "Sharing Your Information", p: ["We do not sell or rent your personal information to third parties. We may share your information with third parties in the following circumstances:"], ul: [
    "With service providers: We may share your information with third party service providers who perform services on our behalf, such as hosting the Site or analyzing data. These service providers are required to protect your information and are not permitted to use it for any other purpose.",
    "As required by law: We may disclose your information if required to do so by law or in response to a valid request from a law enforcement agency.",
  ] },
  { h: "Your Rights and Choices", p: ["You have the following rights and choices regarding your information:"], ul: [
    "Opt-out of marketing communications: You may opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in those communications or by contacting us at info@sogody.com.",
    "Access and update your information: You may access and update your information by contacting us at info@sogody.com.",
    "Delete your information: You may request that we delete your information by contacting us at info@sogody.com. Please note that we may need to retain certain information for recordkeeping purposes or to comply with legal obligations.",
    "Object to processing: You may object to the processing of your information by contacting us at info@sogody.com.",
  ] },
  { h: "Data Security", p: ["We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no website can fully eliminate security risks."] },
  { h: "Changes to This Privacy Policy", p: ["We may update this Privacy Policy from time to time. We will post any updates on this page and encourage you to review this Privacy Policy regularly."] },
  { h: "Contact Us", p: [
    "If you have any questions or concerns about this Privacy Policy or our handling of your information, please contact us at info@sogody.com or at the following address:",
    "Sogody, Str. Demokracia 20, Prishtin\u00eb 10000, Kosovo. +383 49 460 555",
  ] },
];

function PrivacyApp() {
  return (
    <div className="layout-container">
      <PHeader active="" />
      <PModal />
      <main>
        <div className="terms-banner"><GreenTitle text="Privacy and Data Security Policies" /></div>
        <div className="terms-cnt">
          <div className="terms-content">
            {SECTIONS.map((s, i) => (
              <div key={i}>
                <h2 className="heading2">{s.h}</h2>
                {s.p.map((para, j) => <p className="terms-paragraph" key={j}>{para}</p>)}
                {s.ul && (
                  <ul className="ul-list">
                    {s.ul.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <PFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<PrivacyApp />);
