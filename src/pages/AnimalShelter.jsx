import React from "react";
import AnimalHeader from "../components/AnimalHeader";
import AnimalHero from "../components/AnimalHero";
import UpcomingEvents from "../components/UpcomingEvents";
import SuccessStories from "../components/SuccessStories";
import AnimalCategories from "../components/AnimalCategories";

const AnimalShelter = () => {
  return (
    <div>
      <AnimalHeader />
      <AnimalHero />
      <AnimalCategories />
      <SuccessStories />
      <UpcomingEvents />
    </div>
  );
};

export default AnimalShelter;
