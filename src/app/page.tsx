"use client";
import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { Image as Image2 } from "@nextui-org/react";

export default function Home() {
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>([]);

  async function imageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String); // Extract base64 data without data URL prefix
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const handleBreedFind = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const base64String = await imageToBase64(file);
      // return false
      setPredictionResult([]);
      setIsLoadingActive(true);
      fetch("/api/breed-find", {
        method: "POST",
        body: JSON.stringify({ data: base64String }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          if (data.status == "success") {
            setPredictionResult([data]);
            setIsLoadingActive(false);
          } else {
            setPredictionResult([]);
            setIsLoadingActive(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setPredictionResult([]);
          setIsLoadingActive(false);
        });
    }
  };

  
  return (
    <>
      <HeroSection />

      <h2 className="text-center mt-20 text-3xl font-bold">
        Find Your Dog Breed here
      </h2>
      <div className="flex items-center justify-center w-full mx-auto sm:px-48 mt-6">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleBreedFind}
          />
        </label>
      </div>

      {isLoadingActive ? (
        <>
          <Spinner className="flex justify-center mt-20" size="lg" />
        </>
      ) : (
        <></>
      )}

      {predictionResult.length > 0 ? (
        <>
        <h2 className="text-center text-3xl mt-20">Result</h2>
          <div className="flex justify-center mt-4">
            <Image2
              width={500}
              height={400}
              alt="NextUI hero Image with delay"
              src={`https://app.requestly.io/delay/5000/${predictionResult[0].img}`}
            />
          </div>

          <h2 className="text-center mt-10 text-2xl">{predictionResult[0].result.labelName}</h2>
          <h4 className="text-center">{`${((predictionResult[0].result.confidence) * 100).toFixed(2)}% confident`}</h4>

        </>
      ) : (
        <></>
      )}
    </>
  );
}
