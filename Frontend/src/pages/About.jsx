import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white pt-32 px-6 pb-16">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">
            About Our Platform
          </h1>

          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            Empowering B.Tech students with the right learning resources to succeed in their engineering journey.
          </p>

          {/* Section 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📚 What We Offer</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our platform provides subject-wise engineering books, study materials, and reference resources for
              core B.Tech subjects such as Data Structures, Operating Systems, DBMS, Computer Networks, AI, ML,
              Web Development, and more.  
              Whether you are preparing for exams, interviews, or GATE, we aim to support your learning at every step.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To make quality technical education accessible, organized, and easy to explore for every engineering student.
              We believe that the right resources at the right time can transform learning into success.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">💡 Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Subject-wise categorized engineering books</li>
              <li>Free and premium learning resources</li>
              <li>Simple and user-friendly interface</li>
              <li>Secure login system</li>
              <li>Fast access to study materials</li>
            </ul>
          </div>

          {/* Footer note */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Built with ❤️ using MERN Stack to support engineering students.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
