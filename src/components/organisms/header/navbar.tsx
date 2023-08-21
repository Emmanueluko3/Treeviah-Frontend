"use client";
import React, { useState } from "react";
import { MdSearch, MdMenu, MdNotifications } from "react-icons/md";
import "../../../styles/dashboard.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div>
        <section className="navgrid px-4 lg:px-14 py-[10px] shadow-md flex-row">
          <div
            className="flex flex-row justify-start align-center px-4 py-2 rounded w-[250px]
            lg:w-[300px] bg-purple-100"
          >
            <span className="text-[25px] text-gray-400">
              <MdSearch />
            </span>
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent focus:outline-none text-purple-900 w-[100%]"
            />
          </div>
          <div
            className={`lg:flex justify-end align-center gap-[20px] flex-row hidden buttonBox`}
          >
            <button className="px-4 py-2 rounded join-team w-[130px]">
              Join Game
            </button>
            <button className="px-4 py-2 rounded host-team w-[150px]">
              Host
            </button>
          </div>
          <button className="text-[25px] text-primary block lg:hidden ml-[1%] notification w-[100%]">
            <MdNotifications className="text-right float-right" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Navbar;