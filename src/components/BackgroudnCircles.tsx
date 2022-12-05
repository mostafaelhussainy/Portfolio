import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const BackgroudnCircles = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [0.7, 0.85, 1.1, 1.5, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 1],
            }}
            transition={{ duration: 2.5 }}
            className="relative flex justify-center items-center z-0"
        >
            <div className="absolute border border-[#333333] rounded-full h-[50px] w-[50px] md:h-[100px] md:w-[100px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-52 animate-ping" />
            <div className="absolute border border-[#F7AB0A] rounded-full h-[300px] w-[300px] md:h-[520px] md:w-[520px] mt-52 animate-pulse opacity-20" />
            <div className="absolute border border-[#333333] rounded-full h-[260px] w-[260px] md:h-[550px] md:w-[550px] mt-52 animate-ping" />
        </motion.div>
    );
};

export default BackgroudnCircles;
