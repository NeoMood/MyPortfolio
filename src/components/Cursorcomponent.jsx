import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ stickyMouse }) {
  const [isHovered, setIsHovered] = useState(false);
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
  };

  // const getMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const getMouseLeave = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    window.addEventListener("mousemove", getMouseMove);
    // if (stickyMouse.current) {
    //   stickyMouse.current.addEventListener("mouseover", getMouseOver);
    //   stickyMouse.current.addEventListener("mouseleave", getMouseLeave);
    // }
  
    return () => {
      window.removeEventListener("mousemove", getMouseMove);
      // if (stickyMouse.current) {
      //   stickyMouse.current.removeEventListener("mouseover", getMouseOver);
      //   stickyMouse.current.removeEventListener("mouseleave", getMouseLeave);
      // }
    };
  }, []);

  useEffect(() => {
    if ('ontouchstart' in window) {
      document.body.classList.add('touch-device');
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
        e.target.parentElement.tagName.toLowerCase() === "button" 
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
