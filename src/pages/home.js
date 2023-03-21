import React from "react";

import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Fact from "../components/Fact";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Features/>
      <Blogs />
      <Fact />
      <Contact />
      <Footer/>
    </main>
  );
};

export default Home;
