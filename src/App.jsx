import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import TransactionPage from "./page/transaksi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/trans" element={<TransactionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
