import React from 'react';
import './Slider2.css';
import Image02 from "./image/aot.jpg"
import Image03 from "./image/databayo.jpg"
import Image04 from "./image/news.jpg"
export default function Slider2() {
  return (
    <div>
       <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image02} className="img3 d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image03} class="img3 d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image04} class=" img4 d-block " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
