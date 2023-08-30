import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar";
import SongList from "./components/SongList";
import "./globals.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/:type" element={<SongList />} />
        </Routes>

        {/* <SongDetails /> */}
      </div>
    </Router>
  );
};

export default App;
