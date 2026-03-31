import { BrowserRouter as Router, Route, Routes } from "react-router";

import { BlogPage, HomePage } from "../pages/ctivci";
import Err404 from "../pages/ctivci/pages/Err404";
import SingleBlogPage from "../pages/ctivci/pages/Blogpage/SingleBlogPage";
import Test from "../pages/Test";
import { useEffect } from "react";
import { goToLogin } from "../api/apiClient";

const MainRouter = () => {
  const ExternalRedirect = () => {
    useEffect(() => {
      window.location.href = goToLogin();
    }, []);
    return <p>Redirecting to Drupal...</p>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":slug" element={<SingleBlogPage />} />

          {/* Two-level slug */}
          <Route path=":category/:slug" element={<BlogPage />} />

          <Route path="test" element={<Test />} />
          <Route path="drupal-login" element={<ExternalRedirect />} />
        </Route>

        {/* <Route path="/blog" element={<BlogPage />} /> */}

        <Route path="*" element={<Err404 />} />
      </Routes>
    </Router>
  );
};

const AppRouter = () => {
  return <MainRouter />;
};

export default AppRouter;

{
  /* <Route path=":id" element={<Blog />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/b2b" element={<B2b2 />} />
<Route path="/directors" element={<Directors />} /> */
}
