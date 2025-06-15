"use client";

import React, { useState } from "react";
import Image from "next/image";

const imageGroups = [
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"],
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">Galeri Portfolio</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {imageGroups.map((group, i) => (
          <div key={i} className="grid gap-5">
            {group.map((src, j) => (
              <div key={j} onClick={() => setSelectedImage(src)} className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer">
                <Image src={src} alt={`Gallery ${i}-${j}`} width={500} height={300} className="rounded-xl w-full h-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative w-[90vw] h-[90vh] max-w-5xl">
            <Image src={selectedImage} alt="Full Preview" fill className="object-contain rounded-lg" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-3xl font-bold z-50">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
