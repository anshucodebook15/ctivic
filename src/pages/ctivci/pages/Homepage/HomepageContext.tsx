import { createContext, useContext } from "react";
import { useHomepageContent } from "../../../../api/apiHooks";

const HomepageContext = createContext({});

export const HomepageProvider = ({ children }: any) => {
  const { data} = useHomepageContent();
  const {
    title,
    about,
    awards_and_certificates,
    faq,
    hero_section,
    service,
    testimonials,
    whychooseus,
    apply_visa,
  } = data || {};
  console.log("AppWrapper Data", title);

  return (
    <HomepageContext.Provider
      value={{
        title,
        about,
        awards_and_certificates,
        faq,
        hero_section,
        service,
        testimonials,
        whychooseus,
        apply_visa,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};

// ✅ Custom hook (clean usage)
export const useHomepage = () => useContext(HomepageContext);
