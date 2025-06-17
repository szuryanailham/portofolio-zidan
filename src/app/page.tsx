import Image from "next/image";
import Link from "next/link";
import { images } from "@/app/libs/images";
import { FaTags, FaRegImages, FaGift, FaFilm, FaSlidersH, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      {/* Foto Profil */}
      <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image src={images.cover} alt="Foto Portfolio" fill className="object-cover" />
      </div>

      {/* Typography Profil */}
      <div className="text-center space-y-3 mt-4">
        <h1 className="text-3xl font-bold text-gray-800">Zidan Naim</h1>
        <p className="text-sm text-gray-500">Photographer & Videography</p>
        <p className="text-base text-gray-600 max-w-xs mx-auto">Fotografer dan videografer profesional yang berfokus pada penciptaan narasi visual yang kuat dan bermakna.</p>

        {/* Sosmed */}
        <div className="flex justify-center items-center gap-4 mt-2">
          <a href="https://wa.me/62882006821924" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://instagram.com/naimdzulfikri" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@naimdzulfikri" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>

      {/* Full Width Button Menu dengan Link */}
      <div className="flex flex-col w-full max-w-sm mt-3 space-y-3 px-6">
        <Link href="/portofolio" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition">
          <FaRegImages size={18} /> Lihat Portfolio
        </Link>
        <Link href="/paket-harga" className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-400 rounded-full text-gray-800 hover:bg-gray-100 transition">
          <FaTags size={18} /> Paket Harga
        </Link>
        <a
          href="https://drive.google.com/drive/mobile/folders/1MHpHzx2g7o0TzlUZkoAidKRsRJPK7dZx?fbclid=PAQ0xDSwK7tedleHRuA2FlbQIxMQABp8nKAHUNLwcn3Gbo2vUqaqTIm1jlkseM21Tl-0-jkooOuFqNDnzWp6vK58ZV_aem_BFS0qkWYWVs_KBGkTJXzNw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition"
        >
          <FaGift size={18} /> Free Preset New
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/drive/mobile/folders/1xGByMnucKEORwjmK077dq5VXNaV3XoTC?usp=sharing&fbclid=PAQ0xDSwK7tydleHRuA2FlbQIxMQABp9XeixIKxi0-K2pRCvh3t1XuLrzCHNg-sn7C_sMX9mi3Mx5wUMkxjw0ytf_M_aem_-133QwK97mfbXxV5T1HB5w"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition"
        >
          <FaFilm size={18} /> Free Footage
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://lynk.id/naimdzulfikri?fbclid=PAQ0xDSwK7t8VleHRuA2FlbQIxMQABpzm4XibWXceekGj95cuE4t3KGpX5HyLFZ5rEOEqJOj1qtsY17rS3SHxvghIn_aem_aXDFoCrpcQQUfP_0e3rwsg"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition"
        >
          <FaSlidersH size={18} /> Luts Cinematic
        </a>
        {/* <Link
          href="/reservasi"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition"
        >
          <FaCalendarAlt size={18} /> Reservasi Sekarang
        </Link> */}
        {/* <Link href="/kritik-saran" className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-400 rounded-full text-gray-800 hover:bg-gray-100 transition">
          <FaCommentDots size={18} /> Kritik & Saran
        </Link> */}
      </div>
    </div>
  );
}
