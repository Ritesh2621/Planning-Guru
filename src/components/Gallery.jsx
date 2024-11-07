import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/5.jpg";
import img2 from "../assests/6.jpg";
import img3 from "../assests/hello.jpg";
import img4 from "../assests/nice.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        interval={1000}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          
        </div>
        <div>
          <img src={img2} alt="Item2" />
        
        </div>
        <div>
          <img src={img3} alt="Item3" />
         
        </div>
        <div>
          <img src={img4} alt="Item3" />
         
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
