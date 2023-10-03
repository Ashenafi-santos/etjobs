import React from "react";
import Header from "../header/Header";
import Hero from "./Hero";
import Catagories from "./Catagories";
import How from "./How";
import Footer from "../Footer";
import Testemonial from "./Testemonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Catagories />
      <How />
      <Testemonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
