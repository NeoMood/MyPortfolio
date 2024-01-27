import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export function Menu(props) {
  // export const Menu = (props) => {
  //   const { isMenuOpen, setIsMenuOpen } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentSection } = props;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentSection]);

  return (
    <>
      <div className="block lg:hidden z-[100]">
        {/* <div
          className={`fixed w-full h-[100px] backdrop-blur-lg ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div> */}
        <a
          href="#home"
          className={`absolute z-20 logo top-0 left-6 p-4 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        >
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
            isMenuOpen ? "w-96  bg-[peru]" : "w-0"
          }`}
        >
          <div className="menu flex-1 flex items-center justify-center flex-col gap-10 p-8 text-white text-xl contact_font">
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
            <a
              href="/Saad_Gmira_resume.pdf"
              download
              className="text-[peru] font-thin  px-2 py-1 text-xs rounded-md bg-none border border-[peru] hover:border-[#ffcd9b] hover:text-[#ffcd9b] transition duration-500 ease-in-out contact_font"
            >
              My resume
            </a>
            <div className="absolute flex bottom-10 justify-center">
              <a
                className="social-icon social-icon--github"
                href="https://github.com/NeoMood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faGithub}
                />
                <div className="tooltip">Github</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/sa%C3%A2d-gmira-78a792212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faLinkedin}
                />
                <div className="tooltip">LinkedIn</div>
              </a>
              <a
                className="social-icon social-icon--instagram"
                href="https://www.instagram.com/neomoodmusic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faInstagram}
                />
                <div className="tooltip">Instagram</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="mailto:saad02.gmira2002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faEnvelope}
                />
                <div className="tooltip">Mail</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="tel:+212655873358"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faPhone} />
                <div className="tooltip">Phone</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
