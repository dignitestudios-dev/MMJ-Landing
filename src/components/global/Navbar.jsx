import React, { useState } from "react";
import { Logo } from "../../assets/export";
import NavLink from "./NavLink";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div
      className={`px-8 lg:px-24 py-6 flex items-center justify-center relative`}
    >
      <div className="mr-auto">
        <img src={Logo} alt="" className="w-[146px] h-[39px]" />
      </div>
      <div className="hidden lg:flex items-center gap-x-16 mr-auto">
        <NavLink label={"Home"} id={"/"} />
        <NavLink label={"Introduction"} id={"#introduction"} />
        <NavLink label={"Features"} id={"#features"} />
        <NavLink label={"Contact Us"} id={"#contact"} />
      </div>
      <button className="text-black text-2xl lg:hidden" onClick={()=> setOpenNav(!openNav)}>
        <TbMenuDeep />
      </button>
      <div className={`bg-transparent lg-hidden w-full h-screen absolute top-0 right-0 ${openNav ? 'translate-x-0':'translate-x-full'} transition-all duration-500`} onClick={()=> setOpenNav(!openNav)}>
        <div className="bg-white h-auto w-48 absolute top-16 rounded-2xl right-4 float-end p-4 shadow-2xl">
          
          <div className="w-full flex flex-col gap-y-4 py-2 ps-1">
            <NavLink label={"Home"} id={"/"} />
            <NavLink label={"Introduction"} id={"#introduction"} />
            <NavLink label={"Features"} id={"#features"} />
            <NavLink label={"Contact Us"} id={"#contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
