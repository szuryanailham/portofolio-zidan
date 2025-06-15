"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ReservasiSchema = z.object({
  name: z.string().min(2, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "No HP tidak valid"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  time: z.string().min(1, "Jam wajib diisi"),
  packageName: z.string().min(1, "Pilih paket"),
  location: z.string().min(1, "Lokasi wajib diisi"),
  note: z.string().optional(),
});

type ReservasiFormData = z.infer<typeof ReservasiSchema>;

export default function ReservasiForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservasiFormData>({
    resolver: zodResolver(ReservasiSchema),
  });

  const onSubmit = async (data: ReservasiFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/reservasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        alert("Reservasi gagal dikirim.");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto px-6 py-8 bg-white rounded-2xl shadow-xl border border-gray-100 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Formulir Reservasi</h2>
        <p className="text-gray-500 text-sm">Isi formulir di bawah ini untuk memesan layanan kami</p>
      </div>

      {success && <p className="text-green-600 text-sm text-center bg-green-50 py-2 rounded-md">✅ Reservasi berhasil dikirim!</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
        <input {...register("name")} className="input" placeholder="Nama lengkap kamu" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input {...register("email")} className="input" placeholder="example@email.com" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">No HP / WhatsApp</label>
        <input {...register("phone")} className="input" placeholder="08xxxxxxxxxx" />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pemotretan</label>
          <input type="date" {...register("date")} className="input" />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Jam</label>
          <input type="time" {...register("time")} className="input" />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
          <p className="text-xs text-gray-400 mt-1">
            08:00 (AM) = Pagi hingga siang,
            <br />
            13:00 (PM) = Siang hingga malam
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Paket</label>
        <select {...register("packageName")} className="input">
          <option value="">-- Pilih Paket --</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
        {errors.packageName && <p className="text-red-500 text-sm mt-1">{errors.packageName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Pemotretan</label>
        <input {...register("location")} className="input" placeholder="Contoh: Taman Sari, Yogyakarta" />
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
        <textarea {...register("note")} rows={3} className="input" placeholder="Contoh: Tolong bawa lensa portrait" />
      </div>

      <button type="submit" disabled={loading} className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition font-semibold text-sm tracking-wide">
        {loading ? "Mengirim..." : "Kirim Reservasi"}
      </button>
    </form>
  );
}
