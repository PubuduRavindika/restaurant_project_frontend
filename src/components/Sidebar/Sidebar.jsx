import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeLink =
    "flex items-center gap-3 border-solid border-[1px] border-[#a9a9a9] border-r-0 p-2 cursor-pointer rounded-tl-md rounded-bl-md bg-[#fff0ed] border-[tomato]";
  const normalLink =
    "flex items-center gap-3 border-solid border-[1px] border-[#a9a9a9] border-r-0 p-2 cursor-pointer rounded-tl-md rounded-bl-md";

  return (
    <div className="w-[18%] min-h-[100vh] border-solid border-[1.5px] border-[#a9a9a9] border-t-0 text-xs">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <img src={assets.add_icon} alt="" />
          <p className="sm:hidden">Add Items</p>
        </NavLink>

        <NavLink
          to={"/list"}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <img src={assets.list_icon} alt="" />
          <p className="sm:hidden">List Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
