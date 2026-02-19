import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ForgotPassword({ close }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter email first");
      return;
    }

    try {
      await axios.post("http://localhost:4001/user/forgot-password", { email });
      toast.success("Reset link sent to your email 📩");
      close(); // close modal after success
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <dialog id="forgot_modal" className="modal modal-open">
      <div className="modal-box bg-white text-black dark:bg-slate-800 dark:text-white">

        {/* CLOSE */}
        <button
          onClick={close}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Forgot Password</h3>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full px-3 py-2 border rounded-md outline-none
                       bg-white text-black border-gray-300
                       dark:bg-slate-700 dark:text-white dark:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-primary w-full">
            Send Reset Link
          </button>

        </form>
      </div>
    </dialog>
  );
}

export default ForgotPassword;
