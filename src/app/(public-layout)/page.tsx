import HeroSlider from "@/components/Home/HeroSlider";
import Searchbar from "@/components/Home/Searchbar";
import Services from "@/components/Home/Services";
import Stats from "@/components/Home/Stats";
import WhyNova from "@/components/Home/WhyNova";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Searchbar />
      <HeroSlider />
      <Services />
      <Stats />
      <WhyNova />
    </div>
  );
};

export default HomePage;
