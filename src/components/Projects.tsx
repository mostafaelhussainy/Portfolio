import React from 'react';
import unitedpioneers from '../components/assets/imgs/unitedpioneers.png';
import rently from '../components/assets/imgs/rently.png';
import currencyconverter from '../components/assets/imgs/currencyconverter.png';
import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectsModal from './ProjectsModal';
// united pioneers images
import upLarge from '../components/assets/imgs/unitedpioneers1.png';
import upMobile from '../components/assets/imgs/unitedpioneers5.png';
// rently images
import reLarge from '../components/assets/imgs/rentlypc.png';
import reMobile from '../components/assets/imgs/rentlymb.png';
// converter images
import conLarge from '../components/assets/imgs/currencyconverterpc.png';
import conMobile from '../components/assets/imgs/currencyconvertermb.png';
import { SiTypescript } from 'react-icons/si';
type Props = {};

function Projects({}: Props) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [mobileImage, setMobileImage] = useState<string>('');
    const [largeImage, setLargeImage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [github, setGithub] = useState<string>('');
    const [deploy, setDeploy] = useState<string>('');
    const [react, setReact] = useState<boolean>(false);
    const [redux, setRedux] = useState<boolean>(false);
    const [tailwind, setTailwind] = useState<boolean>(false);
    const [sass, setSass] = useState<boolean>(false);
    const [firebase, setFirebase] = useState<boolean>(false);
    const [typescript, setTypescript] = useState<boolean>(false);

    return (
        <section id="projects">
            <div
                className="snap-start h-screen flex flex-col md:flex-row text-center md:text-left 
            relative mx-auto px-4 justify-evenly items-center"
            >
                <h3 className="absolute top-20 tracking-[20px] text-gray-400 text-2xl uppercase">
                    projects
                </h3>
                <Carousel
                    indicators={false}
                    className="cursor-pointer"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className="flex flex-col md:flex-row max-w-6xl justify-center items-center"
                        onClick={() => {
                            setModalIsOpen(true);
                            setMobileImage(reMobile);
                            setLargeImage(reLarge);
                            setGithub(
                                'https://github.com/mostafaelhussainy/Rently'
                            );
                            setDeploy(
                                'https://rehabmahmoud20.github.io/Rently/'
                            );
                            setTitle('Rently');
                            setSass(true);
                            setTailwind(true);
                            setReact(true);
                            setRedux(true);
                            setFirebase(true);
                            setTypescript(false);
                        }}
                    >
                        <img
                            src={rently}
                            alt="rently project"
                            className="h-44 md:h-60 drop-shadow-2xl"
                        />
                        <div className="ml-16">
                            <h3 className="text-2xl md:text-4xl mb-3 md:mb-6 font-semibold">
                                Rently: real estate website
                            </h3>
                            <p>
                                ITI Graduation project
                                <br />• Rently was developed by 5 different
                                developers including myself in which we used
                                React.JS is our framework and used different
                                libraries and Redux toolkit for managing our
                                state, also we used Tailwind CSS, Flowbite
                                library and SASS for our UI.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className="flex flex-col md:flex-row max-w-6xl justify-center items-center"
                        onClick={() => {
                            setModalIsOpen(true);
                            setMobileImage(upMobile);
                            setLargeImage(upLarge);
                            setGithub(
                                'https://github.com/mostafaelhussainy/United-Pioneers'
                            );
                            setDeploy(
                                'https://mostafaelhussainy.github.io/United-Pioneers/'
                            );
                            setTitle('United Pioneers');
                            setSass(false);
                            setTailwind(true);
                            setReact(true);
                            setRedux(false);
                            setFirebase(true);
                            setTypescript(false);
                        }}
                    >
                        <img
                            src={unitedpioneers}
                            alt="rently project"
                            className="h-44 md:h-60"
                        />
                        <div className="ml-16">
                            <h3 className="text-2xl md:text-4xl mb-3 md:mb-6 font-semibold">
                                united pioneers:
                                <br />
                                website for construction company
                            </h3>
                            <p>
                                A freelance project was created for a
                                construction company it's underdevelope now it
                                was created using: react, tailwind and firebase
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className="flex flex-col md:flex-row max-w-6xl justify-center items-center"
                        onClick={() => {
                            setModalIsOpen(true);
                            setMobileImage(conMobile);
                            setLargeImage(conLarge);
                            setGithub(
                                'https://github.com/mostafaelhussainy/React-Currency-Exhanger-'
                            );
                            setDeploy(
                                'https://mostafaelhussainy.github.io/React-Currency-Exhanger-/'
                            );
                            setTitle('Currency Converter');
                            setSass(false);
                            setTailwind(true);
                            setReact(true);
                            setRedux(false);
                            setFirebase(false);
                            setTypescript(false);
                        }}
                    >
                        <img
                            src={currencyconverter}
                            alt="rently project"
                            className="h-44 md:h-60"
                        />
                        <div className="ml-16">
                            <h3 className="text-2xl md:text-4xl mb-3 md:mb-6 font-semibold">
                                Currency Converter
                            </h3>
                            <p>
                                In this project I've practiced using react hooks
                                and API to get the data of the currencies and
                                flags
                            </p>
                        </div>
                    </motion.div>
                </Carousel>
                <ProjectsModal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    largeImage={largeImage}
                    mobileImage={mobileImage}
                    title={title}
                    deploy={deploy}
                    github={github}
                    react={react}
                    redux={redux}
                    tailwind={tailwind}
                    sass={sass}
                    firebase={firebase}
                    typescript={typescript}
                />
            </div>
        </section>
    );
}

export default Projects;
