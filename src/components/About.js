// About.js
import React from 'react';

export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       items-center max-w-5xl mx-auto space-y-10 bg-light lg:space-y-0 lg:gap-12"
        >
            {/* Left Image Section */}
            <div className="flex-1">
                <img
                    src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-teal-600 text-4xl lg:text-5xl font-semibold tracking-wide">
                        About Me
                    </h2>
                </div>
                <p className="text-center text-lg font-serif text-gray-700 leading-relaxed mb-4 max-w-3xl">
                    As I said, I am your friendly neighbourhood osm developer...
                </p>
                <p className="text-center text-lg font-serif text-gray-700 leading-relaxed max-w-3xl">
                    I am a Frontend Fullstack Engineer with 5+ years of experience in designing and developing user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and HTTP, I specialize in creating seamless user experiences. Proficient in frontend frameworks like React JS and Bootstrap, I am passionate about continuous learning and applying my skills to tackle complex challenges. Always striving to maximize user efficiency, I am eager to contribute to innovative solutions and drive meaningful impact.
                </p>
            </div>
        </section>
    );
}
