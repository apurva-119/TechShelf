import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:4001/user/reset-password/${token}`,
        { password }
      );

      alert("Password reset successful ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleReset}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Reset Password</h2>

        <input
          type="password"
          placeholder="Enter new password"
          className="w-full px-3 py-2 border rounded-md dark:bg-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-pink-500 text-white py-2 rounded-md">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
