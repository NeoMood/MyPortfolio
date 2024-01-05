import React, { Suspense, useRef } from 'react';
import { Experience } from './Experience';
import { motion } from 'framer-motion';
import Typist from 'react-typist-component';
import { Tsparticles } from './tsparticles';
import Deskscene from './Deskscene';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Section = (props) => {
    const {children} = props;
    const {id} = props;

    return <section id={id} className={`
    h-screen w-screen min-w-screen-2xl mx-auto
    flex flex-col justify-center items-start
    `}>{children}</section>;
}

export const Interface = () => {
    return (
        <>
            <div className='flex flex-col items-center w-screen'>
                <About/>
                <Skills/>
                <Section id="projects">
                    {/* <h1>Projects</h1> */}
                    <Experience/>
                </Section>
                <Section id="contact">
                    <div className="bg-gradient-to-r from-[#0353A4] to-[#061A40] w-screen h-screen ">
                        <h1>Contact</h1>
                    </div>
                </Section>
            </div>
        </>
    )
}

export const About = () => {
    const containerRef = useRef(null);
    return (
        <>
            <Section id="about">
                <Tsparticles container={containerRef} />
            <div ref={containerRef}>
                {/* <div className="absolute top-0 left-0" 
                    style={{ 
                        backgroundImage: `url(/layered-waves.svg)`, 
                        aspectRatio: 960/300, 
                        width: '100%', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover' 
                    }}
                    ></div> */}
                <div className="bg-gradiant flex items-center justify-start space-x-10 w-screen h-screen overflow-hidden" >
                        <div className="pl-20">
                            <motion.h1 
                                className="pl-10 text-6xl font-extrabold leading-snug text-white"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                <h1 className='thisis'>
                                    Hi, This is
                                </h1>
                                <Typist >
                                    <span className="name text-[100px] text-[#CD853F]">Saâd Gmira</span>
                                </Typist>
                            </motion.h1>
                            <motion.p 
                                className='pl-10 text-xl text-white '
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                    a software engineering student and a full-stack web developer
                            </motion.p>
                        </div>
                        
                        {/* <div className='w-1/2 h-screen'> */}
                        <div className='absolute overflow-hidden w-screen h-screen'>
                            <Deskscene/>
                        </div>

                    </div>
                </div>
            </Section>
            {/* <Avatar/> */}
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
    <div className='flex items-center flex-col  bg-gradient-to-r from-[#0353A4] to-[#061A40] w-screen h-screen'>
        <div className="">
            <h1 className=''> SKILLS </h1>
        </div>
        
        <div className="w-screen h-screen ">
            <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ThreeJS<span className='spananimation'>90%</span></h1>
            <h1 className="textanimation">ReactJS<span className='spananimation'>90%</span></h1>
        </div>
    </div>
  );
}

export const Skills = () => {
    return (
        <Section id="skills">
            <TextEffect/>
        </Section>
    )
}