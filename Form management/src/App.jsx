import React from "react";
import FormPage from "./pages/FormPage";
import Management from "./pages/Management";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Management />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
