import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <section id="footer-section" className="mt-10">
      <hr className="border-[1px] border-gray-300" />
      <div className="flex items-center  justify-around container mx-auto py-2">
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
        <div className="flex items-center gap-3">
          <SocialIcon url="https://facebook.com/" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://github.com/" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://instagram.com/" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://youtube.com/" style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
