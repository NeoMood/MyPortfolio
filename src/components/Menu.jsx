import { useState, useEffect, forwardRef } from "react";

const Menu = forwardRef(function index(props, ref) {
// export const Menu = (props) => {
  //   const { isMenuOpen, setIsMenuOpen } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentSection } = props;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentSection]);

  return (
    <>
      <div ref={ref} className="block lg:hidden z-[100]">
        <a href="#home" className="z-20 logo fixed top-0 left-6 p-4">
          SG
        </a>
        <button

          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-20 fixed top-8 right-8 p-3 bg-[#CD853F] w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              isMenuOpen ? "rotate-45 translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              isMenuOpen ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              isMenuOpen ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col ${
            isMenuOpen ? "w-96 backdrop-blur-lg" : "w-0"
          }`}
        >
          <div className="menu flex-1 flex items-center justify-center flex-col gap-6 p-8 text-white text-xl contact_font">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export default Menu;