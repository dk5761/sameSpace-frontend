import React, { useState } from "react";
import Label from "./ui/text";
import { Link } from "react-router-dom";
import Spotify_LG from "../assets/icons/spotify_lg.svg";
import Spotify_XS from "../assets/icons/spotify_xs.svg";
import Hamburger from "../assets/icons/hamburger.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Sidebar = ({ data }) => {
  const controls = useAnimation();

  // Check if the screen width is less than or equal to 768px (typical mobile breakpoint)
  const isMobile = window.innerWidth <= 768;

  // Initial animation when the component mounts
  useEffect(() => {
    if (isMobile) {
      // Apply mobile-specific animation with y manipulation
      controls.start({ y: 0, opacity: 1 });
    } else {
      // Apply desktop-specific animation with x manipulation
      controls.start({ x: 0, opacity: 1 });
    }
  }, [isMobile, controls]);

  return (
    <motion.nav
      className="w-full sm:w-1/4 sm:min-w-[200px] sm:max-w-[280px] sm:h-screen sm:p-6  p-2 h-[50px]  flex flex-row sm:flex-col justify-between items-start sm:justify-normal sm:items-start fixed sm:relative"
      initial={
        isMobile ? { y: "-100%", opacity: 0 } : { x: "-100%", opacity: 0 }
      }
      transition={{
        type: "tween",
        damping: 15,
        stiffness: 80,
        duration: 0.6,
      }}
      animate={controls}
    >
      <Sheet key={"left"}>
        <SheetTrigger asChild>
          <img
            src={Hamburger}
            alt="Logo"
            className="h-[36px] mb-4 cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-black text-white max-w-[240px] border-none"
        >
          <SheetHeader className="flex justify-start">
            <img src={Spotify_LG} alt="Logo" className="h-[36px] mb-4 w-max" />
          </SheetHeader>
          <aside className="flex flex-col ">
            {data.getPlaylists.map((item) => {
              return (
                <SheetClose asChild key={item.id}>
                  <Link to={`/${item.id}`} state={{ title: item.title }}>
                    <Label>{item.title}</Label>
                  </Link>
                </SheetClose>
              );
            })}
          </aside>
        </SheetContent>
      </Sheet>
      <img src={Spotify_XS} alt="Logo" className="h-[30px] mb-4  sm:hidden" />
      <img
        src={Spotify_LG}
        alt="Logo"
        className="h-[36px] mb-4 hidden sm:block"
      />

      <aside className="hidden sm:block">
        {data.getPlaylists.map((item) => {
          return (
            <Link to={`/${item.id}`} key={item.id}>
              <Label>{item.title}</Label>
            </Link>
          );
        })}
      </aside>
    </motion.nav>
  );
};

export default Sidebar;
