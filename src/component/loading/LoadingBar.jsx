import React from "react";
import { motion } from "framer-motion";

const LoadingBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 z-50"
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
};

export default LoadingBar;