import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import TransactionPage from "./page/transaksi";
import Dashboard from "./page/dashboard";
import Wishlist from "./page/wishlist";
import Report from "./page/report";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
