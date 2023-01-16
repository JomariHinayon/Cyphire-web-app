import React from "react";

const Footer = () => {
  return (
    <section id="footer-section">
      <div className="container mx-auto">
        <hr className="border-[1px] mb-4 border-gray-300"/>
        {/* left side */}
        <div className="flex ">
          <h1 className="text-[1.3rem] font-semibold text-slate-400 mr-10">
            Cyphire
          </h1>
          <p className="p-1 text-sm font-semibold text-slate-400">
            Copyright © 2023 All rights reserved. Created by BSCS301 | GROUP 6
          </p>
        </div>
        {/* right side */}
        <div className="flex">
        
        </div>
      </div>
    </section>
  );
};

export default Footer;
