"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeView() {
  const navs = useRouter();
  const [image] = useState([
    "3d_printing_bg_man_holding_peice.webp",
    "3d_printing_bg.webp",
    "cnc_man_operating.webp",
    "cnc_man_standing.webp",
    "machining_bg.webp",
    "product_designing.webp",
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
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md animate_fade_in">
          <p className="mb-5">
            <span className="font-bold">AQM Parts </span> is a company that
            provide the best quality and service in the manufacturing industry.
            We can provide you with the best parts for your needs, and we can
            assure you that our parts are of the highest quality metal and
            materials.
          </p>
          <button
            onClick={() => {
              navs.push("/contact");
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
