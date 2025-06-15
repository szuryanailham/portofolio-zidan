import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  const packages = [
    {
      name: "Bronze",
      price: "Rp 300.000",
      features: ["Durasi 40 menit", "All File Edit", "Google Drive Upload"],
    },
    {
      name: "Silver",
      price: "Rp 350.000",
      features: ["Durasi 1 jam", "All File Edit", "Google Drive Upload"],
    },
    {
      name: "Gold",
      price: "Rp 600.000",
      features: ["Durasi 3 jam", "All File Edit", "Cinematic Video", "Google Drive Upload"],
    },
  ];

  const phone = "62882006821924"; // Tanpa tanda +, format internasional

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">PRICE LIST WISUDA</h1>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => {
          const message = encodeURIComponent(`Halo, saya tertarik dengan paket wisuda *${pkg.name}*. Bisa dijelaskan lebih lanjut?`);
          const waLink = `https://wa.me/${phone}?text=${message}`;

          return (
            <div key={idx} className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
              <h2 className="text-xl font-semibold text-gray-800">{pkg.name}</h2>
              <p className="text-2xl font-bold text-gray-900 mt-2">{pkg.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                <FaWhatsapp size={18} />
                Pilih Paket
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
