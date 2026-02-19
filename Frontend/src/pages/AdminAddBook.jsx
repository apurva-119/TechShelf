import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAddBook() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    price: "",
    category: "",
  });

  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!pdf || !image) {
    alert("Please select both PDF and cover image");
    return;
  }

  const data = new FormData();
  Object.keys(form).forEach((key) => data.append(key, form[key]));
  data.append("pdf", pdf);
  data.append("image", image);

  const token = JSON.parse(localStorage.getItem("Users"))?.token;

  try {
    console.log("Uploading book...");

    const res = await axios.post("http://localhost:4001/book/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response:", res.data);
    alert("Book added successfully ✅");

    // reset form
    setForm({ name: "", title: "", price: "", category: "" });
    setPdf(null);
    setImage(null);

  } catch (err) {
    console.error("Upload error:", err.response?.data || err.message);
    alert("Upload failed ❌ Check console.");
  }
};


  return (
  <div className="fixed inset-0 flex items-center justify-center z-50
  bg-black/40 dark:bg-black/60
  backdrop-blur-sm">

    {/* MODAL BOX */}
    <div className="bg-white text-black
  dark:bg-slate-900 dark:text-white
  w-[95%] md:w-[500px]
  rounded-xl shadow-xl p-6 relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-5 text-center">
        Add New Book
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          placeholder="Book Name"
          className="w-full px-3 py-2 rounded-md border outline-none
    bg-white text-black border-gray-300
    placeholder-gray-400
    dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          placeholder="Title / Description"
          className="w-full px-3 py-2 rounded-md border outline-none
    bg-white text-black border-gray-300
    placeholder-gray-400
    dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <input
          placeholder="Price"
          className="w-full px-3 py-2 rounded-md border outline-none
    bg-white text-black border-gray-300
    placeholder-gray-400
    dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
          onChange={(e)=>setForm({...form,price:e.target.value})}
        />

        <input
          placeholder="Category"
          className="w-full px-3 py-2 rounded-md border outline-none
    bg-white text-black border-gray-300
    placeholder-gray-400
    dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
          onChange={(e)=>setForm({...form,category:e.target.value})}
        />

      <div className="p-2 rounded border border-gray-300 bg-gray-50
                      dark:bg-slate-800 dark:border-gray-600">
        <input
          type="file"
          accept="application/pdf"
          className="w-full text-black dark:text-white file:mr-3 file:px-3 file:py-1
               file:rounded-md file:border-0
               file:bg-pink-500 file:text-white
               hover:file:bg-pink-600
               cursor-pointer"
          onChange={(e)=>setPdf(e.target.files[0])}
          required
        />
      </div>

 <div className="text-sm text-gray-500 mt-2">Upload Cover Image</div>

<div className="
  p-2 rounded border
  border-gray-300 bg-gray-50
  dark:bg-slate-800 dark:border-gray-600
">
  <input
    type="file"
    accept="image/*"
    className="w-full text-black dark:text-white file:mr-3 file:px-3 file:py-1
               file:rounded-md file:border-0
               file:bg-pink-500 file:text-white
               hover:file:bg-pink-600
               cursor-pointer"
    onChange={(e)=>setImage(e.target.files[0])}
    required
  />
  {/* IMAGE PREVIEW */}
{image && (
  <img
    src={URL.createObjectURL(image)}
    alt="preview"
    className="mt-3 h-40 object-contain rounded border dark:border-gray-600"
  />
)}
</div>

        <button className="btn btn-primary w-full mt-4">
          Upload Book
        </button>

      </form>
    </div>
  </div>
);
}

export default AdminAddBook;
