import { useState } from "react";
import "./BlogPage.css";
import { useAssets } from "../../../../hooks/useAssets";
import Layout from "../../layouts/layout";
import SidebarWidget from "../../components/SidebarWidget";
import { usePageContent } from "../../../../api/apiHooks";
import { useParams } from "react-router";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-10 h-10 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin" />

                {/* Optional Text */}
                <p className="text-sm text-gray-600 font-medium">Loading...</p>
            </div>
        </div>
    );
};

const ConsultationForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        agree: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm w-full">
            <h3 className="text-xl leading-[1.2] font-semibold mb-4">
                Get Your Imigration Passport Now
            </h3>

            {/* <p className="text-gray-600 text-sm mb-6">
        We at Nationwide Visas are determined to make your dream possible.
      </p> */}

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="IND (+91)"
                    className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={handleChange}
                />

                <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="agree" onChange={handleChange} />I agree
                    to <span className="underline">terms & conditions</span>
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

const SingleBlogPage = () => {
    const { images } = useAssets();
    const { slug } = useParams();

    // const { data, isLoading, error } = usePageContent("/quebec-experience-class");
    const { data, isLoading, error } = usePageContent(
        slug || "",
    );

    // const [pageData, setPageData] = useState<any>({
    //   title: data?.data?.attributes?.title || "",
    //   body: data?.data?.attributes?.body?.value || "",
    //   tag: data?.data?.attributes?.tag || ""
    // });

    console.log("Blog Data", data);
    // console.log("Slug", slug, category);

    if (isLoading) return <Loader />;
    if (error) return <p>Error loading page content.</p>;

    return (
        <Layout>
            <div className="py-14"></div>
            <div className="w-full ">
                {/* HERO */}
                <section className="contain bg-primary-dark text-white overflow-hidden">
                    <div className=" grid md:grid-cols-2 items-center">
                        {/* LEFT TEXT */}
                        <div className="px-8 py-14 md:py-14">
                            <h1 className="text-3xl md:text-3xl font-semibold mb-2">
                                {data?.data?.attributes?.field_cat || "Add Cat"}
                            </h1>

                            <p className="text-sm leading-6 opacity-90 text-white">
                                Home &gt; Canada &gt; Occupation In Demand List
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="h-[200px] md:h-[300px] lg:h-[200px] md:mr-[-50px]">
                            <img
                                src={images.bannerpair}
                                alt="students"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="bg-white py-8">
                    <div className="contain grid lg:grid-cols-3 gap-12">
                        {/* LEFT CONTENT */}
                        <div className=" max-w-3xl lg:col-span-2 text-[17px] font-body px-8">
                            <h2 className="text-3xl font-heading md:text-2xl font-semibold mb-6">
                                {data?.data?.attributes?.title}
                            </h2>

                            {/* <p className="text-gray-700 leading-relaxed">
                Looking for Licensed Canadian Immigration Consultants? RightWay
                Canada Immigration Services is a Top Rated Canadian immigration
                firm with an immigration office located in Toronto, Ontario.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Our experienced team of{" "}
                <span className="text-red-600 underline">
                  immigration professionals
                </span>{" "}
                along with highly knowledgeable staff, is here to assist you
                with Express Entry & PR Applications, OINP & Business
                Immigration, Family &{" "}
                <span className="text-red-600 underline">
                  Spousal Sponsorship
                </span>
                , Work & Study Permits, Visitor & Super Visas, Canadian
                Citizenship & Status Extensions.
              </p> */}

                            <div
                                className="ck-content"
                                dangerouslySetInnerHTML={{
                                    __html: data?.data?.attributes?.body?.value,
                                }}
                            />
                        </div>

                        {/* RIGHT FORM */}
                        <div className="lg:sticky lg:top-24 h-fit">
                            <SidebarWidget />
                            <ConsultationForm />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SingleBlogPage;
