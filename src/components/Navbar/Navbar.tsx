import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className=" py-6 px-2 border-b border-gray-200">
      <div className="container mx-auto">
        {/* Left Container */}
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
