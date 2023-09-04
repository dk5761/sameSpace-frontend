import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const PulseImage = ({ imageUrl, className }) => {
  return (
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-[60px]"
    >
      <img
        src={imageUrl}
        alt="LOGO"
        className={cn("h-[36px] mb-4 w-max", className)}
      />
    </motion.div>
  );
};

export default PulseImage;
