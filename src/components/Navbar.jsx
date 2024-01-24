

import React, { useRef, useState, useEffect } from 'react';
import { useScroll } from 'react-use';

export function Navbar(props) {
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
                            className='text-[peru] ml-[60px] font-thin w-20 px-2 py-1 text-xs rounded-md bg-none border border-[peru] hover:border-[#ffcd9b] hover:text-[#ffcd9b] transition duration-500 ease-in-out contact_font'>My resume
                        </a>
                    </nav>
                </header>
            )}
        </div>
    );
};

// import React, { useRef, useState, useEffect } from 'react';
// import { useScroll } from 'react-use';
// import { Link } from 'react-router-dom';

// export function Navbar(props) {
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

//     return (
//         <div className="hidden lg:block" ref={ref}>
//             {show && (
//                 <header className="header backdrop-blur-md contact_font">
//                     <Link to="/" className="logo">SG</Link>
//                     <nav className="navbar">
//                         <Link to="/">Home</Link>
//                         <Link to="/about">About</Link>
//                         <Link to="/skills">Skills</Link>
//                         <Link to="/projects">Projects</Link>
//                         <Link to="/contact">Contact</Link>
//                         <a
//                             href="/Saad_Gmira_resume.pdf"
//                             download
//                             className='text-[peru] ml-[60px] font-thin w-20 px-2 py-1 text-xs rounded-md bg-none border border-[peru] hover:border-[#ffcd9b] hover:text-[#ffcd9b] transition duration-500 ease-in-out contact_font'>My resume
//                         </a>
//                     </nav>
//                 </header>
//             )}
//         </div>
//     );
// };