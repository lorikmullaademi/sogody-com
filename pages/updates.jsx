/* Sogody — Updates page (mirrors src/pages/updates.js): BannerWork hero +
   filterable updates grid + BookMeet CTA. */
const { Header: UHeader, Footer: UFooter, ContactModal: UModal } = window.SogodyShell;
const { BannerWork: UBanner, ContentGrid: UGrid, BookMeet: UBook } = window.SogodyPageKit;
const { UPDATES: U_LIST, IMG: U_IMG } = window.SogodyData;

function UpdatesApp() {
  return (
    <div className="layout-container">
      <UHeader active="updates" />
      <UModal />
      <main>
        <div className="up-final">
          <UBanner
            title="Stay Updated With Sogody"
            subtitle="Get the latest insights, trends, and innovations shaping the future of digital, AI, and e-commerce."
            bgImage={U_IMG.workBanner}
          />
          <div className="container-mainbanner updates2">
            <UGrid items={U_LIST} type="updates" linkBase="update.html" />
          </div>
          <UBook />
        </div>
      </main>
      <UFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UpdatesApp />);
