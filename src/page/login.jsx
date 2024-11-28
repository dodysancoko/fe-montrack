import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="fixed inset-0 bg-[#1C1B1B] flex">
      {/* Left Panel */}
      <div className="fixed left-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#059C82] via-[#16C98C] to-[#059C82]">
        <div className="absolute top-[185px] left-[257px] text-center">
          <h1 className="font-bold text-white text-[60px] leading-[59px] tracking-[-0.03em]">
            Finansial Anda
            <br />
            di Satu Tempat
          </h1>
        </div>
        <div className="absolute top-[346px] left-[214px] w-[487px] h-[300px]">
          <img
            src="/illustration.png"
            alt="MonTrack"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-[689px] left-[234px] text-center">
          <p className="font-semibold text-white text-[22px] leading-[32px] tracking-[-0.03em]">
            Catat keuangan, buat wishlist, pelajari laporan,
            <br />
            dan nikmati layanan keuangan lainnya
          </p>
        </div>
        <div className="absolute bottom-[60px] left-[338px] flex items-center gap-4">
          <div className="w-[55px] h-[55px]">
            <img
              src="/icon-montrack.png"
              alt="MonTrack Icon"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <h2 className="font-medium text-white text-[40px] leading-[60px] tracking-[-0.03em] drop-shadow-md">
            MonTrack
          </h2>
        </div>
      </div>

      {/* Login Form */}
      <div className="fixed right-[200px] top-[200px] bg-[#2C2B2B] rounded-[25px] w-[544px] h-[686px] p-8">
        <h1 className="text-white font-semibold text-[40px] tracking-[-0.03em]">
          Masuk
        </h1>
        <form className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-[18px] font-normal text-white/75 tracking-[-0.02em]"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full h-[50px] px-4 rounded-[12px] bg-white/10 border border-white/30 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[18px] font-normal text-white/75 tracking-[-0.02em]"
            >
              Kata sandi
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full h-[50px] px-4 rounded-[12px] bg-white/10 border border-white/30 text-white"
            />
          </div>
          <div className="text-right">
            <a
              href="#"
              className="text-[#14C48B] font-medium text-[20px] underline tracking-[-0.02em]"
            >
              Lupa kata sandi?
            </a>
          </div>
          <button
            type="submit"
            className="mt-6 w-full h-[55px] bg-[#48DE80] text-[#1C1B1B] font-medium text-[22px] rounded-[30px]"
          >
            Masuk
          </button>
        </form>
        <div className="flex items-center justify-between mt-8">
          <hr className="w-[118px] border-t border-white/75" />
          <p className="text-white/75 text-[20px] tracking-[-0.02em]">
            atau lanjutkan dengan
          </p>
          <hr className="w-[118px] border-t border-white/75" />
        </div>
        <div className="flex justify-center gap-8 mt-6">
          <div className="relative w-[51px] h-[51px] rounded-full bg-[#333333] flex items-center justify-center">
            <img src="/fb.png" alt="Facebook" className="w-[42px] h-[42px]" />
          </div>
          <div className="relative w-[51px] h-[51px] rounded-full bg-[#333333] flex items-center justify-center">
            <img src="/google.png" alt="Google" className="w-[40px] h-[40px]" />
          </div>
        </div>
        <div className="text-center mt-[60px]">
          <p className="text-white/75 text-[20px] tracking-[-0.02em]">
            Tidak memiliki akun?{" "}
            <Link to="/register" className="font-medium text-[#14C48B]">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
