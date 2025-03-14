"use client";
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Filters from "./Filters";
import Head from "next/head";

interface ShopLayoutProps {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  const [showFilters, setShowFilters] = useState(false);

  // Toggle filters visibility for mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen  bg-white text-gray-800">
      <Head>
        <title>Shop Coffee | The Barn Coffee Roasters</title>
        <meta
          name="description"
          content="Shop for specialty coffee beans at The Barn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={toggleFilters}
                className="w-full flex items-center justify-center gap-2 bg-amber-700 text-white py-3 px-4 rounded-md transition duration-300 hover:bg-amber-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar with Filters */}
              <div
                className={`lg:w-1/4 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                <SideMenu>
                  <Filters />
                </SideMenu>
              </div>

              {/* Main Content Area for Products */}
              <div className="lg:w-3/4">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
