import React from 'react';

export default function MovingBackground() {
    return (
        /* Fixed container pushing everything to the background */
        <div className="fixed inset-0 w-screen h-screen bg-[#0b0d19] overflow-hidden -z-10">

            {/* Light Blob 1: Cyan */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full
                      bg-gradient-to-r from-[#D1D0D0] to-transparent opacity-40
                      blur-[90px] mix-blend-screen animate-float-one" />

            {/* Light Blob 2: Purple */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full
                      bg-gradient-to-r from-[#988686] to-transparent opacity-45
                      blur-[100px] mix-blend-screen animate-float-two" />

            {/* Light Blob 3: Pink */}
            <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full
                      bg-gradient-to-r from-[#5C4E4E] to-transparent opacity-35
                      blur-[80px] mix-blend-screen animate-float-three" />

        </div>
    );
}