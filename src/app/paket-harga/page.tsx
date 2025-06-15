import React from "react";
import Link from "next/link";

export default function Page() {
  const menus = [
    {
      name: "Paket Wisuda",
      description: "Pilih paket dokumentasi momen wisudamu dengan hasil terbaik.",
      href: "/paket-wisuda",
      bg: "bg-gradient-to-r from-pink-500 to-yellow-500",
    },
    {
      name: "Paket Cinematic",
      description: "Video cinematic untuk kebutuhan promosi, profile brand, atau event.",
      href: "/paket-cinematic",
      bg: "bg-gradient-to-r from-purple-600 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">Pilih Jenis Paket</h1>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
        {menus.map((menu, idx) => (
          <Link key={idx} href={menu.href} className={`${menu.bg} text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col gap-3`}>
            <h2 className="text-2xl font-semibold">{menu.name}</h2>
            <p className="text-sm opacity-90">{menu.description}</p>
            <span className="mt-auto text-sm font-medium underline">Lihat Detail →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
