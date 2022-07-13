import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div
            name="contact"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px] lg:px-5"
        >
            <div className="w-screen h-[75%] flex flex-col lg:flex-row items-center justify-evenly">
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: [-25, 0], y: [-25, 0] }}
                    transition={{
                        delay: 0.1,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <h1 className="text-[#273043] text-4xl md:text-5xl font-thin tracking-wide mx-5 lg:mx-1">
                        Get in
                        <span className="text-[#35A7FF]"> contact </span>
                        with me!
                    </h1>
                </motion.div>
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: [25, 0], y: [25, 0] }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <form className="w-full bg-whit">
                        {/* <label for="name">Your name</label> */}
                        <div className="bg-blac">
                            <input
                                className="block w-[75%] bg-gray-200 text-gray-600 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
                                placeholder="Your name"
                                type="text"
                                id="name"
                                name="name"
                            />
                            <input
                                className="block w-[75%] bg-gray-200 text-gray-600 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
                                placeholder="Your Email"
                                type="email"
                                id="email"
                                name="email"
                            />
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                rows="5"
                                className="block w-[75%] text-gray-600 bg-gray-200 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
                                placeholder="Your Message"
                            ></textarea>
                            <button
                                onClick={handleSubmit}
                                className="block w-[75%]  bg-gray-200 rounded-md py-3 px-3 mb-3 leading-tight mx-auto hover:bg-[#35A7FF] hover:text-white duration-150 text-gray-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
