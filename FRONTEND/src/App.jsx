import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardRouter from "./router/DashboardRouter";
import WebsiteRouter from "./router/WebsiteRouter";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
