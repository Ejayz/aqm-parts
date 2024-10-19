"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
export default function TeamView() {
  return (
    <div className=" bg-base-100 min-h-screen flex flex-col" id="team">
      <h1 className="text-5xl font-bold text-center mt-auto mb-12">
        Meet Our Team
      </h1>
      <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-auto gap-4">
        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/joe_michielson.jpg"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Joe Michielson</h2>
            <h2 className="text-xl font-bold">President</h2>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/amanda_michielson.jpg"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Amanda Michielson</h2>
            <h2 className="text-xl font-bold">Co-Founder</h2>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/anthony_legno.jpg"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Anthony Legno</h2>
            <h2 className="text-xl font-bold">Head Machinist</h2>
          </div>
        </div>

        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/alianne_legno.jpg"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Alianne Legno</h2>
            <h2 className="text-xl font-bold">Head Programmer</h2>
          </div>
        </div>


        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/kristen_smeatin.jpg"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kristen Smeatin</h2>
            <h2 className="text-xl font-bold">Social Media Manager</h2>
          </div>
        </div>


        <div className="card bg-base-100 w-96 glass shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/img/team/the_people_design.png"
              alt="3d-printer"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">The People Design</h2>
            <h2 className="text-xl font-bold">IT Services</h2>
          </div>
        </div>

      </div>
    </div>
  );
}
