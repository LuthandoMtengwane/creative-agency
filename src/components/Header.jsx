import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../sass/components/header.scss";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    font: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    fonts: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const fontEnter = () => setCursorVariant("font");
  const fontLeave = () => setCursorVariant("default");

  const fontsEnter = () => setCursorVariant("fonts");
  const fontsLeave = () => setCursorVariant("default");

  return (
    <div className="header">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">
        A MODERN CREATIVE AGENCY
      </h1>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <h1 className="build" onMouseEnter={fontEnter} onMouseLeave={fontLeave}>
        BUILDING WITH PRECISION AND CLASS
      </h1>

      <p
        className="iscream"
        onMouseEnter={fontsEnter}
        onMouseLeave={fontsLeave}
      >
        iSCREAM CREATIVE AGENCY
      </p>
    </div>
  );
};

export default Header;
