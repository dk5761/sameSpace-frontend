import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar";
import "./globals.css";
import Home from "./pages/home";
import Player from "./pages/player";
import { useQuery } from "@apollo/client";
import { GET_PLAYLISTS } from "./lib/query";
import { useSelector } from "react-redux";
import { getGradientColors } from "./lib/utils";
import Spotify_XS from "./assets/icons/spotify_xs.svg";
import PulseImage from "./components/ui/pulseImg";
import { motion } from "framer-motion"; // Import useAnimation

const App = () => {
  const { data, error, loading } = useQuery(GET_PLAYLISTS); // fetching the sidebar data.

  const color = useSelector((state) => state.song.color); // getting the bg color from the redux state.

  const { darkerColor, lighterColor } = getGradientColors(color); // getting the color gradients the light and dark for the gradient scale.

  if (loading) {
    return (
      <div className="flex flex-row  h-screen w-screen max-h-screen overflow-hidden relative bg-black justify-center items-center">
        <PulseImage imageUrl={Spotify_XS} className={"h-[60px]"} />
      </div>
    );
  }

  return (
    <Router>
      <motion.div
        style={{
          background: `linear-gradient(to left, ${darkerColor}, ${lighterColor}) `,
        }}
        className="flex flex-col sm:flex-row h-screen w-screen max-h-screen overflow-hidden relative "
        initial={{
          background: `linear-gradient(to left, ${darkerColor}, ${lighterColor})`,
          opacity: 0,
        }}
        animate={{
          background: `linear-gradient(to left, ${darkerColor}, ${lighterColor})`,
          opacity: 1,
        }}
        transition={{ duration: 1, background: { duration: 1 } }}
      >
        <Sidebar data={data} />
        <Routes>
          <Route
            path="/"
            element={<Home headerData={data} headerLoading={loading} />}
          />
          <Route
            path="/:id"
            element={<Home headerData={data} headerLoading={loading} />}
          />
        </Routes>
        <Player />
      </motion.div>
    </Router>
  );
};

export default App;
