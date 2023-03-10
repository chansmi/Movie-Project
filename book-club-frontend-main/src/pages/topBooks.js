import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figures from '../components/figures';
import myImage from "./NoPosterAvailable-crop.jpeg"
import image1 from "../pages/Harry Potter 7.webp"
import image2 from "../pages/dune.webp"
import image3 from "../pages/pride and prejudice.webp"
import image4 from "../pages/The Affair.webp"
import image5 from "../pages/enders-game.webp"
import image6 from "../pages/the-lord-of-the-rings-book-cover.webp"
import image7 from "../pages/outliers4.webp"


import './topBooks.css'


function TopBooks() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //const image1 = "/images/NoPosterAvailable-crop.jpeg"

  return (
    <div >
      <div className="center">
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <img
        width={2000}
        height={1000}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <img
            width={2000}
            height={1000}
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={2000}
            height={1000}
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <div class="grid-container">
        <div  class="grid-item"><Figures image={image4}  title={"Best Action"} /></div>
        <div class="grid-item"><Figures image={image5} title={"Best Sci-fi"} /></div>
        <div class="grid-item"><Figures image={image6} title={"Best fiction"} /></div>
        <div class="grid-item"><Figures image={image7} title={"Best Non-fiction"} /></div>
      </div>
    </div>
    
  );
}

export default TopBooks