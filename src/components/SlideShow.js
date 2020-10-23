import React from "react";
import firstImage from "../images/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg";
import secondImage from "../images/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg";
import "./SlideShow.css";
function SlideShow() {
  return (
    <div className="slide__show">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={firstImage} alt="First slide" />
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={secondImage} alt="Second slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon fontIcon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon fontIcon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
