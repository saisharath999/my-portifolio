import React from "react";

export default function Skills() {
    const skills = ["HTML 5", "CSS 3", "Bootstrap", "Javascript", "React JS", "Python", "SQL (Oracle)", "AI"];

    return (
        <section 
            id="skills"
            className="w-full py-40 bg-gray-50 text-gray-800 shadow-lg"> {/* Light gray background */}
            
            {/* Heading */}
            <h2 className="text-center text-6xl font-extrabold tracking-tight mb-12">
                My Skills...
            </h2>

            {/* Skills Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl px-6">
                {skills.map((skill, index) => {
                    return (
                        <div 
                            key={index}
                            className="cursor-pointer px-8 py-6 rounded-md text-lg 
                                       flex items-center justify-center font-bold bg-white 
                                       text-teal-600 shadow-lg transition-all duration-300 ease-in-out 
                                       transform hover:bg-teal-600 hover:text-white 
                                       hover:scale-105 hover:shadow-2xl">
                            {skill}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
