import React from "react";

export default function Education() {
  return (
      <section id="education" className="w-full flex flex-col items-center py-16 bg-gray-50 shadow-lg">
          {/* Education Heading */}
          <h2 className="text-4xl font-bold text-green-800 mb-12 tracking-wide uppercase">Education</h2>

          <div className="relative w-full max-w-5xl">
              {/* Vertical Line (Green Center Line) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>

              {/* First Education (Left Side) */}
              <div className="flex items-center justify-start w-full mb-12">
                  <div className="w-1/2 text-right pr-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600 transition-transform duration-300 hover:scale-105">
                          <h3 className="text-xl font-semibold text-gray-900">Sphoorthy Engineering College</h3>
                          <p className="text-sm text-gray-600">Bachelor of Technology</p>
                      </div>
                  </div>
                  <div className="w-1/2 flex justify-center"></div>
              </div>

              {/* Second Education (Right Side) */}
              <div className="flex items-center justify-end w-full mb-12">
                  <div className="w-1/2 flex justify-center"></div>
                  <div className="w-1/2 text-left pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-green-600 transition-transform duration-300 hover:scale-105">
                          <h3 className="text-xl font-semibold text-gray-900">University of Bridgeport</h3>
                          <p className="text-sm text-gray-600">Master of Science in Computer Science</p>
                      </div>
                  </div>
              </div>

              {/* Third Education (Left Side, Lower) */}
              <div className="flex items-center justify-start w-full">
                  <div className="w-1/2 text-right pr-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600 transition-transform duration-300 hover:scale-105">
                          <h3 className="text-xl font-semibold text-gray-900">Additional Certification</h3>
                          <p className="text-sm text-gray-600">Relevant Training or Courses</p>
                      </div>
                  </div>
                  <div className="w-1/2 flex justify-center"></div>
              </div>
          </div>
      </section>
  );
}
