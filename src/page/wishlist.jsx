import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/sidebar";
import { Plus, Search } from "lucide-react";
import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [isAddWishlistOpen, setIsAddWishlistOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const [formValues, setFormValues] = useState({
    name: "",
    cost: "",
    saving: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.cost) newErrors.cost = "Biaya wajib diisi";
    else if (isNaN(formValues.cost))
      newErrors.cost = "Biaya hanya berupa angka";
    if (!formValues.saving) newErrors.saving = "Rencana tabungan wajib diisi";
    else if (isNaN(formValues.saving))
      newErrors.cost = "Biaya hanya berupa angka";
    if (!formValues.name) newErrors.name = "Nama wishlist wajib diisi";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      // Ambil data user yang sedang login dari localStorage
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !user.userId) {
        setErrors({
          form: "Tidak ada data pengguna yang ditemukan. Silakan login kembali.",
        });
        return;
      }

      // Membuat data yang akan dikirim ke backend
      const dataToSend = {
        name: formValues.name,
        cost: formValues.cost,
        saving: formValues.saving,
        userId: user.userId,
      };

      console.log("Data yang dikirim:", dataToSend);

      // Menggunakan axios untuk mengirim data ke backend
      const response = await axios.post(
        "http://localhost:3000/transaction",
        dataToSend
      );

      // Menangani respon sukses dari backend
      if (response.data.success) {
        // Jika berhasil, tutup floating layer dan reset form
        setIsAddWishlistOpen(false);
        setFormValues({
          name: "",
          cost: "",
          saving: "",
        });
      } else {
        // Jika gagal, tampilkan pesan error dari backend
        setErrors({ form: response.data.message });
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
      setErrors({ form: "Terjadi kesalahan. Coba lagi nanti." });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex w-screen overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 max-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Wishlist</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Cari apapun di sini ..."
                className="w-80 pl-10 pr-4 py-2 rounded-lg bg-zinc-800 border-0 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-black"
              onClick={() => setIsAddWishlistOpen(true)}
            >
              <Plus />
            </Button>
          </div>
        </div>
      </main>

      {/* Floating Layer */}
      {isAddWishlistOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-[9999]">
          <div className="bg-[#2C2B2B] rounded-[20px] p-10 w-[480px] h-[480px]">
            {/* Close Button */}
            <button
              className="absolute"
              style={{
                width: "28px",
                height: "28px",
                left: "975px",
                top: "204px",
              }}
              onClick={() => setIsAddWishlistOpen(false)}
            >
              <img
                src="/close-button.png"
                alt="Close Button"
                className="w-4 h-4"
              />
            </button>

            {/* Form */}
            <div className="space-y-8">
              {/* Nama */}
              <div className="flex flex-col items-center">
                <InputField
                  label="Nama Wishlist"
                  placeholder="Masukkan nama wishlist"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Biaya */}
              <div className="flex flex-col items-center">
                <InputField
                  label="Biaya"
                  placeholder="Masukkan biaya yang diperlukan"
                  value={formValues.cost}
                  onChange={(e) =>
                    setFormValues({ ...formValues, cost: e.target.value })
                  }
                />
                {errors.cost && (
                  <p className="text-red-500 text-xs mt-1">{errors.cost}</p>
                )}
              </div>

              {/* Tabungan */}
              <div className="flex flex-col items-center">
                <InputField
                  label="Tabungan per bulan"
                  placeholder="Masukkan rencana tabungan"
                  value={formValues.saving}
                  onChange={(e) =>
                    setFormValues({ ...formValues, saving: e.target.value })
                  }
                />
                {errors.saving && (
                  <p className="text-red-500 text-xs mt-1">{errors.saving}</p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <button
                className="bg-[#48DE80] py-2 text-[#1C1B1B] font-medium text-[17px] rounded-[24px]"
                onClick={handleSubmit}
                style={{ width: "360px", height: "44px" }}
              >
                Tambahkan Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField = ({ label, placeholder, type, value, onChange }) => (
  <div className="flex flex-col">
    <label
      className="text-[#D6D5D5] font-medium mb-1"
      style={{ fontSize: "16px", lineHeight: "25px", letterSpacing: "-0.02em" }}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-[368px] h-[40px] bg-[#1C1B1B] text-white px-4 py-2 rounded-[12px] focus:outline-none"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    />
  </div>
);

export default Wishlist;
