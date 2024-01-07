import React, { Suspense, useRef, useState } from 'react';
import { Experience } from './Experience';
import { motion } from 'framer-motion';
import Typist from 'react-typist-component';
import { Tsparticles } from './tsparticles';
import Deskscene from './Deskscene';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from "./Menu";
import { Canvas } from '@react-three/fiber';


const Section = (props) => {
    const {children} = props;
    const {id} = props;

    return <section id={id} className={`
    h-screen w-screen min-w-screen-2xl mx-auto
    flex flex-col justify-center items-start
    `}>{children}</section>;
}

export const Interface = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
                <div className='flex flex-col items-center w-screen'>
            <Suspense fallback={null}>
                    <About/>
            </Suspense>
                    <Skills/>
                    <Section id="projects">
                        <Experience/>
                    </Section>
                    <Section id="contact">
                        <div className="bg-gradient-to-r from-[#0353A4] to-[#061A40] w-screen h-screen ">
                            <h1>Contact</h1>
                        </div>
                    </Section>
                    {/* <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> */}
                </div>
        </>
    )
}

export const About = () => {
    const containerRef = useRef(null);
    return (
        <>

            <Section id="about">
                <div ref={containerRef}>
                    <div className="absolute bottom-0 " 
                    style={{
                        bottom: '-15px',
                        backgroundImage: `url(/wave-under.svg)`, 
                        aspectRatio: 960/300, 
                        width: '100%', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover' 
                    }}
                    ></div>

                <div className="bg-gradiant flex items-center justify-start  w-screen h-screen overflow-hidden" >
                        <div className="pl-20">
                            <motion.h1 
                                className="pl-10 text-4xl md:text-6xl font-extrabold leading-snug text-white"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                <h1 className='thisis'>
                                    Hi, This is
                                </h1>
                                {/* <Typist > */}
                                    <span className="name text-[#CD853F]">Saâd Gmira</span>
                                {/* </Typist> */}
                            </motion.h1>
                            <motion.p 
                                className='pl-10 text-xl text-white '
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                    a software engineering student
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div className='ml-0 absolute w-full h-full'>
                <Canvas shadows camera={{ fov: 60 }}>
                        <Deskscene/>
                        </Canvas>
                </div>
            </Section>
        </>
    )
}

const skills = [
    {
        title: "C",
        level: 90,
    },
    {
        title: "C++",
        level: 80,
    },
    {
        title: "Javascript",
        level: 60,
    },
    {
        title: "Next.js",
        level: 50,
    },

    {
        title: "MongoDB",
        level: 10,
    },
]


const TextEffect = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.textanimation');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
        <div className='relative flex items-center justify-center flex-col  skills-bg-gradiant w-screen h-screen overflow-hidden'>

            <Tsparticles  />
            <div className="text-6xl font-extrabold leading-snug text-white">
                <h1 className=''> SKILLS </h1>
            </div>
            
            
            <div className='flex'>

                <div className="flex-wrap px-16  w-1/2 space-y-4">
                    <h1 className='text-white text-center'> Coding Languages </h1>
                    <h1 className="textanimation">C<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">C++<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">Javascript<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                </div>
                <div className="flex-wrap px-16   w-1/2 space-y-4">
                    <h1 className='text-white text-center'> Technologies </h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                </div>
                <div className="flex-wrap px-16   w-1/2 space-y-4">
                    <h1 className='text-white text-center'> Coding Languages </h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
                    <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
                </div>
            </div>
        </div>

    </>
  );
}

export const Skills = () => {
    // const containerRef = useRef(null);
    return (
        <Section id="skills">
            <TextEffect/>
            {/* <Tsparticles container={containerRef}/> */}
        </Section>
    )
}