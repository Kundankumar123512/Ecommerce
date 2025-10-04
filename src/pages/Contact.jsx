import { useState } from "react";
import HeroSection from "./HeroSection";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <section className="text-white py-12 px-6 sm:px-16 min-h-screen flex flex-col md:flex-row gap-8 mt-20">
      {/* Left Side */}
      <div className="hidden md:block -mt-28">
        <div className="sticky top-24">
          <HeroSection />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 w-full bg-[#1e1e1e] p-8 rounded-2xl shadow-2xl overflow-y-auto">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <hr className="border-t-4 border-yellow-500 mb-8 w-16 rounded -mt-3" />

        {/* Info Box */}
        <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="flex flex-col gap-6 text-gray-300">
 {/* Call */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <FaPhoneAlt className="text-yellow-500 text-xl" />
             
                <span className="font-semibold">Call : </span>
                <span className="text-gray-300">+91 7070410564</span>
           
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <FaEnvelope className="text-yellow-500 text-xl" />
              
                <span className="font-semibold">Email : </span>
                <span className="text-gray-300">kumarkundan123512@gmail.com</span>
             
            </div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500 text-xl" />
             
                <span className="font-semibold">Location : </span>
                <span className="text-gray-300">MMDU Mullana 133207 Ambala, Haryana, India</span>
              
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="mb-2 font-semibold text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 font-semibold text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 font-semibold text-gray-300">Message</label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition hover:bg-yellow-600 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
