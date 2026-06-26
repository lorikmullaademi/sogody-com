/* Sogody — 404 (mirrors src/pages/404.js) */
const { Header: NFHeader, Footer: NFFooter, ContactModal: NFModal } = window.SogodyShell;
const { ContactButton: NFBtn } = window.SogodyKit;
const { IMG: NF_IMG } = window.SogodyData;

function NotFoundApp() {
  return (
    <div className="layout-container">
      <NFHeader active="" />
      <NFModal />
      <main>
        <div className="not-found">
          <p className="title">ERROR</p>
          <img className="logo-404" src={NF_IMG.notFound} alt="404" />
          <p className="bordered-title">It seems the page you’re looking for has been optimized out of existence</p>
          <div className="nf-buttons">
            <a className="contact-us-link button-padding" href="index.html"><span className="c-us">Go to Homepage</span></a>
            <a className="contact-us-link button-padding secondary-contact-us" href="contact.html"><span className="c-us">Contact Us</span></a>
          </div>
        </div>
      </main>
      <NFFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<NotFoundApp />);
