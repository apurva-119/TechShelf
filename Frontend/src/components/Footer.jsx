import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        
       <h3 className="font-bold text-lg">TechShelf</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">
    Curated books for engineers — DSA, OS, DBMS, CN & more.
  </p>
        <aside>
          <p>© {new Date().getFullYear()} TechShelf. Built for Engineers.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
