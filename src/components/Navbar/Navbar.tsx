import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import navLinks from "@/lib/NavLinks";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className=" py-6 px-2 border-b border-gray-200">
      <div className="container mx-auto">
        {/* Left Container */}
        <div className="flex items-center gap-12">
          <Logo />
          <div className="space-x-6">
            {navLinks.map((li) => (
              <Link
                key={li.id}
                href={li.link}
                className="text-lg text-gray-800"
              >
                {li.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Right Container */}
        <Button> Hello</Button>
      </div>
    </div>
  );
};

export default Navbar;
