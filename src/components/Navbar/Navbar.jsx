import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <h1 className="text-lg text-[tomato] font-bold">Restaurents Admin</h1>
      <img className="w-10" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
