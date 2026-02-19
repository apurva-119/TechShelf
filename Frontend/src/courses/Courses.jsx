import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="min-h-screen  bg-white dark:bg-slate-900 text-black dark:text-white">
        <Course search={search} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
