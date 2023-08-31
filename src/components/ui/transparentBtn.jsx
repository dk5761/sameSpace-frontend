import { cn } from "../../lib/utils";
import React from "react";

const TransparentBtn = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={cn("flex justify-center", className)}>
      {children}
    </button>
  );
};

export default TransparentBtn;
