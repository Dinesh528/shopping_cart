import React from "react";
import Rice1 from "../images/rice1.jpg";
import Rice2 from "../images/rice2.jpg";
import Rice3 from "../images/rice3.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Rice1} className="d-block w-100 " alt="..." height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-3">South Indian Rice</h5>
              <p>Rich in nutrients and best in quality</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Rice2} className="d-block w-100" alt="..." height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-3">Grains</h5>
              <p> We Provide Multiple type of Grains</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Rice3} className="d-block w-100" alt="..." height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-3">Brown Rice</h5>
              <p>Pile of Brown rice with a wooden spoon close up</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  );
}

export default Home;
