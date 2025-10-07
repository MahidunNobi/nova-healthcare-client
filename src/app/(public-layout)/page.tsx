import HeroSlider from "@/components/Home/HeroSlider";
import Searchbar from "@/components/Home/Searchbar";
import Services from "@/components/Home/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Searchbar />
      <HeroSlider />
      <Services />
    </div>
  );
};

export default HomePage;
