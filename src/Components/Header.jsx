import React from 'react';

const Header = () => {
    return (
        <>
            <div className="min-h-20 w-full shadow-xl flex justify-between items-center px-2">
                <div>
                    <img src="image.png" className="h-20 w-20" alt="Logo" />
                </div>
                <div className="sm:hidden">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="text-mono min-h-20 justify-center gap-4 items-center hidden sm:flex">
                    <p className="cursor-pointer hover:bg-blue-200 text-xl font-bold p-2 rounded-xl hover:animate-vibrate"> Home </p>
                    <p className="cursor-pointer hover:bg-blue-200 text-xl font-bold p-2 rounded-xl hover:animate-vibrate"> About </p>
                    <p className="cursor-pointer hover:bg-blue-200 text-xl font-bold p-2 rounded-xl hover:animate-vibrate"> Events </p>
                    <p className="cursor-pointer hover:bg-blue-200 text-xl font-bold p-2 rounded-xl hover:animate-vibrate"> Cells </p>
                    <p className="cursor-pointer hover:bg-blue-200 text-xl font-bold p-2 rounded-xl hover:animate-vibrate"> Team </p>
                </div>
            </div>
            <style jsx>{`
                @keyframes vibrate {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-2px); }
                    40% { transform: translateX(2px); }
                    60% { transform: translateX(-2px); }
                    80% { transform: translateX(2px); }
                }

                .hover\\:animate-vibrate:hover {
                    animation: vibrate 0.2s linear infinite;
                }
            `}</style>
        </>
    );
}

export default Header;
