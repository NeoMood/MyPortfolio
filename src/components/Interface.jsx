import React from 'react';
import { Experience } from './Experience';
import { motion } from 'framer-motion';
import Typist from 'react-typist-component';
import { Tsparticles } from './tsparticles';
import Deskscene from './Deskscene';

const Section = (props) => {
    const {children} = props;

    return <section className={`
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
                <Section>
                    {/* <h1>Projects</h1> */}
                    <Experience/>
                </Section>
                <Section >
                    <div className="bg-gradient-to-r from-[#0353A4] to-[#061A40] w-screen h-screen ">
                        <h1>Contact</h1>
                    </div>
                </Section>
            </div>
        </>
    )
}

export const About = () => {
    return (
        <>
            <Section>
                <Tsparticles/>
                <div className="absolute top-0 left-0" 
                    style={{ 
                        backgroundImage: `url(/layered-waves.svg)`, 
                        aspectRatio: 960/300, 
                        width: '100%', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover' 
                    }}
                ></div>
                <div className="flex items-center  justify-center space-x-10 bg-gradient-to-r from-[#0353A4] to-[#061A40] w-screen h-screen overflow-hidden" >
                        <div className="pl-10">
                            <motion.h1 
                                className="pl-10 text-6xl font-extrabold leading-snug"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                Hi, This is
                                <br/>
                                <Typist >
                                    <span className="bg-white px-1 italic text-blue-700">Saâd Gmira</span>
                                </Typist>
                            </motion.h1>
                            <motion.p 
                                className='pl-10 text-xl text-white mt-4'
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                >
                                    a software engineering student and a full-stack web developer
                            </motion.p>
                        </div>
                        
                        <div className='w-1/2 h-screen'>
                            <Deskscene/>
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

export const Skills = () => {
    return (
        <Section>
            <h1>Skills</h1>
        </Section>
    )
}