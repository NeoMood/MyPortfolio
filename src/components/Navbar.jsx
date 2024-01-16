

import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { useScroll } from 'react-use';

export const Navbar = (props) => {
    const ref = useRef(null);
    const { y } = useScroll(ref);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShow(y <= 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [y]);

    return (
        <div className="hidden lg:block" ref={ref}>
            {show && (
                <header className="header backdrop-blur-md contact_font">
                    <a href="#home"  className="logo">SG</a>
                    <nav className="navbar">
                        <a href="#home" >Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a
                            href="/Saad_Gmira_resume.pdf"
                            download
                            className='text-[peru] ml-[60px] font-thin w-20 px-2 py-1 text-xs rounded-md bg-none border border-[peru] hover:border-green-500 hover:text-green-500 transition duration-500 ease-in-out contact_font'>My resume
                        </a>
                    </nav>
                </header>
            )}
        </div>
    );
};


// export const Navbar = () => {
//     const ref = useRef(null);
//     const { y } = useScroll(ref);
//     const [show, setShow] = useState(true);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShow(y <= 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [y]);
  
//     useEffect(() => {
//       Events.scrollEvent.register('begin', function () {
//         console.log("begin", arguments);
//       });
  
//       Events.scrollEvent.register('end', function () {
//         console.log("end", arguments);
//       });
  
//       scrollSpy.update();
  
//       return () => {
//         Events.scrollEvent.remove('begin');
//         Events.scrollEvent.remove('end');
//       };
//     }, []);
  
//     return (
//       <div className="hidden lg:block" ref={ref}>
//         {show && (
//           <header className="header backdrop-blur-md contact_font">
//             <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="logo">SG</Link>
//             <nav className="navbar">
//               <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
//               <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
//               <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
//               <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
//               <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
//             </nav>
//           </header>
//         )}
//       </div>
//     );
//   };