import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" py-6 px-2 border-b border-gray-200">
      <div className="container mx-auto">
        {/* Left Container */}
        <div className="flex items-center gap-6">
          <Logo />
          <div>
            <Link href="#" className="text-lg text-gray-800">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
