import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

import { navLinks } from "./data";
import Logo from "../../assets/scLogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className="w-screen fixed ">
            <motion.div
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
            >
                <div className="z-20 h-20 flex lg:justify-between items-center mx-auto xl:max-w-[1240px] bg-gradient-to-b from-[#f3f3f4] to-[rgba(243,243,244,0.1)] ">
                    <Link to="home" smooth={true} duration={500}>
                        {/* <h1 className="text-3xl text-white hover:text-[#BC96E6] duration-150 mx-5 mr-auto">
                            Saul Cortes
                        </h1> */}
                        <img
                            src={Logo}
                            className="ml-4 h-20 cursor-pointer drop-shadow-md"
                        />
                    </Link>
                    <ul className="hidden lg:flex text-sm lg:mx-5">
                        {navLinks.map((page) => {
                            return (
                                <li
                                    className="text-gray-500 ml-1"
                                    key={page.link}
                                >
                                    <Link
                                        to={page.link}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer p-2 hover:text-[#35A7FF] hover:border-t-2 border-[#35A7FF] duration-150"
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
                                fill="black"
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
                                fill="black"
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

                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute w-full px-8 bg-[#F3F3F4] lg:hidden drop-shadow-md"
                    }
                >
                    {navLinks.map((page) => {
                        return (
                            <Link
                                to={page.link}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer p-2 duration-150"
                            >
                                <div className="h-10 flex items-center hover:bg-[#c9e8ff] ">
                                    <li
                                        className="text-gray-500 mx-auto"
                                        key={page.link}
                                    >
                                        {page.title}
                                    </li>
                                </div>
                            </Link>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
