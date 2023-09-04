import React from "react";
import SearchIcon from "../assets/icons/search.svg";
import { cn } from "../lib/utils";

const SearchBar = ({ onSearch, loading, placeholder }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center m-4 rounded-md overflow-hidden bg-white bg-opacity-25 min-h-[31px]",
        loading ? "pointer-events-none  " : "pointer-events-auto"
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          " px-4 py-2 w-full focus:outline-none focus:border-blue-500 border-none rounded-md bg-transparent text-white placeholder-white placeholder-opacity-50"
        )}
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Logo"
        className="h-[21px] cursor-pointer mx-2"
      />
    </div>
  );
};

export default SearchBar;
