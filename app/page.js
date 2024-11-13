import React from "react";
import SliderHome from "./components/home1/SliderHome";
import AboutHome from "./components/home1/AboutHome";
import WhatWeDo from "./components/home1/WhatWeDo";
import President from "./components/home1/President";
import BoardMembers from "./components/home1/BoardMembers";
import NewsHome from "./components/home1/NewsHome";
import TestimonialSlider from "./components/home1/TestimonialSlider";

function Home() {
  return (
    <>
      <SliderHome />
      <AboutHome />
      <WhatWeDo />
      <President />
      <BoardMembers />
      <NewsHome />
      <TestimonialSlider />
    </>
  );
}

export default Home;
