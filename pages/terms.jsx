/* Sogody — Terms (mirrors src/pages/terms.js).
   Legal copy is the verbatim text pulled from the live sogody.com/terms/ page. */
const { Header: THeader, Footer: TFooter, ContactModal: TModal } = window.SogodyShell;

/* Verbatim sections from sogody.com/terms/. `p` = paragraphs, `list` = bullet list. */
const SECTIONS_T = [
  {
    h: "Terms and Conditions",
    p: [
      "Welcome to www.sogody.com (the \u201cWebsite\u201d), a service of Sogody (\u201cCompany,\u201d \u201cwe,\u201d or \u201cus\u201d). These terms and conditions (the \u201cTerms\u201d) govern your access to and use of the Website and all content, services, and products available at or through the Website (the \u201cServices\u201d). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not access or use the Services.",
    ],
  },
  {
    h: "Intellectual Property",
    p: [
      "The Services and all materials contained on the Services, including but not limited to text, graphics, images, illustrations, software, and other content (the \u201cContent\u201d), and the selection, arrangement, and organization of the Content, are the property of the Company or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use any Content for any commercial purpose or in any way that infringes on the rights of the Company or any third party.",
    ],
  },
  {
    h: "Copyright Infringement Complaints",
    p: [
      "If any third party believes that we, in any way, violated their intellectual property, should immediately contact Sogody at info@sogody.com or +38349460555 and notify them about the claims for copyright/trademark infringement.",
    ],
  },
  {
    h: "Use of the Services",
    p: [
      "You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:",
    ],
    list: [
      "In any way that violates any applicable federal, state, local, or international law or regulation",
      "To transmit, or procure the sending of, any advertising or promotional material, including any \u201cjunk mail,\u201d \u201cchain letter,\u201d \u201cspam,\u201d or any other similar solicitation.",
      "To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.",
      "To engage in any other conduct that restricts or inhibits anyone\u2019s use or enjoyment of the Services, or which, as determined by us, may harm the Company or users of the Services or expose them to liability.",
    ],
    p2: ["Additionally, you agree not to:"],
    list2: [
      "Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party\u2019s use of the Services, including their ability to engage in real time activities through the Services.",
      "Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.",
      "Use any manual process to monitor or copy any of the material on the Services or for any other unauthorized purpose without our prior written consent.",
      "Use any device, software, or routine that interferes with the proper working of the Services.",
      "Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.",
      "Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services are stored, or any server, computer, or database connected to the Services.",
      "Attack the Services via a denial-of-service attack or a distributed denial-of-service attack.",
    ],
    p3: [
      "We reserve the right to terminate your use of the Services or any related website for violating any of the prohibited uses.",
    ],
  },
];

function TermsApp() {
  return (
    <div className="layout-container">
      <THeader active="" />
      <TModal />
      <main>
        <div className="terms-banner">
          <h1 className="banner-title">Legal terms</h1>
        </div>
        <div className="terms-cnt">
          <div className="terms-content">
            {SECTIONS_T.map((s, i) => (
              <div key={i}>
                <h2 className="heading2">{s.h}</h2>
                {s.p.map((para, j) => <p className="terms-paragraph" key={j}>{para}</p>)}
                {s.list && (
                  <ul className="ul-list">
                    {s.list.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                )}
                {s.p2 && s.p2.map((para, j) => <p className="terms-paragraph" key={"p2" + j}>{para}</p>)}
                {s.list2 && (
                  <ul className="ul-list">
                    {s.list2.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                )}
                {s.p3 && s.p3.map((para, j) => <p className="terms-paragraph" key={"p3" + j}>{para}</p>)}
              </div>
            ))}
          </div>
        </div>
      </main>
      <TFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<TermsApp />);
