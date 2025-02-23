import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import React from "react";


export default function Hero() {
  const texts = ["AI Developer", "Software Engineer"]; // Phrases to alternate between
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (index < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][index]);
          setIndex(index + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, index - 1));
          setIndex(index - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, textIndex, texts]);

  return (
    <section
      id="hero"
      className="px-10 w-full h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: "url('https://your-image-url.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark Overlay */}
      <div className="relative z-10 text-center text-white">
        <h4 className="text-xl font-light">Hi and welcome to</h4>
        <h2 className="text-4xl font-extrabold">SAI SHARATH GANTA</h2>
        <h3 className="text-2xl font-semibold">{displayedText}</h3>
        <div className="flex gap-6 text-xl justify-center mt-5">
          <a
            href="https://github.com/saisharath999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-sharath-ganta/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="mailto:saisharath092@gmail.com"
            className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
