"use client";

import Image from "next/image";
export default function ServiceView() {

  return (
    <div className=" bg-base-200 min-h-screen flex flex-col" id="services">
      <h1 className="text-5xl font-bold text-center mt-auto mb-12 p-4">Services</h1>
      <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto mb-auto gap-4">
        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/png/printer.png"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">3D Printing</h2>
            <p>
              We offer state of the art 3D printing for prototypes and/or parts
              production with different materials.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/png/bending.png"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto"
            />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title">Metal Bending</h2>
            <p>
              Our metal bending service allows for precise shaping and
              manipulation of various metals to meet your project
              specifications. We can handle intricate designs and complex bends,
              ensuring the final product meets your exact requirements with high
              precision and quality.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/png/cnc-machine.png"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CNC Machining</h2>
            <p>
              Including but not limited to; Metal signs, brackets and fixtures
              up to 1” thickness utilizing various sheet metal.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl lg:col-span-3 mx-auto">
          <figure className="px-10 pt-10">
            <Image
              src="/img/png/document.png"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Product Designing</h2>
            <p>
              We offer advance design help and ideas along the way. We can help
              make your dreams tangible reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
