import React, { useState } from "react";

import { MenuIcon, XIcon, PhoneIcon } from "@heroicons/react/outline";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-14 p-1" src={Logo} alt="/" />
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {/* <button className="border-none bg-transparent text-black mr-4">
            SignIn
          </button> */}
          <button>
            <div className="flex ">
              <div className="pl-4 py-3">
                <PhoneIcon className="w-5" />
              </div>
              <div className="py-2 pl-2 pr-4">9860675191</div>
            </div>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <div className="flex flex-col my-4">
        <button>
            <div className="flex justify-center">
              <div className="pl-4 py-3">
                <PhoneIcon className="w-5" />
              </div>
              <div className="py-2 pl-2 pr-4">9860675191</div>
            </div>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
