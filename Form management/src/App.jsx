import React from "react";
import FormPage from "./pages/FormPage";
import Management from "./pages/Management";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/Master";
import Navbar from "./Components/Navbar";
import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/register" element={<FormPage />} />
          <Route path="/manageform" element={<Management />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
