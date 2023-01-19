import React from "react";
import DefaultProfileImage from "../../assets/user-default.png";

const question = () => {
  return (
    <div className="p-2 grid grid-rows-2 grid-flow-col gap-2 w-[50rem] relative mb-5">
      <img src={DefaultProfileImage} className="w-16 row-span-2" />
      <div>
        <h1 className="text-2xl">@jomari</h1>
        <h6>Jomari Hinayon</h6>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        fugit magni illum fuga nostrum labore iste, odit ducimus aliquam soluta
        commodi beatae provident, asperiores, et id nobis accusamus nulla totam.
      </p>
      <button className="bg-orange-600 absolute right-2 top-5 p-2 text-white">Answer</button>
    </div>
  );
};

export default question;
