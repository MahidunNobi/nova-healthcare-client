import React from "react";
import { Input } from "../ui/input";

const Searchbar = () => {
  return (
    <div className="px-2">
      <div className="container mx-auto">
        <Input
          type="text"
          placeholder="Search"
          className="w-full p-6 text-lg! focus-visible:ring-0 focus-visible:border-cyan-600 my-2"
        />
      </div>
    </div>
  );
};

export default Searchbar;
