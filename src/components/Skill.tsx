import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
    src: string;
    percent: number;
};

function Skill({
    directionLeft,
    src,
    percent,
}: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={src}
                className=" border-gray-500 object-contain p-2 h-12 w-12 md:h-24 md:w-24 filter 
                group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
                className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out 
                group-hover:bg-white/40 h-16 w-16 md:h-24 md:w-24 rounded-full"
            >
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl md:text-5xl font-bold text-[#F7AB0A] opacity-100">
                        {percent}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
