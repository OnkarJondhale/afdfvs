import React from 'react';

const About = () => {
    return (
        <>
            <div className="min-h-80 w-full">
                <div className="min-h-32 w-full flex justify-center items-center gap-2">
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> W </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> H </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> O </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> W </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> E </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> A </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> R </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> E </div>
                </div>
                <div className="w-full flex justify-center items-center flex-wrap gap-4">
                    <p className="min-h-96 w-full sm:w-1/3 text-sm sm:text-md lg:text-xl text-mono p-4 text-center content-center shadow-xl shadow-black hover:animate-vibrate">
                        We are a community of passionate students who are committed to advancing technology education and innovation. Our chapter is a part of the larger Indian Society for Technical Education (ISTE), which is a global organization dedicated to empowering educators to transform learning and teaching through the effective use of technology.
                    </p>
                    <div className="min-h-96 w-1/3 hidden sm:flex hover:animate-vibrate">
                        <img src="image.png" className="h-96 w-96 shadow-xl shadow-black" alt="ISTE Logo" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes changeFont {
                    0% { font-family: 'Arial', sans-serif; }
                    10% { font-family: 'Courier New', monospace; }
                    20% { font-family: 'Georgia', serif; }
                    30% { font-family: 'Times New Roman', serif; }
                    40% { font-family: 'Verdana', sans-serif; }
                    50% { font-family: 'Tahoma', sans-serif; }
                    60% { font-family: 'Palatino', serif; }
                    70% { font-family: 'Garamond', serif; }
                    80% { font-family: 'Comic Sans MS', cursive; }
                    90% { font-family: 'Impact', sans-serif; }
                    100% { font-family: 'Arial', sans-serif; }
                }

                @keyframes vibrate {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-2px); }
                    40% { transform: translateX(2px); }
                    60% { transform: translateX(-2px); }
                    80% { transform: translateX(2px); }
                }

                .hover\\:animate-vibrate:hover {
                    animation: vibrate 0.5s linear 1;
                }

                .animate-changeFont {
                    animation: changeFont 10s linear infinite;
                }

                .animate-changeFontR {
                    animation: changeFont 10s reverse infinite;
                }
            `}</style>
        </>
    );
}

export default About;
