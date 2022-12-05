import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroudnCircles from './BackgroudnCircles';
import personalphoto1 from '../components/assets/imgs/me2.jpg';

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, My name is Mostafa',
            'A-guy-who-loves-to-code.tsx',
            '<butHaveALotToLearn />',
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <section
            id="hero"
            className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center mt-16"
        >
            <BackgroudnCircles />
            <div className="relative top-7 md:top-1">
                <img
                    className="relative rounded-full h-20 w-20 md:h-32 md:w-32 mx-auto object-cover mb-4 md:mb-7"
                    src={personalphoto1}
                    alt="my personal photo"
                />

                <div>
                    <h2 className="text-sm uppercase text-gray-500 tracking-[7px] mb-1">
                        front-end developer
                    </h2>
                    <h1 className="text-2xl lg:text-3xl font-semibold scroll-px-10 mb-2">
                        <span>{text}</span>
                        <Cursor cursorColor="#F7AB0A" />
                    </h1>
                    <div>
                        <a href="#about">
                            <button className="heroButton">About</button>
                        </a>
                        <a href="#skills">
                            <button className="heroButton">Skills</button>
                        </a>
                        <a href="#projects">
                            <button className="heroButton">Projects</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
