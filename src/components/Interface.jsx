import React from 'react';
import { Experience } from './Experience';
import { motion } from 'framer-motion';
import Typist from 'react-typist-component';
import { useInView } from 'react-intersection-observer';

const Section = (props) => {
    const {children} = props;

    return <section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col justify-center items-start
    `}>{children}</section>;
}

export const Interface = () => {
    return (
        <>
            <div className='flex flex-col pl-8 items-center w-screen'>
                <About/>
                <Skills/>
                <Section>
                    <h1>Projects</h1>
                    {/* <Experience/> */}
                </Section>
                <Section>
                    <h1>Contact</h1>
                </Section>
            </div>
        </>
    )
}

export const About = () => {
    return (
        <div className="backdrop-blur-sm">
            <Section>
                <motion.h1 
                    className="pl-10 text-6xl font-extrabold leading-snug"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    >
                    This is
                    <br/>
                    <Typist >
                        <span className="bg-white px-1 italic text-blue-700">Saâd Gmira</span>
                    </Typist>
                </motion.h1>
                <motion.p 
                    className='pl-10 text-xl text-black mt-4'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    >
                        a software engineering student and a full-stack web developer
                </motion.p>
                
            </Section>
        </div>
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