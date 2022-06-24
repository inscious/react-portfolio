import React from "react";
import { skillsData } from "./data";

import jsLogo from "../../assets/jsLogo.png";
// import gitLogo from "../../assets/gitLogo.png";
// import mongoLogo from "../../assets/mongoLogo.png";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-screen h-screen flex items-center justify-center mx-auto xl:max-w-[1240px]"
        >
            <div className="w-screen flex">
                <div className="grid md:grid-cols-4 p-5">
                    {skillsData.map((skill) => {
                        return (
                            <div key={skill.title} className="w-24 h-24 bg-white rounded-lg shadow-xl flex flex-col">
                                <div className="flex flex-col items-center">
                                    <img src={skill.url} className="" />
                                </div>
                                <p className="text-white text-sm">
                                    {skill.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
