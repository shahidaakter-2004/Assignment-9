// src/pages/Home.js
import React from "react";
import Hero from "../components/Hero";
import PlantsList from "../components/PlantsList";
import PlantCareTips from "../components/PlantCareTips";
import ExpertsSection from "../components/ExpertsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <PlantsList />
      <PlantCareTips />
      <ExpertsSection />
    </div>
  );
};

export default Home;
