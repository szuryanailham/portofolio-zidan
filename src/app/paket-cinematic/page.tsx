import React from "react";

export default function Page() {
  const packages = [
    {
      name: "Paket ASI",
      price: "Rp 3.500.000",
      features: ["Durasi max 3–4 menit", "1–2 hari shooting", "Cinematic B-roll & Interview", "Voice-over + script (bisa dibantu)", "Musik + Sound FX", "2x revisi", "Format landscape & portrait"],
    },
    {
      name: "Paket PREMIUM",
      price: "Rp 5.000.000",
      features: [
        "Durasi max 5–7 menit",
        "2–3 hari shooting (multi lokasi)",
        "Storyboard & konsep by Naim_Visual",
        "Cinematic B-roll + Interview + Drone Footage",
        "Voice-over profesional",
        "Musik berlisensi",
        "3x revisi",
        "Full package: Landscape, portrait, teaser 30 detik",
      ],
    },
  ];

  const notes = ["Harga bisa berubah sesuai kebutuhan dan kompleksitas proyek.", "Biaya akomodasi ditanggung klien jika di luar Yogyakarta.", "Bisa request tambahan seperti subtitle, animasi logo, atau shooting event."];

  const whatsappLink = "https://wa.me/62882006821924?text=Halo%20saya%20tertarik%20dengan%20Paket%20Cinematic%20dari%20Naim_Visual.%20Boleh%20saya%20tanya%20lebih%20lanjut?";

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">PAKET CINEMATIC</h1>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {packages.map((pkg, idx) => (
          <div key={idx} className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{pkg.name}</h2>
            <p className="text-2xl font-bold text-gray-900 mt-2">{pkg.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {pkg.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block w-full px-4 py-2 rounded-full bg-black text-white text-center hover:bg-gray-800 transition">
              Saya Minat
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl mx-auto text-sm text-gray-600 space-y-2 px-2">
        <h3 className="font-semibold text-gray-800">Catatan:</h3>
        <ul className="list-disc list-inside">
          {notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
