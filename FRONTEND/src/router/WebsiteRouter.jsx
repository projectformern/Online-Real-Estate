import React from "react";
import WebsiteLayouts from "../layouts/WebsiteLayouts";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/website/Home";
import SearchResult from "../Pages/website/SearchResult";
import Header from "../Components/website/Header";
import Footer from "../Components/website/Footer";
import SiteInfo from "../Components/website/SiteInfo";

const WebsiteRouter = () => {
  return (
    <WebsiteLayouts>
      <SiteInfo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local" element="<h2>Hello this is main route of the websiteroouter</h2>" />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
      <Footer />
    </WebsiteLayouts>
  );
};

export default WebsiteRouter;
