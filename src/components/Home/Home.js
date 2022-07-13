import React from "react";
import { motion } from "framer-motion";
import one from "../../assets/friends/1.JPG";
import five from "../../assets/friends/5.jpg";
import six from "../../assets/friends/6.jpg";

const Home = () => {
    return (
        <div
            name="home"
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
                    className=""
                >
                    <h1 className="text-5xl mx-5 text-[#273043] lg:mx-1 tracking-wide font-thin">
                        Hi, my name is{" "}
                        <span className="text-[#35A7FF]">Saul.</span>
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
                    className="flex gap-5"
                >
                    <p className="text-xl mx-5 text-gray-500 lg:text-3xl xl lg:mx-1 tracking-wide font-thin">
                        I'm a frontend software developer based in San Diego.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
