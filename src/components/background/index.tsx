"use client";

import React from "react";
import StarsCanvas from "../stars";
import { useTheme } from "next-themes";

const Background = () => {
  const { theme } = useTheme();
  return <>{theme === "dark" ? <StarsCanvas /> : <></>}</>;
};

export default Background;
