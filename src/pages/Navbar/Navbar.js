import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
        <Outlet />
        <div class="w-full navbar bg-base-300 lg:hidden absolute top-0">
          <div class="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">Navbar Title</div>
          <div class="flex-none hidden md:block ">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="drawer-side ">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="bg-[#E8BD0D] menu p-4 overflow-y-auto w-60 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
