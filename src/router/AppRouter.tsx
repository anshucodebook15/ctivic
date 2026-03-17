import { BrowserRouter as Router, Route, Routes } from "react-router";

import { BlogPage, HomePage } from "../pages/ctivci";
import Err404 from "../pages/ctivci/pages/Err404";

const MainRouter = () => {
  return (
    <Router>
      {/* <ScrollToHash /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/*" element={<Err404 />} />




        {/* <Route path=":id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/b2b" element={<B2b2 />} />
        <Route path="/directors" element={<Directors />} /> */}
      </Routes>
    </Router>
  );
};

const AppRouter = () => {
  return <MainRouter />;
};

export default AppRouter;
