// src/components/Layout.js
import React from "react";
import ParticleBackground from "./ParticleBackground"; // Adjust the path if needed

const Layout = ({ children }) => {
  return (
    <div>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;
