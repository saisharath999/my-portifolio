import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="my-20 w-full flex flex-col gap-12 max-w-7xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>

            {/* Projects Container - 3 projects per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Project 1 */}
                <div className="flex flex-col justify-center items-center gap-5 p-6 shadow-lg rounded-md transition transform hover:shadow-2xl hover:scale-105">
                    <div className="w-full h-100">
                        <a href="https://drive.google.com/your-project-linkhttps://drive.google.com/drive/folders/1-LP7vs1ZvlgNJ2Q21SSLOvSCU4MLWD3s?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/2.png" 
                                alt="Project 3"
                                className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:opacity-80"
                            />
                        </a>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-2xl text-emerald-500">
                            <a href="https://drive.google.com/drive/folders/1-LP7vs1ZvlgNJ2Q21SSLOvSCU4MLWD3s?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Cricket Website
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600">
                        
                        </p>

                        {/* Technology Pills with Hover Effects */}
                        <div className="mt-4 flex gap-3 justify-center items-center flex-wrap">
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                HTML 5
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                CSS 3
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                Bootstrap
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                JS
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                JQuery
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col justify-center items-center gap-5 p-6 shadow-lg rounded-md transition transform hover:shadow-2xl hover:scale-105">
                    <div className="w-full h-100">
                        <a href="https://drive.google.com/file/d/1AbQQNv8d0wCR09DA-5UoKGqCJlqCtHZq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/3.png" 
                                alt="Project 2"
                                className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:opacity-80"
                            />
                        </a>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-2xl text-emerald-500">
                            <a href="https://drive.google.com/file/d/1AbQQNv8d0wCR09DA-5UoKGqCJlqCtHZq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                IT Service Sector 
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600">
                            
                        </p>
                          {/* Technology Pills with Hover Effects */}
                          <div className="mt-4 flex gap-3 justify-center items-center flex-wrap">
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                HTML 5
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                CSS 3
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                Bootstrap
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                JS
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                JQuery
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col justify-center items-center gap-5 p-6 shadow-lg rounded-md transition transform hover:shadow-2xl hover:scale-105">
                    <div className="w-full h-100">
                        <a href="https://drive.google.com/drive/folders/1BfedWj2b9s3EhAI7wFQZwoLdlKuCod1e?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/4.png" 
                                alt="Project 1"
                                className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:opacity-80"
                            />
                        </a>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-2xl text-emerald-500">
                            <a href="https://drive.google.com/drive/folders/1BfedWj2b9s3EhAI7wFQZwoLdlKuCod1e?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Simple Website
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600">
                            
                        </p>
                          {/* Technology Pills with Hover Effects */}
                          <div className="mt-4 flex gap-3 justify-center items-center flex-wrap">
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                HTML 5
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                CSS 3
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                Bootstrap
                            </div>
                            <div className="px-6 py-2 bg-white text-center text-sm font-semibold text-gray-700 rounded-full border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-500 hover:text-white">
                                JS
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
