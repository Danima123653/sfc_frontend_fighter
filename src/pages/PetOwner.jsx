import React from "react";
import CarouselHome from "../components/CarouselHome";
import OurProducts from "../components/OurProducts";
import PetHeader from "../components/PetHeader";
import BestSelling from "../components/BestSelling";

const PetOwner = () => {
  return (
    <div>
      <PetHeader />
      <CarouselHome />
      <OurProducts />
      <BestSelling />
    </div>
  );
};

export default PetOwner;
