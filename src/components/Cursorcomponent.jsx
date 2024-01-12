import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ stickyMouse }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 80 : 25;
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
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const getMouseOver = () => {
    setIsHovered(true);
  };

  const getMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMouseMove);
    stickyMouse.current.addEventListener("mouseover", getMouseOver);
    stickyMouse.current.addEventListener("mouseleave", getMouseLeave);
    return () => {
      window.removeEventListener("mousemove", getMouseMove);
      stickyMouse.current.removeEventListener("mouseover", getMouseOver);
      stickyMouse.current.removeEventListener("mouseleave", getMouseLeave);
    };
  });

  useEffect(() => {
    if ('ontouchstart' in window) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <>
      <motion.div
        className="w-[25px] h-[25px] bg-[peru] fixed rounded-[100%] pointer-events-none z-[101] touch-device:hidden"
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
    </>
  );
}
