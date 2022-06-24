import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

import { navLinks } from "./data";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className="w-screen fixed drop-shadow-lg">
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: [+10, 0], y: [-10, 0] }}
                transition={{
                    delay: 0.3,
                    type: "tween",
                    stiffness: 100,
                    duration: 1,
                }}
            > */}
                <div className="z-10 h-20 flex lg:justify-between items-center mx-auto xl:max-w-[1240px]">
                    <Link to="about" smooth={true} duration={500}>
                        <h1 className="text-3xl text-white hover:text-[#BC96E6] duration-150 mx-5 mr-auto">
                            Saul Cortes
                        </h1>
                    </Link>
                    <ul className="hidden lg:flex text-sm lg:mx-5">
                        {navLinks.map((page) => {
                            return (
                                <li className="text-white ml-1" key={page.link}>
                                    <Link
                                        to={page.link}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer p-2 hover:text-[#BC96E6] hover:border-b-2 border-[#BC96E6] duration-150"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        className="lg:hidden scale-150 ml-auto"
                        onClick={handleClick}
                    >
                        {!nav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-5"
                                viewBox="0 0 20 20"
                                fill="white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-5"
                                viewBox="0 0 20 20"
                                fill="white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            {/* </motion.div> */}
        </div>
    );
};

export default Navbar;
