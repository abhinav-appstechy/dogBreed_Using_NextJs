import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <section className="relative w-full mt-20">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-emerald-500 opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40"></div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-44 left-0 hidden dark:flex"
          >
            <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
            <div className="lg:py-6">
              <div className="text-center lg:text-left">
                <h1 className="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  Unleash the Joy of <br /> Finding Your Perfect{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-[#8cd66a]">
                  Dog
                  </span>
                {" "}Breed
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-8 text-center lg:text-left mx-auto max-w-xl">
              Welcome to DogBreed Finder, your go-to resource for discovering the ideal dog breed that matches your lifestyle and preferences. With our comprehensive database, you can explore various breeds, learn about their characteristics, and find the perfect furry friend to join your family.
              </p>
              <div className="flex items-center gap-4 mt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <Link
                  href="/aboutus"
                  className="px-7 relative text-white h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95"
                >
                  <span className="relative text-white"> Join Us</span>
                </Link>

              </div>

            </div>
            <div className="lg:h-full hidden md:flex">
              <div className="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-emerald-500 to-pink-300 dark:from-[#570cac] dark:to-emerald-500 blur-2xl"></div>
                <div className="absolute w-3/5 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl bg-whitee dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/hero_dog1.jpg"
                    alt="In studio"
                    width={900}
                    height={900}
                    loading="lazy"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -translate-y-1/2 top-1/2 h-[calc(80%-2rem)] w-[calc(40%-20px)] p-1 rounded-3xl bg-white dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/hero_dog2.jpg"
                    alt="Happy in studio"
                    width={900}
                    height={900}
                    loading="lazy"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
