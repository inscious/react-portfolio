import React from "react";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div
            name="work"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px] lg:px-5"
        >
            <div className="w-screen mx-auto flex flex-col items-center">
                <motion.div
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
                    className=""
                >
                    <h1 className="text-4xl mx-5 text-[#273043] md:text-5xl lg:mx-1 font-thin">
                        Some <span className="text-[#35A7FF]">things </span>
                        I've Built.
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [25, 0] }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                    className=""
                >
                    <div className="flex flex-row justify-evenly max-w-[800px]">
                        <div className=" bg-zinc-500 w-[full]">
                            Work 1
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
