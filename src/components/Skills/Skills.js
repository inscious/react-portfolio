import React from "react";
import { skillsData } from "./data";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px]"
        >
            <div className="w-screen flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: [-10, 0], y: [-10, 0] }}
                    transition={{
                        delay: 0.1,
                        type: "tween",
                        stiffness: 100,
                        duration: 1,
                    }}
                    className="mx-auto mb-20"
                >
                    <h1 className="text-4xl text-[#273043] md:text-5xl font-thin mx-aut0">
                        My <span className="text-[#35A7FF]">Skills </span>&
                        Knowledge
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [10, 0] }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 100,
                        duration: 1,
                    }}
                    className="mx-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 px-5 mx-auto gap-5">
                        {skillsData.map((skill) => {
                            return (
                                <div
                                    key={skill.title}
                                    className="w-24 h-24 flex flex-col items-center mb-5 hover:scale-110 duration-150"
                                >
                                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md mb-1 p-1">
                                        <img src={skill.url} className="h-20" />
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {skill.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
