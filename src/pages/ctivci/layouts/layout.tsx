// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Header2 from "../components/Header2";

import Footer2 from "../components/Footer2";
import Header3 from "../components/Header3";
import TopBar from "../components/Topbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="site-theme">
        <TopBar />
        <Header3 />
        {children}

        <div className="py-10"></div>
        <Footer2 />
      </div>
    </>
  );
};

export default Layout;
