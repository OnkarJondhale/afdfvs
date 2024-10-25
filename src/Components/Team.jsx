import React from 'react';
import "./Event.css"

const Events = () => {
    return (
        <>
            <div className="min-h-80 w-full mt-8">
                <div className="min-h-32 w-full flex justify-center items-center gap-2">
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> T </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFontR hover:animate-vibrate"> E </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> A </div>
                    <div className="h-10 w-10 text-center content-center rounded-md sm:text-2xl shadow-xl shadow-black font-mono p-2 animate-changeFont hover:animate-vibrate"> M </div>

                </div>
                <div className="flex mt-8 gap-4 overflow-x-auto hide-scrollbar shadow-xl shadow-black">
                    <div className="min-h-48 min-w-60 rounded shadow-xl shadow-black flex-col flex items-center justify-center animate-pulse">
                    <img src='abcd.png'/>
                    <p class='font-mono text-xl '> User_9078</p>
                    </div>
                    
                    <div className="min-h-48 min-w-60 rounded shadow-xl shadow-black flex-col flex items-center justify-center animate-pulse">
                    <img src='abcd.png'/>
                    <p class='font-mono text-xl '> User_9078</p>
                    </div>
                    <div className="min-h-48 min-w-60 rounded shadow-xl shadow-black flex-col flex items-center justify-center animate-pulse">
                    <img src='abcd.png'/>
                    <p class='font-mono text-xl '> User_9078</p>
                    </div>
                    <div className="min-h-48 min-w-60 rounded shadow-xl shadow-black flex-col flex items-center justify-center animate-pulse">
                    <img src='abcd.png'/>
                    <p class='font-mono text-xl '> User_9078</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Events;
