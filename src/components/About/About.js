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
                        delay: 0.5,
                        type: "tween",
                        stiffness: 50,
                        duration: .5,
                    }}
                >
                    <p className="text-xl mx-5 text-white lg:text-3xl xl lg:mx-1 tracking-wide font-thin">
                        <span className="text-6xl">Hi, My name is </span>
                        <span className="text-6xl text-[#BC96E6] font-normal">
                            Saul.
                        </span>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [20, 0] }}
                    transition={{
                        delay: 0.6,
                        type: "tween",
                        stiffness: 50,
                        duration: .5,
                    }}
                >
                    <p className="text-xl mx-5 text-white lg:text-3xl xl lg:mx-1 py-5 tracking-wide font-thin">
                        <br className="m-5" />
                        I'm a frontend software developer based in San Diego.
                        <br className="mb-5" />I have strong passion for
                        building responsive and performant web applications with
                        great user experiences that positively impact the world.
                        I continuously work towards improving my knowledge and
                        skills to develop technologies that contribute to the
                        betterment of society.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
