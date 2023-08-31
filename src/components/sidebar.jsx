import React, { useState } from "react";
import Label from "./ui/text";
import { Link } from "react-router-dom";
import Spotify_LG from "../assets/spotify_lg.svg";
import Spotify_XS from "../assets/spotify_xs.svg";
import Hamburger from "../assets/hamburger.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";

const Sidebar = () => {
  const data = [
    {
      id: 1,
      title: "For You",
    },
    {
      id: 2,
      title: "Top Tracks",
    },
    {
      id: 3,
      title: "Favourites",
    },
    {
      id: 4,
      title: "Recently Played",
    },
  ];

  return (
    <nav className="w-full sm:w-1/4 sm:min-w-[200px] sm:max-w-[280px] sm:h-screen sm:p-6  p-2 h-[50px] bg-black flex flex-row sm:flex-col justify-between items-start sm:justify-normal sm:items-start fixed sm:relative">
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
            {data.map((item) => {
              return (
                <SheetClose asChild>
                  <Link to={`/${item.id}`}>
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
        {data.map((item) => {
          return (
            <Link>
              <Label>{item.title}</Label>
            </Link>
          );
        })}
      </aside>
    </nav>
  );
};

export default Sidebar;
