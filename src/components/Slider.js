import React from 'react';
import "./Slider.css";
import Image01 from "./image/denji.jpg";
import Image02 from "./image/tanjiro.jpg";
import Image03 from "./image/doror.jpeg";
import Image04 from "./image/hellparadise.jpe";
import Image05 from "./image/sukuna.jpg";
import Image06 from "./image/luffy.jpg";

const images = [
  { src: Image01, name: 'Chainsaw Man' },
  { src: Image02, name: 'Demon Slayer' },
  { src: Image03, name: 'Dororo' },
  { src: Image04, name: 'Hell Paradise' },
  { src: Image05, name: 'Jujutsu Kaisen' },
  { src: Image06, name: 'One Piece' }
];

export default function Slider() {
  return (
    <div className='slider-container'>
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img className="img1" src={image.src} alt="Girl in a jacket" width="350" height="350" />
          <span className="image-name">{image.name}</span>
        </div>
      ))}
    </div>
  );
}