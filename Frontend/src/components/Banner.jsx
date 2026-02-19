import React from "react";
import banner from "../../public/Banner.png";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
function Banner() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [authUser] = useAuth();


  const handleSubscribe = async () => {
  if (!email) {
    setMessage("Please enter an email");
    return;
  }

  try {
    await axios.post("http://localhost:4001/subscriber/subscribe", { email });
    setMessage("Subscribed successfully 🎉");
    setEmail("");
  } catch (error) {
    if (error.response?.status === 409) {
      setMessage("You are already subscribed 🙂");
    } else {
      setMessage("Subscription failed ❌");
    }
  }
};

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white dark:bg-slate-900">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome to your{" "}
              <span className="text-pink-500">Tech learning hub!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
                Built for engineers, designed for success.
                Access the best books for DSA, OS, DBMS, CN, AI and more.
                Your journey to mastery starts here.!
            </p>
          {authUser?.user?.role === "admin" ? (
            <a
              href="/admin/add-book"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 duration-200 mt-6"
            >
              ➕ Add New Book
            </a>
          ) : (
            <>
              <div
                className="flex items-center gap-2 px-3 py-2 border rounded-md
                          bg-white text-black border-gray-300
                          dark:bg-slate-800 dark:text-white dark:border-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-600 dark:text-gray-300"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>

                <input
                  type="email"
                  placeholder="Enter your email for book updates"
                  className="grow outline-none bg-transparent text-black dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                className="btn mt-6 btn-secondary"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>

              {message && (
                <p className="mt-2 text-sm text-green-500">{message}</p>
              )}
            </>
          )}
          </div>

        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
