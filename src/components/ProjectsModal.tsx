import React from 'react';
import { CgScreen } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { CiMobile1 } from 'react-icons/ci';
// icons for tech
import { FaReact } from 'react-icons/fa';
import {
    SiRedux,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';

import Modal from 'react-modal';

Modal.setAppElement('#root');

type Props = {
    modalIsOpen: boolean;
    setModalIsOpen: (value: boolean) => void;
    title: string;
    deploy: string;
    github: string;
    largeImage: string;
    mobileImage: string;
    firebase?: boolean;
    react?: boolean;
    sass?: boolean;
    redux?: boolean;
    typescript?: boolean;
    tailwind?: boolean;
};

function ProjectsModal({
    modalIsOpen,
    setModalIsOpen,
    title,
    deploy,
    github,
    largeImage,
    mobileImage,
    typescript,
    sass,
    firebase,
    react,
    tailwind,
    redux,
}: Props) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="z-100 absolute overflow-y-auto scroll-smoth
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-900"
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    zIndex: '50',
                },
                content: {
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    border: '1px solid #ccc',
                    background: 'rgb(31 41 55 / 0.9)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '10px',
                    outline: 'none',
                    padding: '20px',
                    zIndex: '50',
                },
            }}
        >
            <div className="text-center ">
                <h3 className="tracking-[25px] text-gray-400 text-3xl font-bold	uppercase mb-4">
                    {title}
                </h3>
                <h4 className="text-gray-400 text-2xl font-bold mb-8">
                    Technologies
                </h4>
                <div className="flex flex-row justify-center mb-10">
                    {react ? (
                        <FaReact className="text-blue-400 text-3xl block mr-5" />
                    ) : (
                        ''
                    )}
                    {redux ? (
                        <SiRedux className="text-violet-700 text-3xl block mr-5" />
                    ) : (
                        ''
                    )}
                    {typescript ? (
                        <SiTypescript className="text-blue-700 text-3xl block mr-5" />
                    ) : (
                        ''
                    )}
                    {firebase ? (
                        <SiFirebase className="text-amber-400 text-3xl block mr-5" />
                    ) : (
                        ''
                    )}
                    {tailwind ? (
                        <SiTailwindcss className="text-sky-500 text-3xl block mr-5" />
                    ) : (
                        ''
                    )}
                    {sass ? (
                        <DiSass className="text-pink-500 text-3xl block" />
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-row justify-center mb-10">
                    <a
                        href={github}
                        className="inline mr-5"
                    >
                        <CgScreen className="text-gray-400 text-3xl block hover:text-cyan-300" />
                    </a>
                    <a
                        href={deploy}
                        className="inline"
                    >
                        <AiFillGithub className="text-gray-400 text-3xl block hover:text-cyan-300" />
                    </a>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-full md:w-1/2 mb-10 md:mb-0">
                        <div className="text-left mx-auto pt-8">
                            <h3 className="tracking-[3px] md:tracking-[10px] text-blue-600 text-xl md:text-3xl font-bold uppercase mb-8 inline-block">
                                large screens{' '}
                                <MdComputer className="mx-auto mt-4" />
                            </h3>
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-contain object-center block"
                                src={largeImage}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2 border-t-2 border-blue-600 pt-10 md:pt-0 md:border-t-0">
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="h-72 object-cover object-center block mx-auto"
                                src={mobileImage}
                            />
                        </div>
                        <div className="text-left mx-auto pt-8">
                            <h3 className="tracking-[3px] md:tracking-[10px] text-blue-600 text-xl md:text-3xl font-bold uppercase mb-8 inline-block">
                                mobile screens{' '}
                                <CiMobile1 className="mx-auto mt-4" />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectsModal;
