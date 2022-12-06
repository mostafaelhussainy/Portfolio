import React from 'react';
import personalphoto2 from '../components/assets/imgs/me1.jpg';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

function About({}: Props) {
    const [text, count] = useTypewriter({
        words: [`Here's a little about me`],
        loop: true,
        delaySpeed: 3000,
        typeSpeed: 100,
        deleteSpeed: 80,
    });
    return (
        <section id="about">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{
                        duration: 1.5,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    className="z-50 snap-start h-screen flex flex-col md:flex-row text-center md:text-left 
            relative max-w-4xl mx-auto px-4 justify-evenly items-center"
                >
                    <h3 className="absolute top-20 tracking-[20px] text-gray-400 text-2xl uppercase">
                        about
                    </h3>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        className="h-44 w-44 md:w-64 md:h-96 mb-3 md:mb-10 mt-36 flex-shrink-0 object-cover 
                    rounded-full md:rounded-lg"
                        src={personalphoto2}
                        alt="my personal photo"
                    />
                    <div className="px-0 md:px-10">
                        <h4 className="text-2xl md:text-4xl mb-3 md:mb-10 font-semibold">
                            {text}
                            <Cursor cursorColor="#7B7B0B" />
                        </h4>
                        <p className="text-base">
                            I am a front-end developer and an ITI graduate with
                            a concentration in React as my main framework.
                            During my time there, I had a great deal of
                            experience in web development, which mostly focuses
                            on front-end technologies. I have worked with
                            various frameworks and tools, including HTML, CSS,
                            SASS, Bootstrap, Tailwind, JavaScript, TypeScript,
                            React, Redux, Angular, NPM, Git, and Github.
                        </p>
                    </div>
                </motion.div>
                <div className="w-full absolute top-[30%] bg-gray-800/60 left-0 h-[300px] -skew-y-12" />
            </div>
        </section>
    );
}

export default About;
