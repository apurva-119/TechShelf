import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 h-[430px] bg-white dark:bg-slate-800 shadow-xl hover:scale-105 duration-200 dark:text-white dark:border flex flex-col overflow-hidden">

        {/* Image */}
        <img
          src={item.image}
          alt="Book"
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x400?text=No+Preview";
          }}
        />

        {/* Body */}
        <div className="card-body flex flex-col">

          {/* Text section */}
          <div>
            <h2 className="card-title text-sm md:text-base line-clamp-2">
              {item.name}
              <span className="badge badge-secondary ml-2">{item.category}</span>
            </h2>

            <p className="text-sm line-clamp-2">{item.title}</p>
          </div>

          {/* Bottom section */}
          <div className="card-actions justify-between items-center mt-auto">
            <div className="badge badge-outline">Rs.{item.price}</div>

            <button
              onClick={() =>
                item.pdfUrl &&
                window.open(
                  item.pdfUrl + "?response-content-disposition=inline",
                  "_blank"
                )
              }
              className="px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
            >
              Read Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
