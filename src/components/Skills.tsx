import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';
import react from '../components/assets/imgs/React.png';
import angular from '../components/assets/imgs/angular.png';
import html from '../components/assets/imgs/HTML.png';
import css from '../components/assets/imgs/CSS.png';
import javascript from '../components/assets/imgs/javascript.png';
import typescript from '../components/assets/imgs/typescript.png';
import tailwind from '../components/assets/imgs/tailwind.png';
import bootstrap from '../components/assets/imgs/bootstrap.png';
import redux from '../components/assets/imgs/redux.png';
import mongo from '../components/assets/imgs/mongo.png';
import node from '../components/assets/imgs/node.png';
import npm from '../components/assets/imgs/npm.png';
import sass from '../components/assets/imgs/sass.png';
import github from '../components/assets/imgs/github.png';
import firebase from '../components/assets/imgs/firebase.png';

type Props = {};

function Skills({}: Props) {
    return (
        <section id="skills">
            <motion.div
                className="snap-start h-screen flex flex-col md:flex-row text-center md:text-left 
                relative max-w-4xl mx-auto px-4 justify-evenly items-center z-50"
                initial={{ opacity: 0 }}
                transition={{
                    duration: 1.5,
                }}
                whileInView={{
                    opacity: 1,
                }}
            >
                <h3 className="absolute top-20 tracking-[20px] text-gray-400 text-2xl uppercase">
                    skills
                </h3>
                <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                    hover over skill for more details
                    <br />
                    1: learning
                    <br />
                    2: made a couple of projects
                    <br />
                    3: made a lot of projects
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-52">
                    <Skill
                        src={html}
                        percent={3}
                    />
                    <Skill
                        src={css}
                        percent={3}
                    />
                    <Skill
                        src={javascript}
                        percent={3}
                    />
                    <Skill
                        src={typescript}
                        percent={1}
                    />
                    <Skill
                        src={sass}
                        percent={2}
                    />
                    <Skill
                        src={bootstrap}
                        percent={2}
                        directionLeft={true}
                    />
                    <Skill
                        src={tailwind}
                        percent={3}
                        directionLeft={true}
                    />
                    <Skill
                        src={react}
                        percent={2}
                        directionLeft={true}
                    />
                    <Skill
                        src={redux}
                        percent={2}
                        directionLeft={true}
                    />
                    <Skill
                        src={angular}
                        percent={1}
                        directionLeft={true}
                    />
                    <Skill
                        src={npm}
                        percent={2}
                    />
                    <Skill
                        src={github}
                        percent={2}
                    />
                    <Skill
                        src={node}
                        percent={1}
                    />
                    <Skill
                        src={mongo}
                        percent={1}
                    />
                    <Skill
                        src={firebase}
                        percent={2}
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
