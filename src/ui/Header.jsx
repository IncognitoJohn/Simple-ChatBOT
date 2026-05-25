export const Header =()=>{

    return(
        <header className="fixed top-0 left-0 w-full bg-[#0b0d19]/20 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand Logo / Robot Name */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#D1D0D0] to-[#9C9488] flex items-center justify-between p-1.5 shadow-md shadow-stone-600/20">
                        {/* Minimalist Robot Icon */}
                        <svg className="text-white w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="font-bold text-white tracking-wide text-lg">
            Humphrey<span className="text-[#988686]">AI</span>
          </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center space-x-2 bg-stone-200/10 border border-stone-200/20 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Online</span>
                </div>

            </div>

            {/*  THE DYNAMIC GOOGLE-STYLE LIGHT BORDER LINE */}
            <div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#fefefe] via-[#d6cdd1]  to-[#565656] bg-[length:200%_auto] animate-laser-slide"
            />
        </header>

    )
}

