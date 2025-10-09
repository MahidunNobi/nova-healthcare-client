import AvailableSpecialists from "@/components/Home/AvailableSpecialists";
import HeroSlider from "@/components/Home/HeroSlider";
import OnlineHealthcare from "@/components/Home/OnlineHealthcare";
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
      <OnlineHealthcare />
      <AvailableSpecialists />
    </div>
  );
};

export default HomePage;
