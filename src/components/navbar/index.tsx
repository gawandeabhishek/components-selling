import React from "react";
import Links from "./links";
import ToggleButton from "./theme/toggle-btn";
import NavUser from "./nav-user";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sm:px-4 px-2 py-2 gap-2">
      <NavUser />
      <Links />
      <ToggleButton />
    </nav>
  );
};

export default Navbar;
