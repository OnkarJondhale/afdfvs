import React from 'react';
import "./Event.css"

const Events = () => {
    return (
        <>
            <div className="min-h-80 w-full mt-8">
                <div className="min-h-32 w-full flex justify-center items-center gap-2">
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> E </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> V </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> E </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> N </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> T </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> S </div>
                </div>
                <div className="flex mt-8 gap-4 overflow-x-auto hide-scrollbar shadow-xl shadow-black">
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">
                        <p class='font-mono'> UI WARS </p>
                    </div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">Hackathon</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">Codewars</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">Brain dashers</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">Illuminati</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">Cp</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">ChessBase</div>
                    <div className="min-h-72 min-w-72 rounded shadow-xl shadow-black flex items-center justify-center animate-pulse">High End Volume</div>
                </div>
            </div>
        </>
    );
}

export default Events;
