"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
export default function IndexHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.document ? Aos.init() : null;
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            data-aot={"zoom-out"}
            data-aos-anchor-placement="center-center"
            className="navbar bg-white w-full shadow-md  glass"
          >
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Image
                src="/img/logo/aqm_logo_double.png"
                className=""
                alt="logo"
                width={200}
                height={100}
              />
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-base">
                {/* Navbar menu content here */}
                <li>
                  <Link href="/"> Home </Link>
                </li>
                <li>
                  <Link href="/about"> About </Link>
                </li>
                <li>
                  <Link href="/contact"> Contact </Link>
                </li>
                <li>
                  <Link href="/services"> Services </Link>
                </li>
                <li>
                  <Link href="/productgallery"> Product Gallery </Link>
                </li>
              </ul>
            </div>
          </div>
          <Toaster position="top-right" reverseOrder={false} />

          {/* Page content here */}
          {children}
          <Footer />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/about"> About </Link>
            </li>
            <li>
              <Link href="/contact"> Contact </Link>
            </li>
            <li>
              <Link href="/services"> Services </Link>
            </li>
            <li>
              <Link href="/productgallery"> Product Gallery </Link>
            </li>
          </ul>
        </div>
      </div>
    </QueryClientProvider>
  );
}
