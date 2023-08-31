import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar";
import "./globals.css";
import Home from "./pages/home";
import Player from "./pages/player";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col sm:flex-row h-screen w-screen max-h-screen overflow-hidden relative">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<Home />} />
        </Routes>
        <Player />
      </div>
    </Router>
  );
};

export default App;
