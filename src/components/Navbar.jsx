

import React, { useRef, useState, useEffect } from 'react';
import { useScroll } from 'react-use';

// export const Navbar = () => {
//     return (
//         <>
//             <header className="header backdrop-blur-md">
//                 <a href="#" className="logo">SG</a>
//                 <nav className="navbar">
//                     <a href="#about">Home</a>
//                     <a href="#about">About</a>
//                     <a href="#skills">Skills</a>
//                     <a href="#projects">Projects</a>
//                     <a href="#contact">Contact</a>
//                 </nav>
//             </header>
//         </>
//     )
// }

export const Navbar = () => {
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
                <header className="header backdrop-blur-md">
                    <a href="#" className="logo">SG</a>
                    <nav className="navbar">
                        <a href="#about">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </header>
            )}
        </div>
    );
};