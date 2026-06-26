/* Sogody — Work page (mirrors src/pages/work.js): BannerWork hero +
   filterable case-study grid + BookMeet CTA. */
const { Header: WHeader, Footer: WFooter, ContactModal: WModal } = window.SogodyShell;
const { BannerWork: WBanner, ContentGrid: WGrid, BookMeet: WBook } = window.SogodyPageKit;
const { CASE_STUDIES: W_CS, IMG: W_IMG } = window.SogodyData;

function WorkApp() {
  return (
    <div className="layout-container">
      <WHeader active="work" />
      <WModal />
      <main>
        <div className="work">
          <WBanner
            title="Our Work: Innovation in Action"
            subtitle="We partner with global innovators to deliver cutting-edge digital solutions. Explore our diverse projects that showcase our commitment to excellence."
            bgImage={W_IMG.workBanner}
          />
          <div className="container-mainbanner updates2">
            <WGrid items={W_CS} type="cs" linkBase="case-study.html" />
          </div>
          <WBook />
        </div>
      </main>
      <WFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<WorkApp />);
