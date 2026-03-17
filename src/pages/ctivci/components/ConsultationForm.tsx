import { useState } from "react";

const ConsultationForm = ({classprop} :any) => {
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
        <div className={`bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm  ${classprop}`}>
            <h3 className="text-xl font-semibold mb-2">
                Get Your Imigration Passport Now
            </h3>

            <p className="text-gray-600 text-sm mb-6">
                We at Nationwide Visas are determined to make your dream possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
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


export default ConsultationForm;