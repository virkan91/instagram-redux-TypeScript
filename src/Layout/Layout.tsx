import React from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="flex items-center justify-evenly">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/home/user">
            <li>User</li>
          </Link>
        </ul>
      </div>

      <Outlet />

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
