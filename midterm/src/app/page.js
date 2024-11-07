"use client";

import Image from "next/image";
import { useState } from "react";

import Header from "../components/molecules/Header";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchImages() {
    if (imageData) {
      // Clear data if images are already loaded
      setImageData(null);
      setError(null);
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const randomPage = Math.floor(Math.random() * 50) + 1;
      const API_URL = `https://api.jikan.moe/v4/anime?page=${randomPage}&limit=5`;
      
      const response = await fetch(API_URL);
      const data = await response.json();

      setImageData(data.data);
    } catch (err) {
      setError("Failed to fetch images.");
    } finally {
      setLoading(false);
    }
  }

  const ImageListContainer = () => {
    if (loading) {
      return <section>Loading...</section>;
    }

    if (error) {
      return <section className="text-red-500">{error}</section>;
    }

    if (imageData && Array.isArray(imageData)) {
      return (
        <section className="section flex flex-col items-center desktop:bg-teal-100 gap-10 p-4 mobile: bg-red-100 sm: bg-green-100" >
          {imageData.map((image) => (
            <article key={image.mal_id} className="flex justify-items-center items-center gap-3">
              <img src={image.images.jpg.image_url} alt={image.title} width="200" />
              <div className="flex flex-col">
                <p className="desktop:text-sm mobile:text-xl">Title: {image.title}</p>
                <p>Duration: {image.duration}</p>
                <p>{image.synopsis}</p>
              </div>
              <hr />
            </article>
          ))}
        </section>
      );
    }

    return <section>No images fetched! ☹️</section>;
  };

  return (
    <div className="m-2">
      <Header 
        fetchImages={fetchImages}
        imageData={imageData}/>
      <ImageListContainer />
    </div>
  );
}
