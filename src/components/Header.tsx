import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

function Header({}: Props) {
    return (
        <header className="sticky top-0 flex justify-between max-w-4xl mx-auto p-5 z-50">
            {/* S O C I A L   M E D I A   I C O N S */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://www.facebook.com/mostafa.elhussainy1/"
                    fgColor="gray"
                    bgColor="transparent"
                    className="hover:bg-gray-400/5 rounded-full mr-2 cursor-pointer"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/melhussainy/"
                    fgColor="gray"
                    bgColor="transparent"
                    className="hover:bg-gray-400/5 rounded-full mr-2 cursor-pointer"
                />
                <SocialIcon
                    url="https://github.com/mostafaelhussainy"
                    fgColor="gray"
                    bgColor="transparent"
                    className="hover:bg-gray-400/5 rounded-full mr-2 cursor-pointer"
                />
                <SocialIcon
                    url="https://codepen.io/mostafaelhussainy"
                    fgColor="gray"
                    bgColor="transparent"
                    className="hover:bg-gray-400/5 rounded-full mr-2 cursor-pointer"
                />
            </motion.div>

            {/* E M A I L */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="text-gray-400 cursor-pointer flex items-center hover:bg-gray-400/5 pr-4 pl-2 rounded-full 
                hover:text-[#F7AB0A]/40"
            >
                <a
                    href="#contact"
                    className="cursor-pointer"
                >
                    <SocialIcon
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm">
                        email me
                    </p>
                </a>
            </motion.div>
        </header>
    );
}

export default Header;
