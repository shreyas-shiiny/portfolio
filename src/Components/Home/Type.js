import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack MERN Developer",
          "I'm learning React MUI",
          "I Develope Web-Pages",
          "I Focus on Codes",
          "I Generate Code ",
          "I Clear the Error'S",
          "I Innovate technologies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;