// import PopupModal from "../../components/PopupModal";
import Layout from "../../layouts/layout";
import About from "./sections/About";
import ApplyVisa from "./sections/ApplyVisa";
import AwardsCertificates from "./sections/AwardsCertificates";
import FAQ from "./sections/FAQ";
import FormMigrate from "./sections/FormMigrate";
// import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonials";
import WhyChoose from "./sections/WhyChoose";

const HomePage = () => {
  return (
    <>
      <Layout>
        {/* <PopupModal /> */}
        <Hero2 />
        <Services />
        <About />
        <ApplyVisa />
        <WhyChoose />
        <FormMigrate />
        <Testimonial />
        <AwardsCertificates />
        <FAQ />
      </Layout>
    </>
  );
};

export default HomePage;
