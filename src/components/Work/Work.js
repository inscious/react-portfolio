import React from "react";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div
            name="work"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px] lg:px-5"
        >
            <div className="w-screen mx-auto flex flex-col">
                <motion.div
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
                    className="ml-auto"
                >
                    <h1 className="text-xl mx-5 text-white lg:text-3xl xl lg:mx-1 tracking-wide font-thin">
                        <span className="text-6xl">Some </span>
                        <span className="text-6xl text-[#BC96E6]">things </span>
                        <span className="text-6xl">I've Built.</span>
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [25, 0] }}
                    transition={{
                        delay: 0.5,
                        type: "tween",
                        stiffness: 50,
                        duration: 0.5,
                    }}
                >
                    <p className="text-xl mx-5 text-white lg:text-3xl xl lg:mx-1 tracking-wide font-thin">
                        <br />
                        Elit veniam ea mollit qui nulla ipsum et adipisicing
                        tempor amet. Cillum ea aliquip consequat cillum laborum
                        occaecat. Consectetur dolore amet amet exercitation in
                        ipsum consectetur reprehenderit. Cillum elit aliquip
                        laboris qui amet do dolor amet aute et. Adipisicing in
                        et fugiat adipisicing irure anim id aliquip irure.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
