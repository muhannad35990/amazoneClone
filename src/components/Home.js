import React from "react";
import Product from "./Product";
import SlideShow from "./SlideShow";
import "./Home.css";
import image1 from "../images/71vvXGmdKWL._AC_SL1500_.jpg";
import image2 from "../images/71K7Q4FpguL._AC_SL1500_.jpg";
import image3 from "../images/81g-euOr3+L._AC_SL1500_.jpg";
import image4 from "../images/early-Prime-Day-deals.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <SlideShow />

        <div className="home__row">
          <Product
            title="Wyze Cam 1080p HD Indoor Wireless 
            Smart Home Camera with Night Vision, 2-Way
             Audio, Works with Alexa & the Google Assistant "
            image={image2}
            rating={3}
            price={150}
            key={1}
            id={1}
          />
          <Product
            title="Electronics"
            image={image3}
            rating={4}
            price={15}
            key={2}
            id={2}
          />
        </div>
        <div className="home__row">
          <Product
            title="a-js a-audio a-video a-canvas a-svg
             a-drag-drop a-geolocation a-history a-webworker"
            image={image1}
            price={100}
            key={3}
            id={3}
          />
          <Product
            title="canvas a-svg   a-history a-webworker a-autofocus
             a-input-placeholder rder-radius"
            image={image4}
            rating={5}
            price={10}
            key={4}
            id={4}
          />
          <Product
            title="canvas a-svg a-drag-drop a-geolocation  "
            image={image3}
            rating={1}
            price={10}
            key={5}
            id={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Electronics"
            image={image3}
            rating={4}
            price={150}
            key={6}
            id={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
