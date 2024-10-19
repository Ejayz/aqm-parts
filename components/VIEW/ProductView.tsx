"use client";
import ImageGallery from "react-image-gallery";
export default function Product() {
  const images = [
    {
      original: "/img/aqmproducts/Anchor.png",
      thumbnail: "/img/aqmproducts/Anchor.png",
    },
    {
      original: "/img/aqmproducts/DanielDefense.png",
      thumbnail: "/img/aqmproducts/DanielDefense.png",
    },
    {
      original: "/img/aqmproducts/Hooks.png",
      thumbnail: "/img/aqmproducts/Hooks.png",
    },
    {
      original: "/img/aqmproducts/HooksV2.png",
      thumbnail: "/img/aqmproducts/HooksV2.png",
    },
    {
      original: "/img/aqmproducts/HookV3.png",
      thumbnail: "/img/aqmproducts/HookV3.png",
    },
    {
      original: "/img/aqmproducts/MeatBall.png",
      thumbnail: "/img/aqmproducts/MeatBall.png",
    },
    {
      original: "/img/aqmproducts/TBH.png",
      thumbnail: "/img/aqmproducts/TBH.png",
    },
  ];

  return (
    <div className="hero bg-base-200 min-h-screen " id="productgallery">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-full p-4 rounded-lg shadow-2xl">
          <ImageGallery
            items={images}
            autoPlay={true}
            infinite={true}
            lazyLoad={true}
            showBullets={true}
            isRTL={false}
            thumbnailPosition={"bottom"}
            useTranslate3D={true}
            useBrowserFullscreen={true}
            showNav={false}
            showFullscreenButton={false}
          />
        </div>

        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Products Gallery
          </h1>
          <p className="py-6 text-center lg:text-left">
            We manufacture different product and we ensure that it is on best
            quality as possible to make you happy. Take a look some of the
            product that we already produced.
          </p>
          <button className="btn btn-primary md:mx-auto lg:ml-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
    // <div
    //   id="productgallery"
    //   className={`hero min-h-screen h-screen bg-cover bg-no-repeat bg-center flex flex-col `}
    // >
    //   <div>
    //     <ImageGallery
    //       items={images}
    //       autoPlay={true}
    //       infinite={true}
    //       lazyLoad={true}
    //       showBullets={true}
    //       isRTL={false}
    //       thumbnailPosition={"bottom"}
    //       useTranslate3D={true}
    //       useBrowserFullscreen={true}
    //       showNav={false}
    //       showFullscreenButton={false}
    //     />
    //   </div>
    // </div>
  );
}
