import React from "react";
import { Input } from "../ui/input";
import Container from "../Container/Container";

const Searchbar = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        className="w-full p-6 text-lg! focus-visible:ring-0 focus-visible:border-cyan-600 my-2"
      />
    </Container>
  );
};

export default Searchbar;
