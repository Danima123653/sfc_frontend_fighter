import React, { useState, useEffect } from "react";
import "../assets/css/carousel.css";
import PetCareSlider from "../assets/images/PetCareSlider.jpg";
import Vet from "../assets/images/Vet.jpg";
import pet from "../assets/images/pet.jpg";

const CarouselHome = () => {
  const images = [PetCareSlider, Vet, pet];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          {index === current && <img src={img} alt={`slide-${index}`} />}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="prev"
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
      >
        ❮
      </button>
      <button
        className="next"
        onClick={() =>
          setCurrent(current === images.length - 1 ? 0 : current + 1)
        }
      >
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselHome;
