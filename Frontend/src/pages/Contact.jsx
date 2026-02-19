import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    await axios.post("http://localhost:4001/contact", form);
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    toast.error("Failed to send message");
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-4 text-pink-500">
            Contact Us
          </h1>

          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Have questions or suggestions? We’d love to hear from you.
          </p>

          {/* Form Card */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md border outline-none
                             bg-white text-black border-gray-300
                             dark:bg-slate-700 dark:text-white dark:border-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border outline-none
                             bg-white text-black border-gray-300
                             dark:bg-slate-700 dark:text-white dark:border-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-2 rounded-md border outline-none resize-none
                             bg-white text-black border-gray-300
                             dark:bg-slate-700 dark:text-white dark:border-gray-600"
                ></textarea>
              </div>

              {/* Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition duration-200"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
