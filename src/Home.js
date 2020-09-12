import React from "react";
import "./home.css";
import Product from "./Product";
import Productimages from "./Productimages"
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
<Carousel />
<Productimages />

  </div>
  </div>
  )
}

export default Home;
