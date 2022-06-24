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
            <div className="w-screen flex flex-col lg:flex-row">
                <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: [-25, 0], y: [-25, 0] }}
                    transition={{
                        delay: 0.5,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <div className="flex justify-center">
                        <span className="text-white text-3xl font-thin tracking-wide md:text-6xl block">
                            Get in{" "}
                        </span>
                        <span className="text-[#BC96E6] text-3xl font-thin tracking-wide md:text-6xl">
                            {" "}
                            contact
                        </span>
                        <span className="text-white text-3xl font-thin tracking-wide md:text-6xl">
                            with me!
                        </span>
                    </div>
                </motion.div>
                <form className="w-full bg-whit pt-5">
                    {/* <label for="name">Your name</label> */}
                    <div className="">
                        <input
                            className="block w-[65%] bg-gray-200 text-gray-700 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
                            placeholder="Your name"
                            type="text"
                            id="name"
                            name="name"
                        />
                        <input
                            className="block w-[65%] bg-gray-200 text-gray-700 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
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
                            className="block w-[65%] text-gray-700 bg-gray-200 rounded-md py-3 px-3 mb-3 leading-tight focus:outline-none mx-auto"
                            placeholder="Your Message"
                        ></textarea>
                        <button
                            onClick={handleSubmit}
                            className="block w-[65%] bg-gray-200 rounded-md py-3 px-3 mb-3 leading-tight mx-auto"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
