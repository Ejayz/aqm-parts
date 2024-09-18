"use client";

import { useState } from "react";

export default function HomeView() {
  const [image] = useState([
    "3d_printing_bg_man_holding_peice.jpg",
    "3d_printing_bg.jpg",
    "cnc_man_operating.jpg",
    "cnc_man_standing.jpg",
    "machining_bg.jpg",
    "product_designing.jpg",
    "product_idea_designing.jpg",
  ]);

  return (
    <div
      className={`hero min-h-screen bg-cover bg-center`}
      style={{
        backgroundImage: `url(/img/assets/${
          image[Math.floor(Math.random() * image.length)]
        })`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <p className="mb-5">
            <span className="font-bold">AQM Parts </span> is a company that
            provide the best quality and service in the manufacturing industry.
            We can provide you with the best parts for your needs, and we can
            assure you that our parts are of the highest quality metal and
            materials.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
