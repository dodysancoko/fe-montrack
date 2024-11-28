import React, { useState } from "react";

const TransactionPage = () => {
  // State untuk mengontrol visibilitas floating layer
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#1C1B1B] flex">
      {/* Left Panel */}
      <aside className="w-[386px] bg-[#2C2B2B] h-full p-8">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div
            className="w-[120px] h-[120px] rounded-full bg-cover bg-center mb-4"
            style={{ backgroundImage: "/fiko.png" }}
          ></div>
          <h2 className="text-white text-lg font-semibold text-[23px]">
            Fiko Yorisdwi ‘Aliy
          </h2>
        </div>
        {/* Navigation Menu */}
        <nav className="mt-10 space-y-6">
          <MenuItem icon="dashboard" text="Dashboard" isActive={false} />
          <MenuItem icon="transaction" text="Transaksi" isActive={true} />
          <MenuItem icon="wishlist" text="Wishlist" isActive={false} />
          <MenuItem icon="report" text="Laporan" isActive={false} />
          <MenuItem icon="settings" text="Pengaturan" isActive={false} />
          <MenuItem icon="logout" text="Keluar" isActive={false} />
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-8 overflow-y-auto relative">
        <header>
          {/* Box Baru */}
          <div
            className="fixed bg-[#1C1B1B]"
            style={{
              width: "1530px",
              height: "375px",
              top: "0px",
              left: "390px",
              zIndex: "1",
            }}
          ></div>

          {/* Page Title */}
          <h1
            className="fixed"
            style={{
              width: "166px",
              height: "50px",
              left: "418px",
              top: "63px",
              fontFamily: "'Kumbh Sans', sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "50px",
              letterSpacing: "-0.02m",
              color: "#FFFFFF",
              zIndex: "2",
            }}
          >
            Transaksi
          </h1>

          {/* Search Box */}
          <div
            className="fixed"
            style={{
              width: "599px",
              height: "64px",
              left: "1135px",
              top: "56px",
              zIndex: "2",
            }}
          >
            <div className="w-full h-full bg-[#2C2B2B] rounded-[20px] flex items-center pl-4">
              <input
                type="text"
                placeholder="Cari apapun di sini ..."
                className="w-full bg-[#2C2B2B] text-[#B3B3B3] rounded-[20px] pl-4 pr-12 py-2 focus:outline-none"
              />
              <span className="absolute right-4 text-white">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          {/* Add Button */}
          <div
            onClick={() => setIsAddTransactionOpen(true)}
            className="fixed"
            style={{
              width: "75px",
              height: "75px",
              left: "1777px",
              top: "50px",
              zIndex: "2",
            }}
          >
            <img
              src="/button-add.png"
              alt="Add Button"
              className="w-full h-full cursor-pointer"
            />
          </div>
        </header>

        {/* Balance Summary */}
        <section
          className="fixed mt-8 bg-[#2C2B2B] rounded-[20px] flex justify-between items-center px-8"
          style={{
            width: "1435px",
            height: "190px",
            top: "130px",
            zIndex: "2",
          }}
        >
          <BalanceCard
            title="Pemasukan"
            amount="Rp9.543.210,00"
            color="text-green-400"
          />
          <BalanceCard
            title="Pengeluaran"
            amount="Rp543.210,00"
            color="text-red-500"
          />
          <BalanceCard
            title="Sisa Saldo"
            amount="Rp9.000.000,00"
            color="text-white"
          />
        </section>

        {/* Transaction History */}
        <section className="mt-8 space-y-5 mt-[360px] z-0">
          <TransactionSection
            title="Hari ini"
            totalin="Rp20.000"
            totalout="Rp47.000"
          >
            <TransactionItem
              name="Ayam Geprek Bajak"
              category="Makanan"
              amount="Rp40.000"
              amountColor="text-red-500"
            />
            <TransactionItem
              name="Es Teh Jumbo"
              category="Makanan"
              amount="Rp7.000"
              amountColor="text-red-500"
            />
            <TransactionItem
              name="Nemu Duit"
              category="Bonus"
              amount="Rp20.000"
              amountColor="text-green-500"
            />
          </TransactionSection>
          <TransactionSection
            title="05 November 2024"
            totalin="Rp20.000"
            totalout="Rp54.000"
          >
            <TransactionItem
              name="Ayam Geprek Bajak"
              category="Makanan"
              amount="Rp40.000"
              amountColor="text-red-500"
            />
            <TransactionItem
              name="Es Teh Jumbo"
              category="Makanan"
              amount="Rp7.000"
              amountColor="text-red-500"
            />
            <TransactionItem
              name="Nemu Duit"
              category="Bonus"
              amount="Rp20.000"
              amountColor="text-green-500"
            />
          </TransactionSection>
          <TransactionSection
            title="04 November 2024"
            totalin="Rp20.000"
            totalout="Rp54.000"
          >
            <TransactionItem
              name="Ayam Geprek Bajak"
              category="Makanan"
              amount="Rp40.000"
              amountColor="text-red-500"
            />
            <TransactionItem
              name="Es Teh Jumbo"
              category="Makanan"
              amount="Rp7.000"
              amountColor="text-red-500"
            />
          </TransactionSection>
        </section>
      </main>

      {/* Floating Layer */}
      {isAddTransactionOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-[9999]">
          <div className="bg-[#2C2B2B] rounded-[20px] p-8 w-[897px] h-[660px]">
            {/* Close Button */}
            <button
              className="absolute"
              style={{
                width: "35px",
                height: "35px",
                left: "1359.39px",
                top: "239.91px",
              }}
              onClick={() => setIsAddTransactionOpen(false)}
            >
              <img
                src="/close-button.png"
                alt="Close Button"
                className="w-8 h-8"
              />
            </button>

            {/* Header */}
            <div className="flex justify-center mb-6 space-x-2">
              <button className="border border-[#D5D5D5] px-6 py-2 rounded-[20px] text-[#D5D5D5]">
                Pengeluaran
              </button>
              <button className="bg-[#48DE80] px-6 py-2 rounded-[20px] text-[#1C1B1B]">
                Pemasukan
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <InputField label="Jumlah" placeholder="Masukkan jumlah" />
              <InputField label="Tanggal" type="date" />
              <InputField label="Waktu" type="time" />
              <InputField label="Kategori" placeholder="Pilih kategori" />
              <InputField
                label="Keterangan"
                placeholder="Tambahkan keterangan"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-[#48DE80] w-full py-3 rounded-[30px] mt-6">
              Tambahkan Transaksi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, text, isActive }) => (
  <div
    className={`flex items-center gap-4 ${
      isActive ? "bg-green-500 text-black rounded-lg" : "text-white"
    } p-2`}
  >
    <div className={`icon-${icon} bg-no-repeat w-6 h-6`}></div>
    <span className={`text-lg font-medium`}>{text}</span>
  </div>
);

const BalanceCard = ({ title, amount, color }) => {
  return (
    <div className="bg-[#302F2F] w-[432px] h-[138px] rounded-[20px] p-4 flex flex-col justify-between">
      <h2 className="text-[#B3B3B3] text-sm text-[23px]">{title}</h2>
      <p className={`text-[32px] font-semibold ${color}`}>{amount}</p>
    </div>
  );
};

const TransactionSection = ({ title, totalin, totalout, children }) => (
  <div className="bg-[#2C2B2B] w-[1435px] h-[395px] rounded-[20px] p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-[#B3B3B3] text-lg font-semibold">{title}</h3>
      <div className="flex gap-6">
        <p className="text-green-400">{totalin}</p>
        <p className="text-red-500">{totalout}</p>
      </div>
    </div>
    {/* Transaction Items */}
    <div className="flex flex-col space-y-4">{children}</div>
  </div>
);

const TransactionItem = ({ name, category, amount, amountColor }) => (
  <div className="bg-[#302F2F] w-[1393px] h-[93px] rounded-[20px] p-4 flex justify-between items-center">
    <div>
      <h4 className="text-white font-semibold">{name}</h4>
      <p className="text-[#B3B3B3]">{category}</p>
    </div>
    <p className={`font-medium ${amountColor}`}>{amount}</p>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="text-[#B3B3B3]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-[#1C1B1B] text-white rounded-[20px] w-full py-3 px-4 mt-2"
    />
  </div>
);

export default TransactionPage;
