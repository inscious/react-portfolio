import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
                    <h1 className="text-xl mx-5 text-white lg:text-3xl xl lg:mx-1 tracking-wide font-thin">
                        <span className="text-6xl">Get in </span>
                        <span className="text-6xl text-[#BC96E6]">
                            contact{" "}
                        </span>
                        <span className="text-6xl">with me!</span>
                    </h1>
                </motion.div>
                <form className="w-full max-w-full bg-whit pt-10">
                    {/* <label for="name">Your name</label> */}
                    <div className="">
                        <input
                            className="block bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none mx-auto"
                            placeholder="Your name"
                            type="text"
                            id="fname"
                            name="fname"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
