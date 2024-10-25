import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="min-h-fit w-full flex flex-col items-center justify-start p-4 relative overflow-hidden mt-8">
                <div className="text-white sm:text-4xl lg:text-6xl font-bold animate-fadeInUp animate-textGlow">
                    ITSE STUDENT CHAPTER
                </div>
                <div class='p-4'>
                    <img src='c-unscreen.gif' />
                </div>
                <div className="absolute inset-0 opacity-25 animate-pulse"></div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes textGlow {
                    0%, 100% {
                        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 55px #ff00ff, 0 0 75px #ff00ff;
                    }
                    50% {
                        text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #ff00ff, 0 0 10px #ff00ff, 0 0 12px #ff00ff, 0 0 14px #ff00ff, 0 0 16px #ff00ff;
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out;
                }

                .animate-textGlow {
                    animation: textGlow 2s infinite;
                }
            `}</style>
        </>
    );
}

export default Hero;
