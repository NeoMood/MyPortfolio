import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCursorInWindow, setIsCursorInWindow] = useState(true);
  const cursorSizeRef = useRef(25);
  const cursorSize = isHovered ? 60 : 25;
  cursorSizeRef.current = cursorSize;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 300, damping: 30, mass: 0.5 }),
    y: useSpring(mouse.y, { stiffness: 300, damping: 30, mass: 0.5 }),
  };

  const getMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSizeRef.current / 2);
    mouse.y.set(clientY - cursorSizeRef.current / 2);
    setIsCursorInWindow(true);
  };

  const getMouseOut = () => {
    setIsCursorInWindow(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMouseMove);
    window.addEventListener("mouseout", getMouseOut);
    return () => {
      window.removeEventListener("mousemove", getMouseMove);
      window.removeEventListener("mouseout", getMouseOut);
    };
  }, []);

  useEffect(() => {
    if ('ontouchstart' in window || window.innerWidth <= 780) {
      setIsCursorInWindow(false);
    }
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener("mouseover", (e) => {
      if(
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "input" ||
        e.target.tagName.toLowerCase() === "h1" ||
        e.target.tagName.toLowerCase() === "span" ||
        e.target.tagName.toLowerCase() === "p" ||
        e.target.tagName.toLowerCase() === "textarea" ||
        e.target instanceof SVGElement
        // e.target.parentElement.tagName.toLowerCase() === "button" 
      )
      {
        setIsHovered(true);
      }
      else
      {
        setIsHovered(false);
      }
    });
    return () => {
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);

  return (
    <>
      {isCursorInWindow && (
        <motion.div
          className="w-[25px] h-[25px] bg-[peru] fixed rounded-[100%] pointer-events-none z-[101]"
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
            mixBlendMode: "difference",
          }}
          animate={{
            width: cursorSize,
            height: cursorSize,
          }}
        ></motion.div>
      )}
    </>
  );
}
