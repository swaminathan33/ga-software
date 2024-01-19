import React, { useEffect, useState } from "react";
import Image1 from "../Components/image1.jpg";
import Image2 from "../Components/image2.jpg";
import Image3 from "../Components/image3.jpg";

const Slider = () => {
  const images = [Image1, Image2, Image3];
  const length = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex(currentIndex > length - 2 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      nextImage();
    }, 10000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              className="slide"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            />
          );
        })}
      </div>
      <div className="buttons">
        <div className="prev">
          <button onClick={prevImage}>prev</button>
        </div>
        <div className="next">
          <button onClick={nextImage}>next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
