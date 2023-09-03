import { cn } from "../../lib/utils";
import React from "react";

const TransparentBtn = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex justify-center bg-white bg-opacity-5 rounded-full items-center xl:w-12 xl:h-12  w-10 h-10 hover:bg-opacity-10",
        className
      )}
    >
      {children}
    </button>
  );
};

export default TransparentBtn;
