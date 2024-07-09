import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"; // Import the CSS file for styling

function Type() {
  const typewriterStrings = [
    "Software Engineer",
    "Software Developer",
    "Cloud Engineer",
    "Graduate Student",
  ];

  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: typewriterStrings,
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          delay: 90,
        }}
      />
    </div>
  );
}

export default Type;
