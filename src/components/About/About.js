import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div
            name="about"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px] lg:px-5"
        >
            <div className="w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    // initial="hidden"
                    whileInView={{ opacity: 1 }}
                    // whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: [25, 0], y: [-25, 0] }}
                    transition={{
                        delay: 0.1,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <h1 className="text-5xl mx-5 text-[#273043] lg:mx-1 font-thin">
                        <span className="text-[#35A7FF]">Who </span>
                        am I?
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [20, 0] }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <p className="text-xl mx-5 text-gray-500 lg:text-3xl xl lg:mx-1 py-5 tracking-wide font-thin">
                        I have strong passion for building responsive and
                        performant web applications with great user experiences
                        that positively impact the world. I continuously work
                        towards improving my knowledge and skills to develop
                        technologies that contribute to the betterment of
                        society.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
