import React from "react";
import Banner from "../components/Banner";
import Blogpage from "../components/Blogpage";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Banner />

      <div className="max-w-5xl mx-auto">
        <Blogpage />
      </div>
    </div>
  );
}

export default Home;
