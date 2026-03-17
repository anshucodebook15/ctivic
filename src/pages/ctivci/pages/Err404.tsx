import Layout from "../layouts/layout";

const Err404 = () => {
  return (
    <>
      <Layout>
        <div className="py-20">
          <div className="flex items-center justify-center">
            <h1 className="font-heading">404 - Page Not Found</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Err404;
