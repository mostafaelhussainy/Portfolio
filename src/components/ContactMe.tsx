import React from 'react';
import { motion } from 'framer-motion';
import { IoIosCall } from 'react-icons/io';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';

import {
    useForm,
    SubmitHandler,
} from 'react-hook-form';
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit } =
        useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (
        formdata
    ) => {
        window.location.href = `mailto:mostafaelhussainy22@gmail.com?subject=${formdata.subject}&body=Hi my name is ${formdata.name}.
        ${formdata.subject}
        my email: ${formdata.email}`;
    };
    return (
        <section id="contact" className=' pt-24 md:pt-0'>
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
                    relative mx-auto px-4 justify-evenly items-center"
                >
                    <h3
                        className="absolute -top-20 md:top-20 tracking-[20px] text-gray-400 text-2xl uppercase z-50"  
                    >
                        contact
                    </h3>

                    <div className="container px-5 mx-auto flex flex-col md:flex-row flex-wrap md:mt-36 items-center justify-between">
                        <div
                            className="w-full md:w-7/12 bg-gray-900 rounded-lg overflow-hidden p-10 flex items-end 
                        justify-center relative md:h-96 mt-24 md:mt-0"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                title="map"
                                className="absolute inset-0"
                                frameBorder="0"
                                margin-height="0"
                                margin-width="0"
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.7408523501108!2d29.988852785069405!3d31.24943624454483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dab70690d573%3A0xdfe94528a21dc8a8!2sSidi%20Bishr%2C%20As%20Soyouf%20Bahri%2C%20Montaza%202%2C%20Alexandria%20Governorate%205517053%2C%20Egypt!5e0!3m2!1sen!2sus!4v1670119146547!5m2!1sen!2sus"
                            ></iframe>
                            <div className="bg-gray-900 flex flex-wrap py-6 rounded shadow-md mx-auto z-20">
                                <div className="lg:w-1/2 px-6 bg-gray-900">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        ADDRESS
                                        <FaMapMarkedAlt className="inline ml-2 align-middle" />
                                    </h2>
                                    <p className="mt-1">
                                        Staly No 494,
                                        As Soyouf
                                        Qebli, Montaza
                                        2, Alexandria,
                                        Egypt
                                    </p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        EMAIL
                                        <BiEnvelope className="inline ml-2 align-middle" />
                                    </h2>
                                    <a className="text-indigo-400 leading-relaxed">
                                        mostafaelhussainy22@email.com
                                    </a>
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                        PHONE
                                        <IoIosCall className="inline ml-2 align-middle" />
                                    </h2>
                                    <p className="leading-relaxed">
                                        +201016090732
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form
                            className="flex w-full md:w-4/12"
                            onSubmit={handleSubmit(
                                onSubmit
                            )}
                        >
                            <div className="bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                <h2 className="text-white text-lg mb-1 font-medium title-font">
                                    Contact me
                                </h2>
                                <p className="leading-relaxed mb-5 text-gray-600">
                                    Please submit this
                                    form to keep in
                                    touch ♥
                                </p>
                                <div className="relative mb-4 flex flex-row">
                                    <input
                                        {...register(
                                            'name'
                                        )}
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mr-1 w-full bg-gray-800 rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-500 
                                        text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <input
                                        {...register(
                                            'email'
                                        )}
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="ml-1 w-full bg-gray-800 rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-500 
                                        text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="relative mb-4">
                                    <input
                                        {...register(
                                            'subject'
                                        )}
                                        placeholder="Subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="ml-1 w-full bg-gray-800 rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-500 
                                        text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="relative mb-4">
                                    <textarea
                                        {...register(
                                            'message'
                                        )}
                                        placeholder="Message"
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-800 rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-500 
                                        h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                                <button
                                    className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactMe;
